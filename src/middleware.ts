import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

// const protectedRoutes = [/^\/dashboard\/[^\/]+$/]; // Match /dashboard/[id]
const protectedRoutes = [/^\/dashboard$/];
const publicRoutes = ["/login", "/"];
const url = process.env.NEXT_PUBLIC_URL;

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;

	const isProtectedRoute = protectedRoutes.some((route) =>
		typeof route === "string" ? route === path : route.test(path)
	);
	const isPublicRoute = publicRoutes.includes(path);

	console.log("Path:", path);

	const cookie = (await cookies()).get("session")?.value;
	const isAuthenticated = (await decrypt(cookie)) !== undefined;
	console.log("Verify session Middleware :", isAuthenticated);

	if (isProtectedRoute && !isAuthenticated) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	if (isPublicRoute && isAuthenticated) {
		return NextResponse.redirect(new URL(`/dashboard/`, req.nextUrl));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
