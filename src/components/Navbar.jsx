import React from "react";
import { NavLink } from "react-router-dom";
import { RiHtml5Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink
                className="flex items-center justify-center flex-shrink-0 mr-4"
                to="/"
              >
                <RiHtml5Line className="text-4xl invert" />
                <span className="NAME hidden md:block text-white text-2xl font-bold ml-2">
                  DevPath
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    }
                  >
                    Jobs
                  </NavLink>
                  <NavLink
                    to="/add-job"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    }
                  >
                    Add Job
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    }
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
