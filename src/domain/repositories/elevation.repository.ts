import ElevationType from "@/domain/entities/elevation.type";

export default interface ElevationRepository {
	getElevations: () => Promise<ElevationType[]>;
	addElevation: (
		water_elevation: number,
		latitude: string,
		longitude: string
	) => Promise<ElevationType>;
	updateElevation: (
		id: number,
		new_water_elevation: number,
		new_latitude: string,
		new_longitude: string
	) => Promise<ElevationType>;
	deleteElevation: (id: number) => Promise<ElevationType>;
}
