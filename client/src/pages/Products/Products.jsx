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

      <div className="px-[75px] space-y-10 py-[30px]">
        <div className="flex items-center justify-between">
          <div className="w-[50%]">
            <h1 className="uppercase text-[41px] font-bold text-[#27348B]">
              Our Products
            </h1>
            <p className="text-[#636CA6] font-medium">
              Discover our range of energing beverages, crafted for bold <br />{" "}
              flavor and lasting refreshment. power up with every sip!
            </p>
          </div>
          <div className="">
            <div className="uppercase flex items-center space-x-5 font-medium text-[#27348B]">
              <h2>stimulant</h2>
              <h2>carbonated drink</h2>
            </div>
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
          <div className="img">
            <img src={sting6} alt="" />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${aboutBg})`,
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-[75px] py-[30px] h-[100%] flex items-center">
          <div className="content w-[50%] space-y-4">
            <div>
              <h1 className="uppercase text-[41px] font-bold text-[#27348B]">
                stimulant drink
              </h1>
              <p className="capitalize text-[#636CA6] font-medium">
                revitalize your senses with this blend of natural ingredients{" "}
                <br />
                and electrolytes, promoting hydration and alertness.
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="uppercase text-[#27348B] font-semibold text-2xl">
                key features
              </h2>
              <p className="capitalize text-[#636CA6] font-medium">
                electrolyte-enriched, available in flavors such as lemon lime{" "}
                <br />
                and orange splash.
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="uppercase text-[#27348B] font-semibold text-2xl">
                ingredients
              </h2>
              <p className="capitalize text-[#636CA6] font-medium">
                carbonated water, sugar, citric acid (E-330), caffeine <br />{" "}
                (58ppm), taurine, multi vitamin, L carnitine, sodium citrate,{" "}
                <br /> sodium benzonate, color (E150) and artificial flavor.
              </p>
            </div>
          </div>
          <div className="image w-[50%]">
            <img src={sting1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
