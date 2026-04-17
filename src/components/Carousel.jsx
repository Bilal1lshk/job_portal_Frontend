import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from './ui/button';
const categorys = [
    "Frontend Developer",
    "Backend developer",
    "Seo expert",
    "Devops engineer",
    "Ai engineer"
]

export default function Scroller() {
    return (
        <>
            <div className='w-full flex items-start mt-10 mb-12 p-2 justify-center'>
                <div className='mx-auto flex items-center justify-center'>            
                        <h3 className='text-3xl text-[#30364F] font-semibold  '> Provding you competative and realaible jobs</h3>
                </div>

            </div>

            <div className='w-full h-250px relative   overflow-visible p-1 m-1'>
                <Carousel className="relative h-full flex justify-around items-center w-full ">
                    <CarouselContent className="w-full m-2  ml-18 ">
                        {
                            categorys.map((category, index) => {
                                return (
                                    <CarouselItem key={category} className=" text-xl md:text-3xl basis-1/2 md:basis-1/3 ">
                                        <Button className='text-[#E1D9BC] bg-rounded-sm px-3 py-2 rounded-full  bg-[#30364F]'>{category}</Button>
                                    </CarouselItem>
                                )
                            })
                        }

                    </CarouselContent>
                    <CarouselPrevious className=" ml-17" />
                    <CarouselNext className="mr-24" />
                </Carousel>
            </div>

        </>
    )
}
