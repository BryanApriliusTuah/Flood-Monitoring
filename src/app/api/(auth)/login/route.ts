import { Login } from "@/application/use-cases/session.application";
import { SessionInfrastructure } from "@/infrastructure/repositories/session.infrastructure";

export async function POST(request: Request) {
	const { email, password } = await request.json();

	const login = await Login(SessionInfrastructure, email, password);
	return login;
}
