import React from 'react'
import Navbar from '../../components/resuable/navbar'
import Herosection from '../../components/Herosection'
import Scroller from '../../components/Carousel.jsx'
import Latestjobs from '../../components/Latestjobs.jsx'
import Latestposts from '../../components/Latestposts.jsx'
import Footer from '../../components/resuable/Footer.jsx'

export default function Home() {
    return (
        <div className='min-h-screen w-full  flex flex-col'>
            <Navbar />
            <Herosection />
            <Scroller />
            <Latestjobs />
            <Latestposts/>
            <Footer/>
        </div>
    )
}
