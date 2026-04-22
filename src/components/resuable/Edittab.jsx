import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import React, { useEffect, useState } from "react"
import { PencilOff } from "lucide-react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { Secret_api_key } from "../../Constants/keys";
import { Setuservalue } from "../../redux/Setuser";
import { Button } from "../ui/button";

export default function Edittab() {
    const user = useSelector(store => store.Setuser.user);
    const [input, setinput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        Phonenumber: user?.Phonenumber || "",
        skills: user?.profile?.skills || "",

    })
    const [isLoading, setisLoading] = useState(false)
    const [open, setopen] = useState(false)
    const dispatch = useDispatch()

    // Sync input when user data changes
    useEffect(() => {
        setinput({
            fullname: user?.fullname || "",
            email: user?.email || "",
            Phonenumber: user?.Phonenumber || "",
            skills: user?.profile?.skills || "",
        })
    }, [user])

    function onvaluechange(e) {
        setinput({ ...input, [e.target.name]: e.target.value })

    }
    const onformsubmit = async (e) => {
        e.preventDefault()
        setisLoading(true)
        try {
            const response = await axios.post(`${Secret_api_key}/user/profile/update`, input, {
                withCredentials: true,
            })
            const dispatced = dispatch(Setuservalue(response.data.user))

            setopen(false) // Close dialog after successful update
        } catch (error) {
            console.error("Error updating profile:", error)
        } finally {
            setisLoading(false)
        }
    }
    return (
        <Dialog open={open} onOpenChange={setopen}>
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
                                    value={input.fullname}
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
                                    name="Phonenumber"
                                    value={input.Phonenumber}
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
                                    value={input.email}
                                    onChange={onvaluechange}
                                    className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">
                                    Enter your Skills
                                </label>
                                <input
                                    placeholder="Skill,Skill,Skill"
                                    name="skills"
                                    value={input?.skills}
                                    onChange={onvaluechange}
                                    className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                onClick={() => setopen(false)}
                                className="mt-3 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
                            >
                                {isLoading ? "Saving..." : "Save Changes"}
                            </button>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>

                        </form>
                    </DialogDescription>
                </DialogHeader>

            </DialogContent>
        </Dialog>
    )
}

