import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Want a job in Coding?"
        subtitle="Don't Worry! You are at the right place."
      />
      <HomeCards />
      <JobListings isHome="true" />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
