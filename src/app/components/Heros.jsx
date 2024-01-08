import React from 'react'
import Image from 'next/image'
import OneImg from '../img/pexels-pikx-by-panther-1547248.jpg'
import { FaVideo } from "react-icons/fa";

export default function Heros() {
  return (
    <div className='mt-8 flex flex-col jus'>
         <h1 className='uppercase font-bold text-5xl'>get healthy body <br /> with the perfect</h1>
         <div className="flex items-center gap-3">
            <h1 className='uppercase font-bold text-5xl'>exercice</h1>
            <div className="">
            <Image src={OneImg} className='myImgGet'/>
            </div>
         </div>
         <div className="text-gray-600 font-normal text-sm mt-7">
            <p>We are always there to help you to make a healthy body</p>
            <p>And mind through the power of fitness</p>
        </div>
        
        <div className="flex items-center gap-2 mt-3">
           <div className="">
              <button className="bg-red-900 hover:bg-blue-900 duration-700 text-white font-normal py-2 px-8 rounded-full">Get stared</button>
           </div>

           <div className=" flex items-center gap-2">
            <div className="bg-slate-600 w-12 p-4 flex justify-center items-center rounded-3xl">
             <FaVideo/> 
             </div>
             <p className='text-gray-600 font-normal text-sm'>Watch Video</p>
           </div>
           
        </div>
    </div>
  )
}
