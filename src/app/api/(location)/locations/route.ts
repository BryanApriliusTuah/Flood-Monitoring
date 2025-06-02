import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import {
	addLocation,
	deleteLocation,
	getLocations,
	updateLocation,
} from "@/application/use-cases/location.application";
import { LocationInfrastructure } from "@/infrastructure/repositories/location.infrastructure";

export async function GET() {
	try {
		const locations = await getLocations(LocationInfrastructure);
		return NextResponse.json(locations, { status: 200 });
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

export async function POST(request: Request) {
	try {
		const { latitude, longitude } = await request.json();
		const add = await addLocation(
			LocationInfrastructure,
			latitude,
			longitude
		);
		return NextResponse.json(add, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Locations POST: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Locations POST Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}

export async function PATCH(request: Request) {
	// const cookie = (await cookies()).get("session")?.value;
	// const session = await decrypt(cookie);
	// const userId = session?.userId;
	// if (!userId)
	// 	return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
	try {
		const { id, latitude, longitude } = await request.json();
		const update = await updateLocation(
			LocationInfrastructure,
			id,
			latitude,
			longitude
		);
		return NextResponse.json(update, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Locations PATCH: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Locations PATCH Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}

export async function DELETE(request: Request) {
	try {
		const { id } = await request.json();
		const destroy = await deleteLocation(LocationInfrastructure, id);
		return NextResponse.json(destroy, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Locations PATCH: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Locations PATCH Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}
