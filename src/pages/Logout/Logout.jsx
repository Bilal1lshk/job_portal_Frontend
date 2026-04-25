import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import axios from 'axios'
import { Secret_api_key } from '../../Constants/keys'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Setuservalue } from '../../redux/Setuser'

export default function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    dispatch(Setuservalue(false))
    const logoutfunction = async (e) => {
        try {
            const resposnse = await axios.get(`${Secret_api_key}/user/logout`, {
                withCredentials: true
            })
            if (resposnse.data.message && resposnse.data.succes) {
                toast.success(resposnse.data.message)
                navigate("/")
            }
        } catch (err) {
            toast.warning("logout failed")
        }

    }
    return (
        <div className={"bg-red-300  min-h-screen min-w-screen"}>
            <Dialog >
                <DialogTrigger className="text-xl md:text-4xl text-amber-300  h-full w-full ">
                    <div className=' flex items-center justify-center pt-[200px]  shadow-accent-foreground '><p className='bg-red-700 px-2 py-3 rounded-xl'>Logout Your account</p></div></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure you want to logout?</DialogTitle>
                        <DialogDescription>
                            You will be logged out of your account.
                            Any unsaved changes will be lost.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-3 mt-4">
                        <button className="px-4 py-2 rounded-md border hover:bg-gray-100">
                            Cancel
                        </button>
                        <button onClick={logoutfunction} className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">
                            Logout
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}


