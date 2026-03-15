import React from 'react'
import heroimg from "/herosectionvideo.jpg"
export default function Herosection() {
  return (
    <div className='h-[600px] w-full p-4 flex gap-5  space-x-6 mt-12 overflow-hidden'>
      <div className='w-[50%] h-full pt-30 pl-6'>
        <div className='w-[80%] flex flex-col gap-6 '>
          <h1 className='text-3xl text-[#355872] font-bold'>Find Your Dream Job, <span className='text-[#1C0770]'>Faster</span></h1>
          <p className='text-black font-bold tracking-wide '>Connect with top companies hiring right now. Your next career move is just one click away.          </p>

          <p className='text-2xl text-[#275B8B]'>Achive your Dreams </p>
        </div>
      </div>
      <div className='w-[50%]'>
        <img className='rounded-sm object-cover' src={heroimg} alt="" />
      </div>
    </div>
  )
}
