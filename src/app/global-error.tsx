"use client"; // Error boundaries must be Client Components

import "./globals.css";

// Works only in production. Development mode shows the default Next.js overlay instead.
export default function GlobalError() {
	return (
		<html lang="en">
			<body>
				<div className="flex min-h-screen flex-col items-center justify-center">
					<h2 className="mb-4 font-bold text-2xl">Something went wrong!</h2>

					<button
						className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
						type="submit"
						onClick={() => {
							// refresh the page
							window.location.reload();
						}}
					>
						Refresh
					</button>
				</div>
			</body>
		</html>
	);
}
