"use client"

import React from "react";
import Image from "next/image";
import OneImg from "../img/pexels-pikx-by-panther-1547248.jpg";
import TwoImg from "../img/pexels-mike-jones.png";
import { FaVideo } from "react-icons/fa";
import { useState } from "react";
import myVideo from '../video/GYMInteriorDesign.mp4'
import CountUp from 'react-countup';

export default function Heros() {

    const [showVideo, setShowVideo] = useState(false);

    const handlerVideoShow= () => {
        setShowVideo(true);

    }

  return (
    <div className="mt-8 flex flex-col jus">
      <div className="flex justify-between newFlex">
        <div className="flex flex-col">
          <h1 className="uppercase font-bold text-5xl">
            get healthy body <br /> with the perfect
          </h1>
          <div className="flex items-center gap-3">
            <h1 className="uppercase font-bold text-5xl">exercice</h1>
            <div className="">
              <Image src={OneImg} className="myImgGet" />
            </div>
          </div>
          <div className="text-gray-600 font-normal text-sm mt-7">
            <p>We are always there to help you to make a healthy body</p>
            <p>And mind through the power of fitness</p>
          </div>

          <div className="flex items-center gap-2 mt-7">
            <div className="">
              <button className="bg-red-900 hover:bg-blue-900 duration-700 text-white font-normal py-2 px-8 rounded-full">
                Get stared
              </button>
            </div>

            <div onClick={handlerVideoShow}  className=" flex items-center gap-2 cursor-pointer">
              <div className="bg-slate-600 w-12 p-4 flex justify-center items-center rounded-3xl cursor-pointer animate__swing animate__animated">
                <FaVideo />
              </div>
              {showVideo && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex justify-center items-center">
                        <iframe width="560" height="315" src={myVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="rounded-2xl"></iframe>
                    </div>
                )}
              <p className="text-gray-600 font-normal text-sm cursor-pointer">Watch Video</p>
            </div>
          </div>

          <div className="flex gap-3 text-center mt-10 flex-wrap">
            <div className="border-r-2 pr-4">
              <h1 className="text-xl font-bold">
                <CountUp end={305} suffix="k+" duration={5}/>
              </h1>
              <p className="text-xs text-gray-500">Expert Trainers</p>
            </div>

            <div className="border-r-2 pr-4">
              <h1 className="text-xl font-bold">
              <CountUp end={905} suffix="+" duration={9}/>
              </h1>
              <p className="text-xs text-gray-500">Member Joined</p>
            </div>

            <div className="border-r-2 pr-4">
              <h1 className="text-xl font-bold">
              <CountUp end={700} suffix="+" duration={9}/>
              </h1>
              <p className="text-xs text-gray-500">Fitness Programs</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="myImgD">
            <Image src={TwoImg} className="codign" />
          </div>
            <div className="absolute top-[69%] left-0 bg-black bg-opacity-50 px-12 p-2 rounded-r-2xl">
              <h1 className="text-xl font-bold">Join our teams</h1>
              <p className="text-xs text-gray-500">Change your body trainning..</p>
            </div>
              <div className="w-32 h-32 mycircle absolute bg-black top-[3%] left-[-13%]">
                 <div className="flex flex-col items-center justify-center mt-12 -rotate-45 ">
                 <h1 className="text-lg font-bold">500$</h1>
                 <p className="text-xs text-gray-500">Pay now</p>
                 </div>
              </div>
        </div>
      </div>
    </div>
  );
}
