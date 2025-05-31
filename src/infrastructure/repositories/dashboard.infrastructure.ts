import { DataTableType } from "@/domain/entities/dashboard.type";
import { DataTableRepository } from "@/domain/repositories/dashboard.repository";
import { PrismaClient } from "@/generated/prisma";

const Prisma = new PrismaClient();

const DataTable: DataTableType = { Combined: [], Whatsapp: [] };

export const DataTableInfrastructure: DataTableRepository = {
	getDashboard: async () => DataTable,
};
