"use client";

import type React from "react";
import { useState } from "react";

const CreateJobApplication: React.FC = () => {
	const [formData, setFormData] = useState({
		additionalSkills: "",
		companyName: "",
		duration: "",
		experienceNeeded: "",
		jobDescription: "",
		jobRole: "",
		jobTitle: "",
		requirements: "",
		stipend: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Implement form submission logic here (e.g., send to backend)
		console.log(formData);
		alert("Job application created successfully!");
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-green-400 to-teal-500 text-gray-800">
			<header className="flex justify-between items-center py-4 px-6 bg-gray-800 shadow-lg">
				<h1 className="text-3xl font-semibold text-white">
					Create Job Application
				</h1>
			</header>

			<main className="container mx-auto px-4 py-8">
				<h2 className="text-2xl font-semibold mb-6 text-gray-100">
					Job Application Details
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label htmlFor="companyName" className="block text-gray-100 mb-2">
								Company Name
							</label>
							<input
								type="text"
								id="companyName"
								name="companyName"
								value={formData.companyName}
								onChange={handleChange}
								className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
								required
							/>
						</div>

						<div>
							<label htmlFor="jobTitle" className="block text-gray-100 mb-2">
								Job Title
							</label>
							<input
								type="text"
								id="jobTitle"
								name="jobTitle"
								value={formData.jobTitle}
								onChange={handleChange}
								className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
								required
							/>
						</div>

						<div>
							<label htmlFor="jobRole" className="block text-gray-100 mb-2">
								Job Role
							</label>
							<input
								type="text"
								id="jobRole"
								name="jobRole"
								value={formData.jobRole}
								onChange={handleChange}
								className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
								required
							/>
						</div>

						<div>
							<label htmlFor="duration" className="block text-gray-100 mb-2">
								Duration
							</label>
							<input
								type="text"
								id="duration"
								name="duration"
								value={formData.duration}
								onChange={handleChange}
								className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="experienceNeeded"
								className="block text-gray-100 mb-2"
							>
								Experience Needed
							</label>
							<input
								type="text"
								id="experienceNeeded"
								name="experienceNeeded"
								value={formData.experienceNeeded}
								onChange={handleChange}
								className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
								required
							/>
						</div>

						<div>
							<label htmlFor="stipend" className="block text-gray-100 mb-2">
								Stipend
							</label>
							<input
								type="text"
								id="stipend"
								name="stipend"
								value={formData.stipend}
								onChange={handleChange}
								className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
								required
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="jobDescription"
							className="block text-gray-100 mb-2"
						>
							Job Description
						</label>
						<textarea
							id="jobDescription"
							name="jobDescription"
							value={formData.jobDescription}
							onChange={handleChange}
							className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
							rows={5}
							required
						/>
					</div>

					<div>
						<label
							htmlFor="additionalSkills"
							className="block text-gray-100 mb-2"
						>
							Additional Skills
						</label>
						<textarea
							id="additionalSkills"
							name="additionalSkills"
							value={formData.additionalSkills}
							onChange={handleChange}
							className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
							rows={5}
							required
						/>
					</div>

					<div>
						<label htmlFor="requirements" className="block text-gray-100 mb-2">
							Requirements
						</label>
						<textarea
							id="requirements"
							name="requirements"
							value={formData.requirements}
							onChange={handleChange}
							className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
							rows={5}
							required
						/>
					</div>

					<div className="flex justify-end mt-6">
						<button
							type="submit"
							className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
						>
							Submit Application
						</button>
					</div>
				</form>
			</main>
		</div>
	);
};

export default CreateJobApplication;
