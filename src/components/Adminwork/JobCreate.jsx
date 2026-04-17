import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Secret_admin_Jobs_keys} from "../../Constants/keys";
import { toast } from "sonner";



const JobCreate = () => {
    const [form, setForm] = useState({
        title: "",
        description: "",
        salary: "",
        requirements: "",
        location: "",
        jobtype: "",
        position: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const payload = {
                ...form,
                requirments: form.requirements
                    .split(",")
                    .map((r) => r.trim())
                    .filter(Boolean),
            };
            const res = await axios.post(`${Secret_admin_Jobs_keys}postjob`, payload, {
                withCredentials: true,
            });
            if (res.data) {
                toast.success(res.data.message)
                navigate("/admin/jobs");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-xl p-8">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Post a Job</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Fill in the details to create a new job listing.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Job Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="e.g. Senior React Developer"
                            required
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
                        />
                    </div>

                    {/* Position */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Position <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="position"
                            value={form.position}
                            onChange={handleChange}
                            placeholder="e.g. Frontend Engineer"
                            required
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Describe the role, responsibilities, and team..."
                            required
                            rows={4}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition resize-none"
                        />
                    </div>

                    {/* Salary + Location */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Salary <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="salary"
                                value={form.salary}
                                onChange={handleChange}
                                placeholder="e.g. $3,000–$5,000"
                                required
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Location <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                placeholder="e.g. Remote, Lahore"
                                required
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
                            />
                        </div>
                    </div>

                    {/* Job Type */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Job Type <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="jobtype"
                            value={form.jobtype}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition bg-white cursor-pointer"
                        >
                            <option value="" disabled>Select job type</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>

                    {/* Requirements */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Requirements <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="requirements"
                            value={form.requirements}
                            onChange={handleChange}
                            placeholder="e.g. React, Node.js, MongoDB, REST APIs"
                            required
                            rows={3}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition resize-none"
                        />
                        <p className="text-xs text-gray-400 mt-1">
                            Separate each requirement with a comma
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => navigate("/admin/jobs")}
                            className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Posting..." : "Post Job"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default JobCreate;


