
import { Badge, BadgeCheck, CheckCheckIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SalesActivityCard from './SalesActivityCard'
import InventoryCard from './InventoryCard'

export default function SalesOverview() {
    const salesActivity =[
        {
            title:'To be Packed',
            number:0,
            unity:'Qty',
            href:'#',
            color:'text-blue-600'
        },
        {
            title:'To be Shipped',
            number:0,
            unity:'Pkgs',
            href:'#',
            color:'text-red-600'
        },
        {
            title:'To be Derivered',
            number:10,
            unity:'Pkgs',
            href:'#',
            color:'text-green-600' 
        },
        {
            title:'To be Invoiced',
            number:10,
            unity:'Qty',
            href:'#',
            color:'text-orange-600' 
        },
    ]
    const inventorysummary=[
        {
            title:'Quantity in Hand',
            number:10,
        },
        {
            title:'Quantity to be received',
            number:0,
        },
    ]
  return (
    <div className='bg-blue-100 gap-4  border-b flex border-slate-600  grid-cols-12' >
        {/* SalesOverview */}
        <div className="col-span-8 p-8 ">
            <h1>sales activity</h1>
            {/* invoice summary */}
            <div className="grid grid-cols-4 gap-6 pr-10 py-2">
                {
                 salesActivity.map((activity,i)=>{
                    return(
                      <SalesActivityCard activity={activity} key={i}/>
                    )
                 })   
                }
            
            </div>
        </div>
        <div className="grid-cols-4  p-6 border-l-2 border-slate-300">
            <h1 className='mb-3'>Inventory Summary</h1>

            <div className="">
                {
                    inventorysummary.map((item,i)=>{
                        return(
                            <InventoryCard item={item} key={i}/>
                        )
                    })
                }
            </div>
        </div>
        </div>
  )
}
