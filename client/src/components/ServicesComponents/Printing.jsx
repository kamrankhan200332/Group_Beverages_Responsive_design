import React from "react";
import sting8 from "../../assets/images/sting8.png";

const Printing = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-10 space-x-3 justify-between py-[40px]">
      <div className="content w-full md:w-[60%] space-y-6">
        <div className="space-y-3">
          <h1 className="uppercase text-[#27348B] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Crafting Your Beverage's Identity with Expert Design Services
          </h1>
          <p className="capitalize text-[#636CA6] font-medium text-justify">
            At AVA Group Beverages, we understand that a compelling design is
            crucial for making your beverage stand out in a crowded market. Our
            design services are dedicated to creating visually stunning and
            effective packaging that captures your brand's essence and attracts
            consumers.
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="uppercase text-[#27348B] md:text-xl font-bold">
            Custom Design:
          </h2>
          <p className="capitalize text-[#636CA6] font-medium text-justify">
            From eye-catching labels to innovative packaging solutions, our team
            of design experts works closely with you to develop a unique look
            that reflects your brand’s identity. We blend creativity with
            functionality to ensure that your beverage not only looks great but
            also meets industry standards and stands out on the shelf.
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="uppercase text-[#27348B] md:text-xl font-bold">
            Brand Identity:
          </h2>
          <p className="capitalize text-[#636CA6] font-medium text-justify">
            Your beverage's design is more than just aesthetics-it's a key
            element of your brand's story. We focus on creating designs that
            resonate with your target audience and convey the quality and
            uniqueness of your product. Whether you’re launching a new drink or
            refreshing an existing line, we tailor our designs to align with
            your vision and market trends.
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="uppercase text-[#27348B] md:text-xl font-bold">
            Packaging Solutions:
          </h2>
          <p className="capitalize text-[#636CA6] font-medium text-justify">
            We offer a range of packaging options to suit your needs, from sleek
            and modern to classic and elegant. Our designs are crafted to
            enhance the consumer experience, ensuring that your beverage is both
            appealing and practical.
          </p>
        </div>

        <div>
          <p className="capitalize text-[#636CA6] font-medium text-justify">
            Partner with AVA Group Beverages to elevate your beverage brand with
            exceptional design services. Contact us today to start creating a
            packaging solution that will captivate your audience and set your
            product apart.
          </p>
        </div>
      </div>

      <div className="image w-full md:w-[40%]">
        <img src={sting8} alt="" />
      </div>
    </div>
  );
};

export default Printing;
