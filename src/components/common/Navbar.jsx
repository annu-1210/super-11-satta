import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center items-center bg-transparent w-full">
      <div className="px-3 xsm:px-4 py-2 xsm:py-3 mx-auto md:px-6 flex justify-center items-center w-full">
        <ul className="flex justify-center items-center space-x-6 xsm:space-x-8 text-sm font-medium mr-0 xsm:mr-6 text-deep-gray">
          <li className="hover:underline transition duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline transition duration-300 ease-in-out">
            <Link to="/chart">Chart</Link>
          </li>
          <li className="hover:underline transition duration-300 ease-in-out">
            <Link
              to="https://wa.me/+917015916793"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Now
            </Link>
          </li>
          <li className="hover:underline transition duration-300 ease-in-out">
            <Link to="/">LOGIN</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
