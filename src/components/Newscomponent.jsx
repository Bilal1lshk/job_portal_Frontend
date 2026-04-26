import React from 'react'
import { Link } from 'react-router-dom'

export default function Newscomponent({ post}) {
    const postid=post?._id
    return (
        <div className="min-w-full  flex flex-wrap mx-auto">
            <Link to={`/posts/${postid}`}>
                
                <div className="h-[150px] w-[500px] rounded-xl shadow-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-4 text-white flex flex-col justify-between">

                    {/* Header */}
                    <div className="text-xs sm:text-sm text-gray-300 mb-2">
                        News From unknown
                    </div>

                    {/* Title */}
                    <div className="text-base sm:text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                        {post?.title}...
                    </div>

                    {/* Description */}
                    <div className="text-sm sm:text-base text-gray-200">
                        {post?.Description?.slice(0, 100)}...
                    </div>

                </div>

            </Link>
        </div>
    )
}

