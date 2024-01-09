"use client"
import React from 'react'
import { myObject } from '../projects/mygridsysten'

export default function BestOffer() {
  return (
    <div className='max-w-6xl mx-auto pt-10 w-full'>

      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-white">
          <h1>The Best programs we <br /> Offers for you</h1>          
        </div>
         
         <div className="text-slate-500 text-sm font-normal">
          <p>We offer a wide range of comprehensive fitness programs</p>
          <p>Designed to coter to individuals of all fitness levels our aim</p>
          <p>To help your achieve specific goals & maximize results</p>
         </div>
      </div>

      <div className=''>
        <div className=' mt-10 myfirstgrid'>
          {myObject.map((item, index) => {
            return (
              <div key={index} className=''>
                <div className='text-5xl'>
                  {item.icon}
                </div>
                <div className=''>
                  <h1 className='text-white text-1xl font-bold'>{item.title}</h1>
                </div>
                <div className='text-slate-500 text-sm font-normal'>
                  <p>{item.text}</p>
                  </div>
                <div className="">
                  <h1 className='text-slate-400 text-xs font-normal'>{item.learn}</h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>

  </div>
  )
}
