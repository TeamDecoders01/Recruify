import type { ReactNode } from "react";

export default function HomePage(): ReactNode {
	return (
		<div className="min-h-screen bg-gray-800 text-gray-100 flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold text-center mb-12">
				Welcome to Recrucify
			</h1>
			<div className="grid gap-8 md:grid-cols-2 w-11/12 max-w-4xl">
				<div className="bg-gray-700 p-8 rounded-lg shadow-lg grid grid-rows-[auto,1fr,auto]">
					<h2 className="text-3xl font-bold text-green-400 mb-4 text-center">
						Applicants
					</h2>
					<p className="text-gray-300 text-center">
						Looking for your dream job? Sign up or log in to explore new
						opportunities and start your career journey.
					</p>
					<div className="mt-6 text-center">
						<a
							href="/Applicant"
							className="inline-block px-6 py-3 bg-green-400 text-gray-900 font-medium rounded-lg hover:bg-green-500"
						>
							Go to Applicant
						</a>
					</div>
				</div>
				<div className="bg-gray-700 p-8 rounded-lg shadow-lg grid grid-rows-[auto,1fr,auto]">
					<h2 className="text-3xl font-bold text-blue-400 mb-4 text-center">
						Recruiters
					</h2>
					<p className="text-gray-300 text-center">
						Find top talent for your team! Sign up or log in to post jobs and
						connect with skilled professionals.
					</p>
					<div className="mt-6 text-center">
						<a
							href="/recruiters"
							className="inline-block px-6 py-3 bg-blue-400 text-gray-900 font-medium rounded-lg hover:bg-blue-500"
						>
							Go to Recruiters
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
