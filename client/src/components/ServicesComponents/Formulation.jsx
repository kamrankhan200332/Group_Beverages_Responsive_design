import React from "react";
import sting8 from "../../assets/images/sting8.png"

const Formulation = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-10 space-x-3 justify-between py-[40px]">
      <div className="content w-full md:w-[60%] space-y-6">
        <div className="space-y-3">
          <h1 className="uppercase text-[#27348B] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Elevate Your Beverage Brand with Our Expert Formulation and Filling
            Services
          </h1>
          <p  className="capitalize text-[#636CA6] font-medium text-justify">
            Looking to make a splash in the beverage industry? At AVA Group
            Beverages, we offer top-notch stimulant drink and carbonated juice
            formulation and filling services designed to bring your unique
            beverage ideas to life.
          </p>
        </div>

        <div  className="space-y-1">
          <h2 className="uppercase text-[#27348B] md:text-xl font-bold">Custom Formulations:</h2>
          <p  className="capitalize text-[#636CA6] font-medium text-justify">
            Our expert team specializes in creating distinctive stimulant drink
            formulas and vibrant carbonated juice blends. Whether you're aiming
            for a bold new flavor or a classic taste with a twist, we craft
            custom formulations that capture your vision and appeal to your
            target audience.
          </p>
        </div>

        <div  className="space-y-1">
          <h2 className="uppercase text-[#27348B] md:text-xl font-bold">State-of-the-Art Filling:</h2>
          <p  className="capitalize text-[#636CA6] font-medium text-justify">
            Once your formula is perfected, we handle the filling process with
            precision and efficiency. Our advanced facilities ensure that every
            bottle is filled to perfection, maintaining the highest quality and
            consistency.
          </p>
        </div>

        <div  className="space-y-1">
          <h2 className="uppercase text-[#27348B] md:text-xl font-bold">Flavor Innovation:</h2>
          <p  className="capitalize text-[#636CA6] font-medium text-justify">
            We take pride in our ability to mix and match flavors to create
            exciting new profiles. From energizing citrus bursts to refreshing
            berry blends, our creative approach ensures that your beverages
            stand out on the shelf.
          </p>
        </div>

        <div>
          <p  className="capitalize text-[#636CA6] font-medium text-justify">
            Partner with us to turn your beverage ideas into market-ready
            products. Contact AVA Group Beverages today to explore how our
            formulation and filling services can set your brand apart.
          </p>
        </div>
      </div>

      <div className="image w-full md:w-[40%]">
        <img src={sting8} alt="" />
      </div>
    </div>
  );
};

export default Formulation;
