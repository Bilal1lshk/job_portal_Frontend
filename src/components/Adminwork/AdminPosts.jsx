import React from 'react'
import Navbar from '../resuable/navbar.jsx'
import { Button } from '../ui/button.jsx'
import CompanyTabel from './CompanyTabel.jsx'
import { Link } from 'react-router-dom'
import PostsTabel from './Poststabel'

export default function AdminPosts() {
    return (
        <div className='bg-blue-300 min-h-screen w-full'>
            <Navbar />

            <div className='flex flex-col md:flex-row p-2  gap-2.5 items-start justify-around mt-14 '>
                <div className="filter">
                    <input className='w-64 h-9 bg-gray-400 text-black outline-none rounded-sm' type="filter" placeholder='Filter your Posts' />
                </div>
                <div className="create">
                    <Link to={"/admin/posts/create"}>  <Button>
                        Create Post
                    </Button></Link>
                </div>
            </div>
            <div className="tabel w-full">
                <PostsTabel />
            </div>
        </div>
    )
}


