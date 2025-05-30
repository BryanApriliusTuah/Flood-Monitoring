import { NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { PrismaClient } from "@/generated/prisma";
import axios from "axios";

import Level from "@/components/level";

const prisma = new PrismaClient();

export async function GET() {
	// Status
	const index = await prisma.elevation.findFirst({
		select: {
			water_elevation: true,
		},
		orderBy: {
			created_at: "desc",
		},
	});

	if (!index) return NextResponse.json({ status: 404 });

	const status =
		index.water_elevation > Level.Normal
			? "NORMAL"
			: index.water_elevation <= Level.Siaga &&
			  index.water_elevation >= Level.Banjir
			? "SIAGA"
			: "BANJIR";

	// Location
	const latAndLon = await prisma.location.findFirst({
		select: {
			latitude: true,
			longitude: true,
		},
		orderBy: {
			created_at: "desc",
		},
	});

	if (!latAndLon)
		return NextResponse.json({
			status: 404,
			message: "Location not found",
		});

	const { latitude, longitude } = latAndLon;

	const location = await axios
		.get(
			`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=53d9ec47f62644178616c1c4b70dd6b6`
		)
		.then((res) => res.data.features[0].properties)
		.then((res) => ({
			city: res.city,
			village: res.village,
			state: res.state,
			country: res.country,
			postcode: res.postcode,
		}));

	// Index
	let waterIndexPersentage, waterIndexDate, minutesHour, waterIndexLevel;
	const waterIndex = await prisma.elevation.findMany({
		select: {
			water_elevation: true,
			created_at: true,
		},
		orderBy: {
			created_at: "desc",
		},
		take: 2,
	});

	if (!waterIndex) {
		return NextResponse.json({
			status: 404,
			message: "Water Index not found",
		});
	} else {
		if (waterIndex.length < 2) {
			waterIndexPersentage = 0;
			minutesHour = 0;
			waterIndexLevel = {
				water1: waterIndex[0].water_elevation,
				created_at1: waterIndex[0].created_at,
				water2: 0,
				created_at2: "",
				persentage: waterIndexPersentage.toFixed(2),
				time: minutesHour,
			};
			// return NextResponse.json({
			// 	status: 404,
			// 	message: "Not enough water index data",
			// });
		} else {
			waterIndexPersentage =
				((waterIndex[0].water_elevation -
					waterIndex[1].water_elevation) /
					waterIndex[0].water_elevation) *
				100;

			waterIndexDate =
				new Date(waterIndex[0].created_at).getTime() -
				new Date(waterIndex[1].created_at).getTime();

			const totalminutes = Math.floor(waterIndexDate / (1000 * 60));
			const hours = Math.floor(totalminutes / 60);
			const minutes = Math.floor(totalminutes % 60);
			minutesHour = `${hours} hours and ${minutes} minutes`;

			waterIndexLevel = {
				water1: waterIndex[0].water_elevation,
				created_at1: waterIndex[0].created_at,
				water2: waterIndex[1].water_elevation,
				created_at2: waterIndex[0].created_at,
				persentage: waterIndexPersentage.toFixed(2),
				time: minutesHour,
			};
		}
	}

	// Prediction
	let sequence, prediction, predictPersentage;
	const dataSequence = await prisma.elevation.findMany({
		select: {
			water_elevation: true,
		},
		orderBy: {
			created_at: "desc",
		},
		take: 7,
	});

	if (!dataSequence) {
		return NextResponse.json({
			status: 404,
			message: "Sequence not enough",
		});
	} else {
		if (dataSequence.length < 7) {
			prediction = 0;
			predictPersentage = 0;
		} else {
			sequence = dataSequence
				.map((item) => item.water_elevation)
				.reverse();

			prediction = await axios
				.post(`http://localhost:8000/predict`, {
					sequence: sequence,
				})
				.then((res) => res.data.predicted_water_level.toFixed(2));

			predictPersentage = (
				((waterIndexLevel.water1 - parseFloat(prediction)) /
					waterIndexLevel.water1) *
				100
			).toFixed(2);
		}
	}

	return NextResponse.json(
		{
			status,
			latitude,
			longitude,
			location,
			waterIndexLevel,
			prediction,
			predictPersentage,
		},
		{ status: 200 }
	);
}
