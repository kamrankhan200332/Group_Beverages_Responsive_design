import React from "react";
import sting1 from "../../assets/images/sting1.png";
import sting2 from "../../assets/images/sting2.png";
import sting3 from "../../assets/images/sting3.png";
import sting6 from "../../assets/images/sting6.png";
import Navbar from "../../components/Navbar/Navbar";
import aboutBg from "../../assets/images/aboutBg.png";

const About = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="px-4 md:px-10 lg:px-[75px] space-y-10 py-[30px]">
        <div className="flex flex-col md:flex-row  space-y-5 justify-between space-x-5">
          <div className=" w-full md:w-[50%] space-y-2">
            <h1 className="uppercase text-2xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold text-[#27348B]">
              Our Products
            </h1>
            <p className="text-[#636CA6] font-medium text-justify">
              Discover our range of energing beverages, crafted for bold <br />{" "}
              flavor and lasting refreshment. power up with every sip!
            </p>
          </div>
          <div className=" w-full md:w-[50%]">
            <div className="uppercase flex items-center space-x-5 font-medium text-[#27348B]">
              <h2>stimulant</h2>
              <h2>carbonated drink</h2>
            </div>
          </div>
        </div>

        <div className="images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="img">
            <img src={sting1} alt="" />
          </div>
          <div className="img">
            <img src={sting2} alt="" />
          </div>
          <div className="img">
            <img src={sting3} alt="" />
          </div>
          <div className="img">
            <img src={sting6} alt="" />
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      >
        <div className="px-4 md:px-10 lg:px-[75px] py-[30px] flex flex-col md:flex-row items-center">
          <div className="content w-full md:w-[50%] space-y-4">
            <div>
              <h1 className="uppercase font-bold text-[#27348B] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                stimulant drink
              </h1>
              <p className="capitalize text-[#636CA6] font-medium text-justify">
                revitalize your senses with this blend of natural ingredients
                and electrolytes, promoting hydration and alertness.
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="uppercase text-[#27348B] font-semibold sm:text-xl md:text-2xl lg:text-3xl">
                key features
              </h2>
              <p className="capitalize text-[#636CA6] font-medium text-justify">
                electrolyte-enriched, available in flavors such as lemon lime
                and orange splash.
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="uppercase text-[#27348B] font-semibold sm:text-xl md:text-2xl lg:text-3xl">
                ingredients
              </h2>
              <p className="capitalize text-[#636CA6] font-medium text-justify">
                carbonated water, sugar, citric acid (E-330), caffeine (58ppm),
                taurine, multi vitamin, L carnitine, sodium citrate, sodium
                benzonate, color (E150) and artificial flavor.
              </p>
            </div>
          </div>

          <div className="image w-full md:w-[50%]">
            <img src={sting1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
