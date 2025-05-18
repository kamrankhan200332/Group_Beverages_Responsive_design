import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import distributorsBg from "../../assets/images/distributorsBg.png";
import sting7 from "../../assets/images/sting7.png";
import user from "../../assets/images/user.svg";
import phone from "../../assets/images/phone.svg";
import location from "../../assets/images/location.svg";
import flag from "../../assets/images/flag.png";
import flag2 from "../../assets/images/flag2.png";
import filter from "../../assets/images/filter.png";

const Distributors = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${distributorsBg})`,
        }}
      >
        <div className="pb-[60px] py-[30px] lg:py-0">
          <div className="px-4 md:px-10 lg:px-[75px] flex flex-col md:flex-row items-center justify-between h-[100%]">
            <div className="content w-full md:w-[60%] space-y-3">
              <h1 className="uppercase font-bold text-[#27348B] md:-mr-[45px] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Welcome to the ZOR Energy Stimulant Distributor Directory!
              </h1>
              <p className="text-[#636CA6] font-medium text-justify">
                Looking for an authorized distributor of ZOR Energy products in
                your region? Our distributor list provides you with contact
                details for trusted sole distributors across the country.
                Whether you're a retailer, business, or individual looking to
                purchase in bulk, you'll find the right distributor to meet your
                needs.
              </p>
              <p className="text-[#636CA6] font-medium">
                Browse the list below to find the nearest distributor, and get
                in touch with them for all your ZOR Energy product inquiries and
                orders. We're here to ensure that you always have access to the
                best energy stimulant in the market".
              </p>
            </div>
            <div className="image w-full md:w-[40%]">
              <img src={sting7} alt="" />
            </div>
          </div>

          <div className="px-4 md:px-10 lg:px-[75px] space-y-10">
            <div className="bg-white p-7 space-y-10 shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex flex-col md:items-center md:flex-row justify-between">
              <div className="left space-y-6 w-full md:w-[65%]">
                <div className="flex items-center space-x-4">
                  <span>
                    <img src={filter} alt="icon" />
                  </span>
                  <h1 className="uppercase font-bold text-[#27348B] text-xl md:text-2xl lg:text-3xl">
                    CHILL ZONE FOOD & BEVERAGES
                  </h1>
                </div>

                <div className="gap-3 flex items-center justify-between flex-wrap">
                  <div className="flex items-center space-x-2">
                    <span className="">
                      <img src={user} alt="" />
                    </span>
                    <p className="text-[#636CA6] font-medium">
                      Mr. Kamran Khan
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#636CA6] text-xl">
                      <img src={phone} alt="phoneIcon" />
                    </span>
                    <p className="text-[#636CA6] font-medium">+92 3119921465</p>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-0">
                    <span className="text-[#636CA6] text-xl">
                      <img src={location} alt="locationIcon" />
                    </span>
                    <p className="text-[#636CA6] font-medium">
                      Warsak Road Hakeem Khan kalay Peshawar
                    </p>
                  </div>
                </div>
              </div>
              <div className="right md:space-y-6 flex items-center flex-row md:flex-col space-x-2 ">
                <div>
                  <button className="uppercase bg-[#27348B] text-white py-1 px-2 md:px-4 cursor-pointer">
                    get in touch
                  </button>
                </div>

                <div className="flex items-center space-x-1.5">
                  <span className="text-[#636CA6] text-xl">
                    <img src={flag} alt="flagImg" />
                  </span>
                  <p className="text-[#27348B] font-semibold uppercase">
                    Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-7 space-y-5 shadow-[0_4px_12px_rgba(0,0,0,0.25)] flex flex-col md:items-center md:flex-row justify-between">
              <div className="left space-y-6 w-full md:w-[65%]">
                <div className="flex items-center space-x-4">
                  <span>
                    <img src={filter} alt="icon" />
                  </span>
                  <h1 className="uppercase font-bold text-[#27348B] text-xl md:text-2xl lg:text-3xl">
                    another distributor
                  </h1>
                </div>

                <div className="gap-3 flex items-center justify-between flex-wrap">
                  <div className="flex items-center space-x-2">
                    <span className="">
                      <img src={user} alt="" />
                    </span>
                    <p className="text-[#636CA6] font-medium">
                      Prof Dr. Ali Ahmad
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#636CA6] text-xl">
                      <img src={phone} alt="phoneIcon" />
                    </span>
                    <p className="text-[#636CA6] font-medium">+92 3459192796</p>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-0">
                    <span className="text-[#636CA6] text-xl">
                      <img src={location} alt="locationIcon" />
                    </span>
                    <p className="text-[#636CA6] font-medium">
                      Mattani Toker Kheel
                    </p>
                  </div>
                </div>
              </div>
              <div className="right md:space-y-6 flex items-center flex-row md:flex-col space-x-3">
                <button className="uppercase bg-[#27348B] text-white py-1 px-2 md:px-4 cursor-pointer">
                  get in touch
                </button>

                <div className="flex items-center space-x-1.5">
                  <span className="text-[#636CA6] text-xl">
                    <img src={flag2} alt="flagImg" />
                  </span>
                  <p className="text-[#27348B] font-semibold uppercase">
                    UZBEKISTAN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distributors;
