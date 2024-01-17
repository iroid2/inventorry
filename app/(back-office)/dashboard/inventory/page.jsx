"use client"
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Shirt, ShirtIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function inventory(){
    // const {title,description,link,linkTitle,Icon:icon}= optionData;
    const itemsCards=[
        {
            title:'Item groups',
            description:'Create multiple variants of the same item using Item Groups',
            link:'/new',
            linkTitle:'New Group Item',
            enable:false,
            Icon:ShirtIcon
        },
        {
            title:'Items',
            description:'Create multiple variants of the same item using Item Groups',
            link:'/new',
            linkTitle:'New Item',
            enable:false,
            Icon:'New Item',
            Icon:ShirtIcon
        },
        {
            title:'Composite Items',
            description:'Create multiple variants of the same item using Item Groups',
            link:'/new',
            linkTitle:'Enable Now',
            enable:false,
            Icon:'',
            Icon:ShirtIcon
        },
        {
            title:'Item groups',
            description:'Create multiple variants of the same item using Item Groups',
            link:'/new',
            linkTitle:'Enable Now',
            enable:false,
            Icon:'',
            Icon:ShirtIcon
        }
    ]
    return(
        <div className="bg-slate-100 h-screen">
            <FixedHeader newLink={'/dashboard/inventory/items/new'} />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* <div className="shadow flex m-4 flex-col px-16 py-4 items-center gap-2  bg-white">
                    <h2>Item Groups</h2>
                    <div className="">
                        <Shirt className="w-36 h-36" strokeWidth='.5px' />
                    </div>
                    <p>Create multiple variants of the same item using Item Groups</p>
                    <Link href={'' } className=' items-center inline-flex text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '>New Item Group</Link>
                    <button className='flex items-center text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '>Enable</button>
                </div>
                <div className="shadow flex m-4 flex-col px-16 py-4 items-center gap-2  bg-white">
                    <h2>Item Groups</h2>
                    <div className="">
                        <Shirt className="w-36 h-36" strokeWidth='.5px' />
                    </div>
                    <p>Create multiple variants of the same item using Item Groups</p>
                    <Link href={'' } className=' items-center inline-flex text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '>New Item Group</Link>
                    <button className='flex items-center text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '>Enable</button>
                </div>   
                <div className="shadow flex m-4 flex-col px-16 py-4 items-center gap-2  bg-white">
                    <h2>Item Groups</h2>
                    <div className="">
                        <Shirt className="w-36 h-36" strokeWidth='.5px' />
                    </div>
                    <p>Create multiple variants of the same item using Item Groups</p>
                    <Link href={'' } className=' items-center inline-flex text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '>New Item Group</Link>
                    <button className='flex items-center text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '>Enable</button>
                </div>
                <div className="shadow flex m-4 flex-col px-16 py-4 items-center gap-2  bg-white">
                    <h2>Item Groups</h2>
                    <div className="">
                        <Shirt className="w-36 h-36" strokeWidth='.5px' />
                    </div>
                    <p>Create multiple variants of the same item using Item Groups</p>
                    <Link href={'' } className=' items-center inline-flex text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '>New Item Group</Link>
                    <button className='flex items-center text-sm text-white bg-blue-600 px-2 py-1 rounded-sm '>Enable</button>
                </div> */}
                {/* <OptionCard itemsCards={optionData} /> */}
                {
                    itemsCards.map((card,i)=>{
                    return(
                        <OptionCard key={i} optionData={card} />
                    )
                    })
                }
            </div>
            </div>
    )
}