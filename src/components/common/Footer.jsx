import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-cold-blue flex items-center justify-center text-white shadow p-4 lg:px-6 lg:py-8 ">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full flex items-center justify-center sm:justify-end h-[100px] pr-2">
          <ul className="flex flex-col sm:flex-row flex-wrap items-center !justify-center md:justify-start text-white sm:mr-4 text-base sm:text-lg space-y-1 sm:space-x-6 ">
            <a href="/">
              <li className="hover:underline">Chart</li>
            </a>
            <a href="/">
              <li className="hover:underline">Privacy Policy</li>
            </a>
            <a href="/">
              <li className="hover:underline">Terms & Conditions</li>
            </a>
            <a
              href="https://wa.me/+917015916793"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="hover:underline">Connect</li>
            </a>
          </ul>
        </div>
        <div className="w-full flex items-center justify-center border-y border-lighter-gray mt-4 lg:mt-8 md:pt-8 p-4 md:pb-4 mb-4">
          <p className="text-sm text-center text-light-red ">
            This website does not promote any kind of satta activities. This
            website is made for entertainment purpose only
          </p>
        </div>
        <div className="flex items-center justify-center space-x-1 text-sm text-white sm:text-center ">
          <span> &copy;</span>
          <a href="/" className="hover:underline ">
            super-7-satta.com&trade;.{" "}
          </a>
          <p> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
