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
import elevationSchema from "@/domain/entities/schema/elevation-schema";
import earlyWarningSchema from "@/domain/entities/schema/early-warning-schema";
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

		let data: any;

		if (schemaResult.success) {
			const parsed = schemaResult.data;
			data = {
				idElevation: parsed.idElevation,
				idLocation: parsed.idLocation,
			};

			toast.promise(
				async () => {
					await new Promise((resolve) => setTimeout(resolve, 1000));
					return axios.delete(`${URL}/dataTable`, {
						data: data,
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

			data = {
				idWhatsapp: parsed.id,
			};

			toast.promise(
				async () => {
					await new Promise((resolve) => setTimeout(resolve, 1000));
					return axios.delete(`${URL}/whatsapp`, {
						data: data,
					});
				},
				{
					loading: `Deleting row...`,
					success: "Deleted successfully!",
					error: "Failed to delete.",
				}
			);
		} else {
			toast.error("Invalid data format.");
			return;
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
