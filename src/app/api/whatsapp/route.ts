import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(request: Request) {
	const { phone } = await request.json();

	const newWhatsapp = await prisma.whatsapp.create({
		data: {
			whatsapp_number: phone,
			hardwareId: 1,
		},
	});

	if (!newWhatsapp)
		return NextResponse.json(
			{ error: "Failed to Add Data" },
			{ status: 400 }
		);

	return NextResponse.json({ success: true, newWhatsapp });
}

export async function PUT(request: Request) {
	// return NextResponse.json({ id, elevation }, { status: 200 });
	// const cookie = (await cookies()).get("session")?.value;
	// const session = await decrypt(cookie);
	// const userId = session?.userId;

	// if (!userId)
	// 	return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
	const { id, phone }: { id: number; phone: string } = await request.json();

	const patchData = await prisma.whatsapp.update({
		where: {
			id: id,
		},
		data: {
			whatsapp_number: phone,
		},
	});

	if (!patchData)
		return NextResponse.json(
			{ error: "Failed to Patch Data" },
			{ status: 400 }
		);

	return NextResponse.json(patchData, { status: 200 });
}

export async function DELETE(request: Request) {
	// const cookie = (await cookies()).get("session")?.value;
	// const session = await decrypt(cookie);
	// const userId = session?.userId;

	// if (!userId)
	// 	return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
	const { idWhatsapp } = await request.json();

	const deleteWhatsapp = await prisma.whatsapp.delete({
		where: {
			id: idWhatsapp,
		},
	});

	if (!deleteWhatsapp)
		return NextResponse.json(
			{ error: "Failed to delete data" },
			{ status: 400 }
		);

	return NextResponse.json({ success: true });
}
