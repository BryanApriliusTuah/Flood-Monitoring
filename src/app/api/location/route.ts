import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET() {
	const location = await prisma.location.findMany({
		select: {
			latitude: true,
			longitude: true,
		},
		orderBy: {
			created_at: "desc",
		},
	});

	if (!location) {
		return NextResponse.json(
			{ error: "Location not found" },
			{ status: 404 }
		);
	}

	return NextResponse.json(location, { status: 200 });
}

export async function PATCH(request: Request) {
	// return NextResponse.json({ id, elevation }, { status: 200 });
	// const cookie = (await cookies()).get("session")?.value;
	// const session = await decrypt(cookie);
	// const userId = session?.userId;

	// if (!userId)
	// 	return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
	const {
		id,
		latitude,
		longitude,
	}: { id: number; latitude: string; longitude: string } =
		await request.json();

	if (!latitude) {
		const patchData = await prisma.location.update({
			where: {
				id: id,
			},
			data: {
				longitude: longitude,
			},
		});

		if (!patchData)
			return NextResponse.json(
				{ error: "Error Patching Data" },
				{ status: 400 }
			);

		return NextResponse.json({ success: true }, { status: 200 });
	}

	if (!longitude) {
		const patchData = await prisma.location.update({
			where: {
				id: id,
			},
			data: {
				latitude: latitude,
			},
		});

		if (!patchData)
			return NextResponse.json(
				{ error: "Error Patching Data" },
				{ status: 400 }
			);

		return NextResponse.json({ success: true }, { status: 200 });
	}
}
