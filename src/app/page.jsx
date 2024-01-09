"use client"
import Image from 'next/image'
import Companies from './components/Companies'
import BestOffer from './components/BestOffer'
import Healthstate from './components/Healthstate'


export default function Home() {
  return (
    <main className="">
       <section>
         <Companies />  
       </section>

       <div className='NewCodeIsnow '>
       <BestOffer />
       </div>

       <section className='Healthstate'>
        <Healthstate />
       </section>
      
    </main>
  )
}
