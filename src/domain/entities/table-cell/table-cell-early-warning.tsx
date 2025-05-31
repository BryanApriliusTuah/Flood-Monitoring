import { z } from "zod";
import earlyWarningSchema from "@/domain/entities/schema/early-warning-schema";

export default interface TableCellEarlyWarning {
	item: z.infer<typeof earlyWarningSchema>;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}
