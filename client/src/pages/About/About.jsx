import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import aboutBg1 from "../../assets/images/aboutBg1.png"

const About = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="px-[75px] ">
        <div className="py-[75px] space-y-4 ">
          <h1 className="uppercase text-[35px] font-bold text-[#27348B]">
            AVA Group Beverages Pakistan
          </h1>
          <p className="text-[#636CA6] font-medium text-justify">
            Welcome to the forefront of beverage innovation at our
            state-of-the-art Carbonated Juices Manufacturing Plant. We at AVA
            Group Beverages, Pakistan are proud to introduce a revolutionary
            approach to crafting refreshing carbonated beverages that combine
            the natural goodness of fruit juices and Stimulant Drinks with the
            effervescence loved by consumers worldwide.
          </p>
          <p className="text-[#636CA6] font-medium text-justify">
            Carbonated juices can have a positive impact on health for several
            reasons. Firstly, they provide a refreshing alternative to sugary
            sodas, often containing lower levels of added sugars and artificial
            ingredients. By combining the natural goodness of fruit juices with
            sparkling water, carbonated juices and stimulant drinks offer
            hydration along with essential vitamins and minerals found in
            fruits. Additionally, the effervescence can provide a pleasant
            sensory experience that encourages hydration, making it easier for
            individuals to meet their daily fluid intake requirements. Moreover,
            a moderate consumption of carbonated beverages may aid digestion due
            to the natural acids present in fruit juices. Overall, opting for
            carbonated juices and stimulant drinks of AVA Group Beverages
            Pakistan can be a flavorful and health-conscious choice, offering a
            delightful way to enjoy the benefits of fruits and energy while
            staying hydrated.
          </p>
        </div>
      </div>
      <div className="">
        <div
          className="image"
          style={{
            backgroundImage: `url(${aboutBg1})`,
            height: "100vh",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="px-[75px] w-[50%] flex justify-center h-full flex-col space-y-2">
            <h1 className="uppercase text-[26px] font-bold text-[#27348B]">
              Mission & VISION
            </h1>
            <p className="text-[#636CA6] font-medium text-justify">
              Our mission and vision are to redefine beverages with healthier,
              fruit-based alternatives that balance taste, quality, and
              well-being. By using natural ingredients and sustainable
              practices, we aim to inspire vibrant lifestyles and transform the
              way people enjoy drinks.
            </p>
          </div>
        </div>

        <div className="h-[65px]"></div>
      </div>
    </div>
  );
};

export default About;
