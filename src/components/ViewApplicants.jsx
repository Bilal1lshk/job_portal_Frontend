import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Secret_admin_Jobs_keys } from '../Constants/keys'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setaaplicantvalue } from '../redux/Applicants'

export default function ViewApplicants() {
    const params = useParams()
    const id = params.id
    const dispatch = useDispatch()
    const getjob = async () => {
        try {
            const response = await axios.get(`${Secret_admin_Jobs_keys}job/${id}`)
            dispatch(setaaplicantvalue(response?.data))
        } catch (error) {
        }
    }

    useEffect(() => {
        getjob()
    }, [id])
    const applicant = useSelector(store => store.applicant.applicantvalue)
    const applicantdata = applicant?.application

    return (

        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">All Applicants</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        {applicantdata?.length} total applicants across all your job postings
                    </p>
                </div>

                {/* Applicants List */}
                <div className="flex flex-col gap-4">
                    {

                        Array.isArray(applicantdata) && applicantdata.map((app, i) => {
                            return (
                                <div
                                    key={app._id}
                                    className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    {/* Top row */}
                                    <div className="flex items-start gap-4">

                                        {/* Avatar */}
                                        <div className={`w-12 h-12 rounded-full  flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                                            <img src={app?.applicant?.profile?.profilephoto} alt="" />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap mb-1">
                                                <h3 className="font-bold text-gray-900 text-base">{app?.applicant?.fullname}</h3>
                                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border  capitalize`}>
                                                    {app?.status}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-0.5">{app?.applicant?.email}</p>
                                            <p className="text-xs text-gray-400">
                                                Applied for: <span className="text-blue-500 font-semibold">{app.applicant?.title}</span>
                                                <span className="mx-2 text-gray-300">·</span>
                                                {app?.updatedAt.split('T')[0]}
                                            </p>
                                        </div>

                                        {/* Action buttons */}
                                        <div className="flex gap-2 flex-shrink-0">
                                            {status !== "accepted" && (
                                                <button
                                                    onClick={() => handleStatus(_id, "accepted")}
                                                    className="px-4 py-2 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition"
                                                >
                                                    ✓ Accept
                                                </button>
                                            )}
                                            {status !== "rejected" && (
                                                <button
                                                    onClick={() => handleStatus(_id, "rejected")}
                                                    className="px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition"
                                                >
                                                    ✕ Reject
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-gray-100 my-4" />

                                    {/* Detail row */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                                        <div>
                                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">{app?.applicant?.Phonenumber}</p>
                                            <p className="text-sm text-gray-700 font-medium">{app?.phoneNumber}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1"><Link to={'https://claude.ai/new'}>https://claude.ai/new</Link></p>
                                            <p className="text-sm text-blue-500 font-medium cursor-pointer hover:underline">{app?.profile?.profilephoto}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Applied On</p>
                                            <p className="text-sm text-gray-700 font-medium">{app?.updatedAt.split('T')[0]}</p>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    {applicant.description && (
                                        <div className="mb-4">
                                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Bio</p>
                                            <p className="text-sm text-gray-600 leading-relaxed">{applicant?.description.slice(0, 170)}</p>
                                        </div>
                                    )}

                                    {/* Skills */}
                                    {Array.isArray(applicant?.profile?.skills) && applicant?.profile?.skills.length > 0 && (
                                        <div>
                                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Skills</p>
                                            <div className="flex flex-wrap gap-2">
                                                {applicant.profile.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-semibold"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                </div>

                {/* Empty state */}
                {applicant?.applicant?.length === 0 && (
                    <div className="bg-white border border-gray-200 rounded-2xl py-20 text-center">
                        <p className="text-4xl mb-3">📭</p>
                        <p className="text-base font-bold text-gray-800 mb-1">No applicants yet</p>
                        <p className="text-sm text-gray-400">Applicants will appear here once they apply</p>
                    </div>
                )}

            </div>
        </div>
    )
}