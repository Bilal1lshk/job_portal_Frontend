import React from 'react'
import Navbar from '../../components/resuable/navbar.jsx'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Latestjobs from '../../components/Latestjobs.jsx'
import { useSelector } from 'react-redux'
import Job from '../../components/Job.jsx'

const filterData = [
    {
        fitlerType: "Location",
        value: 1,
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        value: 2,
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        value: 3,
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]
export default function Browse() {
    const Alljobs = useSelector(store => store.jobdata.Alljobs)

    return (
        <>
            <Navbar />
            <div className='w-[90%] h-full mx-auto flex justify-between'>


                <div className='w-[30%]'>
                    <p className='shadow-sm text-2xl bg-blue-300'>
                        Filter your Job
                    </p>
                    <div className='shadow-sm pt-5'>
                        {

                            filterData.map((item, index) => (
                                <RadioGroup keydefaultValue="comfortable" key={index} className="w-fit">

                                    <h1 className='text-2xl '>{item.fitlerType}</h1>
                                    {
                                        item.array.map((items) => (
                                            <div className='flex ' key={items}>
                                                <RadioGroupItem value={items} />
                                                <label htmlFor="r3">{items}</label>
                                            </div>
                                        ))
                                    }
                                </RadioGroup >

                            ))

                        }


                    </div>

                </div>
                <div className='w-[65%] h-full'>

                    <div className='flex justify-center text-3xl font-medium'>
                        <h1>All Avaliable Jobs</h1>
                    </div>
                        {
                            Alljobs?.map((job) => <Job key={job._id} job={job} />)
                        }
                </div>


            </div>

        </>
    )
}


