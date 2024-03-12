import React, { useState } from "react";
import "./About/nav.css";
const NavMD = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div
        className={`mb-${
          menuOpen ? "500" : "0"
        } w-screen h-full  bg-white overflow-hidden `}
      >
        {/* navbar */}
        <div className="w-screen py-6 px-5 lg:px-64 bg-[#0b0b0b] flex justify-between text-neutral-300">
          <span className="text-lg font-semibold">Material3</span>

          <ul className="hidden md:flex items-center space-x-5">
            <li>About</li>
            <li>Contact</li>
            <li>Sevice</li>
            <li>Help</li>
          </ul>

          {/* hamburger menu */}
          <button
            className="space-y-1 group md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>

            {/* menu */}
            <ul className="bg-[#0b0b0b] w-screen pb-10 absolute -top-full  group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
              <button
                className="px-10 py-8 relative ml-auto"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
                <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
              </button>
              <div className="flex flex-col border-2 mb-[200px]">
                <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
                  About
                </li>
                <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
                  Contact
                </li>
                <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
                  Sevice
                </li>
                <li className="flex justify-center w-full py-4 mb-10 hover:bg-[#202020]">
                  Help
                </li>
              </div>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavMD;
