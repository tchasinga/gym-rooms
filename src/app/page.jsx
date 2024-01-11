"use client"
import Image from 'next/image'
import Companies from './components/Companies'
import BestOffer from './components/BestOffer'
import Healthstate from './components/Healthstate'
import Bestplan from './components/Bestplan'
import MyFooter from './components/MyFooter'


export default function Home() {
  return (
    <main className="">
       <section className='addingFlexHeigh'>
         <Companies />  
       </section>
    </main>
  )
}
