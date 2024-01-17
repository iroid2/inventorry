"use client"
import { CreditCard, X } from 'lucide-react'
import React, { useState } from 'react'

export default function DashboardBanner() {
    const [hidden,setHidden]= useState(false);
  return (
    <div className={`${hidden?"hidden":"flex  py-6 px-8 relative items-center gap-4 bg-white"}`}>
        <CreditCard className='w-16 h-16'/>
        <div className="mr-6 ">
            <h2 className='font-bold'>Start accepting Online payments</h2>
            <p className='text-sm'>Businesses are moving towards online payments as they aew eassy, secure and fasr.try them for you business today.</p>
        </div>
        <button className='py-1.2 mr-5 px-4 text-white uppercase rounded-lg bg-blue-700'>Enable</button>
        {/* close btn} */}
        <X onClick={()=>setHidden(true)} className='absolute top-2 right-2'/>
    </div>
  )
}
