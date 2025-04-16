import React from "react";

function AboutSattaKing({ aboutSattaKingData, aboutSattaKingDescription }) {
  return (
    <article className="w-full flex flex-col items-center justify-center bg-transparent mt-2 sm:mt-0">
      <h3 className="bg-cold-blue flex items-center justify-center text-base sm:text-[19.2px] py-4 px-4 sm:px-6 w-full text-white">
        <strong>{aboutSattaKingData.heading}</strong>
      </h3>
      <div className="flex flex-col p-[9.6px] text-sm sm:text-base">
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
