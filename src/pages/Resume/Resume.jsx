import React, { useState } from 'react'
import Navbar from '../../components/resuable/navbar'
import axios from 'axios'
import { Secret_api_key } from '../../Constants/keys'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Setuservalue } from '../../redux/Setuser'

export default function Resume() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("resume", file)
        try {
            const data = await axios.post(`${Secret_api_key}/user/Upload`, formData, {
                withCredentials: true,
            })
            console.log(data)
            const newdata = data?.data?.findeduser
            console.log("newdata", newdata)
            const dispatced = dispatch(Setuservalue(newdata))
            console.log(dispatced)
            await toast.message(data?.data?.message)
            navigate("/profile")

        } catch (err) {
            console.log("err", err)
        }
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#8EC5FF] flex items-center justify-center px-4">
                <div className="
                w-full max-w-md
                backdrop-blur-md
                bg-blue-500
                border border-white/30
                rounded-2xl
                p-8
                shadow-2xl
            ">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white mb-1">
                        Upload Resume
                    </h2>
                    <p className="text-white/60 text-sm mb-6">
                        PDF or DOC · Max 5MB
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                        {/* File input */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold uppercase tracking-widest text-white/70">
                                Resume File
                            </label>
                            <div className="
                            w-full
                            border border-dashed border-white/40
                            rounded-xl
                            p-6
                            text-center
                            bg-white/10
                            cursor-pointer
                            hover:bg-white/20
                            transition
                        ">
                                <input
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="
                                    w-full text-sm text-white/70
                                    file:mr-3 file:py-2 file:px-4
                                    file:rounded-xl file:border-0
                                    file:text-sm file:font-medium
                                    file:bg-white/20 file:text-white
                                    file:cursor-pointer
                                    hover:file:bg-white/30
                                "
                                />
                                {file && (
                                    <p className="text-xs text-white/60 mt-2">
                                        ✓ {file.name}
                                    </p>
                                )}
                                {!file && (
                                    <p className="text-xs text-white/40 mt-2">
                                        PDF, DOC, or DOCX supported
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={!file || loading}
                            className="
                            w-full py-3
                            bg-white
                            hover:bg-blue-700
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                            text-black font-bold text-sm
                            rounded-xl
                            transition
                        "
                        >
                            {loading ? "Uploading..." : "Upload Resume"}
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}
