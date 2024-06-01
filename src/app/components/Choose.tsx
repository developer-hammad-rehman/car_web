import { CarFront, ShieldCheck, Tag } from 'lucide-react'
import React from 'react'

interface Idata {
    title: string;
    des: string;
    icon: JSX.Element
    className:string
  }
const data  : Idata[] = [
    {
        title : "Best Price",
        des : "Trusted By ThousandsOur stress-free finance department that can find financial solutions to save you money.",
        icon  : <Tag size={50} className='text-red-500'/>,
        className:"bg-red-300 rounded-full p-7"
    },{
        title:"Trusted By Thousands",
        des:"Our stress-free finance department that can find financial solutions to save you money.",
        icon:<CarFront size={50} className='text-sky-300'/>,
        className:"bg-sky-200 rounded-full p-7"
    },{
        title:"Wide Range of Brands",
        des:"find financial solutions to save you money.",
        icon:<ShieldCheck size={50} className='text-green-400'/>,
        className:"bg-green-200 rounded-full p-7"
    }
]

export default function Choose() {
  return (
    <div className='pt-40 w-full'>
        <h1 className='text-4xl text-center text-gray-700 font-bold font-serif'>Why Choose Us?</h1>
        <div className='py-10 w-full flex justify-center items-center flex-wrap gap-4'>
            {
                data.map((val , i) => (
                    <div className='hover:bg-gray-50 flex w-96 h-96 gap-5 px-10 py-5 flex-col justify-center items-center'>
                        <div className={val.className}>
                          {val.icon}
                        </div>
                        <h4 className='text-2xl font-bold font-serif text-gray-700'>{val.title}</h4>
                        <p className='text-sm text-gray-700'>{val.des}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
