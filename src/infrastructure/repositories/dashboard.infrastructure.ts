import {
	ChartType,
	DataTableType,
	MapType,
	SectionCardType,
} from "@/domain/entities/dashboard.type";
import {
	ChartRepository,
	DataTableRepository,
	MapRepository,
	SectionCardsRepository,
} from "@/domain/repositories/dashboard.repository";
import { prisma } from "@/lib/prisma";
import axios from "axios";
import Level from "@/components/level";

const DataTable = async (): Promise<DataTableType> => {
	const data: DataTableType = {
		Elevation: [
			{
				id: 0,
				water_elevation: 0,
				latitude: "",
				longitude: "",
				created_at: new Date(),
			},
		],
		Whatsapp: [
			{
				id: 0,
				whatsapp_number: "",
			},
		],
	};
	const dataTable = await prisma.hardware.findMany({
		select: {
			Elevation: {
				select: {
					id: true,
					water_elevation: true,
					latitude: true,
					longitude: true,
					created_at: true,
				},
				orderBy: {
					created_at: "desc",
				},
			},
			Whatsapp: {
				select: {
					id: true,
					whatsapp_number: true,
				},
			},
		},
		where: {
			id: 1,
		},
	});

	if (!dataTable.length) return data;

	return dataTable[0];
};

const Chart = async (): Promise<ChartType[]> => {
	const elevation = await prisma.elevation.findMany({
		select: {
			water_elevation: true,
			created_at: true,
		},
		where: {
			hardwareId: 1,
		},
	});

	if (!elevation) throw new Error("Elevation");

	return elevation;
};

const SectionCards = async (): Promise<SectionCardType> => {
	const data: SectionCardType = {
		status: "",
		latitude: "",
		longitude: "",
		location: {
			city: "Last updated",
			village: "Palangkaraya",
			state: "Indonesia",
			country: "Indonesia",
			postcode: "Postcode",
		},
		waterIndexLevel: {
			water1: 0,
			created_at1: new Date().toISOString(),
			water2: 0,
			created_at2: new Date().toISOString(),
			persentage: 0,
			time: "0",
		},
		prediction: "0",
		predictPersentage: "0",
	};

	// Status
	const index = await prisma.elevation.findFirst({
		select: {
			water_elevation: true,
			latitude: true,
			longitude: true,
		},
		orderBy: {
			created_at: "desc",
		},
	});

	if (!index) return data;

	const status =
		index.water_elevation < Level.Banjir
			? "BANJIR"
			: index.water_elevation > Level.Normal
			? "NORMAL"
			: "SIAGA";

	const { latitude, longitude } = index;

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
		throw new Error("Index");
	} else {
		if (waterIndex.length < 2) {
			waterIndexPersentage = 0;
			minutesHour = "0";
			waterIndexLevel = {
				water1: waterIndex[0].water_elevation,
				created_at1: String(waterIndex[0].created_at),
				water2: waterIndex[0].water_elevation,
				created_at2: String(waterIndex[0].created_at),
				persentage: parseFloat(waterIndexPersentage.toFixed(2)),
				time: minutesHour,
			};
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
				created_at1: String(waterIndex[0].created_at),
				water2: waterIndex[1].water_elevation,
				created_at2: String(waterIndex[0].created_at),
				persentage: parseFloat(waterIndexPersentage.toFixed(2)),
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
		throw new Error("Prediction");
	} else {
		if (dataSequence.length < 7) {
			prediction = 0;
			predictPersentage = "0";
		} else {
			sequence = dataSequence
				.map((item) => item.water_elevation)
				.reverse();

			prediction = await axios
				.post(`http://localhost:8000/predict`, {
					sequence: sequence,
				})
				.then((res) => res.data.predicted_water_level.toFixed(2))
				.catch((error) => {
					throw new Error("Predict " + error);
				});

			predictPersentage = String(
				(
					((parseFloat(prediction) - waterIndexLevel.water1) /
						waterIndexLevel.water1) *
					100
				).toFixed(2)
			);
		}
	}

	return {
		status,
		latitude,
		longitude,
		location,
		waterIndexLevel,
		prediction,
		predictPersentage,
	};
};

const Map = async (): Promise<MapType> => {
	const location = await prisma.elevation.findFirst({
		select: {
			latitude: true,
			longitude: true,
		},
		orderBy: {
			created_at: "desc",
		},
	});

	if (!location) throw new Error("Map");

	return location;
};

export const DataTableInfrastructure: DataTableRepository = {
	getDataTable: async () => DataTable(),
};

export const ChartInfrastructure: ChartRepository = {
	getChart: async () => Chart(),
};

export const SectionCardsInfrastructure: SectionCardsRepository = {
	getSectionCards: async () => SectionCards(),
};

export const MapInfrastructure: MapRepository = {
	getMap: async () => Map(),
};
