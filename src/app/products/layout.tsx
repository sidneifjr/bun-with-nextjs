import type { ReactNode } from "react";

function getRandomInt(count: number) {
	return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
	children,
}: { children: ReactNode }) {
	const random = getRandomInt(2);

	if (random === 1) {
		throw new Error("Error loading review. This is an intentional error.");
	}

	return (
		<>
			{children}

			<h2>Featured products</h2>
		</>
	);
}
