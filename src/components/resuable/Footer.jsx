import React from 'react'

export default function Footer() {
    return (
        <div className='h-[110px] w-full bg-gray-300 p-2 flex'>
            <div className='w-[50%]'>
                <div className='rounded-md h-full w-full overflow-hidden pt-1 pb-1'>
                    <img className='object-cover h-[90px] rounded-sm' src="/Gemini_Generated_Image_4uja724uja724uja.png" alt="Logo" />
                </div>

            </div>
            <ul className='flex items-center pl-10 font-medium text-xl gap-5 '>
                <li>About Us</li>
                <li>Help </li>
                <li>Contact</li>
                <li>All Rigth reserverd</li>
                <li></li>
            </ul>
        </div>
    )
}
