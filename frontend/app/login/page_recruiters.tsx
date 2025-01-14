import type { ReactNode } from "react";

export default function LoginPage_recruiters(): ReactNode {
	return (
		<div className="flex items-center justify-center min-h-screen bg-green-100">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
				<h2 className="text-2xl font-bold text-center text-gray-800">
					Login to Your Recruiter Account
				</h2>
				<form className="space-y-4">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							required
							className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
						/>
					</div>
					<button
						type="submit"
						className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>
						Login
					</button>
				</form>
				<p className="text-sm text-center text-gray-600">
					Don't have an account?{" "}
					<a href="/" className="font-medium text-green-600 hover:underline">
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
}
