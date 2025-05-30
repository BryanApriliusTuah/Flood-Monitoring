import DashboardClient from "@/components/dashboardClient";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_URL;

export default async function DashboardPage() {
	const dataTable = await axios
		.get(`${URL}/dataTable`)
		.then((res) => res.data.filteredData);

	const dataChart = await axios
		.get(`${URL}/chart`)
		.then((res) => res.data.elevation);

	const dataSectionCard = await axios
		.get(`${URL}/sectionCard`)
		.then((res) => res.data);

	const location = await axios.get(`${URL}/location`).then((res) => res.data);

	return (
		<DashboardClient
			serverElevationTable={dataTable[0].Combined}
			serverEarlyWarningTable={dataTable[0].Whatsapp}
			serverDataChart={dataChart}
			serverSectionCard={dataSectionCard}
			serverLocation={location}
		/>
	);
}
