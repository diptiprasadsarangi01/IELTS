import React from "react";
import { IoMdBook } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import {SlSocialFacebook,SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="pt-20 pb-8 bg-[#86b1be] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-between">
            {/* Logo + About */}
            <div className="">
              <div className="flex items-center mb-4">
                <IoMdBook className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">IELTS</span>
              </div>
              <p className="text-gray-100">
                Helping students achieve their dream IELTS scores since 2015.
              </p>
            </div>
    
            {/* Quick Links */}
            <div className="sm:pl-12 md:pl-3">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-100 hover:text-teal-700 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-100 hover:text-teal-700 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#works" className="text-gray-100 hover:text-teal-700 transition">
                    Steps
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-100 hover:text-teal-700 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
    
            {/* Legal */}
            <div className="">
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-100 hover:text-teal-700 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-100 hover:text-teal-700 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-100 hover:text-teal-700 transition">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
    
            {/* Connect */}
            <div className=" sm:pl-12 md:pl-2">
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="" className="text-gray-100 hover:text-teal-700 transition">
                  <SlSocialFacebook />
                </a>
                <a href="" className="text-gray-100 hover:text-teal-700 transition">
                  <RiTwitterXLine />
                </a>
                <a href="" className="text-gray-100 hover:text-teal-700 transition">
                  <SlSocialInstagram />
                </a>
                <a href="" className="text-gray-100 hover:text-teal-700 transition">
                  <SlSocialLinkedin />
                </a>
              </div>
              <p className="text-gray-100">info@ielts.com</p>
              <p className="text-gray-100">+91 1234 567 890</p>
            </div>
          </div>
    
          {/* Bottom bar */}
          <div className="border-t border-gray-500 mt-8 pt-8 text-center text-gray-100">
            <p>&copy; 2025 IELTS Academy. All rights reserved.</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
