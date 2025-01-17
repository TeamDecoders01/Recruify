import type { ReactNode } from "react";

export default function ApplicantProfileCreator(): ReactNode {
	return (
		<div className="flex items-center justify-center min-h-screen bg-blue-100">
			<div className="w-full max-w-3xl p-8 space-y-6 bg-white rounded-lg shadow-md">
				<h2 className="text-2xl font-bold text-center text-gray-800">
					Create Your Applicant Profile
				</h2>
				<form className="space-y-6">
					{/* Personal Information */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Full Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="John Doe"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="name@example.com"
							/>
						</div>
						<div>
							<label
								htmlFor="phone"
								className="block text-sm font-medium text-gray-700"
							>
								Phone Number
							</label>
							<input
								type="text"
								id="phone"
								name="phone"
								required
								className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="(123) 456-7890"
							/>
						</div>
					</div>

					{/* Job Preferences */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="jobTitle"
								className="block text-sm font-medium text-gray-700"
							>
								Desired Job Title
							</label>
							<input
								type="text"
								id="jobTitle"
								name="jobTitle"
								required
								className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Frontend Developer"
							/>
						</div>
						<div>
							<label
								htmlFor="location"
								className="block text-sm font-medium text-gray-700"
							>
								Preferred Location
							</label>
							<input
								type="text"
								id="location"
								name="location"
								required
								className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="New York, Remote"
							/>
						</div>
						<div>
							<label
								htmlFor="desiredSalary"
								className="block text-sm font-medium text-gray-700"
							>
								Desired Salary
							</label>
							<input
								type="text"
								id="desiredSalary"
								name="desiredSalary"
								required
								className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="$60,000"
							/>
						</div>
					</div>

					{/* Experience */}
					<div>
						<label
							htmlFor="experience"
							className="block text-sm font-medium text-gray-700"
						>
							Previous Experience (Job/Internship)
						</label>
						<textarea
							id="experience"
							name="experience"
							rows={4}
							required
							className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Detail your previous job experiences..."
						/>
					</div>

					<div>
						<label
							htmlFor="skills"
							className="block text-sm font-medium text-gray-700"
						>
							Key Skills
						</label>
						<input
							type="text"
							id="skills"
							name="skills"
							required
							className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							placeholder="React, Node.js, TypeScript"
						/>
					</div>

					{/* Resume Upload */}
					<div>
						<label
							htmlFor="resume"
							className="block text-sm font-medium text-gray-700"
						>
							Upload Resume
						</label>
						<input
							type="file"
							id="resume"
							name="resume"
							accept=".pdf,.doc,.docx"
							required
							className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>

					{/* Education */}
					<div>
						<label
							htmlFor="education"
							className="block text-sm font-medium text-gray-700"
						>
							Education
						</label>
						<textarea
							id="education"
							name="education"
							rows={4}
							required
							className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your education background..."
						/>
					</div>

					{/* Additional Information */}
					<div>
						<label
							htmlFor="additionalInfo"
							className="block text-sm font-medium text-gray-700"
						>
							Additional Information (Optional)
						</label>
						<textarea
							id="additionalInfo"
							name="additionalInfo"
							rows={4}
							className="w-full px-4 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Any additional details you want to add..."
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Submit Profile
					</button>
				</form>
			</div>
		</div>
	);
}
