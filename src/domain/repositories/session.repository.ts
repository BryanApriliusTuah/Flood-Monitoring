export default interface SessionRepository {
	verify: () => Promise<Response>;
	login: (username: string, password: string) => Promise<Response>;
	logout: () => Promise<Response>;
}
