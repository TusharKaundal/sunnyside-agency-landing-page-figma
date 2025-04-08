import React, { useState } from "react";

const Navbar = () => {
  const [mobilenav, setMobileNav] = useState(false);

  return (
    <header className="absolute z-57 w-full px-4 top-6 md:px-10 font-barlow">
      <nav className="w-full flex justify-between items-center gap-6">
        <h1 className="text-[20px] font-bold animate-scaleup">sunnyside</h1>

        <ul className="hidden md:flex items-center gap-2 text-center [&>li]:[&>a:focus]:bg-white [&>li]:[&>a:focus]:font-fraunces [&>li]:[&>a:focus]:font-bold [&>li]:[&>a:focus]:text-[#24303E] [&>li]:animate-movedown ">
          <li className="focus-within:text-red-400">
            <a
              href="#"
              className="w-[100px] py-3 flex justify-center items-center hover:cursor-pointer hover:bg-white/25 rounded-[48px] focus:outline-none"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-[100px] py-3 flex justify-center items-center hover:cursor-pointer hover:bg-white/25 rounded-[48px] focus:outline-none"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-[100px] py-3 flex justify-center items-center hover:cursor-pointer hover:bg-white/25 rounded-[48px] focus:outline-none"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-[100px] py-3 flex justify-center items-center hover:cursor-pointer hover:bg-white/25 rounded-[48px] focus:outline-none"
            >
              Contact
            </a>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="md:hidden size-8 hover:cursor-pointer"
          onClick={() => setMobileNav((prev) => !prev)}
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </nav>

      {mobilenav && (
        <div className="md:hidden text-[#808397] font-semibold leading-6 -tracking-[0.14px] text-[20px] relative z-20 flex justify-center items-center py-10 mt-5 bg-white w-full overflow-x-clip animate-slideleft">
          <div className="absolute w-6 h-6 bg-white rotate-45 -right-3 -top-3"></div>
          <ul className="flex flex-col gap-4 [&>li]:[&>a:focus]:bg-yellow-300 [&>li]:[&>a:focus]:font-fraunces [&>li]:[&>a:focus]:font-bold [&>li]:[&>a:focus]:text-[#24303E] text-center">
            <li>
              <a
                className="block  px-6 py-3 hover:cursor-pointer hover:bg-yellow-300 rounded-[48px] focus:outline-none"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="block  px-6 py-3 hover:cursor-pointer hover:bg-yellow-300 rounded-[48px] focus:outline-none"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="block  px-6 py-3 hover:cursor-pointer hover:bg-yellow-300 rounded-[48px] focus:outline-none"
                href="#"
              >
                Project
              </a>
            </li>
            <li>
              <a
                className="block  px-6 py-3 hover:cursor-pointer hover:bg-yellow-300 rounded-[48px] focus:outline-none"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
