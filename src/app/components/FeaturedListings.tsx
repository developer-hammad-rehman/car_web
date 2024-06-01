import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Cards from './Cards'
import image1 from "../../../public/1.webp"
import image2 from "../../../public/2.webp"
import image3 from "../../../public/3.webp"
import image4 from "../../../public/4.webp"
import image5 from "../../../public/5.webp"
import image6 from "../../../public/6.webp"
import image7 from "../../../public/7.webp"
import image8 from "../../../public/8.webp"


export default function FeaturedListings() {
  return (
    <div className='w-full flex justify-center items-center flex-col gap-20'>
      <h4 className='text-center text-2xl sm:text-5xl font-bold font-serif text-gray-700'>Featured Listings</h4>
      <Tabs defaultValue="all-status" className="w-full flex justify-center items-center flex-col">
  <TabsList className='rounded-full p-4'>
    <TabsTrigger value="all-status" className='rounded-full'>All Status</TabsTrigger>
    <TabsTrigger value="new-cars" className='rounded-full'>New Cars</TabsTrigger>
    <TabsTrigger value="used-cars" className='rounded-full'>Used Cars</TabsTrigger>
  </TabsList>
  <TabsContent value="all-status" className='flex flex-wrap justify-center px-2 sm:px-4 gap-3 items-center'>
    <Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED'  title='Ferrari 488 Spider Base - 2019' image={image1} price={100} />
    <Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Bentley Bentayga V8 - 2023' image={image2} price={230} />
    <Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Land Rover Range HSE Westminster' image={image3} price={500} />
    <Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED' title='Audi A8 L 55 - 2021' image={image4} price={100} />
    <Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED' title='Audi A8 L 55 - 2021' image={image4} price={100} />
    <Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED' title='Audi A8 L 55 - 2021' image={image4} price={100} />
    </TabsContent>
  <TabsContent value="used-cars" className='flex flex-wrap justify-center px-2 sm:px-4 gap-3 items-center'>
    <Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED' title='Bentley Bentayga V8 - 2023' image={image6} price={230} />
  <Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Ferrari 488 Spider Base - 2019' image={image7} price={100} />
    <Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED' title='Audi A8 L 55 - 2021' image={image4} price={100} />
    <Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED' title='Land Rover Range HSE Westminster' image={image8} price={500} />
    <Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED' title='Ferrari 488 Spider Base - 2019' image={image1} price={500} />
    <Cards bgBadgeClass='bg-purple-500 text-white font-bold' badge='FEATURED' title='Bentley Bentayga V8 - 2023' image={image2} price={500} />
  </TabsContent>
  <TabsContent value="new-cars" className='flex flex-wrap justify-center px-2 sm:px-4 gap-3 items-center'>
    <Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Bentley Bentayga V8 - 2023' image={image6} price={230} />
  <Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Ferrari 488 Spider Base - 2019' image={image7} price={100} />
    <Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Audi A8 L 55 - 2021' image={image8} price={100} />
    <Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Land Rover Range HSE Westminster' image={image3} price={500} />
    <Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Land Rover Range HSE Westminster' image={image3} price={500} />
    <Cards bgBadgeClass='bg-red-500 text-white font-bold' badge='SPECIAL' title='Land Rover Range HSE Westminster' image={image3} price={500} />
  </TabsContent>
</Tabs>
    </div>
  )
}
