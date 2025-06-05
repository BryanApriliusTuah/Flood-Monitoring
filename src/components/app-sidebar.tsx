"use client";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useContext } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { IconInnerShadowTop } from "@tabler/icons-react";
import navMainData from "@/domain/entities/nav-main.type";
import { DashboardContext } from "@/components/dashboardClient";

const URL = process.env.NEXT_PUBLIC_URL;

import React from "react";
import { ContextType } from "@/domain/entities/dashboard.type";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const router = useRouter();
	const { isAuthenticated } = useContext(DashboardContext) as ContextType;

	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<a href="#">
								<IconInnerShadowTop className="!size-5" />
								<span className="text-base font-semibold">
									Monitoring Banjir
								</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={navMainData.navMain} />
			</SidebarContent>
			<SidebarFooter>
				{!isAuthenticated && (
					<Button
						variant="outline"
						className="w-full"
						onClick={() => router.push("/login")}
					>
						Login
					</Button>
				)}
				{isAuthenticated && <NavUser user={navMainData.user} />}
			</SidebarFooter>
		</Sidebar>
	);
}
