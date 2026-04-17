import React, { useEffect } from 'react'
import Latestjobs from '../../components/Latestjobs'
import Navbar from '../../components/resuable/navbar'
import Newscomponent from '../../components/Newscomponent'
import { Secret_admin_posts_keys } from '../../Constants/keys'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
export default function Posts() {
  
  const data = useSelector(store=>store?.postsdata?.allposts)
  return (
    <div className='min-h-screen w-full  bg-[#99A1AF]'>
      <Navbar />
      <div className='flex w-[90%] mt-9 mx-auto gap-7'>
        {
          data.map((post, i) => (
            <div key={i}>
              <Newscomponent  post={post}/>
            </div>

          ))
        }

      </div>
    </div>
  )
}
