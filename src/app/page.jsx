"use client"
import Image from 'next/image'
import Companies from './components/Companies'


export default function Home() {
  return (
    <main className="">
       <section>
         <Companies />  
       </section>
    </main>
  )
}
