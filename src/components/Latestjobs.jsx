import React, { useEffect } from 'react'
import Job from './Job'
import axios from 'axios'
import { Secret_api_key } from "../Constants/keys.js"
import { useDispatch, useSelector } from 'react-redux'
import { Setuservalue } from '../redux/Setuser.js'
import { setalljobs } from '../redux/Jobalice.js'


export default function Latestjobs() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get(`${Secret_api_key}/job/Alljobs`, {
        withCredentials: true
      })
      dispatch(setalljobs(response?.data))
    }

    fetchJobs()
  }, [])
  const Alljobs = useSelector(store => store.jobdata.Alljobs)
  const filterapply = useSelector(store => store?.filterdata?.scroller)



  const data = filterapply?.toLowerCase().replace(/\s/g, '')
  console.log("data", data)

  const filteredarray = Alljobs.filter(job => {
    const title = job?.title?.toLowerCase().replace(/\s/g, "");
    console.log("title", title)
    const value = title.includes(data);
    console.log(value)
    return value


  })
  console.log("Filteredjobs", filteredarray)
  // (filteredarray?.length > 0 ? filteredarray : Alljobs)
  // .slice(0, 4)
  return (
    <div className='h-auto w-full p-2 mt-22'>
      <div className='h-full w-[100%] flex flex-col items-start justify-between'>
        <div className='text-4xl flex justify-center h-full w-full mb-5'>
          <h2 className='text-[#0D1A63] font-medium tracking-wider'>Latest Job Openings</h2>
        </div>
        <div data-aos="fade-up-right" className='flex h-full w-[95%] p-2 mx-auto mr-9 md:mr-1  flex-wrap  justify-evenly gap-8'>
          {Alljobs.length > 0 ?(Array.isArray(Alljobs) &&
            (filteredarray.length > 0 ? filteredarray : Alljobs.slice(0, 4)).map(
              (job, i) => <Job key={job._id} job={job} />
            )
          ):(<span>NO jobs Avaliable</span>)
          }


        </div>
      </div>


    </div>
  )
}


