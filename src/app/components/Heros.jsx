/* eslint-disable jsx-a11y/alt-text */
'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import TwoImg from '../img/image-1.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function Heros() {
  const heroRef = useRef(null)
  const headingRef = useRef(null)
  const subHeadingRef = useRef(null)
  const imageRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const floatingElementsRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial hero entrance animation
      const tl = gsap.timeline()
      
      tl.fromTo(heroRef.current, 
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }
      )
      
      // Floating elements animation
      gsap.to(floatingElementsRef.current.children, {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        stagger: 0.2,
        repeat: -1,
        yoyo: true
      })

      // Main heading animation with text reveal
      gsap.fromTo(headingRef.current.children,
        { y: 100, opacity: 0, rotationX: 90 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.5,
          ease: 'back.out(1.7)',
          stagger: 0.3,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Subheading with slide and fade
      gsap.fromTo(subHeadingRef.current,
        { x: 200, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subHeadingRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Image animation with parallax effect
      gsap.fromTo(imageRef.current,
        { y: 50, opacity: 0, scale: 1.1 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // CTA button animation
      gsap.fromTo(ctaRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          delay: 0.5,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Stats counter animation
      gsap.fromTo(statsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Hover animations
  const handleHover = () => {
    setIsHovered(true)
    gsap.to(ctaRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleLeave = () => {
    setIsHovered(false)
    gsap.to(ctaRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  return (
    <div 
      ref={heroRef}
      className='min-h-screen bg-customGray relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent'></div>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]'></div>
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]'></div>
      </div>

      {/* Floating Elements */}
      <div ref={floatingElementsRef} className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60'></div>
        <div className='absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40'></div>
        <div className='absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full opacity-50'></div>
        <div className='absolute bottom-20 right-10 w-5 h-5 bg-pink-400 rounded-full opacity-30'></div>
        <div className='absolute top-1/2 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-70'></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 container mx-auto px-4 py-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]'>
          
          {/* Left Content */}
          <div className='space-y-8'>
            {/* Main Heading */}
            <div ref={headingRef} className='space-y-4'>
              <h1 className='text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight'>
                <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                  Make
                </span>
              </h1>
              <h1 className='text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight'>
                Your Impact
              </h1>
            </div>

            {/* Subheading */}
            <div ref={subHeadingRef} className='space-y-6'>
              <p className='text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl'>
                Transform your vision into reality. Build something that matters. 
                Create experiences that inspire and connect people worldwide.
              </p>
              <p className='text-lg text-gray-400 max-w-xl'>
                Join thousands of creators, innovators, and dreamers who are already 
                making their mark on the world.
              </p>
            </div>

            {/* CTA Section */}
            <div ref={ctaRef} className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg'
              >
                Start Your Journey
              </button>
              <button className='px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm'>
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className='grid grid-cols-3 gap-8 pt-8'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white mb-2'>10K+</div>
                <div className='text-gray-400 text-sm'>Active Users</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white mb-2'>500+</div>
                <div className='text-gray-400 text-sm'>Projects Created</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-white mb-2'>99%</div>
                <div className='text-gray-400 text-sm'>Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className='relative'>
            <div ref={imageRef} className='relative z-10'>
              {/* Glow Effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl'></div>
              
              {/* Main Image */}
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20'>
                <Image 
                  src={TwoImg} 
                  alt="Hero Image"
                  className='object-cover w-full h-auto rounded-2xl shadow-2xl'
                  priority
                />
                
                {/* Floating Badge */}
                <div className='absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse'>
                  ✨ New Feature
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className='absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20 blur-2xl'></div>
            <div className='absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-20 blur-2xl'></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className='absolute bottom-0 left-0 w-full overflow-hidden'>
        <svg
          className='relative block w-full h-16'
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className='fill-white/5'
          ></path>
        </svg>
      </div>
    </div>
  )
}
