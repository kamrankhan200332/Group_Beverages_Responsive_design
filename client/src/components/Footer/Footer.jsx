import React from "react";
import logo2 from "../../assets/images/logo2.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className="px-[75px] bg-[#27348B] flex items-center justify-between">
      <Link to={"/"} className="logo py-7">
        <img src={logo2} alt="logo2" />
      </Link>
      <div>
        <p className="text-white">Copyright &copy; 2025 All rights reserved</p>
      </div>
      <div className="text-white flex items-center space-x-5">
        <Link className="hover:text-gray-300 duration-300">Help center</Link>
        <Link className="hover:text-gray-300 duration-300">
          Terms of service
        </Link>
        <Link className="hover:text-gray-300 duration-300">Legal</Link>
        <Link className="hover:text-gray-300 duration-300">Privacy Policy</Link>
      </div>
      <div className="flex items-center space-x-3">
        <Link className="bg-white p-1 rounded-full hover:text-blue-700">
          <FaInstagram />
        </Link>
        <Link className="bg-white p-1 rounded-full hover:text-blue-700">
          <FaTwitter />
        </Link>
        <Link className="bg-white p-1 rounded-full hover:text-blue-700">
          <FaYoutube />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
