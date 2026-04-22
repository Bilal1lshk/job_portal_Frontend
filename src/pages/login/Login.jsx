import React, { useReducer, useState } from 'react'
import Labelandinput from '../../components/resuable/labelandinput.jsx'
import { Button } from '../../components/ui/button.jsx'
import { Secret_api_key } from "../../Constants/keys.js"
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { changeloading } from '../../redux/Loginslice.js'
import { useNavigate } from 'react-router-dom'
import { Setuservalue } from '../../redux/Setuser.js'
export default function Login() {
  const navigate = useNavigate()
  const loadingvalue = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch()
  const [input, setinput] = useState({
    email: "",
    password: "",
  })
  const changeeventhandeler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }
  const formsubmit = async (e) => {
    e.preventDefault()
    dispatch(changeloading(true))
    try {
      const response = await axios.post(`${Secret_api_key}/user/login`, input, {
        withCredentials: true  // ← Add this
      }); if (response.data.succes) {
        toast.success("you are loggend in")
      }
      else if (!response.data.succes) {
        toast.error("Something went wrong")
      }
      navigate("/")
      dispatch(Setuservalue(response.data.user))
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      dispatch(changeloading(false))

    }
  }
  return (
    <div className='h-screen w-full bg-[#97D2FB]'>
      <form onSubmit={formsubmit} className='flex flex-col items-center  gap-4'>
        <h1 className='text-4xl font-bold'>Login Your Account </h1>
        <Labelandinput input={input} change={changeeventhandeler} label={"email"} inputtext={"email"} />
        <Labelandinput input={input} change={changeeventhandeler} label={"password"} inputtext={"password"} />
        {
          loadingvalue ? <Button className={""}>loading...</Button> : <Button type="submit">Login</Button>}
      </form>
    </div>
  )
}


