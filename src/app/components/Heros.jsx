"use client"

import React from "react";
import Image from "next/image";
import TwoImg from "../img/image-1.png";

export default function Heros() {

  return (
      <div className="min-h-screen flex items-center justify-center w-full mybgGround" >
          <div className="relative border">
            <div className="w-full">
              <Image src={TwoImg} className="object-fill w-full h-full " />
            </div>
          </div>
          <div className="absolute top-[19%] border text-white text-[8rem] w-full font-bold uppercase max-w-screen-2xl">
              <h1 className="leading-3">make</h1>
              <h1 className="">your impact</h1>
            </div>
      </div>
  );
}