import { HelpCircle, Layout, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FixedHeader({newLink}) {
  return (
    <div className='flex justify-between items-center py-6 px-4 bg-white'>
      <button>All items</button>
      <div className="flex gap-4">
        <Link href={newLink}><button className='flex items-center text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '><Plus className="flex   w-4 h-4 rounded-lg"/>NEW</button></Link>
      <div className="flex border-1 border-gray-800">
      <button className='bg-gray-300 border-r  border-gray-300  rounded-l-sm p-2 text-xs'><List className='w-4 h-4'/></button>
      <button className='bg-gray-100  p-2 rounded-r-sm text-xs'><LayoutGrid className='w-4 h-4'/></button>
      </div>
      <button className='bg-gray-300 p-2 text-xs rounded-sm'><MoreHorizontal  className='w-4 h-4'/></button>
      <button className='bg-orange-600 text-white rounded-sm p-2 text-xs'><HelpCircle className='w-4 h-4'/> </button>

      </div>
    </div>
  )
}
