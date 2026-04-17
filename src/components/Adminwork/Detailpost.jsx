import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Secret_admin_posts_keys } from '../../Constants/keys';
import Navbar from '../resuable/navbar';

export default function Detailpost() {
    const [postData, setpostdata] = useState(null)
    const params = useParams()
    const id = params?.id
    useEffect(() => {
        async function maindata() {
            if (!id) return
            try {
                const response = await axios.get(`${Secret_admin_posts_keys}/posts/${id}`, {
                    withCredentials: true
                })
                console.log("data", response)
                setpostdata(response?.data?.singlepost)
            } catch (error) {
                console.error("Detailpost fetch failed:", error)
                if (error?.response) {
                    console.error("Status:", error.response.status, "Data:", error.response.data)
                }
            }
        }
        maindata()
    }, [id])

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-amber-50 px-4 py-10">
                <div className="bg-white max-w-2xl w-full rounded-sm shadow-md border border-amber-200 px-12 py-10">

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-stone-900 leading-snug mb-7 tracking-tight">
                        {postData?.title}
                    </h1>

                    {/* Author Row */}
                    <div className="flex items-center gap-3 mb-7">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-amber-800 text-white flex items-center justify-center text-sm font-bold font-mono shrink-0">
                        </div>
                        <div className="flex flex-col gap-0.5">

                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-amber-200 mb-7" />

                    {/* Description */}
                    <div className="mb-9 space-y-4">
                        {postData?.Description?.split("\n\n").map((para, i) => (
                            <p key={i} className="text-base leading-relaxed text-stone-700 text-justify">
                                {para}
                            </p>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}
