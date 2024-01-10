import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

export default function Bestplan() {
  return (
    <div className='max-w-6xl mx-auto p-10'>
         <div className="text-center flex-col flex w-full">
            <h1 className='text-white text-2xl font-semibold mb-2'>Choose the best plan</h1>
            <p className='text-sm text-slate-200 font-normal'>Choose a plan that's rigth for your growing team. simple picing & no hiddeen charge</p>
         </div>

        <div className="">
            <div className="flex items-center mt-10 justify-center gap-5">
                
                <div className="bg-red-900 w-1/4 h-80 rounded-lg p-5 flex flex-col text-center">
                <h3 className='uppercase font-light text-xs text-slate-200'>discover</h3>
                    <div className="flex items-center gap-1 text-white pt-3 pb-3 justify-center">
                        <h2 className='font-bold text-2xl'>$99</h2>
                        <p className='text-xs text-gray-400'>/Per Month</p>
                    </div>
                   
                    <div className="flex flex-col justify-center items-center w-full">
                    <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-white text-xs'/>
                        <p className='text-white text-xs'>5 classes per month</p>
                    </div>

                    <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-white text-xs'/>
                        <p className='text-white text-xs'>4 group class monthly</p>
                    </div>

                    <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-xs'/>
                        <p className='text-xs'>E-book fitness guide</p>
                    </div>

                     <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-xs'/>
                        <p className='text-xs'>E-book fitness guide</p>
                    </div>
                    </div>
                    
                    <div className="rounded-full justify-center flex  border items-center text-center relative bottom-[-10%] left-4 right-0  py-3 text-white w-[90%]">
                        <div className="">
                          <h3>Choose Plan</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-red-900 w-1/4 h-[370px] rounded-lg p-5 flex flex-col text-center">
                <h3 className='uppercase font-light text-xs text-slate-200'>discover</h3>
                    <div className="flex items-center gap-1 text-white pt-3 pb-3 justify-center">
                        <h2 className='font-bold text-2xl'>$299</h2>
                        <p className='text-xs text-gray-400'>/Per Month</p>
                    </div>
                   
                    <div className="flex flex-col justify-center items-center w-full">
                    <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-white text-xs'/>
                        <p className='text-white text-xs'>10 classes per month</p>
                    </div>

                    <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-white text-xs'/>
                        <p className='text-white text-xs'>8 group class monthly</p>
                    </div>

                    <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-xs'/>
                        <p className='text-xs'>Online class access</p>
                    </div>

                     <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-xs'/>
                        <p className='text-xs'>E-book fitness guide</p>
                    </div>

                    <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-xs'/>
                        <p className='text-xs'>7 Extra fitness training</p>
                    </div>

                    </div>
                    
                    <div className="rounded-full justify-center flex  border items-center text-center relative bottom-[-10%] left-4  right-0  py-3 text-white w-[90%]">
                        <h3>Choose Plan</h3>
                    </div>
                </div>


                <div className="bg-red-900 w-1/4 h-80 rounded-lg p-5 flex flex-col text-center">
                    <h3 className='uppercase font-light text-sm text-slate-200'>discover</h3>
                    <div className="flex items-center gap-1 text-white pt-3 pb-3 justify-center">
                        <h2 className='font-bold text-2xl'>$99</h2>
                        <p className='text-xs text-gray-400'>/Per Month</p>
                    </div>
                   
                    <div className="flex flex-col justify-center items-center w-full">
                    <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-white text-xs'/>
                        <p className='text-white text-xs'>5 classes per month</p>
                    </div>

                    <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-white text-xs'/>
                        <p className='text-white text-xs'>4 group class monthly</p>
                    </div>

                    <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-xs'/>
                        <p className='text-xs'>E-book fitness guide</p>
                    </div>

                     <div className="pt-4 flex items-center justify-center gap-1">
                        <GiCheckMark className='text-xs'/>
                        <p className='text-xs'>E-book fitness guide</p>
                    </div>
                    </div>
                    
                    <div className="rounded-full justify-center flex  border items-center text-center relative bottom-[-10%] left-4 right-0  py-3 text-white w-[90%]">
                        <h3>Choose Plan</h3>
                    </div>
                </div>

                </div> 
        </div>
    </div>
  )
}
