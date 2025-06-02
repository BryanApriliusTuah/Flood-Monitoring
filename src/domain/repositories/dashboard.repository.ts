import {
	DataTableType,
	ChartType,
	MapType,
	SectionCardType,
} from "@/domain/entities/dashboard.type";

export interface DataTableRepository {
	getDataTable: () => Promise<DataTableType>;
}

export interface ChartRepository {
	getChart: () => Promise<ChartType[]>;
}

export interface SectionCardsRepository {
	getSectionCards: () => Promise<SectionCardType>;
}

export interface MapRepository {
	getMap: () => Promise<MapType>;
}
