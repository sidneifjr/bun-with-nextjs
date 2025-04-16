"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type ErrorBoundaryTypes = {
	error: Error;
	reset: () => void;
};

// error.message obtains the value from the previously thrown Error.
export default function ErrorBoundary({ error, reset }: ErrorBoundaryTypes) {
	const router = useRouter();

	const reload = () => {
		startTransition(() => {
			router.refresh();

			reset();
		});
	};

	return (
		<div>
			<p>{error.message}</p>

			<button type="button" onClick={reload}>
				Try again
			</button>
		</div>
	);
}
