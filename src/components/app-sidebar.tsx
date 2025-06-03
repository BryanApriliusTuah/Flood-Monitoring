"use client";
import { IconInnerShadowTop } from "@tabler/icons-react";
import navMainData from "@/domain/entities/nav-main.type";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const URL = process.env.NEXT_PUBLIC_URL;

const verify = async (): Promise<boolean> => {
	const verify = await axios
		.get(`${URL}/verify`)
		.then((res) => res.data)
		.catch(() => "Not Authenticated");
	return verify === "Authenticated";
};

import React, { useEffect, useState } from "react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const router = useRouter();
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		const authStatus = async () => {
			const authStatus = await verify();
			setIsAuthenticated(authStatus);
		};
		authStatus();
	}, []);

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
