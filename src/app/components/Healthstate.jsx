import React from 'react'
import { GiCheckMark } from "react-icons/gi";

export default function Healthstate() {
  return (
    <div className='max-w-6xl mx-auto pt-10'>

       <div className='flex-col flex'>
           <div className="text-2xl font-bold text-white">
            <h1>Why should people choose <br /> Fitness services</h1>
           </div>
            
            <div className="flex flex-col mt-7">
            <div className="flex items-center gap-2 mb-3">
                <div className="bg-red-700 p-1 rounded-xl">
                <GiCheckMark className='text-xs text-white'/>
                </div>
                <h3 className='text-slate-100 text-sm font-bold'>Personal Trainig</h3>
                </div>

                <div className="text-slate-300 text-xs">
                    <p>Our personal trainer can help you create a personalized</p>
                    <p>Fitness plan and truck your progress</p>
                </div>
            </div>


            <div className="flex flex-col mt-7">
            <div className="flex items-center gap-2 mb-3">
                <div className="bg-red-700 p-1 rounded-xl">
                <GiCheckMark className='text-xs text-white'/>
                </div>
                <h3 className='text-slate-100 text-sm font-bold'>Expert Trainer</h3>
                </div>

                <div className="text-slate-300 text-xs">
                    <p>Our gym is proud to offer a team of highly skilled and certified</p>
                    <p>Trainer help achieve your health & fitness goals</p>
                </div>
            </div>

            <div className="flex flex-col mt-7">
            <div className="flex items-center gap-2 mb-3">
                <div className="bg-red-700 p-1 rounded-xl">
                <GiCheckMark className='text-xs text-white'/>
                </div>
                <h3 className='text-slate-100 text-sm font-bold'>Flexible Time</h3>
                </div>

                <div className="text-slate-300 text-xs">
                    <p>There are many fitness classes classes that are offered during</p>
                    <p>Off-park hours, such as early morning or late everythings</p>
                </div>
            </div>

            <div className="p-2 bg-red-900 text-white font-semibold text-sm w-32 text-center mt-5 rounded-2xl">
                Join today
            </div>
       </div>

       {/* this will be a new programming side of code...*/}
    </div>
  )
}
