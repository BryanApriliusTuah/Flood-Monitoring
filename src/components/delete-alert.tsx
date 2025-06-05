import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
	elevationSchema,
	earlyWarningSchema,
} from "@/domain/entities/schema.type";
import { z } from "zod";
import { toast } from "sonner";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_URL;

export function DeleteAlert({
	item,
	open,
	setOpen,
}: {
	item: z.infer<typeof elevationSchema> | z.infer<typeof earlyWarningSchema>;
	open: boolean;
	setOpen: (open: boolean) => void;
}) {
	const Handler = () => {
		const schemaResult = elevationSchema.safeParse(item);
		const earlySchemaResult = earlyWarningSchema.safeParse(item);

		if (!schemaResult.success && !earlySchemaResult.success) {
			console.error(
				"Zod error:",
				schemaResult.error || earlySchemaResult.error
			);
			return toast.error(
				"Failed to parse item. Please check the data format."
			);
		}

		if (schemaResult.success) {
			const parsed = schemaResult.data;
			toast.promise(
				async () => {
					await new Promise((resolve) => setTimeout(resolve, 1000));
					return axios.delete(`${URL}/dataTable`, {
						data: { id: parsed.id },
					});
				},
				{
					loading: `Deleting row...`,
					success: "Deleted successfully!",
					error: "Failed to delete.",
				}
			);
		} else if (earlySchemaResult.success) {
			const parsed = earlySchemaResult.data;
			toast.promise(
				async () => {
					await new Promise((resolve) => setTimeout(resolve, 1000));
					return axios.delete(`${URL}/whatsapp`, {
						data: { id: parsed.id },
					});
				},
				{
					loading: `Deleting row...`,
					success: "Deleted successfully!",
					error: "Failed to delete.",
				}
			);
		}
	};

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Are you absolutely sure?
					</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently
						remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={() => setOpen(false)}>
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction onClick={Handler}>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
