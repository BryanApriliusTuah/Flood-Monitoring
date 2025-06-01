import {
	ChartRepository,
	DataTableRepository,
	MapRepository,
	SectionCardsRepository,
} from "@/domain/repositories/dashboard.repository";

export const getDataTable = async (repo: DataTableRepository) => {
	return await repo.getDataTable();
};

export const getChart = async (repo: ChartRepository) => {
	return repo.getChart();
};

export const getSectionCard = async (repo: SectionCardsRepository) => {
	return repo.getSectionCards();
};

export const getMap = async (repo: MapRepository) => {
	return repo.getMap();
};
