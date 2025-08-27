"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaInstagram, FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";
import { IoFitness, IoHeart, IoArrowUp } from "react-icons/io5";
import { MdEmail, MdLocationPin, MdAccessTime, MdSecurity } from "react-icons/md";
import { BiMedal, BiTrophy, BiUserCheck } from "react-icons/bi";
import { GiMuscleUp } from "react-icons/gi";
import { BsFillLightningFill } from "react-icons/bs";

export default function MyFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-customGray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-20 pb-16">
        
        {/* Top Section - Newsletter & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Newsletter */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <BsFillLightningFill className="text-3xl text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
            </div>
            <p className="text-gray-300 mb-6">Get exclusive fitness tips, workout plans, and special offers delivered to your inbox!</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
            
            {isSubscribed && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm animate-pulse">
                🎉 Successfully subscribed! Welcome to the fitness family!
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Impact</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BiUserCheck className="text-2xl text-green-400" />
                  <span className="text-gray-300">Active Members</span>
                </div>
                <span className="text-2xl font-bold text-white">10K+</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BiMedal className="text-2xl text-yellow-400" />
                  <span className="text-gray-300">Success Stories</span>
                </div>
                <span className="text-2xl font-bold text-white">5K+</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BiTrophy className="text-2xl text-red-400" />
                  <span className="text-gray-300">Awards Won</span>
                </div>
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Section */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                <IoFitness className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold">Company</h3>
            </div>
            <div className="space-y-3">
              {['About us', 'Why us', 'Security', 'Partnership', 'Careers', 'Press Kit'].map((item) => (
                <p 
                  key={item}
                  className="text-sm text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-2 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-red-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <GiMuscleUp className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold">Categories</h3>
            </div>
            <div className="space-y-3">
              {['Basic Yoga', 'Strength Training', 'Body Building', 'Weight Loss', 'Cardio Fitness', 'Flexibility', 'HIIT Workouts', 'Pilates'].map((item) => (
                <p 
                  key={item}
                  className="text-sm text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-2 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                <MdSecurity className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold">Help & Support</h3>
            </div>
            <div className="space-y-3">
              {['Account', 'Support Center', 'Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'GDPR', 'Help Articles', 'Contact Support'].map((item) => (
                <p 
                  key={item}
                  className="text-sm text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-2 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-green-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                <FaPhoneAlt className="text-xl text-white" />
              </div>
              <h3 className="text-xl font-bold">Contact Us</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                  <FaPhoneAlt className="text-red-500 group-hover:text-white text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <a href="tel:+250782283225" className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    (+250) 782283225
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                  <MdEmail className="text-red-500 group-hover:text-white text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <a href="mailto:rulamibalobwami@gmail.com" className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    rulamibalobwami@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300 mt-1">
                  <MdLocationPin className="text-red-500 group-hover:text-white text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Address</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    2464 Royal Ln. Mesa<br />
                    New Jersey 45463
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                  <MdAccessTime className="text-red-500 group-hover:text-white text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Hours</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Mon-Sun: 5AM-11PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Enhanced Design */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-customGray px-8 py-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                <IoFitness className="text-3xl text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
              <IoFitness className="text-3xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">FITNESS ROOM</h1>
              <p className="text-sm text-gray-400">Transform your life, one workout at a time</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              © {new Date().getFullYear()} Designed by Tchasinga Balolebwami. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500">Made with <IoHeart className="inline text-red-500 animate-pulse" /> for fitness enthusiasts</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FaInstagram />, color: 'from-purple-500 to-pink-500', hover: 'hover:from-purple-600 hover:to-pink-600' },
              { icon: <FaYoutube />, color: 'from-red-500 to-red-600', hover: 'hover:from-red-600 hover:to-red-700' },
              { icon: <FaTiktok />, color: 'from-pink-500 to-blue-500', hover: 'hover:from-pink-600 hover:to-blue-600' },
              { icon: <FaGithub />, color: 'from-gray-700 to-gray-800', hover: 'hover:from-gray-800 hover:to-gray-900' },
              { icon: <FaTwitter />, color: 'from-blue-400 to-blue-500', hover: 'hover:from-blue-500 hover:to-blue-600' },
              { icon: <FaFacebook />, color: 'from-blue-600 to-blue-700', hover: 'hover:from-blue-700 hover:to-blue-800' },
              { icon: <FaLinkedin />, color: 'from-blue-700 to-blue-800', hover: 'hover:from-blue-800 hover:to-blue-900' }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className={`bg-gradient-to-r ${social.color} ${social.hover} text-white w-10 h-10 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 transform`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 backdropdesign w-14 h-14 text-white rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
      >
        <IoArrowUp className="text-xl" />
      </button>
    </div>
  );
}
