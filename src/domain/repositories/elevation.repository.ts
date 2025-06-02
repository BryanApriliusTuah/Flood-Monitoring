import ElevationType from "@/domain/entities/elevation.type";

export default interface ElevationRepository {
	getElevations: () => Promise<ElevationType[]>;
	addElevation: (water_elevation: number) => Promise<ElevationType>;
	updateElevation: (
		id: number,
		new_water_elevation: number
	) => Promise<ElevationType>;
	deleteElevation: (id: number) => Promise<ElevationType>;
}
