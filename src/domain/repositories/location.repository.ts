import LocationType from "@/domain/entities/location.type";
import { MapType } from "../entities/dashboard.type";

export default interface LocationRepository {
	getLocation: () => Promise<MapType>;
	getLocations: () => Promise<LocationType[]>;
	addLocation: (latitude: string, longitude: string) => Promise<LocationType>;
	updateLocation: (
		id: number,
		latitude: string,
		longitude: string
	) => Promise<LocationType>;
	deleteLocation: (id: number) => Promise<LocationType>;
}
