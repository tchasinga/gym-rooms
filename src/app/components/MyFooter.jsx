"use client";

import React from "react";
import { FaPhoneAlt, FaInstagram, FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { IoFitness, IoHeart } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BiDumbbell } from "react-icons/bi";

export default function MyFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-customGray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Company Section */}
          <div className="text-white group">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <BiDumbbell className="text-white text-xl" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Company
              </h1>
            </div>
            <div className="space-y-4">
              {[
                { name: 'About us', icon: '🏢' },
                { name: 'Why us', icon: '⭐' },
                { name: 'Security', icon: '🔒' },
                { name: 'Partnership', icon: '🤝' }
              ].map((item) => (
                <div key={item.name} className="group/item">
                  <p className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-2 flex items-center gap-2">
                    <span className="text-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.name}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white group">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <IoFitness className="text-white text-xl" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Categories
              </h1>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Basic Yoga', icon: '🧘' },
                { name: 'Strength Training', icon: '💪' },
                { name: 'Body Building', icon: '🏋️' },
                { name: 'Weight Loss', icon: '⚖️' }
              ].map((item) => (
                <div key={item.name} className="group/item">
                  <p className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-2 flex items-center gap-2">
                    <span className="text-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.name}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="text-white group">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <IoHeart className="text-white text-xl" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Help
              </h1>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Account', icon: '👤' },
                { name: 'Support Center', icon: '🆘' },
                { name: 'Privacy Policy', icon: '📋' },
                { name: 'Terms & Conditions', icon: '📜' }
              ].map((item) => (
                <div key={item.name} className="group/item">
                  <p className="text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-2 flex items-center gap-2">
                    <span className="text-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.name}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-white group">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Contact US
              </h1>
            </div>
            <div className="space-y-5">
              <div className="group/contact">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="bg-red-600 p-2 rounded-full group-hover/contact:scale-110 transition-transform duration-300">
                    <FaPhoneAlt className="text-white text-sm" />
                  </div>
                  <a href="tel:+250782283225" className="group-hover/contact:text-red-400 transition-colors">
                    <p className="text-sm text-gray-300 group-hover/contact:text-white font-medium">
                      (+250) 782283225
                    </p>
                  </a>
                </div>
              </div>

              <div className="group/contact">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="bg-red-600 p-2 rounded-full group-hover/contact:scale-110 transition-transform duration-300">
                    <MdEmail className="text-white text-sm" />
                  </div>
                  <a href="mailto:rulamibalobwami@gmail.com" className="group-hover/contact:text-red-400 transition-colors">
                    <p className="text-sm text-gray-300 group-hover/contact:text-white font-medium break-all">
                      rulamibalobwami@gmail.com
                    </p>
                  </a>
                </div>
              </div>

              <div className="group/contact">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="bg-red-600 p-2 rounded-full group-hover/contact:scale-110 transition-transform duration-300 mt-1">
                    <MdLocationPin className="text-white text-sm" />
                  </div>
                  <a href="#" className="group-hover/contact:text-red-400 transition-colors">
                    <p className="text-sm text-gray-300 group-hover/contact:text-white font-medium">
                      2464 Royal Ln. Mesa<br />
                      New Jersey 45463
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-black/20 rounded-2xl p-8 mb-12 backdrop-blur-sm border border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated with Fitness Tips</h3>
            <p className="text-gray-300 mb-6">Get the latest fitness news, tips, and exclusive offers delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-customGray px-6 py-2 rounded-full border border-white/20">
              <IoFitness className="text-4xl text-red-600 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          <div className="flex items-center gap-3 group">
            <div className="bg-red-600 p-3 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <IoFitness className="text-3xl text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
              FITNESS ROOM
            </h1>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Designed with ❤️ by Tchasinga Balolebwami. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: <FaInstagram />, color: 'bg-gradient-to-r from-purple-500 to-pink-500', hover: 'hover:from-purple-600 hover:to-pink-600' },
              { icon: <FaGithub />, color: 'bg-gray-800', hover: 'hover:bg-gray-700' },
              { icon: <FaTwitter />, color: 'bg-blue-400', hover: 'hover:bg-blue-500' },
              { icon: <FaFacebook />, color: 'bg-blue-600', hover: 'hover:bg-blue-700' },
              { icon: <FaLinkedin />, color: 'bg-blue-700', hover: 'hover:bg-blue-800' }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className={`${social.color} ${social.hover} text-white p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                aria-label={`Follow us on ${social.icon.type.name}`}
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