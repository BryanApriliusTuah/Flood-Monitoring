import SessionRepository from "@/domain/repositories/session.repository";
import { createSession, decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const verify = async (): Promise<Response> => {
	const cookie = (await cookies()).get("session")?.value;
	const session = await decrypt(cookie);
	const userId = session?.userId;

	if (!userId) return new Response("Not Authenticated", { status: 400 });

	const user = await prisma.admin.findUnique({
		where: {
			id: Number(userId),
		},
	});
	if (!user) return new Response("Not Authenticated 2", { status: 400 });
	return new Response("Authenticated", { status: 200 });
};

const login = async (email: string, password: string): Promise<Response> => {
	const user = await prisma.admin.findFirst({
		where: {
			email: email,
			password: password,
		},
	});

	if (!user)
		return new Response("Username or Password invalid!", { status: 200 });

	await createSession(user.id.toString());
	return new Response("Success Login", { status: 200 });
};

const logout = async (): Promise<Response> => {
	const cookieStore = await cookies();
	cookieStore.delete("session");

	return new Response("Logged out", {
		status: 200,
	});
};

export const SessionInfrastructure: SessionRepository = {
	verify: async () => verify(),
	login: async (email, password) => login(email, password),
	logout: async () => logout(),
};
