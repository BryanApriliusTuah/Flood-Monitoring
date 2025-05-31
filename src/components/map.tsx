"use client";
import { useState } from "react";
import {
	GeolocateControl,
	Map,
	Marker,
	Source,
	Layer,
} from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { LocationType } from "@/domain/entities/dashboard.type";

const Mapping = ({ location }: { location: LocationType }) => {
	const longitude = parseFloat(location.longitude);
	const latitude = parseFloat(location.latitude);

	const [viewState, setViewState] = useState({
		longitude: longitude,
		latitude: latitude,
		bearing: 0,
		pitch: 0,
		zoom: 5,
	});

	const [userPosition, setUserPosition] = useState<{
		longitude: number;
		latitude: number;
	} | null>(null);

	return (
		<Map
			{...viewState}
			onMove={(evt) => setViewState(evt.viewState)}
			mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=d3cu4qzGSWL0OCLWoxov"
		>
			<Marker longitude={longitude} latitude={latitude} />
			<GeolocateControl
				positionOptions={{ enableHighAccuracy: true }}
				onGeolocate={(evt) => {
					if (evt.coords) {
						setUserPosition({
							longitude: evt.coords.longitude,
							latitude: evt.coords.latitude,
						});
					}
				}}
			/>
			{userPosition && (
				<Source
					id="route"
					type="geojson"
					data={{
						type: "Feature",
						geometry: {
							type: "LineString",
							coordinates: [
								[userPosition.longitude, userPosition.latitude],
								[longitude, latitude],
							],
						},
						properties: {}, // Add this line to satisfy the type
					}}
				>
					<Layer
						id="route-layer"
						type="line"
						paint={{
							"line-color": "#3b82f6",
							"line-width": 4,
						}}
					/>
				</Source>
			)}
		</Map>
	);
};

export default Mapping;
