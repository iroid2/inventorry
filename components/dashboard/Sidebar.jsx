"use client"
import { BaggageClaim, BarChart4, Cable, ChevronLeft, ChevronRight, Files, Home, Plus, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'

import CollapsibleLink from './CollapsibleLink'
import SidebarDropDownLinks from './SidebarDropDownLinks'


export default function Sidebar() {
    const InventoryLinks =[
        {
            title:'Item ',
            href:'/dashboard/inventory'
        },
        {
            title:'Item groups',
            href:'#'
        },
        {
            title:'Inventory Adjustements',
            href:'#'
        },
    ]
    const salesLinks =[
        {
            title:'Customers ',
            href:'#'
        },
        {
            title:'sales orders',
            href:'#'
        },
        {
            title:'Packages',
            href:'#'
        },
        {
            title:'Shippment',
            href:'#'
        },
        {
            title:'Invoices',
            href:'#'
        },
        {
            title:'Sales Receipts',
            href:'#'
        },
        {
            title:'Payments Received',
            href:'#'
        },
        {
            title:'Sales Returns',
            href:'#'
        },
        {
            title:'Credit Notes',
            href:'#'
        }
    ]
  return (
    <div className="w-60 text-slate-100 overflow-y-scroll flex justify-between flex-col h-screen bg-slate-800">
        <div className="top">
            <Link href={''} className=" flex space-x-2 py-3 px-2 bg-slate-950">
            <ShoppingCart/>
            <span>Inventory</span>
            </Link>
            <nav className='flex flex-col gap-4 px-3 py-6'>   
                <Link href={''} className='flex gap-2 bg-blue-600 p-2 rounded-md px-2 items-center text-sm ' ><Home className='w-4 h-4'/> <span className='text-sm '>Home</span> </Link>
                <SidebarDropDownLinks icon={BaggageClaim} title='Inventory' items={InventoryLinks}/>
                <SidebarDropDownLinks icon={ShoppingBasket} title='Sales' items={salesLinks}/>
                <button  className='flex gap-2 items-center text-sm p-2' ><ShoppingBag className='w-4 h-4'/> <span className='text-sm '>Purchases</span> </button>
                <Link href={'#'} className='flex gap-2 items-center text-sm p-2' ><Cable className='w-4 h-4'/> <span className='text-sm '>Intergrations</span> </Link>
                <Link href={'#'} className='flex gap-2 items-center text-sm p-2' ><BarChart4 className='w-4 h-4'/> <span className='text-sm '>Reports</span> </Link>
                <Link href={'#'} className='flex gap-2 items-center text-sm p-2' ><Files className='w-4 h-4'/> <span className='text-sm '>Documents</span> </Link>
            </nav>
            <SubscriptionCard />
        </div>
        <div className="flex flex-col items-center py-3 space-x-2  px-3 bg-slate-950">
            <ChevronLeft/>            
        </div>
        </div>
)
}
