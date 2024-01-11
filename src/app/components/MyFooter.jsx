"use client"

import React from 'react'
import { FaPhoneAlt} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

export default function MyFooter() {
  return (
    <div className='pt-10 pb-10'>
        <div className="max-w-6xl mx-auto p-5 items-center justify-evenly flex gap-10 flex-wrap w-full">
          <div className="text-white">
             <h1 className='text-lg font-medium pb-2'>Company</h1>
            <div className="flex flex-col gap-2">
              <p className='text-sm text-slate-400'>About us</p>
              <p className='text-sm text-slate-400'>Why us</p>
              <p className='text-sm text-slate-400'>Security</p>
              <p className='text-sm text-slate-400'>Partnership</p>
            </div>
          </div>

          <div className="text-white">
             <h1 className='text-lg font-medium pb-2'>Categories</h1>
            <div className="flex flex-col gap-2">
              <p className='text-sm text-slate-400'>Basic Yoga</p>
              <p className='text-sm text-slate-400'>Strength Training</p>
              <p className='text-sm text-slate-400'>Body Building</p>
              <p className='text-sm text-slate-400'>Weigth Lost</p>
            </div>
          </div>

          <div className="text-white">
             <h1 className='text-lg font-medium pb-2'>Help</h1>
            <div className="flex flex-col gap-2">
              <p className='text-sm text-slate-400'>Account</p>
              <p className='text-sm text-slate-400'>Support Center</p>
              <p className='text-sm text-slate-400'>Privacy Policy</p>
              <p className='text-sm text-slate-400'>Terms & Conditions</p>
            </div>
          </div>

          <div className="text-white">
            <h1 className='text-lg font-medium pb-2'>Contact US</h1>
            <div className="flex flex-col gap-2">

              <div className="flex items-center gap-2 cursor-pointer">
                <FaPhoneAlt  className='text-red-800 text-lg'/>
               <a href="tel:+250787289028" className=''>
               <p className='text-sm text-slate-400 cursor-pointer'>(+250) 787289028</p>
               </a>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
               <MdEmail  className='text-red-800  text-lg'/>
               <a href="tchasingajacques@gmail.com" className=''>
               <p className='text-sm text-slate-400 cursor-pointer'>tchasingajacques@gmail.com</p>
               </a>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
               <MdLocationPin  className='text-red-800  text-lg'/>
               <a href="tchasingajacques@gmail.com" className=''>
                <p className='text-sm text-slate-400 cursor-pointer'>2464 Royal Ln.Mesa <br/>New Jersey 45463</p>
               </a>
              </div>

            </div>
          </div>

        </div>
    </div>
  )
}
