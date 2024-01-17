import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CollapsibleLink({title,href}) {
  return (
    <Link  href={href} className ='py-2 hover:bg-slate-900 transition-all duration-300 rounded-md flex justify-between px-5 text-sm'>
      {title} <Plus className='bg-white rounded-lg text-blue-600 w-4  h-4'/></Link>
  )
}
