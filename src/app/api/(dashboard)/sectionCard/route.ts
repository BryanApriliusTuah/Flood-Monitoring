import { NextResponse } from "next/server";
import { getSectionCard } from "@/application/use-cases/dashboard.application";
import { SectionCardsInfrastructure } from "@/infrastructure/repositories/dashboard.infrastructure";

export async function GET() {
	try {
		const SectionCards = await getSectionCard(SectionCardsInfrastructure);
		return NextResponse.json(SectionCards, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Section Card: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Section Card Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}
