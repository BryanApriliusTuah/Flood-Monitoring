import { Logout } from "@/application/use-cases/session.application";
import { SessionInfrastructure } from "@/infrastructure/repositories/session.infrastructure";

export async function POST() {
	const logout = await Logout(SessionInfrastructure);
	return logout;
}
