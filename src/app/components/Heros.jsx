import React from 'react'
import Image from 'next/image'
import OneImg from '../img/pexels-pikx-by-panther-1547248.jpg'

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
        
        <div className="">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5'>
                Get Started
            </button>
        </div>
    </div>
  )
}
