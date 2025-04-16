import { notFound } from "next/navigation";

type ReviewTypes = {
	params: Promise<{
		productId: string;
		reviewId: string;
	}>;
};

function getRandomInt(count: number) {
	return Math.floor(Math.random() * count);
}

export default async function Review({ params }: ReviewTypes) {
	const { productId, reviewId } = await params;

	const random = getRandomInt(2);

	if (random === 1) {
		throw new Error("Error loading review. This is an intentional error.");
	}

	if (Number.parseInt(reviewId) > 1000) {
		notFound();
	}

	return (
		<h1>
			Review {reviewId} for product {productId}
		</h1>
	);
}
