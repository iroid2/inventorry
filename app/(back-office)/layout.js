import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/header";
import React from "react";

export default function Layout({children}){
    return(
        <div className="flex w-screen">
           <Sidebar/>
            <main className="w-full">
                <Header/>
            {children}
            </main>
        </div>
    )
}