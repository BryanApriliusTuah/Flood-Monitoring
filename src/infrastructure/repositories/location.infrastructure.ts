import LocationType from "@/domain/entities/location.type";
import LocationRepository from "@/domain/repositories/location.repository";
import { prisma } from "@/lib/prisma";

const Locations = async (): Promise<LocationType[]> => {
	const locations = await prisma.location.findMany({
		where: {
			hardwareId: 1,
		},
		orderBy: {
			created_at: "desc",
		},
	});

	if (!locations) throw new Error("Locations");
	return locations;
};

const addLocation = async (
	latitude: string,
	longitude: string
): Promise<LocationType> => {
	const add = await prisma.location.create({
		data: {
			latitude: latitude,
			longitude: longitude,
			hardwareId: 1,
		},
	});

	if (!add) throw new Error("Add Location");
	return add;
};

const updateLocation = async (
	id: number,
	latitude: string,
	longitude: string
) => {
	const update = await prisma.location.update({
		data: {
			latitude: latitude,
			longitude: longitude,
		},
		where: {
			id: id,
		},
	});

	if (!update) throw new Error("Update Location");
	return update;
};

const deleteLocation = async (id: number): Promise<LocationType> => {
	const destroy = await prisma.location.delete({
		where: {
			id: id,
		},
	});

	if (!destroy) throw new Error("Delete Location");

	return destroy;
};

export const LocationInfrastructure: LocationRepository = {
	getLocations: async () => Locations(),
	addLocation: async (latitude, longitude) =>
		addLocation(latitude, longitude),
	updateLocation: async (id, latitude, longitude) =>
		updateLocation(id, latitude, longitude),
	deleteLocation: async (id) => deleteLocation(id),
};
