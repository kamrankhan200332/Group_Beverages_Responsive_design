import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  return (
    <>
      <header
        className={`border-b ${
          location.pathname === "/" ? "border-b-white" : "border-b-black"
        } `}
      >
        <nav className="flex items-center justify-between w-[90%] m-auto py-[18px]">
          <Link to={"/"}>
            <div className=" w-[60px] sm:w-[102px]">
              <img src={logo} className="w-full" alt="logo" />
            </div>
          </Link>
          <div className="">
            <ul
              className={`absolute md:static md:min-h-fit left-0 min-h-[50vh] top-[-100%] w-full md:w-auto flex md:items-center px-5 flex-col md:flex-row md:bg-transparent bg-[#27348B] p-[15px] gap-[20px] md:gap-[35px] uppercase ${
                location.pathname === "/"
                  ? "text-white"
                  : "md:text-[#27348B] text-white"
              }
              }  font-semibold`}
            >
              <li
                className={`${
                  location.pathname === "/about" &&
                  " md:bg-[#27348B] md:py-1 md:px-2 text-white md:rounded"
                }`}
              >
                <Link to={"/about"}>About us</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/services" &&
                  " md:bg-[#27348B] md:py-1 md:px-2 text-white md:rounded"
                }`}
              >
                <Link to={"/services"}>services</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/products" &&
                  " md:bg-[#27348B] md:py-1 md:px-2 text-white md:rounded"
                }`}
              >
                <Link to={"/products"}>products</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/distributors" &&
                  " md:bg-[#27348B] md:py-1 md:px-2 text-white md:rounded"
                }`}
              >
                <Link to={"/distributors"}>distributors</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/contact" &&
                  " md:bg-[#27348B] md:py-1 md:px-2 text-white md:rounded"
                }`}
              >
                <Link to={"/contact"}>contact</Link>
              </li>
            </ul>
          </div>
          <div
            className={`burger text-xl cursor-pointer md:hidden ${
              location.pathname === "/" ? "text-white" : "text-[#27348B]"
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <div className="text-2xl">
                <IoMdClose />
              </div>
            ) : (
              <GiHamburgerMenu />
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
