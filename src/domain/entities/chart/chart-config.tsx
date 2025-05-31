import { ChartConfig } from "@/components/ui/chart";

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	elevation: {
		label: "Elevation",
		color: "var(--primary)",
	},
	prediction: {
		label: "Prediction",
		color: "var(--primary)",
	},
} satisfies ChartConfig;

export default chartConfig;
