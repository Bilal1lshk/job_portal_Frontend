import React, { useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setadminjobs } from '../../redux/Jobalice.js'
import { BookUserIcon, Delete } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Secret_admin_Jobs_keys } from '../../Constants/keys'
import { toast } from 'sonner'

export default function Jobtabel() {
    const dispatch = useDispatch()
    useEffect(() => {
        try {


            const gettingadminjobs = async () => {
                const response = await axios.get(`${Secret_admin_Jobs_keys}adminposts`, {
                    withCredentials: true
                })
                dispatch(setadminjobs(response?.data?.adminposts))

            }
            gettingadminjobs()
        } catch (err) {
            toast.error(err.message)
        }
    }, [])
    const alladminjobs = useSelector(store => store.jobdata.adminjobs)
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>


                    <TableHead className="w-[100px]">Title</TableHead>
                    <TableHead >Description</TableHead>
                    <TableHead >Applied By</TableHead>
                    <TableHead className="text-right">Details</TableHead>
                    <TableHead className="text-right">Delete Job</TableHead>



                </TableRow>
            </TableHeader>
            <TableBody>

                {
                    alladminjobs?.map((res) => {
                        const id = res._id
                        return (
                            <>
                                <TableRow key={id} >


                                    <TableCell className="font-medium">{res.title}</TableCell>
                                    <TableCell>{res.description.slice(0, 29)}...</TableCell>
                                    <TableCell>abcd</TableCell>
                                    <TableCell className="w-full flex text-left"><div className='w-full flex justify-end '>              <Link to={`/admin/job/description/${id}`}><BookUserIcon /></Link>
                                    </div>
                                    </TableCell>
                                    <TableHead className=""><div className='w-full flex justify-end '>
                                        <Link to={`/admin/job/delete/${id}`}><Delete /></Link></div></TableHead>

                                </TableRow>

                            </>

                        )
                    })
                }
            </TableBody>

        </Table>
    )
}