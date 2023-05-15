import React from "react";
import { urlFor } from "../sanity";
import ImageSlider from "./ImageSlider";
import "slick-carousel/slick/slick.css";
// import React from "react";
import "slick-carousel/slick/slick-theme.css";

function HeroSection({ heroSection }) {
  const style =
    "relative flex justify-center items-center  h-80 object-cover px-10 lg:h-screen w-screen ";
  console.log("Fetch data : ", heroSection);
  return (
    <div>
      <div className="py-20 md:py-0 px-10  md:flex lg:justify-between lg:items-center lg:flex lg:border-y ">
        <div className="px-10 space-y-5">
          <h1 className="text-sky-700 font-bold text-4xl tracking-wide">
            {heroSection.namamadrasah}
          </h1>
          {console.log(heroSection)}
          <h2 className="pt-2 text-sky-600 text-xl">{heroSection.heading}</h2>
        </div>
        <div className="items-center overflow-hidden h-screen w-screen my-10">
          <ImageSlider sliderStyle={style} />
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
