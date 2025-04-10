/**
 * Catch-all segment.
 *
 * 1) Uses a single square bracket ("[]") while naming your folder.
 *
 * 2) Using double square brackets ("[[]]") makes the slug optional.
 *
 * 3) Try accessing:
 *
 * - /docs/feature1/concept4/example65
 * - /docs/routing/catch-all-segments
 */
type DocsTypes = {
	params: Promise<{
		slug: string[];
	}>;
};

export default async function Docs({ params }: DocsTypes) {
	const { slug } = await params;

	if (slug.length === 2) {
		return (
			<h1>
				Viewing docs for feature {slug[0]} and concept {slug[1]}
			</h1>
		);
	}

	if (slug.length === 1) {
		return <h1>Viewing docs for feature {slug[0]}</h1>;
	}

	return <h1>Doc home page</h1>;
}
