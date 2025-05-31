import { DataTableRepository } from "@/domain/repositories/dashboard.repository";

export const getDataTable = async (repo: DataTableRepository) => {
	return await repo.getDashboard();
};
