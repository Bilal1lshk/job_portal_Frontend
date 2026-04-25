import React from 'react'
import Labelandinput from '../../components/resuable/labelandinput.jsx'
import { Button } from '../../components/ui/button.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Secret_api_key } from "../../Constants/keys.js"
import axios from 'axios'
import { toast } from 'sonner'
import image from "../../../public/Login.png"
export default function Signup() {
    const navigate = useNavigate()
    const [input, setinput] = useState({
        fullname: "",
        email: "",
        Phonenumber: "",
        role: "",
        password: "",
        file: ""
    })
    const changeeventhandeler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
    }
    const changefilehandeler = (e) => {
        setinput({ ...input, file: e.target.files[0] });
    }
    const formsubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData();
        formdata.append("fullname", input.fullname);
        formdata.append("email", input.email)
        formdata.append("Phonenumber", input.Phonenumber);
        formdata.append("password", input.password);
        formdata.append("role", input.role);
        if (input.file) {
            formdata.append("file", input.file)
        }
        try {
            const res = await axios.post(`${Secret_api_key}/user/register`, formdata, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            })

            if (res.data && res.data.succes) {
                navigate("/login")
            }
            toast.message(res.data.message);

        }
        catch (err) {
            toast.error(err.message)
        }

    }
   return (
    <div className='min-h-screen w-full relative overflow-hidden'>
        {/* Background image */}
        <img
            src={image}
            className="h-full w-full object-fit absolute inset-0"
            alt=""
        />

        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/40' />

        {/* Centered card */}
        <div className='absolute inset-0 flex items-center justify-center px-1  py-10'>
            <form
                onSubmit={formsubmit}
                className='
                    backdrop-blur-md
                    bg-white/20
                    border border-white/30
                    rounded-2xl
                    p-8
                    flex flex-col
                    gap-3
                    w-full max-w-lg
                    shadow-2xl
                '
            >
                {/* Title */}
                <div className='text-center mb-2'>
                    <h1 className='text-3xl font-bold text-white'>Create Account</h1>
                    <p className='text-white/60 text-sm mt-1'>Sign up to get started</p>
                </div>

                {/* Email + Fullname row */}
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Labelandinput input={input} change={changeeventhandeler} label={"email"} inputtext={"email"} />
                    <Labelandinput input={input} change={changeeventhandeler} label={"fullname"} inputtext={"text"} />
                </div>

                {/* Phone */}
                <Labelandinput input={input} change={changeeventhandeler} label={"Phonenumber"} inputtext={"text"} />

                {/* Password */}
                <Labelandinput input={input} change={changeeventhandeler} label={"password"} inputtext={"password"} />

                {/* Role */}
                <div className='flex flex-col gap-2'>
                    <label className='text-xs font-semibold uppercase tracking-widest text-white/70'>
                        Role
                    </label>
                    <div className='flex gap-6'>
                        <label className='flex items-center gap-2 text-white text-sm cursor-pointer'>
                            <input
                                onChange={changeeventhandeler}
                                type="radio"
                                name='role'
                                value='student'
                                className='accent-white w-4 h-4'
                            />
                            Student
                        </label>
                        <label className='flex items-center gap-2 text-white text-sm cursor-pointer'>
                            <input
                                onChange={changeeventhandeler}
                                type="radio"
                                name='role'
                                value='recruiter'
                                className='accent-white w-4 h-4'
                            />
                            Recruiter
                        </label>
                    </div>
                </div>

                {/* Profile photo */}
                <div className='flex flex-col gap-2'>
                    <label className='text-xs font-semibold uppercase tracking-widest text-white/70'>
                        Profile Photo
                    </label>
                    <input
                        type="file"
                        name="file"
                        accept="image/*"
                        onChange={changefilehandeler}
                        className='
                            text-sm text-white/70
                            file:mr-3 file:py-2 file:px-4
                            file:rounded-xl file:border-0
                            file:text-sm file:font-medium
                            file:bg-white/20 file:text-white
                            file:cursor-pointer
                            hover:file:bg-white/30
                            cursor-pointer
                        '
                    />
                </div>

                {/* Submit */}
                <Button type="submit" className='w-full mt-2'>
                    Create Account
                </Button>

                {/* Login link */}
                <p className='text-center text-white/60 text-sm'>
                    Already have an account?{' '}
                    <Link to="/login" className='text-white font-semibold hover:underline'>
                        Login
                    </Link>
                </p>
            </form>
        </div>
    </div>
)
}


