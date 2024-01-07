"use client";
import React, { useState } from "react";
import { IoFitness } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const myMenu = [
    { name: "Home", Links: "home" },
    { name: "About Us", Links: "about" },
    { name: "Program", Links: "Program" },
    { name: "Memberships", Links: "Memberships" },
    { name: "Testimonios", Links: "Testimonios" },
    { name: "Contact", Links: "Contact" },
  ];

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <IoFitness className="text-3xl text-slate-900" />
          <h1>Fitness room</h1>
        </div>

        <div className="">
          <ul className="flex items-center  gap-3 font-medium text-sm ">
            {myMenu.map((item, index) => (
              <li className="myli" key={index}>
                <Link href={item.Links}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
