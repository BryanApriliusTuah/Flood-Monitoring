import { Verify } from "@/application/use-cases/session.application";
import { SessionInfrastructure } from "@/infrastructure/repositories/session.infrastructure";

export async function GET() {
	const verify = await Verify(SessionInfrastructure);
	return verify;
}
