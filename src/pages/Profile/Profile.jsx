import React, { useState } from 'react'
import Navbar from '../../components/resuable/navbar'
import { CircleUser, Mail, Phone, PencilOff } from 'lucide-react';

import Aplicationstaus from '../../components/Aplicationstaus';
import Edittab from '../../components/resuable/Edittab';
import { useSelector } from 'react-redux';


export default function Profile() {
  const [open, setopen] = useState(false)
  const { user } = useSelector(store => store.setuser)
  return (
    <div className='min-h-screen  min-w-full bg-[#8EC5FF]'>
      <div className='w-full h-full '>
        <Navbar />
        <div className='flex justify-center mt-7 text-4xl'>

          <h4>Your Profile {user?.fullname}</h4>
        </div>
        <div className="intro min-h-[65%] mx-auto text-[#1C0770] font-medium  mt-14 w-[65%] shadow-sm bg-[#8EC5FF]">
          <div className="edit flex justify-end items-center p-3 ">
            <Edittab open={open} setopen={setopen} />
          </div>

          <div className='h-[90px] w-auto  rounded-sm flex justify-center p-4 '>
            <img className={" h-[110px] object-cover rounded-[6px] p-1"} src="https://www.bing.com/th/id/OIP.AQtvP5FcfiEMQpu14ueJCgHaGU?w=270&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />

          </div>
          <div className='text-xl flex flex-col gap-2 mt-10  pt-3 pl-3 space-x-4'>
            <div className='flex w-full items-center gap-2   '>
              <CircleUser color="#0B2D72" />
              <p> {user?.fullname}</p>
            </div>
            <div className='flex w-full items-center gap-2   '>
              <Phone />
              <p>{user?.Phonenumber}</p>
            </div>

            <div className='flex w-full items-center gap-2 '>
              <Mail />
              <p>{user?.email}</p>
            </div>
          </div>

          <div className='w-[50%] mx-auto'>
            <Aplicationstaus />
          </div>
        </div>
      </div>
    </div>
  )
}
