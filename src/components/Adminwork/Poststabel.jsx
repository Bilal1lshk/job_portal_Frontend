import React, { useEffect, useEffectEvent } from 'react'
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
import { Delete, DeleteIcon, Edit2, LucideDelete } from 'lucide-react'
import axios, { all } from 'axios'
import { Secret_admin_posts_keys } from '../../Constants/keys.js'
import { useDispatch, useSelector } from 'react-redux'
import { SetAdminposts, Setallposts } from "../../redux/postslice.js"
import { Link } from 'react-router-dom'
import { toast } from 'sonner'


export default function PostsTabel() {
    const dispatch = useDispatch()
    useEffect(() => {
        const getallcompanydata = async () => {
            const allcompany = await axios.get(`${Secret_admin_posts_keys}/adminposts`,
                {
                    withCredentials: true
                }
            )
            return console.log(allcompany?.data?.userposts)
            toast.message(allcompany?.data?.message)
            dispatch(SetAdminposts(allcompany?.data?.userposts))
        }
        getallcompanydata()


    }, [])

    const allcompany = useSelector(store => store?.postsdata?.adminposts)
    console.log("Storedvalue",allcompany)
    return (
        <div className='h-auto w-full'>
            <div className='flex w-[80%] mx-auto mt-6 '>
                <Table>
                    <TableCaption>A list of your recent Posts Created.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Logo</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Desciption</TableHead>
                            <TableHead className="">Edit</TableHead>
                            <TableHead className="">Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {
                            allcompany?.map((company) => {
                                return (
                                    <TableRow key={company?._id}>
                                        <TableCell className="font-medium">..</TableCell>
                                        <TableCell>{company?.title}</TableCell>
                                        <TableCell>{company?.Description?.slice(0,40)}....</TableCell>
                                        <TableCell className=" mr-4"><Link to={`/admin/posts/update/${company._id}`}><Edit2 />                                        </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link to={`/admin/posts/delete/${company._id}`}><LucideDelete /></Link></TableCell>

                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>

                </Table>
            </div>

        </div>
    )
}


