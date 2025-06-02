import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { getChart } from "@/application/use-cases/dashboard.application";
import { ChartInfrastructure } from "@/infrastructure/repositories/dashboard.infrastructure";

export async function GET() {
	try {
		const elevation = await getChart(ChartInfrastructure);
		return NextResponse.json(elevation, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Router Chart: ", error.message);
			return NextResponse.json({ error: error.message }, { status: 400 });
		} else {
			console.error("Router Chart Unknown error: ", error);
			return NextResponse.json({ error: String(error) }, { status: 400 });
		}
	}
}
