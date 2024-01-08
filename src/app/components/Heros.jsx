import React from 'react'
import Image from 'next/image'
import OneImg from '../img/pexels-pikx-by-panther-1547248.jpg'

export default function Heros() {
  return (
    <div className='mt-8 flex flex-col justify-center'>
         <h1 className='uppercase font-bold text-5xl'>get healthy body <br /> with the perfect</h1>
         <div className="flex items-center gap-3">
            <h1 className='uppercase font-bold text-5xl'>exercice</h1>
            <div className="">
            <Image src={OneImg} className='myImgGet'/>
            </div>
         </div>
    </div>
  )
}
