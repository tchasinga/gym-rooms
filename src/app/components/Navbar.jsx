"use client";
import React, { useState } from "react";
import { IoFitness } from "react-icons/io5";
import Link from "next/link";
import { motion } from 'framer-motion';

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

  const variants = {
    isOpen: {
      transition: { staggerChildren: 0.1},
    },
    isOpen: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    isOpen: {
      y: 0,
      opacity: 1,
    },
    isOpen: {
      y: 150,
      opacity: 0,
    },
  };

  return (
    <nav>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <IoFitness className="text-3xl text-slate-900" />
          <h1>Fitness room</h1>
        </div>

        <div className="md:block hidden">
          <motion.ul className="flex gap-8 items-center font-medium text-sm" variants={variants}>
            {myMenu.map((item) => (
              <motion.li className="myli" key={item.Links} variants={itemVariants} >
                <Link href={item.Links} whileHover={{scale: 1.9}}>{item.name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.button
          whileTap={[{ scale: 1.3 }, { rotate: 180 }, { duration: 4.5 }]}
          className={`z-[999] ${
            isOpen ? "text-gray-200" : "text-gray-300"
          } md:hidden text-2xl`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-slate-900 myTrabs"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                className="myTrabs"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
                className="myTrabs"
              ></path>
            )}
          </svg>
        </motion.button>

        <div
          className={`md:hidden text-gray-900 absolute w-full h-screen px-7 py-2 font-medium bg-black top-0 duration-500 ${
            isOpen ? "right-0" : "right-[100%]"
          }`}
        >
          <motion.ul className="flex flex-col justify-center h-full font-medium text-lg gap-10 py-2" variants={variants}>
            {myMenu.map((item) => (
              <motion.li className="myli px-6 text-3xl text-gray-200 font-light" key={item.Links} variants={itemVariants}>
                <Link href={item.Links}>{item.name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </nav>
  );
}
