export interface DataTableType {
	Combined: {
		idElevation: number;
		water_elevation: number;
		created_at: string;
		idLocation: number;
		latitude: string;
		longitude: string;
	}[];
	Whatsapp: {
		id: number;
		whatsapp_number: string;
	}[];
}

export interface ElevationType {
	water_elevation: number;
	created_at: string;
}

export interface SectionCardType {
	status: string;
	latitude: string;
	longitude: string;
	location: {
		city: string;
		village: string;
		state: string;
		country: string;
		postcode: string;
	};
	waterIndexLevel: {
		water1: number;
		created_at1: string;
		water2: number;
		created_at2: string;
		persentage: number;
		time: string;
	};
	prediction: string;
	predictPersentage: string;
}

export interface LocationType {
	latitude: string;
	longitude: string;
}

export interface UserType {
	name: string;
	email: string;
	avatar: string;
}

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
