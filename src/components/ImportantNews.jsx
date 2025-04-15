import React from "react";
import { FiArrowRight } from "react-icons/fi";

function ImportantNews() {
  return (
    <section className="w-full flex items-center justify-center bg-transparent mt-4 overflow-hidden">
      <div className="w-full flex flex-col justify-center space-y-4 ">
        <h2 className="bg-deep-blue text-2xl font-bold text-center text-white py-4 w-full">
          Important Satta King News
        </h2>
        <div className="grid grid-cols-1 gap-2 px-4 lg:grid-cols-3">
          <article className="flex flex-col justify-end max-w-sm mb-4 bg-white border border-gray-500 rounded-lg shadow cursor-pointer h-[410px] w-full">
            {/* <img src="" alt="" /> */}
            <div></div>
            <div className="p-5 bg-gray-700">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 uppercase hover:underline ">
                is satta king legal ?
              </h2>
              <a
                href="/"
                className="inline-flex items-center pr-2 pl-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <FiArrowRight className="w-5 h-4 ml-1" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ImportantNews;
