import React from 'react'
import Navbar from '../resuable/navbar'
import { Button } from '../ui/button'
import CompanyTabel from './CompanyTabel'
import { Link } from 'react-router-dom'

export default function Admincompany() {
    return (
        <div className='bg-blue-300 h-screen w-full'>
            <Navbar />

            <div className='flex items-start justify-around mt-14 '>
                <div className="filter">
                    <input className='w-64 h-9 bg-gray-400 text-black outline-none rounded-sm' type="filter" placeholder='Filter your companies' />
                </div>
                <div className="create">
                    <Link to={"/admin/companies/create"}>  <Button>
                        Create Conpany
                    </Button></Link>
                </div>
            </div>
            <div className="tabel w-full">
                <CompanyTabel />
            </div>
        </div>
    )
}
