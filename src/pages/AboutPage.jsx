import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to DevPath, your number one source for all things coding jobs.
          We're dedicated to providing you the best job listings, with a focus
          on reliability, quality, and uniqueness.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Founded in 2021, DevPath has come a long way from its beginnings. When
          we first started out, our passion for helping developers find their
          dream job drove us to start our own business.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We hope you find our listings as useful as we find bringing them to
          you. If you have any questions or comments, please don't hesitate to
          contact us{" "}
          <Link to="/contact" className="text-blue-500 ml-1 hover:underline">
            here
          </Link>
          .
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Sincerely, <br /> The DevPath Team
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
