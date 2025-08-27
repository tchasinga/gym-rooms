/* eslint-disable jsx-a11y/alt-text */
'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import TwoImg from '../img/image-1.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Heros () {
  const headingRef = useRef(null)
  const subHeadingRef = useRef(null)

  useEffect(() => {
    const headings = headingRef.current.children
    const subHeading = subHeadingRef.current

    // Animation for main heading
    gsap.fromTo(
      headings,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3.5,
        ease: 'power4.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: headings,
          start: 'top 80%', // Trigger animation when the heading is 80% in the viewport
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animation for subheading
    gsap.fromTo(
      subHeading,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: subHeading,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <div className='min-h-screen bg-customGray flex items-center justify-center w-full mybgGround relative'>
      {/* Image Section now... */}
      <div className='relative'>
        <div className='w-full relative z-10'>
          <Image src={TwoImg} className='object-fill max-h-full' />
        </div>
      </div>

      {/* Text Section */}
      <div
        ref={headingRef}
        className='absolute top-[19%] text-white sm:text-[8rem] p-2 w-full font-bold uppercase max-w-screen-2xl z-0'
      >
        <h1 className='leading-3'>make</h1>
        <h1>your impact</h1>
      </div>
      <div
        ref={subHeadingRef}
        className='absolute bottom-14 left-[65%] text-white sm:text-[8rem] font-bold uppercase  w-[20%] sm:w-[15%] '
      >
        <h1>last</h1>
      </div>
    </div>
  )
}
