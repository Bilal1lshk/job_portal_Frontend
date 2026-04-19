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
import axios from 'axios'
import { Secret_admin_keys } from '../../Constants/keys'
import { useDispatch, useSelector } from 'react-redux'
import { setallcompany } from '../../redux/companyslice'
import { Link } from 'react-router-dom'


export default function CompanyTabel() {
    const dispatch = useDispatch()
    useEffect(() => {
        const getallcompanydata = async () => {
         const allcompany = await axios.get(`${Secret_admin_keys}allcompany`,
                {
                    withCredentials: true
                }
            )   
            const Allcompany = dispatch(setallcompany(allcompany.data))
        }
        getallcompanydata()


    }, [])
    const allcompany = useSelector(store => store.company.Allcompany)
    return (
        <div className='h-auto w-full'>
            <div className='flex w-[80%] mx-auto mt-6 '>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Logo</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Desciption</TableHead>
                            <TableHead className="">Edit</TableHead>
                            <TableHead className="">Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {
                            Array.isArray(allcompany) && allcompany.map((company) => {
                                return (
                                    <TableRow key={company?._id}>
                                        <TableCell className="font-medium">..</TableCell>
                                        <TableCell>{company?.name}</TableCell>
                                        <TableCell>{company?.description}</TableCell>
                                        <TableCell className=" mr-4"><Link to={`/admin/companies/update/${company._id}`}><Edit2 />                                        </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link to={`/admin/company/delete/${company._id}`}><LucideDelete /></Link></TableCell>

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
