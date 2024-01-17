'use client'
import { Building2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HomeNav() {
  const pathname = usePathname();
  // console.log(pathname)
  const navLinks=[
    {
      title:'Dashboard',
      href:'/dashboard/home/overview'
    },
    {
      title:'Getting Started',
      href:'/dashboard/home/getting-started'
    },
    {
      title:'Recent Updates',
      href:'/dashboard/home/updates'
    },
    {
      title:'Annoucements',
      href:'/dashboard/home/annoucements'
    }
  ]
  return (
    <div className='h-29 navbg  border-b border-slate-300  p-3'>
        <div className="flex gap-2">
            <Building2 className='rounded-lg p-2 w-12 h-12 shadow-sm bg-white '/>
            <div className="flex flex-col px-3">
                <p className='font-bold '>Hello, Gostevro renozo </p>
                <span className='text-sm'>gratas</span>
            </div>
        </div>
        <nav className="mt-8 sticky space-x-9 text-sm">
         {
          navLinks.map((link,i)=>{
            return(
              <Link key={i} href={link.href} className={`${pathname===link.href?"py-3 border-b-2 border-blue-600 ":'py-3'}`}>{link.title}</Link>
            )
          })
         }
        </nav>
    </div>
  )
}
