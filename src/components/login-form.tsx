"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, FormEvent } from "react";
import axios from "axios";
import delay from "@/lib/delay";
import { useRouter } from "next/navigation";

const URL = process.env.NEXT_PUBLIC_URL;

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const handler = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		await delay(500);
		const login = await axios
			.post(`${URL}/login`, { username, password })
			.then((res) => res.data);
		console.log(login);
		if (login === "Success Login") {
			router.push("/dashboard");
		} else {
			setError(login);
			setLoading(false);
		}
	};

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader className="text-center">
					<CardTitle className="text-xl">Welcome back</CardTitle>
					<CardDescription>
						Login with your Username and Password
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handler}>
						<div className="grid gap-6">
							<div className="grid gap-6">
								<div className="grid gap-3">
									<Label htmlFor="username">Username</Label>
									<Input
										id="username"
										type="text"
										value={username}
										onChange={(e) =>
											setUsername(e.target.value)
										}
										required
									/>
								</div>
								<div className="grid gap-3">
									<div className="flex items-center">
										<Label htmlFor="password">
											Password
										</Label>
									</div>
									<Input
										id="password"
										type="password"
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										required
									/>
								</div>
								{error && (
									<div className="text-red-500 text-sm">
										{error}
									</div>
								)}
								<Button
									type="submit"
									className="w-full"
									disabled={loading}
								>
									{loading ? "Logging in" : "Login"}
								</Button>
							</div>
							<div className="text-center text-sm">
								Don&apos;t have an account?{" "}
								<a
									href="#"
									className="underline underline-offset-4"
								>
									Sign up
								</a>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
				Only authorised people have access to the administrator. Please
				ask the person concerned for more details.
			</div>
		</div>
	);
}
