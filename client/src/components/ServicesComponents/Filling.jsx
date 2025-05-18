import React from "react";
import sting8 from "../../assets/images/sting8.png";

const Filling = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-10 space-x-3 justify-between py-[40px]">
      <div className="content w-full md:w-[60%] space-y-6">
        <div className="space-y-3">
          <h1 className="uppercase text-[#27348B] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Premium Filling Services for Stimulant Drinks and Carbonated Juices
          </h1>
          <p className="capitalize text-[#636CA6] font-medium text-justify">
            At AVA Group Beverages, we specialize in providing top-tier filling
            services for stimulant drinks and carbonated juices. Our
            state-of-the-art facilities ensure that your beverages are bottled
            with precision and care, maintaining the highest standards of
            quality and consistency.
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="uppercase text-[#27348B] md:text-xl font-bold">
            Stimulant Drinks:
          </h2>
          <p className="capitalize text-[#636CA6] font-medium text-justify">
            Our filling services cater to a wide range of stimulant drink
            formulations, from classic revitalizers to innovative new blends. We
            handle every aspect of the filling process to deliver a product that
            meets your specifications and stands out in the competitive market.
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="uppercase text-[#27348B] md:text-xl font-bold">
            Carbonated Juices:
          </h2>
          <p className="capitalize text-[#636CA6] font-medium text-justify">
            Whether you’re offering zesty citrus flavors or rich, fruity
            combinations, our advanced filling technology guarantees that your
            carbonated juices are perfectly carbonated and sealed. We ensure
            that every bottle is fresh, flavorful, and ready for consumers.
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="uppercase text-[#27348B] md:text-xl font-bold">
            Why Choose Us?
          </h2>
          <p className="capitalize text-[#636CA6] font-medium text-justify">
            Our commitment to quality, efficiency, and flexibility means that
            you can trust us to handle your filling needs with the utmost
            professionalism. From small batches to large-scale production, we’re
            here to support your beverage brand every step of the way.
          </p>
        </div>

        <div>
          <p className="capitalize text-[#636CA6] font-medium text-justify">
            Contact AVA Group Beverages today to discover how our filling
            services can enhance your stimulant drinks and carbonated juices,
            helping your brand thrive in the market.
          </p>
        </div>
      </div>

      <div className="image w-full md:w-[40%]">
        <img src={sting8} alt="" />
      </div>
    </div>
  );
};

export default Filling;
