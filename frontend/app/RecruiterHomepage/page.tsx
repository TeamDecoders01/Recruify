"use client";

import type React from "react";
import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";

const RecruiterDashboard: React.FC = () => {
	const [jobs, setJobs] = useState([
		{ id: 1, title: "Frontend Developer", location: "Remote", applicants: 23 },
		{ id: 2, title: "Backend Developer", location: "New York", applicants: 15 },
		{
			id: 3,
			title: "UI/UX Designer",
			location: "San Francisco",
			applicants: 30,
		},
	]);

	const handleDelete = (id: number) => {
		const confirmed = window.confirm(
			"Are you sure you want to delete this job?",
		);
		if (confirmed) {
			setJobs(jobs.filter((job) => job.id !== id));
		}
	};

	const handleEdit = (id: number) => {
		alert(`Edit functionality for job ID ${id} goes here.`);
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-green-600 to-teal-800 text-gray-100">
			<header className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-green-700 to-teal-600 shadow-lg">
				<h1 className="text-3xl font-semibold text-white">
					Recruiter Dashboard
				</h1>
				<div className="flex items-center space-x-4">
					<IoMdPerson className="text-white text-3xl cursor-pointer hover:text-gray-300" />
					<FaBriefcase className="text-white text-3xl cursor-pointer hover:text-gray-300" />
				</div>
			</header>

			<main className="container mx-auto px-4 py-8">
				<h2 className="text-2xl font-semibold mb-6 text-gray-200">
					Your Job Postings
				</h2>

				{jobs.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{jobs.map((job) => (
							<div
								key={job.id}
								className="bg-green-900 text-gray-100 border border-gray-700 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
							>
								<h3 className="text-xl font-bold text-gray-200 mb-2">
									{job.title}
								</h3>
								<p className="text-gray-300">Location: {job.location}</p>
								<p className="text-gray-300">Applicants: {job.applicants}</p>
								<div className="mt-4 flex space-x-2">
									<button
										type="button"
										onClick={() => handleEdit(job.id)}
										className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
									>
										Edit
									</button>
									<button
										type="button"
										onClick={() => handleDelete(job.id)}
										className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
									>
										Delete
									</button>
								</div>
							</div>
						))}
					</div>
				) : (
					<p className="text-gray-400">You have no job postings yet.</p>
				)}
			</main>
		</div>
	);
};

export default RecruiterDashboard;
