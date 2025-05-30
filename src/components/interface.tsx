import {
	IconDashboard,
	IconDatabase,
	IconFileWord,
	IconFolder,
	IconReport,
	IconMessageExclamation,
	IconMapRoute,
	IconTimeline,
	IconCircleCheckFilled,
	IconDotsVertical,
	IconTrendingUp,
	IconBrandWhatsappFilled,
	IconAlertHexagonFilled,
} from "@tabler/icons-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import axios from "axios";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import Level from "@/components/level";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import type { ColumnDef } from "@tanstack/react-table";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { DeleteAlert } from "@/components/delete-alert";

export const URL = process.env.NEXT_PUBLIC_URL;

const chartData = await axios
	.get(`${URL}/chart`)
	.then((res) => res.data.elevation);

export interface DataType {
	user: {
		name: string;
		email: string;
		avatar: string;
	} | null;
	header: { title: string };
	setDashboard: (value: boolean) => void;
	setMap: (value: boolean) => void;
	setChart: (value: boolean) => void;
	setHardware: (value: boolean) => void;
	setWarning: (value: boolean) => void;
	setHeader: (value: { title: string }) => void;
}

export interface DataTypeServer {
	idElevation: number;
	water_elevation: number;
	created_at: string;
	idLocation: number;
	latitude: string;
	longitude: string;
}

export interface EarlyWarning {
	id: number;
	whatsapp_number: string;
}

export interface SectionCard {
	status: string;
	latitude: string;
	longitude: string;
	location: {
		city: string;
		village: string;
		state: string;
		country: string;
		postcode: string;
	};
	waterIndexLevel: {
		water1: number;
		created_at1: string;
		water2: number;
		created_at2: string;
		persentage: number;
		time: string;
	};
	prediction: string;
	predictPersentage: string;
}

export interface Location {
	latitude: string;
	longitude: string;
}

export interface User {
	name: string;
	email: string;
	avatar: string;
}

// Side-Bar
export const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Dashboard",
			url: "#",
			icon: IconDashboard,
		},
		{
			title: "Map",
			url: "#",
			icon: IconMapRoute,
		},
		{
			title: "Chart",
			url: "#",
			icon: IconTimeline,
		},
		{
			title: "Hardware",
			url: "#",
			icon: IconFolder,
		},
		{
			title: "Early Warning",
			url: "#",
			icon: IconMessageExclamation,
		},
	],
	documents: [
		{
			name: "Request Admin",
			url: "#",
			icon: IconReport,
		},
		{
			name: "Admin",
			url: "#",
			icon: IconReport,
		},
	],
};
// End Side-Bar

export const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	elevation: {
		label: "Elevation",
		color: "var(--primary)",
	},
	prediction: {
		label: "Prediction",
		color: "var(--primary)",
	},
} satisfies ChartConfig;

export interface Elevation {
	water_elevation: number;
	created_at: string;
}
[];

//data-table.tsx
export const schema = z.object({
	idElevation: z.number(),
	water_elevation: z.number(),
	created_at: z.string(),
	idLocation: z.number(),
	latitude: z.string(),
	longitude: z.string(),
});

export const earlySchema = z.object({
	id: z.number(),
	whatsapp_number: z.string(),
});

