import React from 'react'
import { Link } from 'react-router-dom'

export default function JobDetails({ response }) {
    return (
        <div className="max-w-3xl mx-auto mt-6 px-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">

                {/* Top dark header */}
                <div className="bg-[#0A1628] px-8 py-7">
                    {/* Badges */}
                    <div className="flex gap-2 flex-wrap mb-4">
                        {response?.jobtype && (
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#1E3A5F] text-blue-300 font-mono">
                                {response.jobtype}
                            </span>
                        )}
                        {response?.location && (
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#0F2D1A] text-green-400 font-mono">
                                {response.location}
                            </span>
                        )}
                        {response?.position && (
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#2D1A0F] text-orange-300 font-mono">
                                {response.position}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-semibold text-white mb-1">
                        {response?.title}
                    </h1>
                    <p className="text-sm text-blue-300 opacity-80">
                        Posted by {response?.create_By?.fullname || "Admin"} · {new Date(response?.createdAt).toLocaleDateString()}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-5 flex-wrap">
                        <button className="px-5 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
                            Edit Job
                        </button>
                        <Link to={`/admin/job/description/applications/${response?._id}`}>
                            <button className="px-5 py-2 text-sm font-medium bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-xl transition">
                                View Applicants →
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Body */}
                <div className="px-8 py-6">

                    {/* Description */}
                    <div className="mb-5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Description</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{response?.description}</p>
                    </div>

                    <div className="border-t border-gray-100 my-5" />

                    {/* Meta grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Location</p>
                            <p className="text-sm font-medium text-gray-800">{response?.location}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Job Type</p>
                            <p className="text-sm font-medium text-gray-800">{response?.jobtype}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Position</p>
                            <p className="text-sm font-medium text-gray-800">{response?.position}</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Salary</p>
                            <p className="text-sm font-semibold text-blue-600">{response?.salary}</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 my-5" />

                    {/* Requirements */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Requirements</p>
                        <div className="flex flex-wrap gap-2">
                            {response?.requirments?.map((req, i) => (
                                <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                                    {req}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 px-8 py-4 flex justify-between items-center">
                    <span className="text-xs text-gray-400">All rights reserved © 2026</span>
                    <span className="text-xs text-gray-400 font-mono">ID: {response?._id?.slice(-8)}</span>
                </div>
            </div>
        </div>
    )
}