import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const hardwareId = searchParams.get("id");
	let fluc: number;

	if (hardwareId) {
		const elevations = await prisma.elevation.findMany({
			where: {
				hardwareId: parseInt(hardwareId),
			},
			select: {
				created_at: true,
				water_elevation: true,
			},
			orderBy: {
				created_at: "asc",
			},
		});

		// Group by date and calculate the average
		const groupedByDate: { [date: string]: number[] } = {};
		elevations.forEach((entry) => {
			const date = entry.created_at.toISOString().split("T")[0]; // Extract the date part
			if (!groupedByDate[date]) {
				groupedByDate[date] = [];
			}
			groupedByDate[date].push(entry.water_elevation);
		});

		const avg = Object.entries(groupedByDate)
			.map(([date, elevations]) => ({
				date,
				average_water_elevation:
					elevations.reduce((sum, value) => sum + value, 0) /
					elevations.length,
			}))
			.sort(
				(a, b) =>
					new Date(b.date).getTime() - new Date(a.date).getTime()
			);

		const fluktuasi = await prisma.elevation.findMany({
			where: {
				hardwareId: 1,
			},
			select: {
				water_elevation: true,
			},
			orderBy: { created_at: "desc" },
			take: 2,
		});

		if (fluktuasi.length < 2) {
			fluc = 0;
		} else {
			fluc = fluktuasi[0].water_elevation - fluktuasi[1].water_elevation;
		}

		const index = await prisma.elevation.findMany({
			where: {
				hardwareId: parseInt(hardwareId),
			},
			select: {
				water_elevation: true,
			},
			orderBy: { created_at: "desc" },
			take: 2,
		});

		const data = await prisma.elevation.findMany({
			where: {
				hardwareId: parseInt(hardwareId),
			},
			select: {
				id: true,
				water_elevation: true,
				created_at: true,
			},
			orderBy: {
				created_at: "desc",
			},
		});

		return NextResponse.json({ avg, fluc, index, data });
	}

	const elevationList = await prisma.elevation.findMany({
		select: {
			water_elevation: true,
			created_at: true,
		},
	});

	if (!elevationList)
		return NextResponse.json({ error: "Water Elevation Not Found" });

	return NextResponse.json({ elevationList });
}

export async function POST(request: Request) {
	const { elevation } = await request.json();
	const cookie = (await cookies()).get("session")?.value;
	const session = await decrypt(cookie);
	const userId = session?.userId;

	if (!userId)
		return NextResponse.json({ error: "Not Authorized" }, { status: 401 });

	if (!elevation)
		return NextResponse.json(
			{ error: "Elevation is required" },
			{ status: 400 }
		);

	const newElevation = await prisma.elevation.create({
		data: {
			water_elevation: parseFloat(elevation),
			hardwareId: 1,
		},
	});

	if (!newElevation)
		return NextResponse.json(
			{ error: "Failed to create new data" },
			{ status: 500 }
		);

	return NextResponse.json(
		{
			success: true,
			message: "Elevation created successfully",
		},
		{ status: 201 }
	);
}

export async function PATCH(request: Request) {
	// return NextResponse.json({ id, elevation }, { status: 200 });
	// const cookie = (await cookies()).get("session")?.value;
	// const session = await decrypt(cookie);
	// const userId = session?.userId;

	// if (!userId)
	// 	return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
	const { id, elevation }: { id: number; elevation: number } =
		await request.json();

	const updateElevation = await prisma.elevation.update({
		where: {
			id: id,
		},
		data: {
			water_elevation: elevation,
		},
	});

	if (!updateElevation)
		return NextResponse.json(
			{ error: "Failed to update the data" },
			{ status: 400 }
		);

	return NextResponse.json({ success: true }, { status: 200 });
}

export async function DELETE(request: Request) {
	const { elevationId } = await request.json();
	const cookie = (await cookies()).get("session")?.value;
	const session = await decrypt(cookie);
	const userId = session?.userId;

	if (!userId)
		return NextResponse.json({ error: "Not Authorized" }, { status: 401 });

	if (!elevationId)
		return NextResponse.json(
			{ error: "Elevation ID is required" },
			{ status: 400 }
		);

	const deleteElevation = await prisma.elevation.delete({
		where: {
			id: parseInt(elevationId),
		},
	});

	if (!deleteElevation)
		return NextResponse.json(
			{ error: "Failed to delete the data" },
			{ status: 500 }
		);

	return NextResponse.json(
		{
			success: true,
			message: "Elevation deleted successfully",
		},
		{ status: 200 }
	);
}
