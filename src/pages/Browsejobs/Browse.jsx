import React from 'react'
import Navbar from '../../components/resuable/navbar'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Latestjobs from '../../components/Latestjobs'

const filterData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]
export default function Browse() {
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
                                <RadioGroup keydefaultValue="comfortable" className="w-fit">

                                    <h1 className='text-2xl '>{item.fitlerType}</h1>
                                    {
                                        item.array.map((items, i) => (
                                            <div className='flex '>
                                                <RadioGroupItem key={i} value={items} />
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

                    <div className='-mt-13'>
                        <Latestjobs />
                    </div>

                </div>


            </div>

        </>
    )
}
