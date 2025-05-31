import { z } from "zod";

const elevationSchema = z.object({
	idElevation: z.number(),
	water_elevation: z.number(),
	created_at: z.string(),
	idLocation: z.number(),
	latitude: z.string(),
	longitude: z.string(),
});

export default elevationSchema;
