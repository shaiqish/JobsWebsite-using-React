import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  return (
    <>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 text-white rounded-lg px-4 py-2 hover:bg-gradient-to-l"
        >
          Go Back
        </Link>
      </section>
    </>
  );
};

export default Error;
