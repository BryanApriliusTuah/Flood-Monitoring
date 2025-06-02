import LocationRepository from "@/domain/repositories/location.repository";

export const getLocation = (infra: LocationRepository) => {
	return infra.getLocation();
};

export const getLocations = (infra: LocationRepository) => {
	return infra.getLocations();
};

export const addLocation = (
	infra: LocationRepository,
	latitude: string,
	longitude: string
) => {
	return infra.addLocation(latitude, longitude);
};

export const updateLocation = (
	infra: LocationRepository,
	id: number,
	latitude: string,
	longitude: string
) => {
	return infra.updateLocation(id, latitude, longitude);
};

export const deleteLocation = (infra: LocationRepository, id: number) => {
	return infra.deleteLocation(id);
};
