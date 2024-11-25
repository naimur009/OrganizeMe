import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import mainIcon from "../assets/notebook.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-[#202124] dark:border-gray-700 pt-3 pb-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={mainIcon}
            className="h-8"
            alt="notebook"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          OrganizeMe
          </span>
        </NavLink>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col text-xl font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-[#202124] dark:border-gray-700"
          onClick={() => {
            setTimeout(()=>{
              setIsMenuOpen(!isMenuOpen)
            },50)
            
          }}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white rounded md:bg-transparent md:p-0 ${isActive
                    ? "bg-[blue-600] text-white md:text-blue-600 dark:bg-[#202124] md:dark:bg-transparent"
                    : "hover:text-blue-600"
                  }`
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/notes"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white rounded md:bg-transparent md:p-0 ${isActive
                    ? "bg-blue-600 text-white md:text-blue-600 dark:bg-blue-600 md:dark:bg-transparent"
                    : "hover:text-blue-600"
                  }`
                }
              >
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todos"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white rounded md:bg-transparent md:p-0 ${isActive
                    ? "bg-blue-600 text-white md:text-blue-600 dark:bg-blue-600 md:dark:bg-transparent"
                    : "hover:text-blue-600"
                  }`
                }
              >
                To-Dos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trash"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white rounded md:bg-transparent md:p-0 ${isActive
                    ? "bg-blue-600 text-white md:text-blue-600 dark:bg-blue-600 md:dark:bg-transparent"
                    : "hover:text-blue-600"
                  }`
                }
              >
                Trash
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-[90vw] m-auto h-[.5px] bg-gray-300'></div>
    </nav>
  );
};

export default Navbar;
