import React from "react";

function AboutSattaKing({ aboutSattaKingData, aboutSattaKingDescription }) {
  return (
    <article className="w-full flex flex-col items-center justify-center bg-transparent relative z-50 opacity-100 space-y-3 p-2 ">
      <h3 className="bg-transparent flex items-center justify-start text-base sm:text-[19.2px] mt-4 md:mt-8 w-full text-secondary">
        <strong>{aboutSattaKingData.heading}</strong>
      </h3>
      <div className="flex flex-col text-sm sm:text-base">
        <p>{aboutSattaKingData.info}</p>
        {aboutSattaKingDescription &&
          aboutSattaKingDescription.map((item, index) => (
            <div
              className="flex flex-col items-start justify-start w-full space-y-1 sm:space-y-4 mt-4"
              key={index}
            >
              <h4>
                <strong>{item.title}</strong>
              </h4>
              <ol className="inherited-list list-disc list-inside space-y-1 !marker:mr-2.5 sm:space-y-2">
                <li>{item.desc}</li>
              </ol>
            </div>
          ))}
      </div>
    </article>
  );
}

export default AboutSattaKing;
