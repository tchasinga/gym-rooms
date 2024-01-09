"use client"
import Image from 'next/image'
import Companies from './components/Companies'
import BestOffer from './components/BestOffer'


export default function Home() {
  return (
    <main className="">
       <section>
         <Companies />  
       </section>
       <BestOffer />
    </main>
  )
}
