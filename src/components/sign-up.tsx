"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import delay from "@/lib/delay";
import axios from "axios";

interface Signup1Props {
	heading?: string;
	signupText?: string;
	googleText?: string;
	loginText?: string;
	loginUrl?: string;
}

const URL = process.env.NEXT_PUBLIC_URL;

const Signup = ({
	heading,
	signupText = "Create an account",
	loginText = "Already have an account?",
	loginUrl = "/login",
}: Signup1Props) => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSignup = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitted(true);
		const username = (e.target as HTMLFormElement).username.value;
		const email = (e.target as HTMLFormElement).email.value;
		const password = (e.target as HTMLFormElement).password.value;
		console.log("Signup Data:", { username, email, password });

		await delay(500);
		const login = await axios
			.post(`${URL}/signup`, { username, email, password })
			.then((res) => res.data);

		console.log(login);
		setIsSubmitted(false);
	};
	return (
		<section className="h-screen bg-muted">
			<div className="flex h-full items-center justify-center">
				<div className="flex w-full max-w-sm flex-col items-center gap-y-8 rounded-md border border-muted bg-black px-6 py-12 shadow-md">
					<div className="flex flex-col items-center gap-y-2">
						<div className="flex items-center gap-1 lg:justify-start">
							<Avatar className="h-24 w-24 rounded-lg grayscale">
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@Shadcn"
								/>
								<AvatarFallback className="rounded-lg">
									CN
								</AvatarFallback>
							</Avatar>
						</div>
						{heading && (
							<h1 className="text-md font-semibold text-white text-center tracking-wide">
								{heading}
							</h1>
						)}
					</div>
					<div className="flex w-full flex-col gap-8">
						<form onSubmit={handleSignup}>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-2">
									<Input
										type="text"
										name="username"
										placeholder="Username"
										className="text-white"
										required
									/>
								</div>
								<div className="flex flex-col gap-2">
									<Input
										type="email"
										name="email"
										placeholder="Email"
										required
										className="text-white"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<Input
										type="password"
										name="password"
										placeholder="Password"
										required
										className="text-white"
									/>
								</div>
								<div className="flex flex-col gap-4">
									<Button
										type="submit"
										name="signup"
										className="mt-2 w-full text-black"
										disabled={isSubmitted}
									>
										{isSubmitted
											? "Submitting..."
											: signupText}
									</Button>
								</div>
							</div>
						</form>
					</div>
					<div className="flex justify-center gap-1 text-sm text-muted-foreground">
						<p>{loginText}</p>
						<a
							href={loginUrl}
							className="font-medium hover:underline text-white"
						>
							Login
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Signup };
