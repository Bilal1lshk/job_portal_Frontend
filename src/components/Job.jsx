import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Link } from 'react-router-dom'

export default function Job({ job, fullpage }) {
    return (
        <Link to={`/jobs/${job._id}`} className={`w-full sm:w-[48%]   lg:w-[41%] `}>
            <div
                data-aos="fade-up-right"
                className='
                    w-full h-full
                    m-4
                    bg-blue-100
                    border border-gray-200
                    hover:shadow-lg hover:border-blue-200
                    transition-all duration-200
                    rounded-2xl
                    p-2
                    flex flex-col gap-4
                    cursor-pointer
                '
            >
                {/* Company */}
                <div className='flex flex-col gap-1'>
                    <h1 className='text-base font-semibold text-gray-900 truncate'>
                        {job?.company?.name}
                    </h1>
                    <p className='text-xs text-gray-400 line-clamp-2'>
                        {job?.company?.description}
                    </p>
                </div>

                <div className='border-t border-gray-100' />

                {/* Job title + description */}
                <div className='flex flex-col gap-1'>
                    <h4 className='font-semibold text-gray-800 text-xl font-bold truncate'>
                        {job?.title}
                    </h4>
                    <p className='text-md text-gray-500 line-clamp-2'>
                        {job?.description?.slice(0, 80)}...
                    </p>
                </div>

                {/* Salary + type badges */}
                <div className='flex flex-wrap gap-2'>
                    <Badge className='bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium'>
                        💰 {job?.salary}
                    </Badge>
                    <Badge className='bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-medium'>
                        🕐 {job?.jobtype}
                    </Badge>
                </div>

                {/* Requirements */}
                {Array.isArray(job?.requirments) && job.requirments.length > 0 && (
                    <div className='flex flex-col gap-2'>
                        <p className='text-xs font-semibold uppercase tracking-widest text-gray-400'>
                            Requirements
                        </p>
                        <div className='flex flex-wrap gap-2'>
                            {job.requirments.map((req) => (
                                <Badge
                                    key={req}
                                    className='bg-gray-100 text-gray-600 border border-gray-200 rounded-full text-xs font-medium'
                                >
                                    {req}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Link>
    )
}