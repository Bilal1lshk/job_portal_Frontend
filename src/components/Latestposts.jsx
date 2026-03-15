import React from 'react'
import Newscomponent from "./Newscomponent.jsx"
export default function Latestposts() {
    return (
        <div className='h-full w-[80%] mx-auto mt-14'>

            <div className='text-4xl text-blue-300 flex justify-center'>
                <h4 className='text-4xl font-medium'>Company suggestion and posts</h4>
            </div>
            <div className='flex w-full justify-start pt-4'>
                <h5 className='text-3xl'>Latest news</h5>

            </div>
            <div className="newscontainer">

                <div className='flex justify-around mt-14 gap-2'>
                    <Newscomponent />
                    <Newscomponent />

                </div>

            </div>
        </div>
    )
}
