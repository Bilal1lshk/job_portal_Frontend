import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import React, { useEffect, useState } from "react"
import { PencilOff } from "lucide-react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";

export default function Edittab() {
    const { user } = useSelector(store => store.setuser);

    const [input, setinput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        Phonenumber: user?.Phonenumber || "",
    })
    useDispatch()

    function onvaluechange(e) {
        setinput({ ...input, [e.target.name]: e.target.value })
    }
    const onformsubmit = (e) => {
        e.preventDefault()

    }

    return (
        <Dialog>
            <DialogTrigger className="p-2 rounded-full hover:bg-gray-200 transition">
                <PencilOff size={18} />
            </DialogTrigger>

            <DialogContent className="sm:max-w-[420px] rounded-xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-center">
                        Your Profile
                    </DialogTitle>

                    <DialogDescription asChild>
                        <form onSubmit={onformsubmit} className="flex flex-col gap-4 mt-4">

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">
                                    Enter your Name
                                </label>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={user.fullname}
                                    onChange={onvaluechange}
                                    placeholder="Your Name"
                                    className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">
                                    Enter your Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="03XX XXXXXXX"
                                    name="phonenumber"
                                    value={user.Phonenumber}
                                    onChange={onvaluechange}


                                    className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">
                                    Enter your Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    name="email"
                                    value={user.email}

                                    onChange={onvaluechange}


                                    className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-3 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Save Changes
                            </button>

                        </form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}