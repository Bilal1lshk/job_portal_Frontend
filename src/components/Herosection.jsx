import React from 'react'
import heroimg from "/herosectionvideo.jpg"
import { motion } from 'motion/react'
export default function Herosection() {
  return (
    <div className='max-h-auto  md:min-h-150 w-full p-4 bg-blue-200 flex flex-col md:flex-row  gap-5  space-x-6 mt-12 overflow-hidden'>
      <div className='w-full md:w-[50%] h-full md:pt-30 pl-6' >
        <motion.div
          animate={{opacity: [0,0.6, 1] }}
          transition={{ duration: 1.2, delay: 1.2, ease:"linear" }}
          className='w-[80%] flex flex-col gap-6 '>
          <h1 className='text-3xl text-[#355872] font-bold '>Find Your Dream Job, <span className='text-[#1C0770]'>Faster</span></h1>
          <p className='text-black font-bold tracking-wide '>Connect with top companies hiring right now. Your next career move is just one click away.          </p>

          <p className='text-2xl text-[#275B8B]'>Achive your Dreams </p>
        </motion.div>
      </div>
      <motion.div className='w-full md:w-[50%]'
        animate={{ x: [200, 0], rotate: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeIn" }}
        whileInView={{ scale: 1.05 }}
      >
        <img className='rounded-sm object-cover' src={heroimg} alt="" />
      </motion.div>
    </div>
  )
}
