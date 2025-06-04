export default interface SignupRepository {
	getSignUps: () => Promise<Response>;
	signUp: (
		username: string,
		email: string,
		password: string
	) => Promise<Response>;
	deleteSignUp: (id: number) => Promise<Response>;
}
