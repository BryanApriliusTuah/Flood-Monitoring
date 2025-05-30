import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useIsMobile } from "@/hooks/use-mobile";
import axios from "axios";
import { toast } from "sonner";
import Level from "@/components/level";

const URL = process.env.NEXT_PUBLIC_URL;

export function AddDialog({
	open,
	setOpen,
	tab,
}: {
	open: boolean;
	setOpen: (isOpen: boolean) => void;
	tab: string;
}) {
	const isMobile = useIsMobile();
	const form =
		tab == "elevation" ? (
			<ElevationForm className="flex flex-col gap-4 overflow-y-auto px-4 text-sm" />
		) : (
			<WhatsappForm className="flex flex-col gap-4 overflow-y-auto px-4 text-sm" />
		);

	const formButton =
		tab == "elevation" ? "edit-elevation-form" : "edit-phone-form";

	if (!isMobile) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant="outline" className="hidden">
						Add Section
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Add Section</DialogTitle>
						<DialogDescription>
							Fill in the form below to create a new entry. Click
							submit when you're done.
						</DialogDescription>
					</DialogHeader>
					{form}
					<DialogFooter>
						<Button
							form={formButton}
							type="submit"
							className="w-full"
						>
							Submit
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button
					variant="link"
					className="text-foreground w-fit px-0 text-left hidden"
				>
					Add Section
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="gap-1 text-left">
					<DrawerTitle>Add Section</DrawerTitle>
					<DrawerDescription>
						Fill in the form below to create a new entry. Click
						submit when you're done.
					</DrawerDescription>
				</DrawerHeader>
				{form}
				<DrawerFooter>
					<Button form={formButton}>Submit</Button>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

function ElevationForm({ className }: React.ComponentProps<"form">) {
	const [elevation, setElevation] = useState<string>("");
	const [status, setStatus] = useState<string>(
		parseFloat(elevation) > Level.Normal
			? "Normal"
			: parseFloat(elevation) <= Level.Siaga &&
			  parseFloat(elevation) >= Level.Banjir
			? "Siaga"
			: "Banjir"
	);
	const [latitude, setLatitude] = useState<string>("");
	const [longitude, setLongitude] = useState<string>("");
	return (
		<div className={className}>
			<form
				id="edit-elevation-form"
				className="flex flex-col gap-4"
				onSubmit={async (e) => {
					e.preventDefault();
					const data = JSON.stringify({
						elevation: elevation,
						latitude: latitude,
						longitude: longitude,
					});

					console.log(data);
					toast.promise(
						async () => {
							await new Promise((resolve) =>
								setTimeout(resolve, 1000)
							);
							return axios.post(`${URL}/dataTable`, data);
						},
						{
							loading: `Adding...`,
							success:
								"Added successfully, refresh the page to see the added section!",
							error: "Failed to add.",
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
								const v = parseFloat(e.target.value);
								const stat =
									v > Level.Normal
										? "Normal"
										: v <= Level.Siaga && v >= Level.Banjir
										? "Siaga"
										: "Banjir";
								setStatus(stat);
							}}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<Label htmlFor="elevation">Status</Label>
						<Input
							id="elevation"
							value={status}
							disabled
							style={{ fontWeight: "bold", opacity: 0.75 }}
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
							onChange={(e) => setLatitude(e.target.value)}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<Label htmlFor="longitude">Longitude</Label>
						<Input
							id="longitude"
							value={longitude}
							onChange={(e) => setLongitude(e.target.value)}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
function WhatsappForm({ className }: React.ComponentProps<"form">) {
	const [phone, setPhone] = useState("");
	return (
		<div className={className}>
			<form
				className="flex flex-col gap-4"
				id="edit-phone-form"
				onSubmit={async (e) => {
					e.preventDefault();
					const data = JSON.stringify({
						phone: phone,
					});

					toast.promise(
						async () => {
							await new Promise((resolve) =>
								setTimeout(resolve, 1000)
							);
							return axios.post(`${URL}/whatsapp`, data);
						},
						{
							loading: `Adding...`,
							success:
								"Added successfully, refresh the page to see the added section!",
							error: "Failed to add.",
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
	);
}
