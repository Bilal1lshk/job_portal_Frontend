import React, { useEffect, useState } from 'react'
import Navbar from '../resuable/navbar.jsx'
import JobDeatils from './JobDeatils.jsx'
import axios from 'axios'
import { Secret_admin_Jobs_keys } from '../../Constants/keys.js'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setaaplicantvalue } from '../../redux/Applicants'

export default function DetailAdminjob() {
  const params = useParams()
  const id = params.id
  const dispatch = useDispatch()
  const getjob = async () => {
    try {
      const response = await axios.get(`${Secret_admin_Jobs_keys}job/${id}`, {
        withCredentials: true
      })
      dispatch(setaaplicantvalue(response.data))
    } catch (error) {
    }
  }

  useEffect(() => {
    getjob()
  }, [id])
  const jobData = useSelector(store => store.applicant.applicantvalue)


  return (
    <>
      <Navbar />

      <div>
        <p className='text-3xl p-2 flex justify-center mt-10'>
          View job and Perform operations
        </p>

        {/* Pass data only when available */}
        <JobDeatils response={jobData} />
      </div>
    </>
  )
}