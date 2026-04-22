import React, { useEffect } from 'react'
import Navbar from '../resuable/navbar.jsx'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Secret_admin_keys } from '../../Constants/keys.js'
import { useDispatch, useSelector } from 'react-redux'
import { setsinglecompany } from '../../redux/companyslice'
import { Button } from '../ui/button'
import { toast } from 'sonner'

export default function AdmincompanyDelete() {
    const naviagte = useNavigate()

    const useprams = useParams()
    const id = useprams.id
    const dispatch = useDispatch()
    useEffect(() => {
        const company = async () => {
            const singledata = await axios.get(`${Secret_admin_keys}getcompany/${id}`, {
                withCredentials: true
            })
            dispatch(setsinglecompany(singledata?.data))
        }
        company()

    }, [id])
    const singlecompany = useSelector((store) => store?.company?.singelcompany)
    const deleteit = async () => {
        try {
            const deleteddata = await axios.get(`${Secret_admin_keys}delete/${id}`, {
                withCredentials: true
            })

            if (deleteddata) {
                toast.message(deleteddata.data.message)
                naviagte("/admin/companies")
            }
        } catch (err) {
            toast.message(err?.data?.message)
            naviagte("/admin/companies")

        }
    }
    return (
        <>
            <Navbar />

            <div className='min-h-screen w-full bg-red-50 text-black pt-52'>
                <div className='text-3xl mx-auto flex justify-center items-center mt-4'>
                    Are you sure you wanna delete {singlecompany?.name}
                </div>
                <div className='flex justify-center items-center gap-4 mt-6'>
                    <Button onClick={deleteit}>Yes "delete it"</Button>
                    <Button onClick={() => naviagte("/admin/companies")}>NO "Cancel it"</Button>

                </div>
            </div>
        </>
    )
}


