import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Menu, X } from 'lucide-react'
import { motion } from "motion/react"

export default function Navbar() {
    const { user } = useSelector((store) => store.Setuser)
    const [mobilenav, setmobilenav] = useState(false)


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate("/login")
    }
    const mobilenavclose = () => {
        setmobilenav(prev => !prev)

    }


    return (
        <motion.div
            animate={{ x: [-200, 0], opacity: [0.8, 1] }}
            transition={{ duration: 1, delay: 0.2 }}
            className='h-[100px] w-full bg-white px-3.5'>

            <div className={`min-h-screen w-[60%] ${mobilenav ? "" : "hidden"} z-40 flex  justify-end absolute -left-3  bg-blue-200`}>
                <div className='w-full h-full'>
                    <div className='flex  h-auto justify-end items-start min-w-[99%]    '>
                        <X onClick={mobilenavclose} className='text-3xl ' size={34} />
                    </div>
                    <div className="list list-none text-blue-400 flex mt-4 flex-col items-center justify-start gap-3 text-xl font-medium tracking-wide pr-4">


                        {

                            user?.role === "student" ?
                                (

                                    <>


                                        <Link to={"/posts"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Posts</Button></Link>

                                        <Link to={"/"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Home</Button></Link>
                                        <Link to={"/browse"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Browse</Button></Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to={"/admin/jobs"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Jobs</Button></Link>
                                        <Link to={"/admin/companies"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Company</Button></Link>
                                        <Link to={"/admin/posts"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Posts</Button></Link>

                                    </>
                                )
                        }
                        {!user ? (
                            <div className='h-full  flex items-center justify-center pr-10 gap-4'>
                                <Link to={"/login"}><Button className={"p-5"}>Login</Button></Link>
                                <Link to="/signup"><Button className={"p-5"}>Signup</Button></Link>
                            </div>
                        ) : (
                            <div className="avatar h-full flex  items-center">
                                <Popover>
                                    <PopoverTrigger>
                                        <Avatar className="h-full w-full">
                                            <AvatarImage className="w-[55px] object-cover" src={user?.profile?.profilephoto} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </PopoverTrigger>

                                    <PopoverContent>
                                        {/* ✅ PopoverHeader nahi, seedha div use karo */}
                                        <div className='mb-3'>
                                            <h2 className='text-2xl font-bold'>{user?.fullname}</h2>
                                            {
                                                user?.role === "student" ? (<h4 className='text-xl text-gray-500'>{user?.profile?.bio}</h4>) : (<br></br>)

                                            }
                                        </div>

                                        <div className='flex w-full justify-around mt-3'>
                                            {/* ✅ Logout function hai, Link nahi */}
                                            <Link to={"/logout"}>  <Button onClick={handleLogout}>Logout</Button></Link>
                                            {
                                                user?.role === "student" ? <Link to={"/profile"}><Button>View Profile</Button></Link> : <div><h1>is it going</h1></div>

                                            }
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div className='h-full flex justify-between'>
                <div className='rounded-md   h-full pt-1 pb-1'>
                    <Link to={"/"}><img className='object-cover h-full rounded-full' src="/Gemini_Generated_Image_4uja724uja724uja.png" alt="Logo" /></Link>
                </div>
                <div className='flex w-full m-2 md:hidden flex justify-end items-center '>
                    <Menu onClick={mobilenavclose} />
                </div>

                <div className="list list-none  hidden md:flex items-center justify-center gap-3 text-xl font-medium tracking-wide pr-4">


                    {

                        user?.role === "student" ?
                            (
                                <>
                                    <Link to={"/posts"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Posts</Button></Link>

                                    <Link to={"/"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Home</Button></Link>
                                    <Link to={"/browse"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Browse</Button></Link>
                                </>
                            ) : (
                                <>
                                    <Link to={"/admin/jobs"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Jobs</Button></Link>
                                    <Link to={"/admin/companies"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Company</Button></Link>
                                    <Link to={"/admin/posts"}><Button variant="link" className={'cursor-pointer text-2xl font-medium tracking-wide'}>Posts</Button></Link>

                                </>
                            )
                    }

                </div>

                {!user ? (
                    <div className='h-full  hidden md:flex items-center justify-center pr-10 gap-4'>
                        <Link to={"/login"}><Button className={"p-5"}>Login</Button></Link>
                        <Link to="/signup"><Button className={"p-5"}>Signup</Button></Link>
                    </div>
                ) : (
                    <div className="avatar h-full hidden md:flex  items-center">
                        <Popover>
                            <PopoverTrigger>
                                <Avatar className="h-full w-full">
                                    <AvatarImage className="w-[55px] object-cover" src={user?.profile?.profilephoto} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>

                            <PopoverContent>
                                {/* ✅ PopoverHeader nahi, seedha div use karo */}
                                <div className='mb-3'>
                                    <h2 className='text-2xl font-bold'>{user?.fullname}</h2>
                                    {
                                        user.role === "student" ? (<h4 className='text-xl text-gray-500'>{user?.profile?.bio}</h4>) : (<br></br>)

                                    }
                                </div>

                                <div className='flex w-full justify-around mt-3'>
                                    {/* ✅ Logout function hai, Link nahi */}
                                    <Link to={"/logout"}>  <Button onClick={handleLogout}>Logout</Button></Link>
                                    {
                                        user?.role === "student" ? <Link to={"/profile"}><Button>View Profile</Button></Link> : <div><h1>Admin</h1></div>
                                    }
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                )}
            </div>
        </motion.div >
    )
}

