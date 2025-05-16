import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // const [color, setColor] = useState("/");
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <header
        className={`border-b ${
          location.pathname === "/" ? "border-b-white" : "border-b-black"
        } `}
      >
        <nav className="flex items-center justify-between w-[90%] m-auto py-[18px] px-[15px]">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <div>
            <ul
              className={`flex items-center p-[8px] gap-[40px] uppercase ${
                location.pathname === "/" ? "text-white" : "text-[#27348B]"
              }
              }  font-semibold`}
            >
              <li
                className={`${
                  location.pathname === "/about" &&
                  " bg-[#27348B] py-1 px-2 text-white rounded"
                }`}
              >
                <Link to={"/about"}>About us</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/services" &&
                  " bg-[#27348B] py-1 px-2 text-white rounded"
                }`}
              >
                <Link to={"/services"}>services</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/products" &&
                  " bg-[#27348B] py-1 px-2 text-white rounded"
                }`}
              >
                <Link to={"/products"}>products</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/careers" &&
                  " bg-[#27348B] py-1 px-2 text-white rounded"
                }`}
              >
                <Link to={"/careers"}>careers</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/distributors" &&
                  " bg-[#27348B] py-1 px-2 text-white rounded"
                }`}
              >
                <Link to={"/distributors"}>distributors</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/contact" &&
                  " bg-[#27348B] py-1 px-2 text-white rounded"
                }`}
              >
                <Link to={"/contact"}>contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
