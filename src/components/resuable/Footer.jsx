import React from 'react'

export default function Footer() {
    return (
        <div className='md:h-27.5 h-[200px] w-full bg-gray-300 p-2 flex flex-col md:flex-row mt-2'>
            <div className='w-[50%]'>
                <div className='rounded-md h-full w-full  overflow-hidden pt-1 pb-1'>
                    <img className=' object-cover h-[90px] rounded-sm' src="/Gemini_Generated_Image_4uja724uja724uja.png" alt="Logo" />
                </div>

            </div>
            <ul className='flex items-center  p-2 md:pl-10 font-medium text-[14px] mx-auto md:text-xl gap-5 '>
                <li>About Us</li>
                <li>Help </li>
                <li>Contact</li>
                <li>All Rigth reserverd</li>
            </ul>
        </div>
    )
}


