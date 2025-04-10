type ProductDetailsTypes = { params: Promise<{ productId: string }> };

export default async function ProductDetails({ params }: ProductDetailsTypes) {
	const { productId } = await params;

	return <h1>Details about product {productId}</h1>;
}
