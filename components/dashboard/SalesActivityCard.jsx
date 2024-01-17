import { BadgeCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SalesActivityCard({activity,i}) {
  return (
    <Link href={activity.href} className="rounded-lg border transition-all duration-300 gap-2 flex items-center flex-col cursor-pointer bg-white border-slate-200 hover:border-blue-400 p-5 ">
    <h4 className={`font-semibold gap-3 text-3xl ${activity.color}`}>{activity.number}</h4>
    <small className='text-slate-500'>{activity.unity}</small>
    <div className="flex items-center">
        <BadgeCheck className='w-5 h-4'/>
        <span className='text-xs'>{activity.title}</span>
    </div>
</Link>
  )
}
