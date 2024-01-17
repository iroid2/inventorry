import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex items-center flex-col  justify-center  min-h-screen'>
      <h1 className='text-3xl'>heading</h1>
      <Link href='/dashboard/home/overview'>View dashbaord</Link>
    </div>
  )
}
