import LocationType from "@/domain/entities/location.type";

export default interface LocationRepository {
	getLocations: () => Promise<LocationType[]>;
	addLocation: (latitude: string, longitude: string) => Promise<LocationType>;
	updateLocation: (
		id: number,
		latitude: string,
		longitude: string
	) => Promise<LocationType>;
	deleteLocation: (id: number) => Promise<LocationType>;
}
