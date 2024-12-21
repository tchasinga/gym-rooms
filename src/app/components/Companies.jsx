"use client"
import React from 'react';
import Image from "next/image";
import ketut from '../img/pexels-ketut-subiyanto-4720831.jpg'
import ImageIcon from '../img/6741796.png'
import CountUp from 'react-countup';


export default function Companies() {
  return (
    <div className='bg-slate-700'>

      <div className="myback">
        <div className="max-w-6xl mx-auto p-5 items-center justify-center flex gap-10 flex-wrap myfirstgrid w-full">
          <div className="text-white">
            <h1 className='text-2xl font-bold'>
            <CountUp end={500} suffix="k+ More" duration={10}/>
            </h1>
            <p className='text-sm text-slate-400'>Trusted Companies Partner</p>
          </div>

          <div className="text-white">
            <h1 className='text-2xl font-bold'>
            <CountUp end={300} suffix="k+ View" duration={10}/>
            </h1>
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

        <div className="max-w-6xl mx-auto mt-28 flex getNewFlex">

            <div className="relative  reme flex-1 ">
                <div className='myWidth rounded-2xl'>
                    <Image src={ketut} className='rounded-2xl' />
                </div>
                <div className='flex items-center myblur w-44 py-2 px-1 rounded-2xl absolute top-[60%] left-[69%]'>
                    <Image src={ImageIcon} className='h-8 w-8 text-red-800'/>
                    <p className='text-sm'>Professional Trainer</p>
                </div>
            </div>

            {/* Second child will be added here.... */}

            <div className='flex flex-col mt-3'>
                <h1 className='text-white font-bold text-2xl mb-10'>Get Ready To Reach <br /> Your Fitness Goals</h1>
                <div className='text-sm text-slate-400 font-normal mb-10'>
                    <p>We are a gym that is commited to helping people</p>
                    <p>Reach their fitness goals, we are offer a variety of theirs</p>
                    <p>Programs and services to fit your needs, whether</p>
                    <p>You are experienced othiete</p>
                </div>

                <div className='text-sm text-slate-400 font-normal'>
                    <p>We believe that everyone should have access to</p>
                    <p>the benefits of exercices make it happen</p>
                </div>

                <div className="bg-red-800 w-44 text-center py-2 rounded-xl cursor-pointer mt-10">
                    <h3 className='text-slate-300 font-medium'>Free trial week</h3>
                </div>
            </div>

        </div>

    </div>
  )
}
