import React from "react";

const Header = () => {
  return (
    <nav className="bg-primary p-4 flex items-center justify-between">
      <a href="/home" className=" text-white px-2 ">
        <img src="logo.png" alt="Company Logo" className="h-12" />
      </a>
      <div className="flex flex-row gap-3 sm:flex-row sm:text-xs sm:gap-1">
        <a
          href="/home"
          className=" border-2 border-secondary text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black "
        >
          Home
        </a>
        <a
          href="/about"
          className="border-2 border-secondary text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black"
        >
          About
        </a>
        <a
          href="/documents"
          className="border-2 border-secondary text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black"
        >
          Documents
        </a>
        <a
          href="/contact"
          className="border-2 border-secondary text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
