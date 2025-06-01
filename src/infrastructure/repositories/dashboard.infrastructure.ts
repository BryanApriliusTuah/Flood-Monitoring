import { DataTableType } from "@/domain/entities/dashboard.type";
import { DataTableRepository } from "@/domain/repositories/dashboard.repository";
import { prisma } from "@/lib/prisma";

const DataTable = async (): Promise<DataTableType> => {
	const dataTable = await prisma.hardware.findMany({
		select: {
			Elevation: {
				select: {
					id: true,
					water_elevation: true,
					created_at: true,
				},
				orderBy: {
					created_at: "desc",
				},
			},
			Location: {
				select: {
					id: true,
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

	const filteredData = dataTable
		.map((item) => {
			const isSameHour = (a: Date, b: Date): boolean =>
				a.getFullYear() === b.getFullYear() &&
				a.getMonth() === b.getMonth() &&
				a.getDate() === b.getDate() &&
				a.getHours() === b.getHours() && a.getMinutes() === b.getMinutes();

			const matchedElevations = item.Elevation.filter((e) =>
				item.Location.some((l) =>
					isSameHour(e.created_at, l.created_at)
				)
			);

			const matchedLocations = item.Location.filter((l) =>
				item.Elevation.some((e) =>
					isSameHour(l.created_at, e.created_at)
				)
			);

			return {
				Elevation: matchedElevations,
				Location: matchedLocations,
				Whatsapp: item.Whatsapp,
			};
		})
		.map((item) => {
			const { Elevation, Location, Whatsapp } = item;
			const minLength = Math.min(Elevation.length, Location.length);
			const Combined: DataTableType["Combined"] = [];

			for (let i = 0; i < minLength; i++) {
				Combined.push({
					idElevation: Elevation[i].id,
					water_elevation: Elevation[i].water_elevation,
					created_at: String(
						Elevation[i].created_at || Location[i].created_at
					),
					idLocation: Location[i].id,
					latitude: Location[i].latitude,
					longitude: Location[i].longitude,
				});
			}
			return { Combined, Whatsapp };
		});

	if (!filteredData) return { Combined: [], Whatsapp: [] };

	return filteredData[0];
};

export const DataTableInfrastructure: DataTableRepository = {
	getDataTable: async () => DataTable(),
};
