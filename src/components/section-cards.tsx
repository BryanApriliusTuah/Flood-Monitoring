import {
	IconArrowsShuffle,
	IconTrendingDown,
	IconTrendingUp,
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SectionCard } from "./interface";

export function SectionCards({ data }: { data: SectionCard }) {
	return (
		<div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Status</CardDescription>
					<CardTitle
						style={{
							color:
								data.status == "NORMAL"
									? "#22c55e"
									: data.status == "SIAGA"
									? "#f59e42"
									: "#ef4444",
						}}
						className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl tracking-widest "
					>
						{data.status}
					</CardTitle>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						<>Water level</>
						{data.status == "NORMAL" ? (
							<>
								<IconArrowsShuffle className="size-4" />
							</>
						) : data.status == "SIAGA" ? (
							<>
								<IconTrendingUp className="size-4" />
							</>
						) : (
							<>
								<IconTrendingUp className="size-4" />
							</>
						)}
					</div>
					<div className="text-muted-foreground">
						{data.status == "NORMAL" ? (
							<>Water level is stable </>
						) : data.status == "SIAGA" ? (
							<>Water level is approaching ground </>
						) : (
							<>Flooding detected!</>
						)}
					</div>
				</CardFooter>
			</Card>
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Location</CardDescription>
					<CardTitle className="text-xl font-semibold tabular-nums @[250px]/card:text-3xl tracking-widest">
						{data.location.city}
					</CardTitle>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						{data.location.village} ({data.location.postcode}){" "}
					</div>
					<div className="text-muted-foreground">
						{data.location.state}
					</div>
				</CardFooter>
			</Card>
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Elevation</CardDescription>
					<CardTitle className="text-xl font-semibold tabular-nums @[250px]/card:text-3xl tracking-wide">
						{data.waterIndexLevel.water1}cm
					</CardTitle>
					<CardAction>
						<Badge variant="outline">
							{data.waterIndexLevel.persentage > 0 ? (
								<IconTrendingUp />
							) : (
								<IconTrendingDown />
							)}
							{data.waterIndexLevel.persentage}%
						</Badge>
					</CardAction>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						<>Water level</>
						{data.waterIndexLevel.persentage > 0 ? (
							<>
								<IconTrendingUp className="size-4" />
							</>
						) : (
							<>
								<IconTrendingDown className="size-4" />
							</>
						)}
					</div>
					<div className="text-muted-foreground">
						{data.waterIndexLevel.persentage > 0 ? (
							<>Water levels are rising </>
						) : (
							<>Water levels are falling </>
						)}
					</div>
				</CardFooter>
			</Card>
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Prediction</CardDescription>
					<CardTitle className="text-xl font-semibold tabular-nums @[250px]/card:text-3xl tracking-wide">
						{data.prediction}cm
					</CardTitle>
					<CardAction>
						<Badge variant="outline">
							{Number(data.predictPersentage) > 0 ? (
								<>
									<IconTrendingUp />
								</>
							) : (
								<>
									<IconTrendingDown />
								</>
							)}
							{data.predictPersentage}%
						</Badge>
					</CardAction>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						<>Water level</>
						{Number(data.predictPersentage) > 0 ? (
							<>
								<IconTrendingUp className="size-4" />
							</>
						) : (
							<>
								<IconTrendingDown className="size-4" />
							</>
						)}
					</div>
					<div className="text-muted-foreground">
						{Number(data.predictPersentage) > 0 ? (
							<>Water level may increase </>
						) : (
							<>Water level may decrease </>
						)}
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
