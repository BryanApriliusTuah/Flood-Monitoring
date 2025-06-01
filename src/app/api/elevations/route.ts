import {
	addElevation,
	deleteElevation,
	getElevations,
	updateElevation,
} from "@/application/use-cases/elevation.useCase";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ElevationInfrastructure } from "@/infrastructure/repositories/elevation.infrastructure";

export async function GET() {
	try {
		const elevation = await getElevations(ElevationInfrastructure);
		return NextResponse.json(elevation, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Elevation GET: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Elevation GET Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}

export async function POST(request: Request) {
	// return NextResponse.json({ id, elevation }, { status: 200 });
	// const cookie = (await cookies()).get("session")?.value;
	// const session = await decrypt(cookie);
	// const userId = session?.userId;
	// if (!userId)
	// 	return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
	try {
		const { elevation } = await request.json();
		const add = await addElevation(ElevationInfrastructure, elevation);
		return NextResponse.json(add, { status: 201 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Elevation POST: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Elevation POST Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}

export async function PATCH(request: Request) {
	// return NextResponse.json({ id, elevation }, { status: 200 });
	// const cookie = (await cookies()).get("session")?.value;
	// const session = await decrypt(cookie);
	// const userId = session?.userId;
	// if (!userId)
	// 	return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
	try {
		const { id, elevation } = await request.json();
		const update = await updateElevation(
			ElevationInfrastructure,
			id,
			elevation
		);
		return NextResponse.json(update, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Elevation PATCH: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Elevation PATCH Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}

export async function DELETE(request: Request) {
	// const { elevationId } = await request.json();
	// const cookie = (await cookies()).get("session")?.value;
	// const session = await decrypt(cookie);
	// const userId = session?.userId;
	// if (!userId)
	// 	return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
	try {
		const { id } = await request.json();
		const destroy = await deleteElevation(ElevationInfrastructure, id);
		return NextResponse.json(destroy, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Elevation DELETE: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Elevation DELETE Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}
