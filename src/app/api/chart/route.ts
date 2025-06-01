import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET() {
	const elevation = await prisma.elevation.findMany({
		select: {
			water_elevation: true,
			created_at: true,
		},
		where: {
			hardwareId: 1,
		},
	});

	if (!elevation) return NextResponse.json({ status: 404 });

	return NextResponse.json(elevation, { status: 200 });
}
