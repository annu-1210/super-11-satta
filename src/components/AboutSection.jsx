import React from "react";
import AboutSattaKing from "./common/AboutSattaKing";
import { aboutSattaKing } from "./common/Helper";

function AboutSection() {
  return (
    <section className="w-full flex items-center justify-center relative p-1 md:p-8 my-16 shadow-xl overflow-hidden ">
      <div className="absolute inset-0 bg-custom-gradient4 opacity-20 "></div>
      <div className="w-full flex flex-col items-center justify-center relative z-50 opacity-100">
        <AboutSattaKing aboutSattaKingData={aboutSattaKing[0]} />
        <AboutSattaKing aboutSattaKingData={aboutSattaKing[1]} />
        <AboutSattaKing
          aboutSattaKingData={aboutSattaKing[2]}
          aboutSattaKingDescription={aboutSattaKing[2].description}
        />
        <AboutSattaKing aboutSattaKingData={aboutSattaKing[3]} />
        <AboutSattaKing aboutSattaKingData={aboutSattaKing[4]} />
      </div>
    </section>
  );
}

export default AboutSection;
