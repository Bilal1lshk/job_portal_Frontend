import axios from 'axios'
import React, { useState } from 'react'
import { Secret_admin_posts_keys } from '../../Constants/keys'
import { useNavigate, useParams } from 'react-router-dom'

export default function PostUpdate() {
    const navigate = useNavigate()
    const [formdata, setFormData] = useState({
        title: "",
        Description: "",

    })
    const params = useParams()
    const id = params.id
    const onvaluechange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post(`${Secret_admin_posts_keys}/updated/${id}`, formdata, {
            withCredentials: true
        })
        if (response.data.succes) {
            navigate("/admin/posts")
        }
    }

    return (



        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        Update your post
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                        Edit your company profile details
                    </p>
                </div>

                <form onSubmit={handlesubmit} className="space-y-5">


                    {/* Title*/}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Post Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formdata?.title}
                            onChange={onvaluechange}
                            placeholder="e.g. BilalWebWorks"
                            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Description
                        </label>
                        <input
                            type="text"
                            name="Description"
                            value={formdata?.Description}
                            onChange={onvaluechange}
                            placeholder="Your post description"
                            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        />
                    </div>


                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg text-sm transition-colors mt-2"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}


