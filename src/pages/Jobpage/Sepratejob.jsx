import React, { useEffect, useState } from 'react'
import { MapPin, Clock, DollarSign, Briefcase, Building2, Users, ArrowLeft, BookmarkPlus, Send, CheckCircle2, Globe, Calendar, Star } from 'lucide-react'
import Navbar from '../../components/resuable/navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Secret_api_key } from '../../Constants/keys'
import axios from 'axios'
import { setajob } from '../../redux/Jobalice'
import { toast } from 'sonner'

export default function Sepratejob() {
    const [saved, setSaved] = useState(false)
    let prams = useParams()
    const pramsid = prams.id

    const [applied, setApplied] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector((store) => store.setuser)
    const userid = user?._id
    useEffect(() => {
        async function getsinglejob() {
            try {
                const response = await axios.get(`${Secret_api_key}/job/job/${pramsid}`)
                dispatch(setajob(response.data))
            } catch (err) {
                throw err
            }

        }
        getsinglejob()

    }, [pramsid])
    const data = useSelector(store => store.jobdata.Singlejob)
    const result = data?.application.some((application) => application?.applicant === userid) || false
    const jobid = data?._id
    async function checkappliedjob() {
        try {
            const response = await axios.get(
                `${Secret_api_key}/application/postjob/${jobid}`,
                { withCredentials: true }
            )
            toast.success(response.data.message)
        } catch (err) {
            toast.error(err.message)
        }
    }
    return (
        <div className="min-h-screen bg-[#F5F3EF] font-serif">

            {/* Navbar */}
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-12">

                {/* Header Card */}
                <div className="bg-white rounded-sm shadow-md border-l-4 border-[#0D1A63] px-12 py-10 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28"
                        style={{ background: 'linear-gradient(135deg, transparent 60%, #F5F3EF 60%)' }} />

                    <div className="flex gap-6 items-start">

                        {/* Logo */}
                        <div className="w-16 h-16 rounded-sm bg-[#0D1A63] flex items-center justify-center text-[#C9B99A] text-2xl font-bold font-sans shrink-0">
                            T
                        </div>

                        {/* Title & Meta */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="font-sans text-xs text-[#0D1A63] tracking-widest uppercase font-medium">{data?.company?.name}</span>
                                <span className="text-[#C9B99A]">·</span>
                                <span className="flex items-center gap-1 text-xs text-gray-400 font-sans">
                                    <Star size={12} fill="#C9B99A" color="#C9B99A" /> 4.5
                                </span>
                            </div>

                            <h1 className="text-3xl font-normal text-[#1a1a2e] mb-4 leading-tight tracking-tight">
                                {data?.title}
                            </h1>

                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: <MapPin size={14} />, text: data?.location },
                                    { icon: <Clock size={14} />, text: data?.jobtype },
                                    { icon: <DollarSign size={14} />, text: data?.salary },
                                    { icon: <Briefcase size={14} />, text: data?.requirements?.map((req) => (req)) },
                                    { icon: <Users size={14} />, text: data?.application?.length },
                                    { icon: <Calendar size={14} />, text: data?.company?.createdAt.split("T")[0] },
                                ].map((item, i) => (
                                    <span key={i} className="flex items-center gap-1.5 text-xs text-gray-500 font-sans">
                                        <span className="text-[#0D1A63]">{item.icon}</span>
                                        {item.text}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3 shrink-0">
                            <button
                                onClick={() => checkappliedjob()}
                                className={`flex items-center justify-center gap-2 px-7 py-3 rounded-sm text-xs tracking-widest uppercase font-sans text-white border-none cursor-pointer transition-all duration-200 min-w-36 ${applied ? 'bg-green-700' : 'bg-[#0D1A63]'}`}
                            >
                                {result ? <><CheckCircle2 size={14} /> Applied!</> : <><Send size={14} /> Apply Now</>}
                            </button>

                            <button
                                onClick={() => setSaved(!saved)}
                                className={`flex items-center justify-center gap-2 px-7 py-3 rounded-sm text-xs tracking-widest uppercase font-sans cursor-pointer transition-all duration-200 bg-transparent ${saved ? 'text-[#C9B99A] border border-[#C9B99A]' : 'text-[#0D1A63] border border-[#0D1A63]'}`}
                            >
                                <BookmarkPlus size={14} />
                                {saved ? 'Saved' : 'Save Job'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-3 gap-6">

                    {/* Left */}
                    <div className="col-span-2 flex flex-col gap-6">

                        {/* Description */}
                        <div className="bg-white rounded-sm shadow-md px-10 py-9">
                            <h2 className="text-xs tracking-widest uppercase text-[#C9B99A] font-sans font-semibold mb-4">About the Role</h2>
                            <p className="text-base leading-relaxed text-gray-500">
                                We're looking for a passionate Senior Frontend Developer to join our growing team.
                                You'll be responsible for building and maintaining high-quality web applications,
                                collaborating with designers and backend engineers to deliver exceptional user experiences.
                                You will lead technical decisions, mentor junior developers, and contribute to our
                                product roadmap with innovative ideas.
                            </p>
                        </div>

                        {/* Responsibilities */}
                        <div className="bg-white rounded-sm shadow-md px-10 py-9">
                            <h2 className="text-xs tracking-widest uppercase text-[#C9B99A] font-sans font-semibold mb-5">Responsibilities</h2>
                            <ul className="flex flex-col gap-3">
                                {[
                                    'Build and maintain scalable frontend applications using React and TypeScript',
                                    'Collaborate with UI/UX designers to implement pixel-perfect interfaces',
                                    'Write clean, testable, and well-documented code',
                                    'Mentor junior developers and conduct code reviews',
                                    'Optimize application performance and ensure cross-browser compatibility',
                                    'Participate in agile ceremonies and contribute to sprint planning',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-500 font-sans leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9B99A] mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills */}
                        <div className="bg-white rounded-sm shadow-md px-10 py-9">
                            <h2 className="text-xs tracking-widest uppercase text-[#C9B99A] font-sans font-semibold mb-5">Skills & Requirements</h2>
                            <div className="flex flex-wrap gap-2.5">
                                {['React', 'TypeScript', 'Node.js', 'GraphQL', 'CSS', 'Git', 'REST APIs', 'Jest'].map((req, i) => (
                                    <span key={i} className="bg-[#F5F3EF] border border-[#DDD8CE] text-[#0D1A63] px-4 py-2 rounded-sm text-xs tracking-wide font-sans font-medium">
                                        {req}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Sidebar */}
                    <div className="col-span-1 flex flex-col gap-6">

                        {/* Company Card */}
                        <div className="bg-[#0D1A63] rounded-sm shadow-lg px-7 py-8">
                            <h2 className="text-xs tracking-widest uppercase text-[#C9B99A] font-sans font-semibold mb-4">About the company</h2>
                            <h3 className="text-xl font-normal text-white mb-3">{data?.company?.name}</h3>
                            <p className="text-sm leading-relaxed text-white/60 font-sans font-light mb-6">
                                {data?.company?.description}
                            </p>
                            <div className="flex flex-col gap-3">
                                {[
                                    { icon: <Users size={14} />, text: '500-1000 employees' },
                                    { icon: <Globe size={14} />, text: 'techvision.com' },
                                    { icon: <Building2 size={14} />, text: 'Technology' },
                                    { icon: <MapPin size={14} />, text: 'San Francisco, CA' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5 text-xs text-white/70 font-sans">
                                        <span className="text-[#C9B99A]">{item.icon}</span>
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Job Overview */}
                        <div className="bg-white rounded-sm shadow-md px-7 py-7">
                            <h2 className="text-xs tracking-widest uppercase text-[#C9B99A] font-sans font-semibold mb-4">Job Overview</h2>
                            <div className="flex flex-col gap-4">
                                {[
                                    { label: 'Job Title', value: 'Sr. Frontend Dev' },
                                    { label: 'Job Type', value: 'Full-time' },
                                    { label: 'Salary', value: '$120k - $160k' },
                                    { label: 'Experience', value: '5+ Years' },
                                    { label: 'Deadline', value: 'Dec 31, 2025' },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-[#F5F3EF] pb-3 last:border-0 last:pb-0">
                                        <span className="text-xs text-gray-400 font-sans">{item.label}</span>
                                        <span className="text-xs text-[#0D1A63] font-sans font-medium">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Apply */}
                        <div className="bg-white rounded-sm shadow-md px-7 py-7 text-center">
                            <p className="text-xs text-gray-400 font-sans leading-relaxed mb-4">
                                Ready to take the next step in your career?
                            </p>
                            <button
                                onClick={() => setApplied(true)}
                                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-sm text-xs tracking-widest uppercase font-sans font-semibold cursor-pointer border-none transition-all duration-200 ${applied ? 'bg-green-700 text-white' : 'bg-[#C9B99A] text-[#0D1A63]'}`}
                            >
                                {applied ? <><CheckCircle2 size={14} /> Application Sent</> : <><Send size={14} /> Quick Apply</>}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}