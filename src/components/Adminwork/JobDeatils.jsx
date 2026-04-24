import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function JobDeatils({ response }) {
    return (
        <div className='bg-blue-400 text-[#FFFFFF] w-[90%] md:w-[70%] min-h-[400px] max-h-full  mx-auto mt-3 p-4'>
            <div className='flex  flex-col md:flex-row justify-between'>
                <h1 className='text-2xl text-[#0A1628] font-medium p-1'>{response?.title}</h1>
                <div className='p-2  flex flex-col md:flex-row  gap-3'>
                    <Button>Edit jobs</Button>
                    <Button><Link to={`/admin/job/description/applications/${response?._id}`}>View Applicants</Link></Button>

                </div>

            </div>
            <div>
                {response?.description}
            </div>
            <div>
                {response?.location}
            </div>
            <div>
                {response?.jobtype}
            </div>
            <div>
                <p>Job posted By</p>  {response?.location}
            </div>
            <div>
                {response?.salaray}
            </div>
            <div>
                {response?.requirments}

            </div>
            <footer className='text-[#1E3A5F]'>
                All Rigths reserved
            </footer>


        </div>
    )
}


