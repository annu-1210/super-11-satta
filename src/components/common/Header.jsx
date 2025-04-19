import React from "react";
// import Navbar from "./Navbar";

function Header() {
  return (
    <header className="navbar bg-transparent w-full">
      <div className="w-full relative overflow-hidden flex items-center justify-center p-4 border-gray-200 ">
      {/* bg-custom-gradient4 before:absolute before:inset-0 before:bg-custom-gradient2 before:z-0 transition-all duration-100 ease-in-out z-0 */}
        <a href="/">
          <img
            src="./images/adobe-logo.png"
            alt="super-7-satta"
            width={180}
            className="w-28 sm:w-36 lg:w-[180px] relative z-10"
          />
        </a>
      </div>
      {/* <Navbar /> */}
    </header>
  );
}

export default Header;
