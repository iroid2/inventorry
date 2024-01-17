import Link from 'next/link'
import React from 'react'
import Collapsible from './CollapsibleLink'


export default function SubscriptionCard() {
  return (
    <div className='pt-5 px-3 text-xs'>
        <div className="bg-slate-950 px-3 border-b-2 py-2 border-b-slate-200 text-xs border-l-2 border-orange-600">
        <p className=''>Your Premium plan's trial expires in <span className='text-xs text-orange-700'>13 days.</span> </p>
        </div>        
        <button className='border-r-2  border-b-slate-100'><p className='text-xs mr-2 py-2'>Change Plan</p></button>
        <Link className=' py-3 px-2' href={''}>Upgrade</Link>
    </div>
  )
}
