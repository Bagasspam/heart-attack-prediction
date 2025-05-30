"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu di mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Tombol Hamburger hanya untuk perangkat mobile */}
      <div className="lg:hidden flex justify-between items-center w-full p-5 fixed top-0 left-0 z-50 bg-gray-700 text-white">
        <button className="text-4xl" onClick={toggleMenu}>
          {isOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Navbar Menu */}
      <div
        className={`
          w-full space-y-4 lg:space-y-0
          ${isOpen ? "block translate-x-0" : "translate-x-full"}
          lg:block lg:translate-x-0
          lg:fixed lg:top-0 lg:left-0 lg:w-1/4 lg:h-screen
          lg:bg-gray-700 lg:text-white lg:z-40
          lg:flex lg:items-center lg:justify-center
          lg:transition-none
          fixed top-0 left-0 bg-gray-700 text-white z-40 flex items-center justify-center h-screen transition-all duration-300 ease-out
        `}
      >
        <ul className="w-full lg:w-full lg:flex lg:flex-col lg:space-y-6 lg:space-x-0">
          <li className="w-full lg:w-full">
            <Link
              href="/"
              className="block text-4xl font-bold hover:bg-orange-600 hover:text-white px-4 py-5 w-full text-center transition-all rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="w-full lg:w-full">
            <Link
              href="/about"
              className="block text-4xl font-bold hover:bg-orange-600 hover:text-white px-4 py-5 w-full text-center transition-all rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="w-full lg:w-full">
            <Link
              href="/howtouse"
              className="block text-4xl font-bold hover:bg-orange-600 hover:text-white px-4 py-5 w-full text-center transition-all rounded-md"
              onClick={() => setIsOpen(false)}
            >
              How to Use
            </Link>
          </li>
          <li className="w-full lg:w-full">
            <Link
              href="/predict"
              className="block text-4xl font-bold hover:bg-orange-600 hover:text-white px-4 py-5 w-full text-center transition-all rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Predict
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
