import React from 'react'
import Navbar from '../resuable/navbar.jsx'
import Jobtabel from './Jobtabel.jsx'
import { Button } from '../ui/button.jsx'
import { Link } from 'react-router-dom'

export default function JobHome() {
    return (
        <>
            <Navbar />
            <div className='h-screen w-full '>
                <div className='text-4xl flex justify-center items-center pt-8'>

                    <h2>Recent Jobs Posted By You</h2>
                </div>
                <div className='my-5 min-w-[80%] flex justify-end mx-auto pr-8 '>
                    <Button >
                        <Link to={"/admin/jobs/create"}> Create Job
                        </Link>
                    </Button>
                </div>
                <div className='max-w-[80%]  mx-auto'>
                    <Jobtabel />

                </div>

            </div>
        </>
    )
}
