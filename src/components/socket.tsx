import { useState, useEffect } from "react";

const WS_URL = "ws://localhost:8080/ws";

const Socket = () => {
	const [socketData, setSocketData] = useState<{
		elevation: number;
		status_elevation: string;
		curah_hujan: number;
		status_curah_hujan: string;
		latitude: string;
		longitude: string;
	}>({
		elevation: 0,
		status_elevation: "-",
		curah_hujan: 0,
		status_curah_hujan: "-",
		latitude: "-",
		longitude: "-",
	});

	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		const ws = new WebSocket(WS_URL);

		ws.onopen = () => {
			console.log("Connected to WebSocket server");
			setIsConnected(true);
		};

		ws.onmessage = (event) => {
			try {
				const data = JSON.parse(event.data);
				setSocketData(data);
			} catch (e) {
				console.log("Received non-JSON message:", event.data);
				setSocketData(event.data);
			}
		};

		ws.onclose = () => {
			console.log("Disconnected from WebSocket server");
			setIsConnected(false);
			setSocketData({
				elevation: 0,
				status_elevation: "-",
				curah_hujan: 0,
				status_curah_hujan: "-",
				latitude: "-",
				longitude: "-",
			});
		};

		return () => {
			ws.close();
			setIsConnected(false);
		};
	}, []);

	return (
		<div className="mx-5 flex flex-col items-center justify-center bg-card rounded-lg border-grey border-1 shadow-md">
			<div className="flex items-center justify-between gap-2.5 gadiv-2 w-full p-2 px-3 text-left text-lg font-sans">
				<div className="flex items-center gap-2.5">
					<div
						className="w-2.5 h-2.5 rounded-[50%]"
						style={{
							backgroundColor: isConnected
								? "#39FF14"
								: "#FF1744",
							boxShadow: isConnected
								? "0 0 8px #39FF14, 0 0 16px #39FF14"
								: "0 0 8px #FF1744, 0 0 16px #FF1744",
						}}
					></div>
					<p className="text-lg font-semibold tracking-widest">
						{isConnected ? "Online" : "Offline"}
					</p>
				</div>
				<p className="text-xs text-muted-foreground">
					This is a webSocket connection to the server
				</p>
			</div>

			<div className="w-[97.5%] border-1 border-white-300"></div>

			<div className="w-full flex m-5">
				<div className="w-1/3 flex items-center justify-evenly">
					<div className="flex flex-col items-center justify-center gap-1">
						<p className="text-md font-medium tracking-wide">
							{socketData.latitude}
						</p>
						<p className="text-xs text-muted-foreground">
							Latitude
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-1">
						<p className="text-md font-medium tracking-wide">
							{socketData.longitude}
						</p>
						<p className="text-xs text-muted-foreground">
							Longitude
						</p>
					</div>
				</div>
				<div className="w-1/3 flex items-center justify-evenly">
					<div className="flex flex-col items-center justify-center gap-1">
						<div className="flex text-md font-medium tracking-wide">
							<p>{socketData.elevation}</p>
							<p className="ordinal">cm</p>
						</div>
						<p className="text-xs text-muted-foreground">
							Elevasi Air
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-1">
						<p
							className="text-md font-medium tracking-wide"
							style={{
								color:
									socketData.status_elevation === "Normal"
										? "#39FF14"
										: socketData.status_elevation ===
										  "Siaga"
										? "#FFCA28"
										: "#FF1744",
								textShadow:
									socketData.status_elevation === "Normal"
										? "0 0 1px #39FF14, 0 0 8px #39FF14"
										: socketData.status_elevation ===
										  "Siaga"
										? "0 0 1px #FFCA28, 0 0 8px #FFCA28"
										: "0 0 1px #FF1744, 0 0 8px #FF1744",
							}}
						>
							{socketData.status_elevation}
						</p>
						<p className="text-xs text-muted-foreground">Status</p>
					</div>
				</div>
				<div className="w-1/3 flex items-center justify-evenly">
					<div className="flex flex-col items-center justify-center gap-1">
						<div className="flex text-md font-medium tracking-wide">
							<p>{socketData.curah_hujan}</p>
							<p className="ordinal">mm</p>
						</div>
						<p className="text-xs text-muted-foreground">
							Curah Hujan
						</p>
					</div>
					<div className="flex flex-col items-center justify-center gap-1">
						<p
							className="text-md font-medium tracking-wide"
							style={{
								color: "#39FF14",
								textShadow: "0 0 1px #39FF14, 0 0 8px #39FF14",
							}}
						>
							Normal
						</p>
						<p className="text-xs text-muted-foreground">
							{socketData.status_curah_hujan}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Socket;
