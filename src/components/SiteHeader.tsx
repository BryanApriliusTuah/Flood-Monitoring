"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ContextType } from "@/domain/entities/dashboard.type";
import { DashboardContext } from "@/components/dashboardClient";

export function SiteHeader() {
	const { header } = useContext(DashboardContext) as ContextType;
	const { setTheme } = useTheme();
	return (
		<header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mx-2 data-[orientation=vertical]:h-4"
				/>
				<h1 className="text-base font-medium">{header.title}</h1>
				<div className="ml-auto flex items-center gap-2">
					<Button
						variant="ghost"
						asChild
						size="sm"
						className="hidden sm:flex"
					>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline" size="icon">
									<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
									<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
									<span className="sr-only">
										Toggle theme
									</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem
									onClick={() => setTheme("light")}
								>
									Light
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => setTheme("dark")}
								>
									Dark
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => setTheme("system")}
								>
									System
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</Button>
				</div>
			</div>
		</header>
	);
}
