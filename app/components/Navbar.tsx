"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-full bg-gray-700 text-white p-5 flex flex-col justify-center items-center">
      <ul className="w-full space-y-4">
        <li className="w-full">
          <Link
            href="/"
            className="block text-5xl font-bold hover:bg-orange-600 hover:text-white px-4 py-5 w-full text-center transition-all rounded-md"
          >
            Home
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/about"
            className="block text-5xl font-bold hover:bg-orange-600 hover:text-white px-4 py-5 w-full text-center transition-all rounded-md"
          >
            About
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/howtouse"
            className="block text-5xl font-bold hover:bg-orange-600 hover:text-white px-4 py-5 w-full text-center transition-all rounded-md"
          >
            How to Use
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="/predict"
            className="block text-5xl font-bold hover:bg-orange-600 hover:text-white px-4 py-5 w-full text-center transition-all rounded-md"
          >
            Predict
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
