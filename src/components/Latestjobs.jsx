import React, { useEffect } from 'react'
import Job from './Job'
import axios from 'axios'
import { Secret_api_key } from "../Constants/keys.js"
import { useDispatch, useSelector } from 'react-redux'
import { Setuservalue } from '../redux/Setuser.js'
import { setalljobs } from '../redux/Jobalice.js'

const randomnumer = [1, 2, 3, 4, 5, 6,]

export default function Latestjobs() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get(`${Secret_api_key}/job/Alljobs`)
      dispatch(setalljobs(response?.data))
    }

    fetchJobs()
  }, [])
  const Alljobs = useSelector(store => store.jobdata.Alljobs)
  return (
    <div className='h-auto w-full p-2 mt-22'>
      <div className='h-full w-[100%] flex flex-col items-start justify-between'>
        <div className='text-4xl flex justify-center h-full w-full mb-5'>
          <h2 className='text-[#0D1A63] font-medium tracking-wider'>Latest Job Openings</h2>
        </div>
        <div className='flex h-full w-[95%] p-2 mx-auto flex-wrap  justify-evenly gap-8'>
          {
            Alljobs ? Alljobs.slice(0, 4).map((job, i) => {
              return (
                <Job key={job._id} job={job} />
              )
            }) : <span>NO</span>
          }

        </div>
      </div>


    </div>
  )
}
