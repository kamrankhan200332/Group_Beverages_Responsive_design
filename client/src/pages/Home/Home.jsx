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
    <div className="mb-52k">
      <div>
        <div className="">
          <div
            className="heroImg"
            style={{
              backgroundImage: `url(${heroImg})`,
              height: "100vh",
              width: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Navbar />

            <div className="px-[75px] absolute bottom-[50px]">
              <p className="uppercase text-[#27348B]">
                <span className="text-6xl font-bold">power </span>
                <span className="text-4xl font-bold">in every sip</span>
              </p>
              <div>
                <p className="capitalize text-[#636CA6] font-medium">
                  fuel your energy with every sip-bold taste, unstoppable power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[75px] space-y-10 py-[30px]">
        <div className="flex items-center justify-between">
          <div className="w-[50%]">
            <h1 className="uppercase text-[41px] font-bold text-[#27348B]">
              Our Products
            </h1>
            <p className="text-[16px] text-[#636CA6] font-medium">
              Discover our range of energing beverages, crafted for bold <br />{" "}
              flavor and lasting refreshment. power up with every sip!
            </p>
          </div>
          <div className="">
            <button className="bg-[#27348B] text-white hover:bg-blue-800 cursor-pointer uppercase py-1 px-2">
              view all
            </button>
          </div>
        </div>
        <div className="images flex items-center justify-around">
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
          <img src={sting4} className="h-[100vh] w-[100%]" alt="" />
        </div>
      </div>

      <div
        className="bg"
        style={{
          backgroundImage: `url(${background1})`,
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-[75px] space-y-10 py-[30px]">
          <h1 className="uppercase text-[41px] font-bold text-[#27348B] text-center">
            Events
          </h1>
          <div className="cards flex items-center justify-between">
            <div className="card w-[276px] bg-white">
              <img src={card1} alt="" />
              <p className="p-[10px] text-justify">
                Lorem ipsum dolor, sit amet consectetur emit adipisicing elit.
                Possimus, Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="card w-[276px] bg-white">
              <img src={card2} alt="" />
              <p className="p-[10px]  text-justify">
                Lorem ipsum dolor, sit amet consectetur emit adipisicing elit.
                Possimus, Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="card w-[276px] bg-white">
              <img src={card3} alt="" />
              <p className="p-[10px]  text-justify">
                Lorem ipsum dolor, sit amet consectetur emit adipisicing elit.
                Possimus, Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="card w-[276px] bg-white">
              <img src={card4} alt="" />
              <p className="p-[10px]  text-justify">
                Lorem ipsum dolor, sit amet consectetur emit adipisicing elit.
                Possimus, Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="bg relative"
          style={{
            backgroundImage: `url(${background2})`,
            height: "100vh",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-center justify-between h-[100%] text-white px-[75px]">
            <div className="space-y-3">
              <h1 className="text-5xl uppercase font-semibold leading-[52px]">
                leave us a <br /> message
              </h1>
              <p className="">-feel free to contact us for any queries</p>
            </div>
            <div className="form">
              <form>
                <div className="space-y-3">
                  <div className="input border w-[300px] text-white">
                    <input
                      type="text"
                      className="py-2 px-3 text-white bg-white/30 backdrop-blur opacity-[30%] w-full"
                      placeholder="name"
                    />
                  </div>
                  <div className="input border w-[300px] text-white">
                    <input
                      type="text"
                      className="py-2 px-3 text-white bg-white/30 backdrop-blur opacity-[30%] w-full"
                      placeholder="email"
                    />
                  </div>
                  <div className="input border w-[300px] text-white">
                    <input
                      type="text"
                      className="py-2 px-3 text-white bg-white/30 backdrop-blur opacity-[30%] w-full"
                      placeholder="phone"
                    />
                  </div>
                  <div className="input border w-[300px] text-white">
                    <textarea
                      rows={3}
                      className="py-2 px-3 text-white bg-white/30 backdrop-blur opacity-[30%] w-full"
                      placeholder="name"
                    />
                  </div>
                  <div className="input border w-[300px] text-white">
                    <button className="uppercase bg-blue-800 text-white hover:bg-blue-900 cursor-pointer w-full py-2">
                      send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[65px]"></div>
    </div>
  );
};

export default Home;
