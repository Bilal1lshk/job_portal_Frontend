import React, { useState } from 'react'
import Navbar from '../resuable/navbar.jsx'
import axios from 'axios'
import { Secret_admin_keys, Secret_admin_posts_keys } from '../../Constants/keys.js'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
export default function AdminPostsCreate() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [input, setinput] = useState({
        title: '',
        Description: '',


    })
    const onchangeevent = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post(`${Secret_admin_posts_keys}/register`, input, {
                withCredentials: true
            })
            toast.success(response.data.message)
            if (response) {
                navigate('/admin/posts')
            }
        } catch (err) {
            toast.error(err.response?.data?.message || 'Something went wrong')
        } 
    }

    return (
        <div className='min-h-screen min-w-full bg-blue-300'>
            <Navbar />
            <div className='flex justify-center items-start'>
                <form onSubmit={submitHandler} className='flex flex-col pt-3 gap-5 max-w-[50%] w-full'>

                    {/* post Title */}
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>
                            Post Title <span className='text-red-500'>*</span>
                        </label>
                        <input
                            type='text'
                            name='title'
                            onChange={onchangeevent}
                            placeholder='Senior Frontend Developer issues'
                            required
                            className='border placeholder:text-gray-800 border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                        />
                    </div>

                    {/* Description */}
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>
                            Post Description <span className='text-red-500'>*</span>
                        </label>
                        <textarea
                            name='Description'
                            onChange={onchangeevent}
                            placeholder='Describe the role, responsibilities, and what you are looking for...'
                            required
                            rows={4}
                            className='border placeholder:text-gray-800 border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none'
                        />
                    </div>
                    {/* Buttons */}
                    <div className='flex gap-3 mt-2 mb-10'>
                        <button
                            type='button'
                            onClick={() => navigate(-1)}
                            className='flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition'
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            disabled={loading}
                            className='flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed'
                        >
                            {loading ? 'Posting...' : 'Post Job'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

