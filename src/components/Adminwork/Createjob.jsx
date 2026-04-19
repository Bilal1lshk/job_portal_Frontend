import React, { useState } from 'react'
import Navbar from '../resuable/navbar.jsx'
import axios from 'axios'
import { Secret_admin_keys } from '../../Constants/keys.js'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export default function Createjob() {
    const navigate = useNavigate()
    const [input, setinput] = useState({
        name: '',
        description: '',
        website: '',
        location: '',
        logo: ''
    })
    const onchangeevent = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post(`${Secret_admin_keys}register`, input, {
            withCredentials: true
        })
        toast.message(response.data.message)
        if (response) {
            navigate('/admin/companies')
        }
    }
    let Formdata = false
    let loading = false
    return (

        <div className='min-h-screen min-w-full  bg-blue-300'>
            <Navbar />
            <div className='flex justify-center items-start'>
                <form onSubmit={submitHandler} className='flex flex-col pt-3 gap-5 max-w-[50%]  '>

                    {/* Company Name */}
                    <div className='flex flex-col gap-1 '>
                        <label className='text-sm font-medium text-gray-700'>
                            Company Name <span className='text-red-500'>*</span>
                        </label>
                        <input
                            type='text'
                            name='name'
                            onChange={onchangeevent}
                            placeholder='e.g. BilalWebWorks'
                            required
                            className='border placeholder:text-gray-800 border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                        />
                    </div>

                    {/* Description */}
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>
                            Description <span className='text-red-500'>*</span>
                        </label>
                        <textarea
                            name='description'
                            onChange={onchangeevent}

                            placeholder='What does your company do?'
                            required
                            rows={3}
                            className='border  placeholder:text-gray-800 border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none'
                        />
                    </div>

                    {/* Website + Location — side by side */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                        {/* Website */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium text-gray-700'>Website</label>
                            <input
                                type='url'
                                name='website'
                                onChange={onchangeevent}

                                placeholder='https://yoursite.com'
                                className='border  placeholder:text-gray-800 border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                            />
                        </div>

                        {/* Location */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium text-gray-700'>Location</label>
                            <input
                                type='text'
                                name='location'
                                onChange={onchangeevent}

                                placeholder='e.g. Gujranwala, Pakistan'
                                className='border  placeholder:text-gray-800 border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                            />
                        </div>

                    </div>

                    {/* Logo Upload */}
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>Company Logo</label>
                        <div className='border-2 border-dashed h-32 border-gray-300 rounded-lg py-6 text-center hover:border-blue-400 transition cursor-pointer'>
                            <input
                                type='file'
                                name='logo'
                                accept='image/*'
                                onChange={onchangeevent}

                                className='hidden'
                                id='logo-upload'
                            />
                            <label htmlFor='logo-upload' className='cursor-pointer'>
                                {Formdata.logo ? (
                                    <div className='flex flex-col items-center gap-2'>
                                        <img
                                            alt='preview'
                                            className='w-16 h-16 rounded-full object-cover border'
                                        />
                                        <p className='text-sm text-green-600 font-medium'></p>
                                        <p className='text-xs text-gray-400'>Click to change</p>
                                    </div>
                                ) : (
                                    <div className='flex flex-col items-center gap-1 text-gray-400'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                        </svg>
                                        <p className='text-sm'>Click to upload logo</p>
                                        <p className='text-xs'>PNG, JPG up to 5MB</p>
                                    </div>
                                )}
                            </label>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='flex gap-3 mt-2'>
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
                            {loading ? 'Creating...' : 'Create Company'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
