import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar relative px-4 py-2 flex justify-between items-center bg-slate-100 dark:border-gray-700">
        <NavLink to="/" className="text-3xl font-bold leading-none">
          🛒 ECOMMERCE APP
        </NavLink>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <NavLink
              to="/"
              className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-sm text-indigo-600 font-bold">
              category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-300"
            >
              cart(0)
            </NavLink>
          </li>
        </ul>
        <div className="space-x-2 hidden lg:block">
          <button className="rounded-md border border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-indigo-600 hover:bg-indigo-500 hover:text-white">
            Login
          </button>
          <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
            SignUp
          </button>
        </div>
      </nav>
    </div>
  );
};
