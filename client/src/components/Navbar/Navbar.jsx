import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
      <>
        <header className="border-b border-b-white" style={props.borderBottom}>
          <nav className="flex items-center justify-between w-[90%] m-auto py-[18px] px-[15px]">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <div>
              <ul
                className="flex items-center p-[8px] gap-[40px] uppercase text-white font-semibold"
                style={props.style}
              >
                <li>
                  <Link to={"/about"}>About us</Link>
                </li>
                <li>
                  <Link to={"/services"}>services</Link>
                </li>
                <li>
                  <Link to={"/products"}>products</Link>
                </li>
                <li>
                  <Link to={"/careers"}>careers</Link>
                </li>
                <li>
                  <Link to={"/distributors"}>distributors</Link>
                </li>
                <li>
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
