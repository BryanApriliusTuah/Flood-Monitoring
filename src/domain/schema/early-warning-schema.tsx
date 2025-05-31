import { z } from "zod";

const earlyWarningSchema = z.object({
	id: z.number(),
	whatsapp_number: z.string(),
});

export default earlyWarningSchema;
