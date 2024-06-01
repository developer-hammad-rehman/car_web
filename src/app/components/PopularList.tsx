import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image"
import image1 from "../../../public/1.webp"
import image2 from "../../../public/2.webp"
import image3 from "../../../public/3.webp"
import image4 from "../../../public/4.webp"
import image5 from "../../../public/5.webp"
import image6 from "../../../public/6.webp"
import image7 from "../../../public/7.webp"
import image8 from "../../../public/8.webp"
import Cards from './Cards'

export default function PopularList() {
  return (
    <div id='popularlist' className='w-full py-20'>
        <h3 className='text-center font-serif font-bold text-gray-200 text-3xl'>Popular Listings</h3>
<div className='flex w-full justify-center items-center py-7'>
<Carousel  className='w-4/5'>
    <CarouselPrevious />
  <CarouselContent className='flex gap-7'>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED'  title='Ferrari 488 Spider Base - 2019' image={image1} price={100} /></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Bentley Bentayga V8 - 2023' image={image2} price={230} /></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">    <Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Land Rover Range HSE Westminster' image={image3} price={500} /></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED'  title='Ferrari 488 Spider Base - 2019' image={image4} price={100} /></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED'  title='Ferrari 488 Spider Base - 2019' image={image5} price={100} /></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED'  title='Ferrari 488 Spider Base - 2019' image={image6} price={100} /></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED'  title='Ferrari 488 Spider Base - 2019' image={image7} price={100} /></CarouselItem>
  </CarouselContent>
      <CarouselNext />
</Carousel>

</div>


    </div>
  )
}
