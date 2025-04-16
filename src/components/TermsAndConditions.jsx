import React from "react";
import { termsAndConditions } from "./common/Helper";

function TermsAndConditions() {
  return (
    <section className="w-full flex items-center justify-center py-4">
      <div className="w-full flex flex-col items-center justify-center ">
        <h1 className="pt-4 pb-2 text-base font-semibold leading-10 text-center text-charcoal-gray uppercase select-none lg:text-2xl md:text-3xl">
          terms and conditions
        </h1>
        <div className="w-full max-w-4xl mx-auto px-4 py-12 md:px-12 content-page flex flex-col items-center justify-center gap-4">
          {termsAndConditions.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <h3>
                  <strong>{item.title}</strong>
                </h3>
                <p className="text-center">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TermsAndConditions;
