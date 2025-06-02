import ElevationRepository from "@/domain/repositories/elevation.repository";

export const getElevations = (repo: ElevationRepository) => {
	return repo.getElevations();
};

export const addElevation = (
	repo: ElevationRepository,
	water_elevation: number
) => {
	return repo.addElevation(water_elevation);
};

export const updateElevation = (
	repo: ElevationRepository,
	id: number,
	new_water_elevation: number
) => {
	return repo.updateElevation(id, new_water_elevation);
};

export const deleteElevation = (repo: ElevationRepository, id: number) => {
	return repo.deleteElevation(id);
};
