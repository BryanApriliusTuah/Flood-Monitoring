import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
	const hardware = await prisma.hardware.create({
		data: {
			name: "Hardware 1",
		},
	});

	if (!hardware) {
		return NextResponse.json(
			{ error: "Failed to create hardware" },
			{ status: 500 }
		);
	}

	const newElevation = await prisma.elevation.createMany({
		data: [
			{
				water_elevation: 105,
				latitude: "-2.2136",
				longitude: "113.9108",
				hardwareId: 1,
			},
			{
				water_elevation: 106,
				latitude: "-2.2136",
				longitude: "113.9108",
				hardwareId: 1,
			},
			{
				water_elevation: 107,
				latitude: "-2.2136",
				longitude: "113.9108",
				hardwareId: 1,
			},
			{
				water_elevation: 105,
				latitude: "-2.2136",
				longitude: "113.9108",
				hardwareId: 1,
			},
			{
				water_elevation: 104,
				latitude: "-2.2136",
				longitude: "113.9108",
				hardwareId: 1,
			},
			{
				water_elevation: 105.6,
				latitude: "-2.2136",
				longitude: "113.9108",
				hardwareId: 1,
			},
			{
				water_elevation: 106.9,
				latitude: "-2.2136",
				longitude: "113.9108",
				hardwareId: 1,
			},
		],
	});

	const newWhatsapp = await prisma.whatsapp.create({
		data: {
			whatsapp_number: "081254540691",
			hardwareId: 1,
		},
	});

	return NextResponse.json({ newElevation, newWhatsapp });
}
