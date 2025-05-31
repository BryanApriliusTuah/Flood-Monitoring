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
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import Level from "@/components/level";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import TableCellElevation from "@/domain/table-cell/table-cell-elevation";
import TableCellEarlyWarning from "@/domain/table-cell/table-cell-early-warning";
import chartConfig from "@/domain/entities/chart/chart-config";

export const URL = process.env.NEXT_PUBLIC_URL;

const chartData = await axios
	.get(`${URL}/chart`)
	.then((res) => res.data.elevation);

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
