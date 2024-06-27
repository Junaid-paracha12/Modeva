import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PopupModal() {
  return (
    <>
      <nav className=" fixed top-8 right-11 bg-white  bg-opacity-70 opacity-100 z-50 backdrop-filter backdrop-blur-md rounded-lg w-40 h-auto py-5 px-6 transition-transform duration-300">
        <ul className="flex items-start flex-col gap-3  ">
          <li className="text-sm">Catelog</li>
          <li className="text-sm">Sale</li>
          <li className="text-sm">New Arrival</li>
          <li className="text-sm">About</li>
          <li className="text-sm">Car Rental</li>
        </ul>
      </nav>
    </>
  );
}
