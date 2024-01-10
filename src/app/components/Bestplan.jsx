import React from "react";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import IMmomko from "../pics/pexels-photo-1153369.webp";
import ImMib from "../pics/pexels2-photo-6740525.jpeg";
import ImMib2 from "../pics/free-photo-of-young-beautiful-woman-sitting-on-city-street.jpeg";
import ImMib3 from "../pics/pexels3-photo-8874386.webp";
import ImMib4 from "../pics/pexels4-photo-1089164.webp";
import ImMib5 from "../pics/pexels5-photo-6958488.jpeg";
import ImMib6 from "../pics/pexels7-photo-14306399.webp";
import ImMib7 from "../pics/pexels8-photo-1154764.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';


export default function Bestplan() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="text-center flex-col flex w-full">
        <h1 className="text-white text-2xl font-semibold mb-2">
          Choose the best plan
        </h1>
        <p className="text-sm text-slate-200 font-normal">
          Choose a plan that's rigth for your growing team. simple picing & no
          hiddeen charge
        </p>
      </div>

      <div className="">
        <div className="flex items-center mt-10 justify-center gap-5">
          <div className="bg-red-900 myRED w-1/4 h-80 rounded-xl p-5 flex flex-col text-center">
            <h3 className="uppercase font-light text-xs text-slate-200">
              discover
            </h3>
            <div className="flex items-center gap-1 text-white pt-3 pb-3 justify-center">
              <h2 className="font-bold text-2xl">$99</h2>
              <p className="text-xs text-gray-400">/Per Month</p>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-white text-xs" />
                <p className="text-white text-xs">5 classes per month</p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-white text-xs" />
                <p className="text-white text-xs">4 group class monthly</p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-xs" />
                <p className="text-xs">E-book fitness guide</p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-xs" />
                <p className="text-xs">E-book fitness guide</p>
              </div>
            </div>

            <div className="rounded-full justify-center flex  border items-center text-center relative bottom-[-10%] left-4 right-0  py-3 text-white w-[90%]">
              <div className="">
                <h3>Choose Plan</h3>
              </div>
            </div>
          </div>

          <div className="bg-red-900 myRED w-1/4 h-[380px] rounded-xl p-5 flex flex-col text-center">
            <h3 className="uppercase font-light text-xs text-slate-200">
              discover
            </h3>
            <div className="flex items-center gap-1 text-white pt-3 pb-3 justify-center">
              <h2 className="font-bold text-2xl">$299</h2>
              <p className="text-xs text-gray-400">/Per Month</p>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-white text-xs" />
                <p className="text-white text-xs">10 classes per month</p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-white text-xs" />
                <p className="text-white text-xs">8 group class monthly</p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-xs" />
                <p className="text-xs">Online class access</p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-xs" />
                <p className="text-xs">E-book fitness guide</p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-xs" />
                <p className="text-xs">7 Extra fitness training</p>
              </div>
            </div>

            <div className="rounded-full justify-center flex  border items-center text-center relative bottom-[-10%] left-4  right-0  py-3 text-white w-[90%]">
              <h3>Choose Plan</h3>
            </div>
          </div>

          <div className="bg-red-900 myRED w-1/4 h-80 rounded-xl p-5 flex flex-col text-center">
            <h3 className="uppercase font-light text-xs text-slate-200">
              discover
            </h3>
            <div className="flex items-center gap-1 text-white pt-3 pb-3 justify-center">
              <h2 className="font-bold text-2xl">$99</h2>
              <p className="text-xs text-gray-400">/Per Month</p>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-white text-xs" />
                <p className="text-white text-xs">5 classes per month</p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-white text-xs" />
                <p className="text-white text-xs">4 group class monthly</p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-xs" />
                <p className="text-xs">E-book fitness guide</p>
              </div>

              <div className="pt-4 flex items-center justify-center gap-1">
                <GiCheckMark className="text-xs" />
                <p className="text-xs">E-book fitness guide</p>
              </div>
            </div>

            <div className="rounded-full justify-center flex  border items-center text-center relative bottom-[-10%] left-4 right-0  py-3 text-white w-[90%]">
              <h3>Choose Plan</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Adding new code esta*/}

      <div className="pt-10 pb-10 flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-3xl text-teal-50 font-bold mb-5">
            <h1>
              What our happy Client <br /> Say About us
            </h1>
          </div>
          <div className="text-sm text-slate-50">
            <p>I've been a number of fitness within for about 6 month</p>
            <p>Now and i absoulutely love it ! the trainers are motivate</p>
            <p>and they really help to reach fitnes goals</p>
          </div>

          <div className="container mt-5  w-80">
            <Image
              src={IMmomko}
              alt="Picture of the author"
              className="avatar"
            />
            <Image src={ImMib} alt="Picture of the author" className="avatar" />
            <Image
              src={ImMib2}
              alt="Picture of the author"
              className="avatar"
            />
            <Image
              src={ImMib3}
              alt="Picture of the author"
              className="avatar"
            />
            <Image
              src={ImMib4}
              alt="Picture of the author"
              className="avatar"
            />
            <Image
              src={ImMib5}
              alt="Picture of the author"
              className="avatar"
            />
            <Image
              src={ImMib6}
              alt="Picture of the author"
              className="avatar"
            />
            <Image
              src={ImMib7}
              alt="Picture of the author"
              className="avatar"
            />
          </div>
        </div>

        {/* second one..*/}

        <div className=" w-1/2 mt-5">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >

         <SwiperSlide>
         <Image src={ImMib3} alt="Picture of the author" className='h-[320px]'/>
            </SwiperSlide>

            <SwiperSlide>
            <Image src={IMmomko} alt="Picture of the author" className='h-[320px]'/>
            </SwiperSlide>

            <SwiperSlide>
            <Image src={ImMib} alt="Picture of the author" className='h-[320px]'/>
            </SwiperSlide>

            <SwiperSlide>
            <Image src={ImMib2} alt="Picture of the author" className='h-[320px]'/>
            </SwiperSlide>

            <SwiperSlide>
            <Image src={ImMib4} alt="Picture of the author" className='h-[320px]'/>
            </SwiperSlide>

            <SwiperSlide>
            <Image src={ImMib5} alt="Picture of the author" className='h-[320px]'/>
            </SwiperSlide>

            <SwiperSlide>
            <Image src={ImMib6} alt="Picture of the author" className='h-[320px]'/>
            </SwiperSlide>

            <SwiperSlide>
            <Image src={ImMib7} alt="Picture of the author" className='h-[320px]'/>
            </SwiperSlide>
           
          </Swiper>
        </div>

      </div>
    </div>
  );
}
