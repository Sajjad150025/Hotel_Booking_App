import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);


  const toggleNav = () => setNav(!nav);
  
  return (
    <div className="bg-slate-900">
      <div className="flex h-24 justify-between items-center max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="text-slate-200 w-full font-bold text-3xl">
          Hotel_Booking_App.
        </h1>
        <ul className="hidden md:flex text-white">
          <li className="p-4 cursor-pointer hover:font-bold hover:underline hover:decoration-blue-400">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 cursor-pointer hover:font-bold hover:underline hover:decoration-blue-400">
            <Link to="/about">About</Link>
          </li>
         
          <li className="p-4 cursor-pointer hover:font-bold hover:underline hover:decoration-blue-400">
            <Link to="/room">Room</Link>
          </li>
          <li className="p-4 cursor-pointer hover:font-bold hover:underline hover:decoration-blue-400">
            <Link to="/service">Service</Link>
          </li>
          <li className="p-4 cursor-pointer hover:font-bold hover:underline hover:decoration-blue-400">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={toggleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose className="cursor-pointer w-8 h-8 text-slate-200" />
          ) : (
            <RiMenu4Line className="cursor-pointer w-8 h-8 text-slate-200" />
          )}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-slate-800 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className=" text-cyan-200 w-full font-bold text-3xl px-4 py-7">
            Hotel_Booking_App
          </h1>
          <ul className="uppercase">
            <li className="p-4 cursor-pointer border-b border-b-gray-700 hover:bg-slate-700">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 cursor-pointer border-b border-b-gray-700 hover:bg-slate-700">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 cursor-pointer border-b border-b-gray-700 hover:bg-slate-700">
              <Link to="/room">Room</Link>
            </li>
            <li className="p-4 cursor-pointer border-b border-b-gray-700 hover:bg-slate-700">
              <Link to="/service">Service</Link>
            </li>
            <li className="p-4 cursor-pointer border-b border-b-gray-700 hover:bg-slate-700">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;