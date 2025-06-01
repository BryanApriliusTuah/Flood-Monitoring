import {
	DataTableType,
	ElevationType,
	LocationType,
	SectionCardType,
} from "@/domain/entities/dashboard.type";

export interface DataTableRepository {
	getDataTable: () => Promise<DataTableType>;
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
