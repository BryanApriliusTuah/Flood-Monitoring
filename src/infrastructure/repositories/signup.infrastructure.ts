import SignupRepository from "@/domain/repositories/signup.repository";
import { prisma } from "@/lib/prisma";

const getSignUps = async (): Promise<Response> => {
	const signUps = await prisma.signUp.findMany({
		select: {
			id: true,
			username: true,
			email: true,
			password: true,
		},
		orderBy: {
			id: "asc",
		},
	});

	if (!signUps) {
		throw new Response("No signups found", {
			status: 404,
			statusText: "Not Found",
		});
	}
	return new Response(JSON.stringify(signUps), { status: 200 });
};

const signUp = async (
	username: string,
	email: string,
	password: string
): Promise<Response> => {
	try {
		await prisma.signUp.create({
			data: {
				username,
				email,
				password,
			},
		});
		return new Response("Signup successful", { status: 200 });
	} catch (error: any) {
		if (error.code === "P2002") {
			return new Response("Username or email already exists", {
				status: 409,
			});
		}
		return new Response("Signup failed", { status: 500 });
	}
};

const deleteSignUp = async (id: number): Promise<Response> => {
	try {
		await prisma.signUp.delete({
			where: { id },
		});
		return new Response("Deleted successfully", { status: 200 });
	} catch (error) {
		return new Response("Failed to delete", { status: 404 });
	}
};

export const SignUpInfrastructure: SignupRepository = {
	getSignUps: () => getSignUps(),
	signUp: (username, email, password) => signUp(username, email, password),
	deleteSignUp: (id) => deleteSignUp(id),
};
