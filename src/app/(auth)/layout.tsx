"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const navLinks = [
	{
		name: "Register",
		href: "/register",
	},
	{
		name: "Login",
		href: "/login",
	},
	{
		name: "Forgot Password",
		href: "/forgot-password",
	},
];

export default function AuthLayout({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	return (
		<>
			<div>
				{navLinks.map((link) => {
					const isActive =
						pathname === link.href ||
						(pathname.startsWith(link.href) && link.href !== "/");

					return (
						<Link
							className={isActive ? "mr-4 font-bold" : "mr-4 text-blue-500"}
							href={link.href}
							key={link.name}
						>
							{link.name}
						</Link>
					);
				})}
			</div>

			{children}
		</>
	);
}
