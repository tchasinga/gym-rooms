import React from 'react'

export default function MyFooter() {
  return (
    <div className='pt-10 pb-10'>
        <div className="max-w-6xl mx-auto p-5 items-center flex gap-10 flex-wrap w-full">
          <div className="text-white">
            <h1 className='text-lg font-medium'>Company</h1>
            <div className="flex flex-col gap-2">
              <p className='text-sm text-slate-400'>About us</p>
              <p className='text-sm text-slate-400'>Why us</p>
              <p className='text-sm text-slate-400'>Security</p>
              <p className='text-sm text-slate-400'>Partnership</p>
            </div>
          </div>

          <div className="text-white">
            <h1 className='text-lg font-medium'>Categories</h1>
            <div className="flex flex-col gap-2">
              <p className='text-sm text-slate-400'>Basic Yoga</p>
              <p className='text-sm text-slate-400'>Strength Training</p>
              <p className='text-sm text-slate-400'>Body Building</p>
              <p className='text-sm text-slate-400'>Weigth Lost</p>
            </div>
          </div>

          <div className="text-white">
            <h1 className='text-lg font-medium'>Help</h1>
            <div className="flex flex-col gap-2">
              <p className='text-sm text-slate-400'>Account</p>
              <p className='text-sm text-slate-400'>Support Center</p>
              <p className='text-sm text-slate-400'>Privacy Policy</p>
              <p className='text-sm text-slate-400'>Terms & Conditions</p>
            </div>
          </div>

          <div className="text-white">
            <h1 className='text-lg font-medium'>Contact US</h1>
            <div className="flex flex-col gap-2">

              <div className="">
                 
              </div>
              
              <p className='text-sm text-slate-400'>Why us</p>
              <p className='text-sm text-slate-400'>Security</p>
              <p className='text-sm text-slate-400'>Partnership</p>
            </div>
          </div>

        </div>
    </div>
  )
}
