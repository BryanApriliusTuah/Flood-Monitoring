import { getLocation } from "@/application/use-cases/location.application";
import { LocationInfrastructure } from "@/infrastructure/repositories/location.infrastructure";
import { NextResponse } from "next/server";
export async function GET() {
	try {
		const location = await getLocation(LocationInfrastructure);
		return NextResponse.json(location, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Locations GET: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Locations GET Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}
