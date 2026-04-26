import React from 'react'
import { Link } from 'react-router-dom'

export default function Newscomponent({ post }) {
    const postid = post?._id

    return (
        <Link to={`/posts/${postid}`} className='w-full sm:w-[48%] lg:w-[71%]'>
            <div className='
                w-full md:w-[78%] h-[170px]
                bg-gray-800
                hover:bg-gray-700
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-200
                rounded-2xl
                p-5
                flex flex-col gap-3
                cursor-pointer
            '>
                {/* Source */}
                <p className='text-xs text-gray-400 uppercase tracking-widest font-semibold'>
                    📰 News · Unknown
                </p>

                {/* Title */}
                <h2 className='text-sm sm:text-base font-semibold text-white line-clamp-2 leading-snug'>
                    {post?.title}
                </h2>

                {/* Description */}
                <p className='text-xs text-gray-400 line-clamp-3 leading-relaxed'>
                    {post?.Description}
                </p>

                {/* Read more */}
                <p className='text-xs text-blue-400 font-medium mt-auto'>
                    Read more →
                </p>
            </div>
        </Link>
    )
}