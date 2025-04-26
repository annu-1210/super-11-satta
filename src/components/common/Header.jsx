import React from "react";
// import Navbar from "./Navbar";

function Header() {
  return (
    <header className="navbar bg-transparent w-full">
      <div className="w-full relative overflow-hidden flex items-center justify-center p-4 border-gray-200 ">
        <a href="/">
          <img
            src="./images/super-11-logo.png"
            alt="super-7-satta"
            width={250}
            className="w-[350px] sm:w-48 lg:w-[260px] relative z-10"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
