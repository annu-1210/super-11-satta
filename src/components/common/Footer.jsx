import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-secondary flex items-center justify-center text-white shadow p-4 lg:px-6 lg:py-8 ">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full flex items-center justify-center h-[100px] pr-2">
          <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start text-white sm:mr-4 text-base sm:text-lg space-y-1 sm:space-y-0 sm:space-x-6 ">
            <Link to="/chart">
              <li className="hover:underline">Chart</li>
            </Link>
            <Link to="/privacy-policy">
              <li className="hover:underline">Privacy Policy</li>
            </Link>
            <Link to="/terms-conditions">
              <li className="hover:underline">Terms & Conditions</li>
            </Link>
            <Link
              to="https://wa.me/+917082450947"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="hover:underline">Connect With Us</li>
            </Link>
          </ul>
        </div>
        <div className="w-full flex items-center justify-center border-y border-lighter-gray mt-4 lg:mt-8 md:py-8 p-4 mb-4">
          <p className="text-sm text-center text-light-red ">
            This website does not promote any kind of satta activities. This
            website is made for entertainment purpose only
          </p>
        </div>
        <div className="flex flex-col xsm:flex-row items-center justify-center space-x-3 text-sm text-white sm:text-center w-full">
          <a href="/" className="hover:underline ">
            &copy; super11satta.in&trade;.{" "}
          </a>
          <p> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
