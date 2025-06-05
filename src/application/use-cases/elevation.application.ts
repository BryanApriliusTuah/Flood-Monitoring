import ElevationRepository from "@/domain/repositories/elevation.repository";

export const getElevations = (repo: ElevationRepository) => {
	return repo.getElevations();
};

export const addElevation = (
	repo: ElevationRepository,
	water_elevation: number,
	latitude: string,
	longitude: string
) => {
	return repo.addElevation(water_elevation, latitude, longitude);
};

export const updateElevation = (
	repo: ElevationRepository,
	id: number,
	new_water_elevation: number,
	new_latitude: string,
	new_longitude: string
) => {
	return repo.updateElevation(
		id,
		new_water_elevation,
		new_latitude,
		new_longitude
	);
};

export const deleteElevation = (repo: ElevationRepository, id: number) => {
	return repo.deleteElevation(id);
};
