import React from 'react'
import Latestjobs from '../../components/Latestjobs'
import Navbar from '../../components/resuable/navbar'
import Newscomponent from '../../components/Newscomponent'
const data = [1, 23, 44, 5]
export default function Posts() {
  return (
    <div className='min-h-screen w-full  bg-[#99A1AF]'>
      <Navbar />
      <div className='flex w-[90%] mt-9 mx-auto gap-7'>
        {
          data.map((value) => (
            <Newscomponent />

          ))
        }

      </div>
    </div>
  )
}
