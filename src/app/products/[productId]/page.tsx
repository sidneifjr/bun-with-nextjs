import type { Metadata } from "next";

type ProductDetailsTypes = { params: Promise<{ productId: string }> };

// Dynamic metadata.
export const generateMetadata = async ({
	params,
}: ProductDetailsTypes): Promise<Metadata> => {
	const id = (await params).productId;

	const title: string = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Product ${id}`);
		});
	});

	return {
		title: title,
	};
};

export default async function ProductDetails({ params }: ProductDetailsTypes) {
	const { productId } = await params;

	return <h1>Details about product {productId}</h1>;
}
