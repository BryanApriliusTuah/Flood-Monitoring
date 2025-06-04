import SignupRepository from "@/domain/repositories/signup.repository";

export const getSignUps = (infra: SignupRepository): Promise<Response> => {
	return infra.getSignUps();
};

export const signUp = (
	infra: SignupRepository,
	username: string,
	email: string,
	password: string
): Promise<Response> => {
	return infra.signUp(username, email, password);
};

export const deleteSignUp = (
	infra: SignupRepository,
	id: number
): Promise<Response> => {
	return infra.deleteSignUp(id);
};
