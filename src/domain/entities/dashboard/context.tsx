export interface ContextType {
	user: {
		name: string;
		email: string;
		avatar: string;
	} | null;
	header: { title: string };
	setDashboard: (value: boolean) => void;
	setMap: (value: boolean) => void;
	setChart: (value: boolean) => void;
	setHardware: (value: boolean) => void;
	setWarning: (value: boolean) => void;
	setHeader: (value: { title: string }) => void;
}
