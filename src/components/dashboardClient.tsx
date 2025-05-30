"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/SiteHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { createContext, CSSProperties, useState } from "react";
import {
	DataType,
	DataTypeServer,
	EarlyWarning,
	Elevation,
	Location,
	SectionCard,
	User,
} from "@/components/interface";

export const SharingData = createContext<DataType | null>(null);

export default function dashboardClient({
	serverElevationTable,
	serverEarlyWarningTable,
	serverDataChart,
	serverSectionCard,
	serverLocation,
}: {
	serverElevationTable: DataTypeServer[];
	serverEarlyWarningTable: EarlyWarning[];
	serverDataChart: Elevation;
	serverSectionCard: SectionCard;
	serverLocation: Location;
}) {
	const [user, setUser] = useState<User | null>(null);
	const [dashboard, setDashboard] = useState(false);
	const [map, setMap] = useState(false);
	const [chart, setChart] = useState(false);
	const [hardware, setHardware] = useState(false);
	const [warning, setWarning] = useState(false);
	const [header, setHeader] = useState<{ title: string }>({ title: "" });
	return (
		<SharingData.Provider
			value={{
				user,
				header,
				setDashboard,
				setMap,
				setChart,
				setHardware,
				setWarning,
				setHeader,
			}}
		>
			<SidebarProvider
				style={
					{
						"--sidebar-width": "calc(var(--spacing) * 72)",
						"--header-height": "calc(var(--spacing) * 12)",
					} as CSSProperties
				}
			>
				<AppSidebar variant="inset" />
				<SidebarInset>
					<SiteHeader />
					{true && (
						<div className="flex flex-1 flex-col">
							<div className="@container/main flex flex-1 flex-col gap-2">
								<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
									<SectionCards data={serverSectionCard} />
									<div className="px-4 lg:px-6">
										<ChartAreaInteractive
											data={serverDataChart}
										/>
									</div>
									<DataTable
										elevation={serverElevationTable}
										earlyWarning={serverEarlyWarningTable}
										location={serverLocation}
									/>
								</div>
							</div>
						</div>
					)}
				</SidebarInset>
			</SidebarProvider>
		</SharingData.Provider>
	);
}
