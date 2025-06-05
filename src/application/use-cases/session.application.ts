import SessionRepository from "@/domain/repositories/session.repository";

export const Verify = (infra: SessionRepository) => {
	return infra.verify();
};

export const Login = (
	infra: SessionRepository,
	email: string,
	password: string
) => {
	return infra.login(email, password);
};

export const Logout = (infra: SessionRepository) => {
	return infra.logout();
};
