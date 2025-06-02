import { z } from "zod";
import {
	elevationSchema,
	earlyWarningSchema,
} from "@/domain/entities/schema.type";

export interface TableCellElevation {
	item: z.infer<typeof elevationSchema>;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export interface TableCellEarlyWarning {
	item: z.infer<typeof earlyWarningSchema>;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}
