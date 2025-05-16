import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Formulation from "../../components/ServicesComponents/Formulation";
import Filling from "../../components/ServicesComponents/Filling";
import Designing from "../../components/ServicesComponents/Designing";
import Printing from "../../components/ServicesComponents/Printing";

const Services = () => {
  const [formulation, setFormulation] = useState(true);
  const [filling, setFilling] = useState(false);
  const [designing, setDesigning] = useState(false);
  const [printing, setPrinting] = useState(false);
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="px-[75px]">
        <nav className="py-[30px]">
          <ul className="flex items-center gap-5 ">
            <li>
              <button
                className={`uppercase font-bold text-[#27348B] text-xl cursor-pointer ${
                  formulation && "border-b-2 border-b-[#27348B]"
                }`}
                onClick={() => {
                  setFormulation(true);
                  setFilling(false);
                  setDesigning(false);
                  setPrinting(false);
                }}
              >
                formulation
              </button>
            </li>
            <li>
              <button
                className={`uppercase font-bold text-[#27348B] text-xl cursor-pointer ${
                  filling && "border-b-2 border-b-[#27348B]"
                }`}
                onClick={() => {
                  setFilling(true);
                  setFormulation(false);
                  setDesigning(false);
                  setPrinting(false);
                }}
              >
                filling
              </button>
            </li>
            <li>
              <button
                className={`uppercase font-bold text-[#27348B] text-xl cursor-pointer ${
                  designing && "border-b-2 border-b-[#27348B]"
                }`}
                onClick={() => {
                  setDesigning(true);
                  setFilling(false);
                  setFormulation(false);
                  setPrinting(false);
                }}
              >
                designing
              </button>
            </li>
            <li>
              <button
                className={`uppercase font-bold text-[#27348B] text-xl cursor-pointer ${
                  printing && "border-b-2 border-b-[#27348B]"
                }`}
                onClick={() => {
                  setPrinting(true);
                  setFilling(false);
                  setFormulation(false);
                  setDesigning(false);
                }}
              >
                printing
              </button>
            </li>
          </ul>
          {formulation && <Formulation />}
          {filling && <Filling />}
          {designing && <Designing />}
          {printing && <Printing />}
        </nav>
      </div>
    </div>
  );
};

export default Services;
