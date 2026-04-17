import React, { useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import axios from 'axios';
import { Secret_admin_application_key } from '../Constants/keys';
import { useDispatch, useSelector } from 'react-redux';
import { allapplicationssatatus } from '../redux/Applicants';

export default function Aplicationstaus() {
    const dispatch = useDispatch()
    const statuses = useSelector(store => store?.applicant?.applicationsattus)
    console.log(status)
    useEffect(() => {
        async function applicationstatus() {
            const alldata = await axios.get(`${Secret_admin_application_key}/get`, {
                withCredentials: true
            })
            console.log(alldata)
            dispatch(allapplicationssatatus(alldata?.data?.appliedjobs))
        }
        applicationstatus()


    }, [])
    return (

        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date </TableHead>
                        <TableHead>JobRole</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        statuses.map((status) =>
                        (
                            <TableRow key={status?._id}>
                                <TableCell className="font-medium">{status?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="font-medium">{status?.job?.title}</TableCell>
                                <TableCell className="font-medium">{status?.status}</TableCell>


                            </TableRow >



                        )

                        )
                    }
                </TableBody>
            </Table>
        </div >
    )
}
