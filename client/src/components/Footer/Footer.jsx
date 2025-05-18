import React from "react";
import logo2 from "../../assets/images/logo2.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-[75px] py-6 bg-[#27348B] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        <div className="w-full flex justify-center md:justify-start">
          <Link to={"/"} className="logo">
            <img src={logo2} alt="logo2" className="h-10" />
          </Link>
        </div>

        <div className="w-full text-center md:text-left">
          <p>&copy; 2025 All rights reserved</p>
        </div>

        <div className="w-full flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <Link className="hover:text-gray-300 duration-300">Help Center</Link>
          <Link className="hover:text-gray-300 duration-300">
            Terms of Service
          </Link>
          <Link className="hover:text-gray-300 duration-300">Legal</Link>
          <Link className="hover:text-gray-300 duration-300">
            Privacy Policy
          </Link>
        </div>

        <div className="w-full flex justify-center md:justify-end space-x-3">
          <Link className="bg-white text-[#27348B] p-2 rounded-full hover:text-blue-700 transition">
            <FaInstagram />
          </Link>
          <Link className="bg-white text-[#27348B] p-2 rounded-full hover:text-blue-700 transition">
            <FaTwitter />
          </Link>
          <Link className="bg-white text-[#27348B] p-2 rounded-full hover:text-blue-700 transition">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
