import DashboardClient from "@/components/dashboardClient";
import axios from "axios";
import { Suspense } from "react";

const URL = process.env.NEXT_PUBLIC_URL;

export default async function DashboardPage() {
	const dataTable = axios.get(`${URL}/dataTable`).then((res) => res.data);

	const dataChart = axios.get(`${URL}/chart`).then((res) => res.data);

	const dataSectionCard = axios
		.get(`${URL}/sectionCard`)
		.then((res) => res.data);

	const location = axios.get(`${URL}/locations`).then((res) => res.data);

	return (
		<Suspense fallback={<>Wait Bro...</>}>
			<DashboardClient
				promiseTable={dataTable}
				promiseChart={dataChart}
				promiseSectionCard={dataSectionCard}
				promiseLocation={location}
			/>
		</Suspense>
	);
}
