import React from 'react'
import Labelandinput from '../../components/resuable/labelandinput'
import { Button } from '../../components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Secret_api_key } from "../../Constants/keys.js"
import axios from 'axios'
import { toast } from 'sonner'
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
        <>
            <div className='h-screen w-full bg-[#97D2FB]'>
                <form onSubmit={formsubmit} className='flex flex-col items-center  gap-4'>
                    <h1 className='text-4xl font-bold'>Signup Your Account </h1>
                    <div className='flex  w-full'><Labelandinput input={input} change={changeeventhandeler} label={"email"} inputtext={"email"} />
                        <Labelandinput input={input} change={changeeventhandeler} label={"fullname"} inputtext={"fullname"} /></div>

                    <Labelandinput input={input} change={changeeventhandeler} label={"Phonenumber"} inputtext={"Phonenumber"} />
                    <div className='bg-[#E1EFF6] rounded-md  mx-auto w-[30%] h-auto p-1'>
                        <div className='flex item-start justify-around h-[60px]'>
                            <label className='text-md uppercase flex  items-center gap-2'>
                                <input
                                    onChange={changeeventhandeler}
                                    type="radio"
                                    name='role'
                                    value='student'
                                />
                                Student
                            </label>

                            <label className='text-md uppercase flex items-center gap-2'>
                                <input
                                    onChange={changeeventhandeler}
                                    type="radio"
                                    name='role'
                                    value='recruiter'
                                />
                                Recruiter
                            </label>

                        </div>



                    </div>
                    <Labelandinput input={input} change={changeeventhandeler} label={"password"} inputtext={"password"} />

                    <div className='bg-[#E1EFF6] rounded-md  mx-auto w-[30%] h-auto p-1'>
                        <div className='flex flex-col h-[60px]'>
                            <input type="file" name="file" onChange={changefilehandeler} className=' bg-[#97D2FB] outline-hidden rounded-sm h-[30px]' /></div>



                    </div>
                    <p>
                        Already have an account
                    </p>
                    <Link to="/login"><p className='text-[#0000EE] -mt-3.5'>?Login</p></Link>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </>
    )
}
