"use client"
import React from 'react';
import Image from "next/image";
import ketut from '../img/pexels-ketut-subiyanto-4720831.jpg'

export default function Companies() {
  return (
    <div className=''>

      <div className="myback">
        <div className="max-w-6xl mx-auto p-5 items-center justify-center flex gap-10 flex-wrap w-full">
          <div className="text-white">
            <h1 className='text-2xl font-bold'>500K+ More</h1>
            <p className='text-sm text-slate-400'>Trusted Companies Partner</p>
          </div>

          <div className="text-white">
            <h1 className='text-2xl font-bold'>300K+ View</h1>
            <p className='text-sm text-slate-400'>Partner of training journey</p>
          </div>

          <div className="text-white">
            <h1 className='text-2xl font-bold'>Fitness rooms</h1>
            <p className='text-sm text-slate-400'>The best training place in downtown</p>
          </div>

          <div className="text-white">
            <h1 className='text-2xl font-bold'>Awards </h1>
            <p className='text-sm text-slate-400'>Gain an award of the best trainer</p>
          </div>
        </div>
      </div>

        <div className="max-w-6xl mx-auto mt-10">

            <div className="relative">
                <div className='w-1/2'>
                    <Image src={ketut} className='' />
                </div>
            </div>

            {/* Second child will be added here.... */}
        </div>

    </div>
  )
}
