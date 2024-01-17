import React from 'react'

export default function InventoryCard({item,i}) {
  return (
    <div key={i} className="text-xs gap-4 flex flex-col  ">
                
                <div className="rounded-lg justify-between mb-4  gap-5 border transition-all duration-300 flex items-center cursor-pointer bg-white border-slate-200 hover:border-blue-400 px-4 py-3">
                <h1 className='uppercase'>{item.title}</h1>
                <h4 className='text-xs'>{item.number}</h4>
                </div>
            </div>
  )
}
