import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	TableCellElevation,
	TableCellEarlyWarning,
} from "@/domain/entities/table-cell.type";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import Level from "@/components/level";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const URL = process.env.NEXT_PUBLIC_URL;

export function TableCellViewerElevation({
	item,
	open,
	onOpenChange,
}: TableCellElevation) {
	const isMobile = useIsMobile();
	const [elevation, setElevation] = useState<string>(
		item.water_elevation.toString()
	);
	const [status, setStatus] = useState<string>(
		parseFloat(elevation) > Level.Normal
			? "Normal"
			: parseFloat(elevation) < Level.Banjir
			? "Banjir"
			: "Siaga"
	);
	const [latitude, setLatitude] = useState<string>(item.latitude);
	const [longitude, setLongitude] = useState<string>(item.longitude);
	return (
		<Drawer
			direction={isMobile ? "bottom" : "right"}
			open={open}
			onOpenChange={onOpenChange}
		>
			<DrawerContent>
				<DrawerHeader className="gap-1">
					<DrawerTitle>Edit Data</DrawerTitle>
					<DrawerDescription>
						Edit Water Elevation, Latitude, and Longitude
					</DrawerDescription>
				</DrawerHeader>
				<div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
					<form
						id="edit-elevation-form"
						className="flex flex-col gap-4"
						onSubmit={async (e) => {
							e.preventDefault();
							const data = JSON.stringify({
								id: item.id,
								elevation: elevation,
								latitude: latitude,
								longitude: longitude,
							});

							toast.promise(
								async () => {
									await new Promise((resolve) =>
										setTimeout(resolve, 1000)
									);
									return axios.put(`${URL}/dataTable`, data);
								},
								{
									loading: `Updating...`,
									success:
										"Update successfully, refresh the page to see the result!",
									error: "Failed to save.",
								}
							);
						}}
					>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex flex-col gap-3">
								<Label htmlFor="elevation">Elevation</Label>
								<Input
									id="elevation"
									value={elevation}
									onChange={(e) => {
										setElevation(e.target.value);
										const val = parseFloat(e.target.value);
										const d =
											val > Level.Normal
												? "Normal"
												: val < Level.Banjir
												? "Banjir"
												: "Siaga";
										setStatus(d);
									}}
								/>
							</div>
							<div className="flex flex-col gap-3">
								<Label htmlFor="elevation">Status</Label>
								<Input
									id="elevation"
									value={status}
									disabled
									style={{ fontWeight: "bold", opacity: 0.8 }}
									className={`font-extrabold tracking-widest ${
										status == "Normal"
											? "text-green-500"
											: status == "Siaga"
											? "text-orange-500"
											: "text-red-500"
									}`}
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex flex-col gap-3">
								<Label htmlFor="latitude">Latitude</Label>
								<Input
									id="latitude"
									value={latitude}
									onChange={(e) =>
										setLatitude(e.target.value)
									}
								/>
							</div>
							<div className="flex flex-col gap-3">
								<Label htmlFor="longitude">Longitude</Label>
								<Input
									id="longitude"
									value={longitude}
									onChange={(e) =>
										setLongitude(e.target.value)
									}
								/>
							</div>
						</div>
					</form>
				</div>
				<DrawerFooter>
					<Button form="edit-elevation-form">Submit</Button>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export function TableCellViewerEarlyWarning({
	item,
	open,
	onOpenChange,
}: TableCellEarlyWarning) {
	const isMobile = useIsMobile();
	const [phone, setPhone] = useState(item.whatsapp_number);

	return (
		<Drawer
			direction={isMobile ? "bottom" : "right"}
			open={open}
			onOpenChange={onOpenChange}
		>
			<DrawerTrigger asChild>
				<Button
					variant="link"
					className="text-foreground w-fit px-0 text-left hidden"
				>
					Edit
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="gap-1">
					<DrawerTitle>Edit Data</DrawerTitle>
					<DrawerDescription>Edit Whatsapp Number</DrawerDescription>
				</DrawerHeader>
				<div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
					<form
						className="flex flex-col gap-4"
						id="edit-phone-form"
						onSubmit={async (e) => {
							e.preventDefault();
							const data = JSON.stringify({
								id: item.id,
								phone: phone,
							});
							toast.promise(
								async () => {
									await new Promise((resolve) =>
										setTimeout(resolve, 1000)
									);
									return axios.put(`${URL}/whatsapp`, data);
								},
								{
									loading: `Updating...`,
									success:
										"Update successfully, refresh the page to see the result!",
									error: "Failed to save.",
								}
							);
						}}
					>
						<div className="flex flex-col gap-3">
							<Label htmlFor="phone">Whatsapp Number</Label>
							<Input
								id="phone"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
					</form>
				</div>
				<DrawerFooter>
					<Button form="edit-phone-form">Submit</Button>
					<DrawerClose asChild>
						<Button variant="outline">Done</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
