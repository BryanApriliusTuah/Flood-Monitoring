"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState, useEffect } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import chartConfig from "@/domain/entities/chart-config.type";
import { ElevationType } from "@/domain/entities/dashboard.type";
import { useIsMobile } from "@/hooks/use-mobile";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import dataset_bmkg from "@/app/Dataset_BMKG.json";

export const description = "An interactive area chart";
const URL = process.env.NEXT_PUBLIC_URL;

export function ChartAreaInteractive({ data }: { data: ElevationType }) {
	const isMobile = useIsMobile();
	const [timeRange, setTimeRange] = useState("90");
	const [elevation, setElevation] = useState(
		Array.isArray(data) ? data : [data]
	);
	useEffect(() => {
		if (isMobile) {
			setTimeRange("7");
		}
	}, [isMobile]);

	// const filteredData = dataset_bmkg
	// 	.filter((item) => {
	// 		const [day, month, year] = item.Date.split("/").map(Number);
	// 		return year === 2020;
	// 	})
	// 	.map((item) => {
	// 		const [day, month, year] = item.Date.split("/").map(Number);
	// 		const date = new Date(year, month - 1, day).toString();
	// 		return {
	// 			date: date,
	// 			elevation: item.Average,
	// 		};
	// 	});

	const filteredData = elevation
		.sort(
			(a, b) =>
				new Date(a.created_at).getTime() -
				new Date(b.created_at).getTime()
		)
		.filter((item) => {
			const createdAt = new Date(item.created_at);
			const referenceDate = new Date();
			let daysToSubtract = 90;

			if (timeRange === "1") {
				const startOfDay = new Date(referenceDate);
				startOfDay.setHours(0, 0, 0, 0);
				const endOfDay = new Date(referenceDate);
				endOfDay.setHours(23, 59, 59, 999);
				return createdAt >= startOfDay && createdAt <= endOfDay;
			} else if (timeRange === "7") {
				daysToSubtract = 7;
			} else if (timeRange === "30") {
				daysToSubtract = 30;
			}

			const startDate = new Date(referenceDate);
			startDate.setDate(startDate.getDate() - daysToSubtract);
			return createdAt >= startDate;
		})
		.map((item) => ({
			date: item.created_at,
			elevation: item.water_elevation,
		}));

	return (
		<Card className="@container/card">
			<CardHeader>
				<CardTitle>Water Level</CardTitle>
				<CardDescription>
					<span className="hidden @[540px]/card:block">
						Total for the last {timeRange} days
					</span>
					<span className="@[540px]/card:hidden">Last 3 months</span>
				</CardDescription>
				<CardAction>
					<ToggleGroup
						type="single"
						value={timeRange}
						onValueChange={setTimeRange}
						variant="outline"
						className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
					>
						<ToggleGroupItem value="90">
							Last 3 months
						</ToggleGroupItem>
						<ToggleGroupItem value="30">
							Last 30 days
						</ToggleGroupItem>
						<ToggleGroupItem value="7">Last 7 days</ToggleGroupItem>
					</ToggleGroup>
					<Select value={timeRange} onValueChange={setTimeRange}>
						<SelectTrigger
							className="@[767px]/card:hidden flex w-40"
							aria-label="Select a value"
						>
							<SelectValue placeholder="Last 3 months" />
						</SelectTrigger>
						<SelectContent className="rounded-xl">
							<SelectItem value="90" className="rounded-lg">
								Last 3 months
							</SelectItem>
							<SelectItem value="30" className="rounded-lg">
								Last 30 days
							</SelectItem>
							<SelectItem value="7" className="rounded-lg">
								Last 7 days
							</SelectItem>
						</SelectContent>
					</Select>
				</CardAction>
			</CardHeader>
			<CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-[250px] w-full"
				>
					<AreaChart data={filteredData}>
						<defs>
							<linearGradient
								id="fillElevation"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="5%"
									stopColor="var(--color-elevation)"
									stopOpacity={1.0}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-elevation)"
									stopOpacity={0.1}
								/>
							</linearGradient>
							<linearGradient
								id="fillPrediction"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="5%"
									stopColor="var(--color-prediction)"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-prediction)"
									stopOpacity={0.1}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value);
								return date.toLocaleTimeString("en-US", {
									hour: "2-digit",
									minute: "2-digit",
									// month: "long",
								});
							}}
						/>
						<ChartTooltip
							cursor={false}
							defaultIndex={isMobile ? -1 : 10}
							content={
								<ChartTooltipContent
									labelFormatter={(value) => {
										return new Date(
											value
										).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											hour: "2-digit",
											minute: "2-digit",
										});
									}}
									indicator="dot"
								/>
							}
						/>
						<Area
							dataKey="elevation"
							type="natural"
							fill="url(#fillElevation)"
							stroke="var(--color-elevation)"
							stackId="a"
						/>
						<Area
							dataKey="prediction"
							type="natural"
							fill="url(#fillPrediction)"
							stroke="var(--color-prediction)"
							stackId="a"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
