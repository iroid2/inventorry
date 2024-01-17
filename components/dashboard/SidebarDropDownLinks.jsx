'use client'
import { BaggageClaim, BarChart4, Cable, ChevronLeft, ChevronRight, Files, Home, Plus, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import CollapsibleLink from './CollapsibleLink'
export default function SidebarDropDownLinks({title,items,icon:Icon}) {
  return (
    <Collapsible>
  <CollapsibleTrigger className='flex gap-2  items-center text-sm p-2'><Icon className='w-4 h-4'/> {title} </CollapsibleTrigger>
  <CollapsibleContent className='flex flex-col gap-2'>  
  
  {
    items.map((item,i)=>{
        return(
            <CollapsibleLink item={''}  href={item.href} title={item.title}/>
        )
    })
  } 

  </CollapsibleContent></Collapsible>
  )
}
