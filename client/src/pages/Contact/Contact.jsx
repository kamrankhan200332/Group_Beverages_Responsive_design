import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="space-y-20 [@media(max-width:576px)]:px-[15px] px-[50px] md:px-[60px] lg:px-[70px]">
        <h1 className="uppercase text-[#27348B] font-bold text-3xl pt-5 text-center">
          Contact us
        </h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 space-y-10 divide-x divide-gray-300">
            <div className="space-y-2 flex flex-col items-center w-full px-6 text-center">
              <h1 className="text-xl font-bold">
                <div className="icon border border-gray-300 w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gray-200 text-[#27348B] ">
                  <FaLocationDot />
                </div>
              </h1>
              <p className="uppercase text-[#27348B] font-semibold ">ADDRESS</p>
              <p className="capitalize text-[#636CA6] font-medium text-sm">
                Warsak road hakeem khan kalay peshawar
              </p>
            </div>
            <div className="space-y-2 flex flex-col items-center w-full ">
              <h1 className="text-xl font-bold">
                <div className="icon border border-gray-300 w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gray-200 text-[#27348B]">
                  <FaHeadphones />
                </div>
              </h1>
              <p className="uppercase text-[#27348B] font-semibold">PHONE</p>
              <p className="capitalize text-[#636CA6] font-medium text-sm">
                (+92) 311 9921465
              </p>
            </div>
            <div className="space-y-2 flex flex-col items-center w-full ">
              <h1 className="text-xl font-bold">
                <span className="icon border border-gray-300 w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gray-200 text-[#27348B]">
                  <MdEmail />
                </span>
              </h1>
              <p className="uppercase text-[#27348B] font-semibold">EMAIL</p>
              <p className="capitalize text-[#636CA6] font-medium text-sm">
                kamrankhan815.com@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-10">
            <div className="flex items-center justify-center flex-col space-y-5 text-center">
              <h1 className="uppercase text-[#27348B] font-bold text-3xl ">
                Get In Touch
              </h1>
              <p className="capitalize text-[#636CA6] font-medium">
                Lorem ipsum dolor consectetuer adipiscing elit sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna <br /> aliquam
                erat volutpatcommodo consequat.veniet quis?
              </p>
            </div>

            <div className="input space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 py-3 px-4 w-full rounded"
                    placeholder="Your name..."
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 py-3 px-4 w-full rounded"
                    placeholder="Your email..."
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 py-3 px-4 w-full rounded"
                    placeholder="Your contact..."
                  />
                </div>
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                placeholder="Message..."
                className="border border-gray-300 py-3 px-4 w-full rounded"
              ></textarea>
              <div className=" flex items-center justify-center">
                <button className="bg-green-700 text-white hover:bg-green-800 font-bold cursor-pointer py-3 px-8 flex items-center justify-center rounded-full">
                  Send Message
                </button>
              </div>
            </div>

            <div className="h-[45px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
