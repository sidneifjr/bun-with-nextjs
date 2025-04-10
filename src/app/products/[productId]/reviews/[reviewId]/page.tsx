type ReviewTypes = {
	params: Promise<{
		productId: string;
		reviewId: string;
	}>;
};

export default async function Review({ params }: ReviewTypes) {
	const { productId, reviewId } = await params;

	return (
		<h1>
			Review {reviewId} for product {productId}
		</h1>
	);
}
