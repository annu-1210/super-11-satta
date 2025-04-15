import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="navbar bg-transparent w-full">
      <div className="w-full bg-navbar-bgGradient flex items-center justify-center p-4 border-gray-200">
        <a href="/">
          <img src="./images/super-logo.webp" alt="super-7-satta" width={150} />
        </a>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