export const elevationTable: ColumnDef<z.infer<typeof schema>>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) =>
						table.toggleAllPageRowsSelected(!!value)
					}
					aria-label="Select all"
				/>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
				/>
			</div>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "no",
		header: () => <div className="w-full text-left">No</div>,
		cell: ({ row }) => {
			return <div className="text-left">{row.index + 1}</div>;
		},
		enableHiding: false,
	},
	{
		accessorKey: "elevation",
		header: () => <div className="w-full text-center">Elevation</div>,
		cell: ({ row }) => {
			const [elevation, setElevation] = useState(
				row.original.water_elevation.toString()
			);
			return (
				<form
					className="w-full flex justify-center items-center"
					onSubmit={(e) => {
						e.preventDefault();
						const data = {
							id: row.original.idElevation,
							elevation: parseFloat(elevation),
						};
						toast.promise(
							async () => {
								await new Promise((resolve) =>
									setTimeout(resolve, 1000)
								);
								return axios.patch(`${URL}/elevation`, data);
							},
							{
								loading: `Updating...`,
								success: "Updated successfully!",
								error: "Failed to save.",
							}
						);
					}}
				>
					<Label
						htmlFor={`${row.original.idElevation}-elevation`}
						className="sr-only"
					>
						Elevation
					</Label>

					<Input
						className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-12 px-0 border-transparent bg-transparent text-center shadow-none focus-visible:border dark:bg-transparent"
						value={elevation}
						onChange={(e) => {
							let value = e.target.value.replace(/,/g, ".");
							// Allow: empty, int, int., int.d, int.dd
							if (/^\d*(\.?\d{0,2})?$/.test(value)) {
								setElevation(value);
							}
						}}
						id={`${row.original.idElevation}-elevation`}
					/>
					<span className="ml-1 text-muted-foreground select-none">
						cm
					</span>
				</form>
			);
		},
	},
	{
		accessorKey: "status",
		header: () => <div className="w-full text-center">Status</div>,
		cell: ({ row }) => (
			<div className="w-full flex justify-center items-center">
				<Badge
					variant="outline"
					className="text-muted-foreground px-1.5"
				>
					{row.original.water_elevation > Level.Normal ? (
						<IconCircleCheckFilled color="rgb(34 197 94)" />
					) : row.original.water_elevation <= Level.Siaga &&
					  row.original.water_elevation >= Level.Banjir ? (
						<IconAlertHexagonFilled color="rgb(249 115 22)" />
					) : (
						<IconAlertHexagonFilled color="rgb(153 27 27)" />
					)}
					{row.original.water_elevation > Level.Normal ? (
						<div className="text-green-500 tracking-wider">
							NORMAL
						</div>
					) : row.original.water_elevation <= Level.Siaga &&
					  row.original.water_elevation >= Level.Banjir ? (
						<div className="text-orange-500 tracking-wider">
							SIAGA
						</div>
					) : (
						<div className="text-red-500 tracking-wider">
							BANJIR
						</div>
					)}
				</Badge>
			</div>
		),
	},
	{
		accessorKey: "latitude",
		header: () => <div className="w-full text-center">Latitude</div>,
		cell: ({ row }) => {
			const [latitude, setLatitude] = useState(row.original.latitude);
			return (
				<form
					className="w-full flex justify-center items-center"
					onSubmit={(e) => {
						e.preventDefault();
						const data = {
							id: row.original.idLocation,
							latitude: latitude,
						};
						toast.promise(
							async () => {
								await new Promise((resolve) =>
									setTimeout(resolve, 1000)
								);
								return axios.patch(`${URL}/location`, data);
							},
							{
								loading: `Updating...`,
								success: "Update successfully!",
								error: "Failed to save.",
							}
						);
					}}
				>
					<Label
						htmlFor={`${row.original.idElevation}-latitude`}
						className="sr-only"
					>
						Latitude
					</Label>
					<Input
						className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-24 border-transparent bg-transparent text-center shadow-none focus-visible:border dark:bg-transparent"
						value={latitude}
						onChange={(e) => setLatitude(e.target.value)}
						id={`${row.original.idElevation}-latitude`}
					/>
				</form>
			);
		},
	},
	{
		accessorKey: "longitude",
		header: () => <div className="w-full text-center">Longitude</div>,
		cell: ({ row }) => {
			const [longitude, setLongitude] = useState(row.original.longitude);
			return (
				<form
					className="w-full flex justify-center items-center"
					onSubmit={(e) => {
						e.preventDefault();
						const data = {
							id: row.original.idLocation,
							longitude: longitude,
						};
						toast.promise(
							async () => {
								await new Promise((resolve) =>
									setTimeout(resolve, 1000)
								);
								return axios.patch(`${URL}/location`, data);
							},
							{
								loading: `Saving ${row.original.longitude}...`,
								success: "Saved successfully!",
								error: "Failed to save.",
							}
						);
					}}
				>
					<Label
						htmlFor={`${row.original.idElevation}-longitude`}
						className="sr-only"
					>
						Longitude
					</Label>
					<Input
						className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-24 border-transparent bg-transparent text-center shadow-none focus-visible:border dark:bg-transparent"
						value={longitude}
						onChange={(e) => setLongitude(e.target.value)}
						id={`${row.original.idElevation}-longitude`}
					/>
				</form>
			);
		},
	},
	{
		accessorKey: "timestamp",
		header: () => <div className="w-full text-center">Timestamp</div>,
		cell: ({ row }) => (
			<div className="text-center">
				{new Date(row.original.created_at)
					.toISOString()
					.slice(0, 19)
					.replace("T", " ")}
			</div>
		),
	},
	{
		id: "actions",
		header: () => <div className="w-full text-center">Action</div>,
		cell: ({ row }) => {
			const [open, setOpen] = useState(false);
			const [openDelete, setOpenDelete] = useState(false);
			return (
				<div className="w-full flex justify-center items-center">
					<DeleteAlert
						item={row.original}
						open={openDelete}
						setOpen={setOpenDelete}
					/>
					<TableCellViewerElevation
						item={row.original}
						open={open}
						onOpenChange={setOpen}
					/>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
								size="icon"
							>
								<IconDotsVertical />
								<span className="sr-only">Open menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-32">
							<DropdownMenuItem
								onClick={() =>
									setTimeout(() => setOpen(true), 10)
								}
							>
								Edit
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem
								variant="destructive"
								onClick={() =>
									setTimeout(() => setOpenDelete(true), 10)
								}
							>
								Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		},
	},
];

