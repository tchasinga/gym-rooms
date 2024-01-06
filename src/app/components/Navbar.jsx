"use client"
import React ,{useState} from 'react'

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false)
const myMenu = [
    {name: 'Home', Links: 'home'},
    {name: 'About Us', Links: 'about'},
    {name: 'Program', Links: 'Program'},
    {name: 'Memberships', Links: 'Memberships'},
    {name: 'Testimonios', Links: 'Testimonios'},
    {name: 'Contact', Links: 'Contact'},
]
 

  return (
    <nav className='w-full'>
     <div className='flex justify-between items-center'>
        <div className="flex gap-2">
        <IoFitness />
        <h1>fitness room</h1>
        </div>
     </div>



    </nav>
  )
}
