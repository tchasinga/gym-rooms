"use client";

import React from "react";
import { FaPhoneAlt, FaInstagram, FaGithub, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

export default function MyFooter() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black pt-16 pb-10 w-full">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Section */}
          <div className="text-white txt">
            <h1 className="text-xl font-bold pb-4 border-b-2 border-red-600 inline-block">Company</h1>
            <div className="flex flex-col gap-3 mt-5">
              {['About us', 'Why us', 'Security', 'Partnership'].map((item) => (
                <p 
                  key={item}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white">
            <h1 className="text-xl font-bold pb-4 border-b-2 border-red-600 inline-block">Categories</h1>
            <div className="flex flex-col gap-3 mt-5">
              {['Basic Yoga', 'Strength Training', 'Body Building', 'Weight Loss'].map((item) => (
                <p 
                  key={item}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="text-white">
            <h1 className="text-xl font-bold pb-4 border-b-2 border-red-600 inline-block">Help</h1>
            <div className="flex flex-col gap-3 mt-5">
              {['Account', 'Support Center', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <p 
                  key={item}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-white">
            <h1 className="text-xl font-bold pb-4 border-b-2 border-red-600 inline-block">Contact US</h1>
            <div className="flex flex-col gap-4 mt-5">
              <div className="flex items-center gap-3 group">
                <div className="bg-red-600 p-2 rounded-full group-hover:rotate-12 transition-transform">
                  <FaPhoneAlt className="text-white text-sm" />
                </div>
                <a href="tel:+250782283225" className="group-hover:text-red-400 transition-colors">
                  <p className="text-sm text-gray-300 group-hover:text-white">
                    (+250) 782283225
                  </p>
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-red-600 p-2 rounded-full group-hover:rotate-12 transition-transform">
                  <MdEmail className="text-white text-sm" />
                </div>
                <a href="mailto:rulamibalobwami@gmail.com" className="group-hover:text-red-400 transition-colors">
                  <p className="text-sm text-gray-300 group-hover:text-white">
                    rulamibalobwami@gmail.com
                  </p>
                </a>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-red-600 p-2 rounded-full group-hover:rotate-12 transition-transform mt-1">
                  <MdLocationPin className="text-white text-sm" />
                </div>
                <a href="#" className="group-hover:text-red-400 transition-colors">
                  <p className="text-sm text-gray-300 group-hover:text-white">
                    2464 Royal Ln. Mesa<br />
                    New Jersey 45463
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <IoFitness className="text-4xl text-red-600 bg-black px-4 animate-bounce" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <IoFitness className="text-4xl text-red-600" />
            <h1 className="text-xl font-bold text-white">FITNESS ROOM</h1>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Designed by Tchasinga Balolebwami. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: <FaInstagram />, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
              { icon: <FaGithub />, color: 'bg-gray-800' },
              { icon: <FaTwitter />, color: 'bg-blue-400' },
              { icon: <FaFacebook />, color: 'bg-blue-600' },
              { icon: <FaLinkedin />, color: 'bg-blue-700' }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className={`${social.color} text-white p-2 rounded-full hover:scale-110 transition-transform duration-300`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}