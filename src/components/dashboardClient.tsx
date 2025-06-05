"use client";
import {
	DataTableType,
	ChartType,
	SectionCardType,
	MapType,
	ContextType,
	UserType,
} from "@/domain/entities/dashboard.type";
import { DataTable } from "@/components/data-table";
import { SiteHeader } from "@/components/SiteHeader";
import { AppSidebar } from "@/components/app-sidebar";
import { SectionCards } from "@/components/section-cards";
import { createContext, CSSProperties, useState, use, useEffect } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import SignUpType from "@/domain/entities/signup.type";
import axios from "axios";

export const DashboardContext = createContext<ContextType | null>(null);

export default function dashboardClient({
	promiseTable,
	promiseChart,
	promiseSectionCard,
	promiseLocation,
	promiseSignUp,
}: {
	promiseTable: Promise<DataTableType>;
	promiseChart: Promise<ChartType>;
	promiseSectionCard: Promise<SectionCardType>;
	promiseLocation: Promise<MapType>;
	promiseSignUp: Promise<SignUpType[]>;
}) {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	useEffect(() => {
		const checking = async () => {
			const check = await axios
				.get(`${process.env.NEXT_PUBLIC_URL}/verify`)
				.then((res) => ({ isAuthenticated: res.data }))
				.catch(() => ({ isAuthenticated: "Not Authenticated" }));
			(await check.isAuthenticated) === "Authenticated"
				? setIsAuthenticated(true)
				: setIsAuthenticated(false);
		};

		checking();
	}, []);
	const elevationData = use(promiseTable).Elevation;
	const locationData = use(promiseLocation);
	const earlyWarning = use(promiseTable).Whatsapp;
	const chartData = use(promiseChart);
	const sectionCardData = use(promiseSectionCard);
	const signUpData = use(promiseSignUp);

	const [user, setUser] = useState<UserType | null>(null);
	const [dashboard, setDashboard] = useState(false);
	const [map, setMap] = useState(false);
	const [chart, setChart] = useState(false);
	const [hardware, setHardware] = useState(false);
	const [warning, setWarning] = useState(false);
	const [header, setHeader] = useState<{ title: string }>({ title: "" });
	return (
		<DashboardContext.Provider
			value={{
				user,
				header,
				isAuthenticated,
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
									<SectionCards data={sectionCardData} />
									<div className="px-4 lg:px-6">
										<ChartAreaInteractive
											data={chartData}
										/>
									</div>
									<DataTable
										elevation={elevationData}
										earlyWarning={earlyWarning}
										location={locationData}
										signUp={signUpData}
									/>
								</div>
							</div>
						</div>
					)}
				</SidebarInset>
			</SidebarProvider>
		</DashboardContext.Provider>
	);
}
