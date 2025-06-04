import {
	deleteSignUp,
	getSignUps,
	signUp,
} from "@/application/use-cases/signup.application";
import { SignUpInfrastructure } from "@/infrastructure/repositories/signup.infrastructure";

export async function GET() {
	const signups = await getSignUps(SignUpInfrastructure);

	return signups;
}

export async function POST(request: Request) {
	const { username, email, password } = await request.json();

	if (!username || !email || !password) {
		return new Response("Missing required fields", {
			status: 400,
			statusText: "Bad Request",
		});
	}

	const signup = await signUp(
		SignUpInfrastructure,
		username,
		email,
		password
	);

	return signup;
}

export async function DELETE(request: Request) {
	const { id } = await request.json();

	if (!id) {
		return new Response("Missing ID", {
			status: 400,
			statusText: "Bad Request",
		});
	}

	const deletedSignup = await deleteSignUp(SignUpInfrastructure, id);
	return deletedSignup;
}
