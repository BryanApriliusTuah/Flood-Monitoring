"use client";

import { type Icon } from "@tabler/icons-react";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useContext } from "react";
import { SharingData } from "@/components/dashboardClient";
import { DataType } from "./interface";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon: Icon;
	}[];
}) {
	const {
		setMap,
		setDashboard,
		setChart,
		setHardware,
		setWarning,
		setHeader,
	} = useContext(SharingData) as DataType;

	const handler = ({ title }: { title: string }) => {
		// Reset all to false
		setMap(false);
		setDashboard(false);
		setChart(false);
		setHardware(false);
		setWarning(false);

		// Set only the selected one to true
		switch (title) {
			case "Map":
				setMap(true);
				break;
			case "Chart":
				setChart(true);
				break;
			case "Hardware":
				setHardware(true);
				break;
			case "Dashboard":
				setDashboard(true);
				break;
			case "Early Warning":
				setWarning(true);
				break;
			default:
				break;
		}
		setHeader({ title });
	};

	return (
		<SidebarGroup>
			<SidebarGroupContent className="flex flex-col gap-2">
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem
							key={item.title}
							onClick={() => handler({ title: item.title })}
						>
							<SidebarMenuButton tooltip={item.title}>
								{item.icon && <item.icon />}
								<span>{item.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
