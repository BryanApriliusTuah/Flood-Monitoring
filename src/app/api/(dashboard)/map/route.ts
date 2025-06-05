import { NextResponse } from "next/server";
import { getMap } from "@/application/use-cases/dashboard.application";
import { MapInfrastructure } from "@/infrastructure/repositories/dashboard.infrastructure";

export async function GET() {
	try {
		const map = await getMap(MapInfrastructure);
		return NextResponse.json(map, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Map: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Map Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}
