import {
	IconDashboard,
	IconFolder,
	IconMessageExclamation,
	IconMapRoute,
	IconTimeline,
} from "@tabler/icons-react";

const navMainData = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Dashboard",
			url: "#",
			icon: IconDashboard,
		},
		{
			title: "Map",
			url: "#",
			icon: IconMapRoute,
		},
		{
			title: "Chart",
			url: "#",
			icon: IconTimeline,
		},
		{
			title: "Hardware",
			url: "#",
			icon: IconFolder,
		},
		{
			title: "Early Warning",
			url: "#",
			icon: IconMessageExclamation,
		},
	],
};

export default navMainData;
