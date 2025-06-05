import { z } from "zod";

export const elevationSchema = z.object({
	id: z.number(),
	water_elevation: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	created_at: z.date(),
});

export const earlyWarningSchema = z.object({
	id: z.number(),
	whatsapp_number: z.string(),
});

export const signUpSchema = z.object({
	id: z.number(),
	username: z.string(),
	email: z.string(),
	password: z.string(),
});
