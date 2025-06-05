import ElevationType from "@/domain/entities/elevation.type";
import ElevationRepository from "@/domain/repositories/elevation.repository";
import { prisma } from "@/lib/prisma";

const getElevations = async (): Promise<ElevationType[]> => {
	const elevations = await prisma.elevation.findMany({
		where: {
			hardwareId: 1,
		},
	});

	if (!elevations) throw new Error("Elevations");

	return elevations;
};

const addElevation = async (
	water_elevation: number,
	latitude: string,
	longitude: string
): Promise<ElevationType> => {
	const add = await prisma.elevation.create({
		data: {
			water_elevation: water_elevation,
			latitude: latitude,
			longitude: longitude,
			hardwareId: 1,
		},
	});

	if (!add) throw new Error("Add");
	return add;
};

const updateElevation = async (
	id: number,
	new_water_elevation: number,
	new_latitude: string,
	new_longitude: string
): Promise<ElevationType> => {
	const update = await prisma.elevation.update({
		data: {
			water_elevation: new_water_elevation,
			latitude: new_latitude,
			longitude: new_longitude,
		},
		where: {
			id: id,
		},
	});
	if (!update) throw new Error("Update");
	return update;
};

const deleteElevation = async (id: number): Promise<ElevationType> => {
	const destroy = await prisma.elevation.delete({
		where: {
			id: id,
		},
	});

	if (!destroy) throw new Error("Destroy");
	return destroy;
};

export const ElevationInfrastructure: ElevationRepository = {
	getElevations: async () => getElevations(),
	addElevation: async (water_elevation, latitude, longitude) =>
		addElevation(water_elevation, latitude, longitude),
	updateElevation: async (
		id,
		new_water_elevation,
		new_latitude,
		new_longitude
	) => updateElevation(id, new_water_elevation, new_latitude, new_longitude),
	deleteElevation: async (id) => deleteElevation(id),
};
