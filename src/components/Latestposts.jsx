import React, { useEffect } from 'react'
import Newscomponent from "./Newscomponent.jsx"
import axios from 'axios'
import { Secret_admin_posts_keys } from '../Constants/keys.js'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Setallposts } from '../redux/postslice.js'
export default function Latestposts() {
    const allposts = useSelector(store => store?.postsdata?.allposts)
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchAllposts() {
            const response = await axios.get(`${Secret_admin_posts_keys}/Allposts`, {
                withCredentials: true
            })

            dispatch(Setallposts(response?.data?.
                allPosts))
        }
        fetchAllposts()


    }, [])
    return (
        <div className='h-full w-[80%] mx-auto mt-14 mb-2'>

            <div className='text-4xl text-blue-300 flex justify-center'>
                <h4 className='text-4xl font-medium'>Company suggestion and posts</h4>
            </div>
            <div className='flex w-full justify-start pt-4'>
                <h5 className='text-3xl'>Latest news</h5>

            </div>
            <div className="newscontainer flex  mx-auto">

                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className='flex flex-col  w-[80%] justify-center items-center mt-14 gap-2'>
                    {
                        Array.isArray(allposts) && allposts.map((post) => {
                            return (
                                <Newscomponent key={post?._id} post={post} />
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}


