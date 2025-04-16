"use client";

type ErrorBoundaryTypes = {
	error: Error;
};

// error.message obtains the value from the previously thrown Error.
export default function ErrorBoundary({ error }: ErrorBoundaryTypes) {
	return <div>{error.message}</div>;
}
