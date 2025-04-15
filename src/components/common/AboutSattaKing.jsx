import React from "react";

function AboutSattaKing({ aboutSattaKingData, aboutSattaKingDescription }) {
  return (
    <article className="w-full flex flex-col items-center justify-center bg-transparent">
      <h3 className="bg-cold-blue flex items-center justify-center text-[19.2px] py-4 px-6 w-full text-white">
        <strong>{aboutSattaKingData.heading}</strong>
      </h3>
      <div className="flex flex-col  p-[9.6px]">
        <p>{aboutSattaKingData.info}</p>
        {aboutSattaKingDescription &&
          aboutSattaKingDescription.map((item, index) => (
            <div
              className="flex flex-col items-start justify-start w-full space-y-4 mt-4"
              key={index}
            >
              <h4>
                <strong>{item.title}</strong>
              </h4>
              <ol className="inherited-list list-disc list-inside space-y-2">
                <li>{item.desc}</li>
              </ol>
            </div>
          ))}
      </div>
    </article>
  );
}

export default AboutSattaKing;
