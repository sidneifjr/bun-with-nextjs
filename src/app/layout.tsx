import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactScan } from "../utils/react-scan";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Static metadata
export const metadata: Metadata = {
	title: {
		default: "Bun with Next.js", // default title for pages that do not have a specified title.
		template: "%s | Bun with Next.js", // use a page's custom title as prefix.
	},

	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ReactScan />

			<body
				className={`${geistSans.variable} ${geistMono.variable} grid min-h-screen grid-rows-4 antialiased`}
			>
				<header>Header</header>

				{children}

				<footer>Footer</footer>
			</body>
		</html>
	);
}
