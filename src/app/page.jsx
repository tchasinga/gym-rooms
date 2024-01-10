"use client"
import Image from 'next/image'
import Companies from './components/Companies'
import BestOffer from './components/BestOffer'
import Healthstate from './components/Healthstate'
import Bestplan from './components/Bestplan'


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

        <div className='mynewone'>
          <Bestplan />
        </div>
      
    </main>
  )
}
