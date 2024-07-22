import React from "react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const [showMore, setShowMore] = useState(false);

  let description = job.description;

  let lessDescription = description.substring(0, 90) + "...";

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{showMore ? description : lessDescription}</div>
        <button
          className="text-purple-500 text-sm hover:underline mb-5"
          onClick={handleClick}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>

        <h3 className="text-purple-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 hover:bg-gradient-to-l text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
