import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function Aplicationstaus() {
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date </TableHead>
                        <TableHead>JobRole</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        [1, 2, 3, 4].map((i) =>
                        (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">11-12-25</TableCell>
                                    <TableCell className="font-medium">Full stack engineer</TableCell>
                                    <TableCell className="font-medium">Meta</TableCell>
                                    <TableCell className="font-medium">Pending</TableCell>


                                </TableRow >



                        )

                        )
                    }
                </TableBody>
            </Table>
        </div >
    )
}
