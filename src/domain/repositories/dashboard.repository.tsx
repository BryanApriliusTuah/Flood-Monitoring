import {
	DataTableType,
	ElevationType,
	LocationType,
	SectionCardType,
} from "@/domain/entities/dashboard/promise";

export interface DataTableRepository {
	getDashboard: () => Promise<DataTableType>;
}

export interface ElevationRepository {
	getElevation: () => Promise<ElevationType>;
}

export interface SectionCardsRepository {
	getSectionCards: () => Promise<SectionCardType>;
}

export interface LocationRepository {
	getLocation: () => Promise<LocationType>;
}
