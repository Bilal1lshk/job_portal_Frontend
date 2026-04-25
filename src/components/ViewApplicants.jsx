import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Secret_admin_application_key, Secret_admin_Jobs_keys } from '../Constants/keys'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setaaplicantvalue } from '../redux/Applicants'
import { Scaling } from 'lucide-react'
import { toast } from 'sonner'

export default function ViewApplicants() {
    const params = useParams()
    const id = params?.id
    const dispatch = useDispatch()
    const getjob = async () => {
        try {
            const response = await axios.get(`${Secret_admin_application_key}/applicant/${id}`, {
                withCredentials: true
            })
            const data = response?.data?.job.map((o) => o)
            dispatch(setaaplicantvalue(data))
        } catch (error) {
        }
    }
    const [status, setstatus] = useState({
        status: "",
        id: ""
    })
    const statusid = status?.id
    async function updateapplication(id,statusvalue) {
        const data = await axios.post(`${Secret_admin_application_key}/update/${id}`, {status:statusvalue,id}, {
            withCredentials: true,
        })
        console.log(data?.data?.message)
        const value=data?.data?.message

        toast.message(value)
        setTimeout(() => {
                window.location.reload()

        }, 4000);
    }

    useEffect(() => {
        getjob()

    }, [id])
    const applicant = useSelector(store => store.applicant.applicantvalue)




    return (
        <div className="max-w-3xl mx-auto px-4 py-8">

            <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Applicants</h2>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-0.5 rounded-full">
                    {applicant.length} total
                </span>
            </div>

            <div className="flex flex-col gap-4">
                {Array.isArray(applicant) && applicant?.map(app => (
                    <div
                        key={app._id}
                        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Top row */}
                        <div className="flex items-start gap-4">

                            {/* Avatar */}
                            {app?.profile?.profilephoto ? (
                                <img
                                    src={app?.applicant?.profile?.profilephoto}
                                    alt={app?.applicant?.fullname}
                                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                />
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                                    {app?.applicant?.fullname}
                                </div>
                            )}

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                    <h3 className="font-semibold text-gray-900 text-base">
                                        {app?.applicant?.fullname}
                                    </h3>
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${app?.status}`}>
                                        {app?.status}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mb-0.5">
                                    {app?.email}
                                </p>
                                <p className="text-xs text-gray-400">
                                    Applied for:{" "}
                                    <span className="text-blue-500 font-semibold">
                                        {app.applicant?.title}
                                    </span>
                                    <span className="mx-2 text-gray-300">·</span>
                                    {new Date(app.updatedAt).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="flex gap-2 flex-shrink-0">
                                {app.status?.toLowerCase() !== "accepted" && (
                                    <button
                                        onClick={() => {
                                            setstatus({ status: "Accepted", id: app?._id })
                                            updateapplication(app._id, "Accepted")
                                        }}
                                        className="px-4 py-2 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition"
                                    >
                                        ✓ Accept
                                    </button>
                                )}
                                {app.status?.toLowerCase() !== "rejected" && (
                                    <button
                                        onClick={() => {
                                            setstatus({ status: "Rejected", id: app?._id });
                                             updateapplication(app._id, "Rejected")
                                        }}
                                        className="px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition"
                                    >
                                        ✕ Reject
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Divider */}
                        < div className="border-t border-gray-100 my-4" />

                        {/* Detail row */}
                        < div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4" >
                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Phone</p>
                                <p className="text-sm text-gray-700 font-medium">
                                    {app?.applicant?.Phonenumber || "—"}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Applied on</p>
                                <p className="text-sm text-gray-700 font-medium">
                                    {new Date(app.updatedAt).toLocaleDateString()}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Status</p>
                                <p className="text-sm text-gray-700 font-medium capitalize">
                                    {app.status}
                                </p>
                            </div>
                        </div>

                        {/* Bio */}
                        {app.applicant?.description && (
                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Bio</p>
                                <p className="text-sm text-gray-600 leading-relaxed">

                                </p>
                            </div>
                        )}
                    </div>
                ))
                }
            </div >
        </div >
    );
}

