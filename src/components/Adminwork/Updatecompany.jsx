import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Secret_admin_keys } from '../../Constants/keys';

export default function Updatecompany() {
    const praams = useParams()
    const navigate = useNavigate()
    const id = praams.id
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
    });
    const [logo, setLogo] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const fileRef = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setLogo(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = new FormData();
        data.append("name", formData?.name);
        data.append("description", formData?.description);
        data.append("website", formData?.website);
        data.append("location", formData?.location);
        try {

            const res = await axios.post(
                `${Secret_admin_keys}updated/${id}`,
                formData,
                {

                    withCredentials: true,
                }
            );


            if (res?.data?.message) {
                toast.success(res?.data?.message);
            }
            navigate("/admin/companies")
        } catch (err) {
            toast.error(err?.message);
        }
    };
    return (



        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        Update Company
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                        Edit your company profile details
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Logo Upload */}
                    <div className="flex items-center gap-4">
                        <div
                            onClick={() => fileRef.current.click()}
                            className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-700 flex items-center justify-center cursor-pointer hover:border-blue-500 transition-colors overflow-hidden bg-gray-800 flex-shrink-0"
                        >
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Logo preview"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            )}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-300">Company Logo</p>
                            <button
                                type="button"
                                onClick={() => fileRef.current.click()}
                                className="text-xs text-blue-400 hover:text-blue-300 mt-1 transition-colors"
                            >
                                {preview ? "Change logo" : "Upload logo"}
                            </button>
                            <input
                                ref={fileRef}
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="hidden"
                            />
                        </div>
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. BilalWebWorks"
                            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        />
                    </div>

                    {/* Website */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Website URL
                        </label>
                        <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://bilalwebworks.dev"
                            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g. Lahore, Pakistan"
                            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Tell us about your company..."
                            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg text-sm transition-colors mt-2"
                    >
                        {loading ? "Updating..." : "Update Company"}
                    </button>

                </form>
            </div>
        </div>
    )
}


