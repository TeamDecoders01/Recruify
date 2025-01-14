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
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									className="w-5 h-5 text-gray-500"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 16"
								>
									<title>Email Icon</title>
									<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
									<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
								</svg>
							</div>
							<input
								type="email"
								id="email"
								name="email"
								required
								className="w-full px-4 py-2 pl-10 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
								placeholder="name@example.com"
							/>
						</div>
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
