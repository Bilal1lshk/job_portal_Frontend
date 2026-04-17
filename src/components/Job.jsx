import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Link } from 'react-router-dom'
export default function Job({ job }) {
    return (
        <Link to={`/jobs/${job._id}`}>
            <div className='min-w-[30%]  shadow-md rounded-sm py-4 px-2 '>
                <div>
                    <h1>{job?.company?.name}</h1>
                    <p>{job?.company?.description}</p>
                </div>
                <div>
                    <h4>{job?.title}</h4>
                    <h5>{job?.description.slice(0, 50)}</h5>
                </div>
                <div>
                    <p>Job requirements:</p>
                    <div className='flex flex-wrap gap-3 mt-4'>
                        <Badge variant="default" >
                            {job?.salary}

                        </Badge>
                        <Badge variant="default" >
                            {job?.jobtype}

                        </Badge>
                        <div className='flex w-full flex-wrap'>
                            {job?.requirments.map((req, i) => (
                                <Badge key={req} className="" variant="default" >
                                    {req}
                                </Badge>
                            ))
                            }
                        </div>
                    </div>


                </div>


            </div>
        </Link>
    )
}
