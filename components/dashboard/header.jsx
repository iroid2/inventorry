import React from "react";
import { Bell, ChevronDown, Contact, History, LayoutGridIcon, Plus, Settings } from "lucide-react";
import SearchInput from "./SearchInput";
import Image from "next/image";
import Link from "next/link";
export default function Header(){
    return(
        <div className="bg-gray-100 w-full h-14 flex shadow justify-between  px-8">
            <div className="flex gap-3 items-center">
                <History/>
                <SearchInput/>
                {/* recent activties */}
                {/* search*/}
            </div>
            <div className="flex items-center gap-2">
                <button> <Plus className="bg-blue-600  p-1 w-4 h-4 rounded-lg"/></button>

                <div className="flex gap-1 text-sm border-r border-l px-3 border-gray-500 ">
                <button><Contact className=" w-6 h-5 rounded-lg"/></button>
                <button><Bell className=" w-6 h-5 rounded-lg"/></button>
                <button><Settings className=" w-6 h-5 rounded-lg"/></button>
                
                </div>
                <div className="flex br-4 gap-2 items-center">
                    <p className="w-8 flex h-5 rounded-lg">vcl <ChevronDown className=""/></p>
                <Image className="rounded-full border-gray-600" src={'/images/user.png'} width={30} height={100}/>
                <button><LayoutGridIcon className=" w-6 h-5 rounded-lg"/></button>
                </div>
                
            </div>
        </div>
    )
}