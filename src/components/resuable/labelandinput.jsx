import React from 'react'

export default function Labelandinput({ label, inputtext, input, change }) {
    return (
        <>
            <div className='bg-[#E1EFF6] rounded-md  mx-auto w-[30%] h-auto p-1'>
                <div className='flex flex-col h-[60px]'>     <label className='text-md uppercase flex items-center mx-auto' htmlFor={label} typeof='text'>{label}</label>
                    <input onChange={change} value={input.inputtext} name={label} placeholder={` Enter your ${label}`} className=' bg-[#97D2FB] outline-hidden rounded-sm h-[30px]' type={input} /></div>



            </div>


        </>

    )
}
