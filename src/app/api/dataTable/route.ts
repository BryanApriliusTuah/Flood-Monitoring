import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { PrismaClient } from "@/generated/prisma";
import { DataTypeServer } from "@/components/interface";

const prisma = new PrismaClient();

export async function GET() {
	const dataTable = await prisma.hardware.findMany({
		select: {
			Elevation: {
				select: {
					id: true,
					water_elevation: true,
					created_at: true,
				},
				orderBy: {
					created_at: "desc",
				},
			},
			Location: {
				select: {
					id: true,
					latitude: true,
					longitude: true,
					created_at: true,
				},
				orderBy: {
					created_at: "desc",
				},
			},
			Whatsapp: {
				select: {
					id: true,
					whatsapp_number: true,
				},
			},
		},
		where: {
			id: 1,
		},
	});

	const filteredData = dataTable
		.map((item) => {
			const isSameHour = ({ a, b }: { a: Date; b: Date }) =>
				a.getFullYear() === b.getFullYear() &&
				a.getMonth() === b.getMonth() &&
				a.getDate() === b.getDate() &&
				a.getHours() === b.getHours();

			const matchedElevations = item.Elevation.filter((e) =>
				item.Location.some((l) =>
					isSameHour({ a: e.created_at, b: l.created_at })
				)
			);

			const matchedLocations = item.Location.filter((l) =>
				item.Elevation.some((e) =>
					isSameHour({ a: l.created_at, b: e.created_at })
				)
			);

			return {
				Elevation: matchedElevations,
				Location: matchedLocations,
				Whatsapp: item.Whatsapp,
			};
		})
		.filter((item) => item.Elevation.length > 0 && item.Location.length > 0)
		.map((item) => {
			const { Elevation, Location, Whatsapp } = item;
			const minLength = Math.min(Elevation.length, Location.length);
			const Combined: DataTypeServer[] = [];

			for (let i = 0; i < minLength; i++) {
				Combined.push({
					idElevation: Elevation[i].id,
					water_elevation: Elevation[i].water_elevation,
					created_at: String(
						Elevation[i].created_at || Location[i].created_at
					),
					idLocation: Location[i].id,
					latitude: Location[i].latitude,
					longitude: Location[i].longitude,
				});
			}
			return { Combined, Whatsapp };
		});

	if (!filteredData) return NextResponse.json({ status: 404 });

	return NextResponse.json({ filteredData: filteredData }, { status: 200 });
}

export async function POST(request: Request) {
	const { elevation, latitude, longitude } = await request.json();

	const newElevation = await prisma.elevation.create({
		data: {
			water_elevation: parseFloat(elevation),
			hardwareId: 1,
		},
	});
	const newLocation = await prisma.location.create({
		data: {
			latitude: latitude,
			longitude: longitude,
			hardwareId: 1,
		},
	});

	if (!newElevation || !newLocation)
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
		const { idElevation, idLocation, elevation, latitude, longitude } =
			body;

		if (
			typeof idElevation === "undefined" ||
			typeof idLocation === "undefined" ||
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

		const updateData = await prisma.hardware.update({
			where: {
				id: 1,
			},
			data: {
				Elevation: {
					update: {
						where: { id: idElevation },
						data: {
							water_elevation: parseFloat(elevation),
						},
					},
				},
				Location: {
					update: {
						where: {
							id: idLocation,
						},
						data: {
							latitude: latitude,
							longitude: longitude,
						},
					},
				},
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

	const { idElevation, idLocation } = await request.json();

	const deleteElevation = await prisma.elevation.delete({
		where: {
			id: idElevation,
		},
	});

	if (!deleteElevation)
		return NextResponse.json(
			{ error: "Failed to delete Elevation" },
			{ status: 400 }
		);

	const deleteLocation = await prisma.location.delete({
		where: {
			id: idLocation,
		},
	});

	if (!deleteLocation)
		return NextResponse.json(
			{ error: "Failed to delete Location" },
			{ status: 400 }
		);

	return NextResponse.json({ success: true });
}
