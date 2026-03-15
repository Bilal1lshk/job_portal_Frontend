import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Link } from 'react-router-dom'
export default function Job({ job }) {
    return (
        <Link to={`/jobs/${job._id}`}>
        <div className='min-w-[30%] shadow-md rounded-sm py-4'>
            <div>
                <h1>{job?.company?.name}</h1>
                <p>{job?.company?.description}</p>
            </div>
            <div>
                <h4>{job?.title}</h4>
                <h5>{job?.description}</h5>
            </div>
            <div>
                <p>Job requirements:</p>
                <Badge variant="default" >
                    {job?.salary}

                </Badge>
                <Badge variant="default" >
                    {job?.jobtype}

                </Badge>
                {job?.requirments?.map((req) => (
                    <Badge key={req}variant="default" >
                        {req}
                    </Badge>


                ))

                }

            </div>


        </div>
        </Link>
    )
}
