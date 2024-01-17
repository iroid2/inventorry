import { Shirt } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function OptionCard({optionData}) {
    const {title,description,link,linkTitle,enable,Icon:icon}= optionData;
    console.log(optionData)
  return (
    <div className="shadow flex m-4 flex-col px-16 py-4 items-center gap-2  bg-white">
                    <h2>{title}</h2>
                    <div className="">
                        <Shirt className="w-36 h-36" strokeWidth='.5px' />
                    </div>
                    <p>{description}</p>
                    {
                        enable?(<button className='flex items-center text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '>Enable</button>):(<Link href={link} className=' items-center inline-flex text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '>{linkTitle}</Link>)
                    }
                    
                    
                </div>
  )
}
