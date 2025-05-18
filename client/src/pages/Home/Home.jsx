import React from "react";
import heroImg from "../../assets/images/hero.png";
import sting1 from "../../assets/images/sting1.png";
import sting2 from "../../assets/images/sting2.png";
import sting3 from "../../assets/images/sting3.png";
import sting4 from "../../assets/images/sting4.png";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";
import background1 from "../../assets/images/background1.png";
import background2 from "../../assets/images/background2.png";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="">
          <div className="img w-full">
            <img src={heroImg} className="object-cover w-full" alt="" />
          </div>
          <div className="absolute inset-0">
            <Navbar />
          </div>
        </div>
        <div className="px-4 md:px-10 lg:px-[75px] absolute top-[55%] sm:top-[73%]">
          <p className="uppercase text-[#27348B]">
            <span className="text-6xlk text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              power{" "}
            </span>
            <span className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold">
              in every sip
            </span>
          </p>
          <div>
            <p className="capitalize text-[#636CA6] font-medium">
              fuel your energy with every sip-bold taste, unstoppable power.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-[75px] space-y-10 py-[30px] border-t border-t-gray-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="w-full space-y-3 md:w-[50%]">
            <h1 className="uppercase font-bold text-[#27348B] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Our Products
            </h1>
            <p className="text-[16px] text-[#636CA6] font-medium">
              Discover our range of energing beverages, crafted for bold flavor
              and lasting refreshment. power up with every sip!
            </p>
          </div>
          <div className="">
            <button className="bg-[#27348B] text-white hover:bg-blue-800 cursor-pointer uppercase py-1 px-2">
              view all
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-around">
          <div className="img">
            <img src={sting1} alt="" />
          </div>
          <div className="img">
            <img src={sting2} alt="" />
          </div>
          <div className="img">
            <img src={sting3} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="image">
          <img src={sting4} className="w-full" alt="" />
        </div>
      </div>

      <div
        className="w-full bg-cover bg-center px-4 md:px-10 lg:px-[75px] py-[30px] space-y-10"
        style={{ backgroundImage: `url(${background1})` }}
      >
        <h1 className="uppercase text-[41px] font-bold text-[#27348B] text-center">
          Events
        </h1>
        <div className="cards gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="card bg-white w-full">
            <img src={card1} className="w-full" alt="" />
            <p className="p-[10px] text-justify">
              Lorem ipsum dolor, sit amet consectetur emit adipisicing elit.
              Possimus, Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div className="card w-full bg-white">
            <img src={card2} className="w-full" alt="" />
            <p className="p-[10px] text-justify">
              Lorem ipsum dolor, sit amet consectetur emit adipisicing elit.
              Possimus, Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div className="card w-full bg-white">
            <img src={card3} className="w-full" alt="" />
            <p className="p-[10px] text-justify">
              Lorem ipsum dolor, sit amet consectetur emit adipisicing elit.
              Possimus, Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div className="card w-full bg-white">
            <img src={card4} className="w-full" alt="" />
            <p className="p-[10px] text-justify">
              Lorem ipsum dolor, sit amet consectetur emit adipisicing elit.
              Possimus, Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-no-repeat bg-center w-full"
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between text-white px-4 md:px-10 lg:px-[75px] py-10 gap-10">
          <div className="space-y-3 text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-3xl md:text-5xl uppercase font-semibold leading-[52px]">
              leave us a <br /> message
            </h1>
            <p>-feel free to contact us for any queries</p>
          </div>
          <div className="form w-full max-w-md">
            <form>
              <div className="space-y-3">
                <div className="input border w-full">
                  <input
                    type="text"
                    className="py-2 px-3 text-white bg-white/30 backdrop-blur w-full placeholder-white"
                    placeholder="name"
                  />
                </div>
                <div className="input border w-full">
                  <input
                    type="text"
                    className="py-2 px-3 text-white bg-white/30 backdrop-blur w-full placeholder-white"
                    placeholder="email"
                  />
                </div>
                <div className="input border w-full">
                  <input
                    type="text"
                    className="py-2 px-3 text-white bg-white/30 backdrop-blur w-full placeholder-white"
                    placeholder="phone"
                  />
                </div>
                <div className="input border w-full">
                  <textarea
                    rows={3}
                    className="py-2 px-3 text-white bg-white/30 backdrop-blur w-full placeholder-white"
                    placeholder="message"
                  />
                </div>
                <div className="input border w-full">
                  <button className="uppercase bg-blue-800 text-white hover:bg-blue-900 cursor-pointer w-full py-2">
                    send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="h-[30px] sm:h-[50px]"></div>
    </div>
  );
};

export default Home;
