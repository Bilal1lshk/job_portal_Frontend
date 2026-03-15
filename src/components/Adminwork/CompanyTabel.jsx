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
import { Edit2 } from 'lucide-react'
import axios from 'axios'
import { Secret_admin_keys } from '../../Constants/keys'
import { useDispatch, useSelector } from 'react-redux'
import { setallcompany } from '../../redux/companyslice'


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
                            <TableHead className="text-right">Edit</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {
                            allcompany.map((company) => {
                                return (
                                    <TableRow key={company?._id}>
                                        <TableCell className="font-medium">..</TableCell>
                                        <TableCell>{company?.name}</TableCell>
                                        <TableCell>{company?.description}</TableCell>
                                        <TableCell className="text-right"><Edit2 /></TableCell>
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
