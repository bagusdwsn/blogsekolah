import React from "react";
import { urlFor } from "../sanity";
import Profil from "../pages/Profil";

function HeroSection({ heroSection }) {
  console.log("Fetch data : ", heroSection);
  return (
    <div>
      <div className="px-10 md:flex lg:justify-between lg:items-center lg:flex lg:border-y ">
        <div className="px-10 space-y-5">
          <h1 className="text-4xl max-w-xl font-serif">
            {heroSection.namamadrasah}
          </h1>
          {console.log(heroSection)}
          <h2>{heroSection.heading}</h2>
        </div>
        <img
          className="hidden md:inline-flex h-80 object-cover px-10 lg:h-screen w-screen "
          src={urlFor(heroSection.banner).url()}
        />
      </div>
    </div>
  );
}
export default HeroSection;
