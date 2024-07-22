import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Job from "./Job";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // const threeJobs = jobs.slice(0, 3);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Browse Jobs
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isHome
              ? jobs.slice(0, 3).map((job) => <Job key={job.id} job={job} />)
              : jobs.map((job) => <Job key={job.id} job={job} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
