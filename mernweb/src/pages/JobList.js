
import React, { useState } from "react";
import "./JobList.css";
import jobData from "./jobData.json";

const JobList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const filteredJobs = jobData.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());

    return titleMatch && locationMatch;
  });

  return (
    <div className="job-list-container">
      <h1>Job Positions</h1>
      <div className="search-inputs">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTerm}
          placeholder="Search jobs..."
          className="search-input"
        />
        <input
          type="text"
          value={location}
          onChange={handleLocation}
          placeholder="Location"
          className="search-input"
        />
      </div>
      <div className="job-cards">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="card">
              <div className="card-content">
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p>{job.location}</p>
                <p className="description">{job.description}</p>
                <p className="salary">Salary: {job.salary}</p>
                <p className="date-posted">Date Posted: {job.datePosted}</p>
                <a href="#">Apply Now</a>
              </div>
            </div>
          ))
        ) : (
          <p className="error-message">No job positions found.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
