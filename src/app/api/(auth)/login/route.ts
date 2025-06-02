import { Login } from "@/application/use-cases/session.application";
import { SessionInfrastructure } from "@/infrastructure/repositories/session.infrastructure";

export async function POST(request: Request) {
	const { username, password } = await request.json();

	const login = await Login(SessionInfrastructure, username, password);
	return login;
}