export const earlyWarningTable: ColumnDef<z.infer<typeof earlySchema>>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) =>
						table.toggleAllPageRowsSelected(!!value)
					}
					aria-label="Select all"
				/>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
				/>
			</div>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "no",
		header: () => <div className="w-full text-center">No</div>,
		cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
		enableHiding: false,
	},
	{
		accessorKey: "Warning",
		header: () => <div className="text-center">Warning</div>,
		cell: () => (
			<div className="flex justify-center items-center">
				<Badge
					variant="outline"
					className="text-muted-foreground px-1.5"
				>
					<IconBrandWhatsappFilled className="fill-green-500 dark:fill-green-400" />
					Whatsapp
				</Badge>
			</div>
		),
	},
	{
		accessorKey: "Number",
		header: () => <div className="w-full text-center">Number</div>,
		cell: ({ row }) => {
			const [phone, setPhone] = useState(
				formatPhone(row.original.whatsapp_number)
			);
			function formatPhone(value: string) {
				const digits = value.replace(/\D/g, "");
				return digits.replace(
					/^(\d{0,4})(\d{0,4})(\d{0,4}).*/,
					(_, a, b, c) => [a, b, c].filter(Boolean).join("-")
				);
			}

			return (
				<form
					className="flex justify-center items-center"
					onSubmit={(e) => {
						e.preventDefault();
						const data = {
							id: row.original.id,
							phone: phone.replace(/-/g, ""),
						};
						toast.promise(
							async () => {
								await new Promise((resolve) =>
									setTimeout(resolve, 1000)
								);
								return axios.put(`${URL}/whatsapp`, data);
							},
							{
								loading: `Saving ${phone}...`,
								success: "Saved successfully!",
								error: "Failed to save.",
							}
						);
					}}
				>
					<Label
						htmlFor={`${row.original.id}-number`}
						className="sr-only"
					>
						Number
					</Label>
					<Input
						className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-40 border-transparent bg-transparent text-center text-muted-foreground focus-visible:text-primary shadow-none focus-visible:border dark:bg-transparent"
						value={phone}
						onChange={(e) => setPhone(formatPhone(e.target.value))}
						id={`${row.original.id}-number`}
					/>
				</form>
			);
		},
	},
	{
		id: "actions",
		header: () => <div className="w-full text-right pr-1">Action</div>,
		cell: ({ row }) => {
			const [open, setOpen] = useState(false);
			const [openDelete, setOpenDelete] = useState(false);
			return (
				<div className="w-full flex justify-end pr-1">
					<TableCellViewerEarlyWarning
						item={row.original}
						open={open}
						onOpenChange={setOpen}
					/>
					<DeleteAlert
						item={row.original}
						open={openDelete}
						setOpen={setOpenDelete}
					/>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
								size="icon"
							>
								<IconDotsVertical />
								<span className="sr-only">Open menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-32">
							<DropdownMenuItem
								onClick={() =>
									setTimeout(() => setOpen(true), 10)
								}
							>
								Edit
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem
								variant="destructive"
								onClick={() =>
									setTimeout(() => setOpenDelete(true), 10)
								}
							>
								Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		},
	},
];

interface TableCellViewerProps {
	item: z.infer<typeof schema>;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

interface TableCellViewerPropsEarlyWarning {
	item: z.infer<typeof earlySchema>;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

function TableCellViewerElevation({
	item,
	open,
	onOpenChange,
}: TableCellViewerProps) {
	const isMobile = useIsMobile();
	const [elevation, setElevation] = useState<string>(
		item.water_elevation.toString()
	);
	const [status, setStatus] = useState<string>(
		parseFloat(elevation) > Level.Normal
			? "Normal"
			: parseFloat(elevation) <= Level.Siaga &&
			  parseFloat(elevation) >= Level.Banjir
			? "Siaga"
			: "Banjir"
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
						{!isMobile && <>Showing total elevations</>}
					</DrawerDescription>
				</DrawerHeader>
				<div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
					{!isMobile && (
						<>
							<ChartContainer config={chartConfig}>
								<AreaChart
									accessibilityLayer
									data={chartData}
									margin={{
										left: 0,
										right: 10,
									}}
								>
									<CartesianGrid vertical={false} />
									<XAxis
										dataKey="created_at"
										tickLine={false}
										axisLine={false}
										tickMargin={8}
										tickFormatter={(value) => value}
										hide
									/>
									<ChartTooltip
										cursor={false}
										defaultIndex={isMobile ? -1 : 10}
										content={
											<ChartTooltipContent
												labelFormatter={(value) => {
													return new Date(
														value
													).toLocaleDateString(
														"en-US",
														{
															month: "short",
															day: "numeric",
															hour: "2-digit",
															minute: "2-digit",
														}
													);
												}}
												indicator="dot"
											/>
										}
									/>
									<Area
										dataKey="water_elevation"
										type="natural"
										fill="var(--color-elevation)"
										fillOpacity={0.1}
										stroke="var(--color-elevation)"
										stackId="a"
									/>
								</AreaChart>
							</ChartContainer>
							<Separator />
						</>
					)}
					<form
						id="edit-elevation-form"
						className="flex flex-col gap-4"
						onSubmit={async (e) => {
							e.preventDefault();
							const data = JSON.stringify({
								idElevation: item.idElevation,
								idLocation: item.idLocation,
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
												: val <= Level.Siaga &&
												  val >= Level.Banjir
												? "Siaga"
												: "Banjir";
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

function TableCellViewerEarlyWarning({
	item,
	open,
	onOpenChange,
}: TableCellViewerPropsEarlyWarning) {
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
//end data-table.tsx
