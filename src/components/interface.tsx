import {
	IconCircleCheckFilled,
	IconDotsVertical,
	IconBrandWhatsappFilled,
	IconAlertHexagonFilled,
	IconUserFilled,
	IconLoader,
} from "@tabler/icons-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	TableCellViewerElevation,
	TableCellViewerEarlyWarning,
} from "./table-cell-viewer";
import {
	elevationSchema,
	earlyWarningSchema,
	signUpSchema,
} from "@/domain/entities/schema.type";
import axios from "axios";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import Level from "@/components/level";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { DeleteAlert } from "@/components/delete-alert";

export const URL = process.env.NEXT_PUBLIC_URL;

export const elevationTable: ColumnDef<z.infer<typeof elevationSchema>>[] = [
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
							id: row.original.id,
							elevation: parseFloat(elevation),
							latitude: row.original.latitude,
							longitude: row.original.longitude,
						};
						toast.promise(
							async () => {
								await new Promise((resolve) =>
									setTimeout(resolve, 1000)
								);
								return axios.patch(`${URL}/elevations`, data);
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
						htmlFor={`${row.original.id}-elevation`}
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
						id={`${row.original.id}-elevation`}
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
					) : row.original.water_elevation < Level.Banjir ? (
						<IconAlertHexagonFilled color="rgb(153 27 27)" />
					) : (
						<IconAlertHexagonFilled color="rgb(249 115 22)" />
					)}
					{row.original.water_elevation > Level.Normal ? (
						<div className="text-green-500 tracking-wider">
							NORMAL
						</div>
					) : row.original.water_elevation < Level.Banjir ? (
						<div className="text-red-500 tracking-wider">
							BANJIR
						</div>
					) : (
						<div className="text-orange-500 tracking-wider">
							SIAGA
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
							id: row.original.id,
							elevation: row.original.water_elevation,
							latitude: latitude,
							longitude: row.original.longitude,
						};
						toast.promise(
							async () => {
								await new Promise((resolve) =>
									setTimeout(resolve, 1000)
								);
								return axios.patch(`${URL}/elevations`, data);
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
						htmlFor={`${row.original.latitude}-latitude`}
						className="sr-only"
					>
						Latitude
					</Label>
					<Input
						className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-24 border-transparent bg-transparent text-center shadow-none focus-visible:border dark:bg-transparent"
						value={latitude}
						onChange={(e) => setLatitude(e.target.value)}
						id={`${row.original.latitude}-latitude`}
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
							id: row.original.id,
							elevation: row.original.water_elevation,
							latitude: row.original.latitude,
							longitude: longitude,
						};
						toast.promise(
							async () => {
								await new Promise((resolve) =>
									setTimeout(resolve, 1000)
								);
								return axios.patch(`${URL}/elevations`, data);
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
						htmlFor={`${row.original.id}-longitude`}
						className="sr-only"
					>
						Longitude
					</Label>
					<Input
						className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-24 border-transparent bg-transparent text-center shadow-none focus-visible:border dark:bg-transparent"
						value={longitude}
						onChange={(e) => setLongitude(e.target.value)}
						id={`${row.original.id}-longitude`}
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
						item={{
							...row.original,
							created_at: new Date(row.original.created_at),
						}}
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
								onClick={() => {
									setTimeout(() => setOpen(true), 10);
								}}
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

export const earlyWarningTable: ColumnDef<
	z.infer<typeof earlyWarningSchema>
>[] = [
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

export const signUpTable: ColumnDef<z.infer<typeof signUpSchema>>[] = [
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
		accessorKey: "username",
		header: () => <div className="text-center">Username</div>,
		cell: ({ row }) => (
			<div className="flex justify-center items-center">
				<Badge
					variant="outline"
					className="text-muted-foreground px-1.5"
				>
					<IconUserFilled className="fill-green-500 dark:fill-green-400" />
					{row.original.username}
				</Badge>
			</div>
		),
	},
	{
		accessorKey: "email",
		header: () => <div className="w-full text-center">Email</div>,
		cell: ({ row }) => {
			const [email, setEmail] = useState(row.original.email);

			return (
				<form
					className="flex justify-center items-center"
					onSubmit={(e) => {
						e.preventDefault();
						const data = {
							id: row.original.id,
							email: email,
						};
						toast.promise(
							async () => {
								await new Promise((resolve) =>
									setTimeout(resolve, 1000)
								);
								return axios.put(`${URL}/whatsapp`, data);
							},
							{
								loading: `Saving ${email}...`,
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
						Email
					</Label>
					<Input
						className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-50 border-transparent bg-transparent text-center text-muted-foreground focus-visible:text-primary shadow-none focus-visible:border dark:bg-transparent"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id={`${row.original.id}-number`}
					/>
				</form>
			);
		},
	},
	{
		accessorKey: "password",
		header: () => <div className="w-full text-center">Password</div>,
		cell: ({ row }) => {
			const [password, setPassword] = useState(row.original.password);

			return (
				<form
					className="flex justify-center items-center"
					onSubmit={(e) => {
						e.preventDefault();
						const data = {
							id: row.original.id,
							password: password,
						};
						toast.promise(
							async () => {
								await new Promise((resolve) =>
									setTimeout(resolve, 1000)
								);
								return axios.put(`${URL}/whatsapp`, data);
							},
							{
								loading: `Saving ${password}...`,
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
						Password
					</Label>
					<Input
						className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-40 border-transparent bg-transparent text-center text-muted-foreground focus-visible:text-primary shadow-none focus-visible:border dark:bg-transparent"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						id={`${row.original.id}-number`}
					/>
				</form>
			);
		},
	},
	{
		accessorKey: "status",
		header: () => <div className="w-full text-center">Status</div>,
		cell: () => {
			return (
				<div className="flex justify-center items-center">
					<Badge
						variant="outline"
						className="text-muted-foreground px-1.5 tracking-widest"
					>
						<IconLoader className="" />
						<div className="text-orange-500">Waiting...</div>
					</Badge>
				</div>
			);
		},
	},
	{
		accessorKey: "accepted",
		header: () => <div className="w-full text-center">Accepted</div>,
		cell: () => {
			return (
				<div className="flex justify-center items-center">
					<Button
						variant="outline"
						className="text-green-500 hover:text-green-600"
					>
						Accept
					</Button>
				</div>
			);
		},
	},
	{
		accessorKey: "rejected",
		header: () => <div className="w-full text-center">Rejected</div>,
		cell: () => {
			return (
				<div className="flex justify-center items-center">
					<Button
						variant="outline"
						className="text-red-500 hover:text-red-600"
					>
						Reject request
					</Button>
				</div>
			);
		},
	},
];
