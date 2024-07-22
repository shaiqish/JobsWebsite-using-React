import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 w-full relative bottom-0 py-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 justify-between items-center">
          <div className="flex space-x-4">
            <NavLink
              to="/about"
              className="text-white text-sm hover:text-gray-300"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white text-sm hover:text-gray-300"
            >
              Contact
            </NavLink>
            <NavLink
              to="/privacy-policy"
              className="text-white text-sm hover:text-gray-300"
            >
              Privacy Policy
            </NavLink>
          </div>
          <div className="text-white text-xl mt-4 md:mt-0">
            &copy; 2024 <span className="NAME">DevPath</span>. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
