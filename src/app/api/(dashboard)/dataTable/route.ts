import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getDataTable } from "@/application/use-cases/dashboard.application";
import { DataTableInfrastructure } from "@/infrastructure/repositories/dashboard.infrastructure";

export async function GET() {
	try {
		const dataTable = await getDataTable(DataTableInfrastructure);
		return NextResponse.json(dataTable, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Data Table: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Data Table Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}

export async function POST(request: Request) {
	const { elevation, latitude, longitude } = await request.json();

	const newElevation = await prisma.elevation.create({
		data: {
			water_elevation: parseFloat(elevation),
			latitude: latitude,
			longitude: longitude,
			hardwareId: 1,
		},
	});

	if (!newElevation)
		return NextResponse.json({ error: "I dont know" }, { status: 400 });

	return NextResponse.json({ success: true });
}

export async function PUT(request: Request) {
	// const cookie = (await cookies()).get("session")?.value;
	// const session = await decrypt(cookie);
	// const userId = session?.userId;

	// if (!userId) return NextResponse.error();

	try {
		const body = await request.json();
		const { id, elevation, latitude, longitude } = body;

		if (
			typeof id === "undefined" ||
			typeof elevation === "undefined" ||
			typeof latitude === "undefined" ||
			typeof longitude === "undefined"
		) {
			return NextResponse.json(
				{
					error: "Missing required fields: elevation, latitude, or longitude",
				},
				{ status: 400 }
			);
		}

		const updateData = await prisma.elevation.update({
			where: {
				id: id,
			},
			data: {
				water_elevation: parseFloat(elevation),
				latitude: latitude,
				longitude: longitude,
			},
		});

		if (!updateData)
			return NextResponse.json(
				{ error: "Failed Updating Data" },
				{ status: 400 }
			);

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Invalid JSON body" },
			{ status: 400 }
		);
	}
}

export async function DELETE(request: Request) {
	// const cookie = (await cookies()).get("session")?.value;
	// const session = await decrypt(cookie);
	// const userId = session?.userId;

	// if (!userId) return NextResponse.error();

	const { id } = await request.json();

	const deleteElevation = await prisma.elevation.delete({
		where: {
			id: id,
		},
	});

	if (!deleteElevation)
		return NextResponse.json(
			{ error: "Failed to delete Elevation" },
			{ status: 400 }
		);

	return NextResponse.json({ success: true });
}
