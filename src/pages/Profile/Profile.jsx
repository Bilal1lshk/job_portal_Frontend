import React, { useState, useEffect } from 'react'
import Navbar from '../../components/resuable/navbar.jsx'
import { CircleUser, Mail, Phone, PencilOff, SkullIcon, ChevronsLeftRightEllipsis } from 'lucide-react';

import Aplicationstaus from '../../components/Aplicationstaus.jsx';
import Edittab from '../../components/resuable/Edittab.jsx';
import { useSelector } from 'react-redux';
import { Button } from '../../components/ui/button.jsx';



export default function Profile() {
  const [open, setopen] = useState(false)
  const user = useSelector(store => store?.Setuser?.user)
  console.log('userfromprofile', user)
  console.log('Profile component re-rendered')

  useEffect(() => {
    console.log('User data changed in Profile:', user)
  }, [user])

  const skillsArray = user?.profile?.skills?.split(",")
  console.log('skillsArray:', skillsArray)


  return (
    <div className='min-h-screen  min-w-full bg-[#8EC5FF]'>
      <div className='w-full h-full '>
        <Navbar />
        <div className='flex justify-center mt-7 text-4xl'>

          <h4>Your Profile {user?.fullname}</h4>
        </div>
        <div className="intro min-h-[65%] max-h-[90%] mx-auto text-[#1C0770] font-medium  mt-14 md:w-[65%] w-[80%] p-2 shadow-sm bg-[#8EC5FF]">
          <div className="edit flex justify-end items-center p-3 ">
            <Edittab open={open} setopen={setopen} />
          </div>

          <div className='h-[90px] w-auto  rounded-sm flex justify-center p-4 '>
            <img className={" h-[110px] object-cover rounded-[6px] p-1"} src="https://www.bing.com/th/id/OIP.AQtvP5FcfiEMQpu14ueJCgHaGU?w=270&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />

          </div>
          <div className='text-xl flex flex-col gap-2 mt-10  pt-3 pl-3 space-x-4'>
            <div className='flex w-full md:flex-row flex-col items-center gap-2   '>
              <CircleUser color="#0B2D72" />
              <p> {user?.fullname}</p>
            </div>
            <div className='flex w-full md:flex-row flex-col items-center gap-2   '>
              <Phone />
              <p>{user?.Phonenumber}</p>
            </div>

            <div className='flex w-full md:flex-row flex-col items-center gap-2 '>
              <Mail />
              <p className='md:text-xl text-md'>{user?.email}</p>
            </div>
          </div>
          <div>
           {
            Array.isArray(skillsArray) && skillsArray.length > 0 ? (<div  className='flex md:flex-row flex-col  md:pl-3  pt-2  justify-center items-center md:jutify-between md:items-center md:gap-3.5'>
              <ChevronsLeftRightEllipsis />
              <div className='flex items-start md:gap-3.5 px-4'>
                {
                  skillsArray.map((skill,i) => (

                      <Button variant="ghost" className='text-xl' key={i}>{skill}</Button>
                  ))
                }
              </div>
            </div>):(<p className='text-red-100 text-2xl font semibold'>no skills avalaible</p>)
           } 
          </div>

          <div className='w-[50%] mx-auto'>
            <Aplicationstaus />
          </div>
        </div>
      </div>
    </div>
  )
}
