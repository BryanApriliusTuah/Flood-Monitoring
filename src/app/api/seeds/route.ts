import axios from "axios";
import { prisma } from "@/lib/prisma";
import Level from "@/components/level";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const newElevation = await prisma.elevation.create({
		data: {
			water_elevation: 105,
			hardwareId: 1,
		},
	});

	const newLocation = await prisma.location.create({
		data: {
			latitude: "-2.2136",
			longitude: "113.9108",
			hardwareId: 1,
		},
	});

	const newWhatsapp = await prisma.whatsapp.create({
		data: {
			whatsapp_number: "081254540691",
			hardwareId: 1,
		},
	});

	return NextResponse.json({ newElevation, newLocation, newWhatsapp });
}
