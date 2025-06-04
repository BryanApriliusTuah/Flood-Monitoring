export default interface SessionRepository {
	verify: () => Promise<Response>;
	login: (email: string, password: string) => Promise<Response>;
	logout: () => Promise<Response>;
}
