import { z } from "zod";
import elevationSchema from "../schema/elevation-schema";

export default interface TableCellElevation {
	item: z.infer<typeof elevationSchema>;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}
