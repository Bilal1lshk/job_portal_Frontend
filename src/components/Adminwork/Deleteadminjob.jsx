import React from 'react'
import Navbar from '../resuable/navbar.jsx'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Secret_admin_Jobs_keys} from '../../Constants/keys'
import { toast } from 'sonner'
export default function Deleteadminjob() {
    const navigate=useNavigate()
    const params = useParams()
    const handlesubmit = async () => {
        const id = params.id
        const response = await axios.get(`${Secret_admin_Jobs_keys}deletejob/${id}`, {
            withCredentials: true
        })
        if (!response) {
            return toast.message("Cannot create a message")
        }
        toast.success(response.data.message)
        navigate("/admin/jobs")

    }
    return (
        <>
            <Navbar />
            <div className='h-full flex flex-col w-full item-center mt-14'>
                <div className='mx-auto'>
                    <h3 className='text-4xl  '>Are you sure you wanna delete Your post?</h3>
                </div>
                <div className='flex justify-center mt-8 gap-3'>
                    <Button variant="outline">Cancel</Button>

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">Delete it</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your Job
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handlesubmit}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>

        </>

    )
}
