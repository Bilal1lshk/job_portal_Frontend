import React from 'react'

export default function Labelandinput({ label, inputtext, input, change }) {
    return (
        <div className='flex flex-col gap-1 w-full'>
            <label 
                htmlFor={label} 
                className='text-xs font-semibold uppercase tracking-widest text-white/70'
            >
                {label}
            </label>
            <input
                id={label}
                onChange={change}
                value={input[label]}
                name={label}
                type={inputtext}
                placeholder={`Enter your ${label}`}
                className='
                    w-full
                    h-11
                    px-4
                    rounded-xl
                    bg-white/20
                    border border-white/30
                    text-white
                    placeholder:text-white/40
                    outline-none
                    focus:border-white/60
                    focus:bg-white/30
                    transition
                    backdrop-blur-sm
                '
            />
        </div>
    )
}