import React, { useEffect, useState } from "react";
import axios from "axios";
import service from "../service";
import search from "../assets/svg/search.svg";
import "../assets/css/career.css";

function Career() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null); // State for the selected job

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const payload = {
          title: "",
          location: "",
          skills: [""],
          experience: { min: 0, max: 0 },
          from: 0,
          pagesize: 10,
        };
        const response = await service.requestApi.fetchJobs(payload);
        setJobs(response.data.jobs);
        if (response.data.jobs.length > 0) {
          setSelectedJob(response.data.jobs[0]); // Set the first job as the default
        }
      } catch (err) {
        console.error("Error fetching jobs:", err.response || err.message);
        setError("Failed to fetch jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const getTimeSinceModified = (modifiedDate) => {
    const modified = new Date(modifiedDate);
    const today = new Date();
    const diffTime = Math.abs(today - modified);

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    if (days > 0) return `${days} days`;
    if (hours > 0) return `${hours} hours`;
    if (minutes > 0) return `${minutes} minutes`;
    return `${seconds} seconds`;
  };

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return `${str.slice(0, maxLength)} ........`;
    }
    return str;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col mt-20 -scroll-mt-96 md:flex-row bg-gray-100 h-screen">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 bg-white p-4 overflow-auto">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Best Matches <span className="text-gray-500 text-sm">{jobs.length} Jobs</span>
        </h2>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              onClick={() => setSelectedJob(job)} // Update the selected job
              className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${
                selectedJob === job ? "border-green-500" : ""
              }`}
            >
              <h3 className="text-md font-medium">{job.jobTitle || "N/A"}</h3>
              <p className="text-sm text-gray-500">{job.company || "N/A"}</p>
              <div className="flex flex-wrap gap-2 my-2">
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">{job.location || "N/A"}</span>
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">{`${job.totalExpMin || 0} Years`}</span>
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">{job.jobType || "N/A"}</span>
              </div>
              <p className="text-sm text-gray-600">{truncateString(job.jobDesc, 115) || "No description available."}</p>
              <div className="text-xs text-gray-400 mt-2 flex justify-between">
                <span>{`${job.applications || 0} Applications`}</span>
                <span>{`Posted ${getTimeSinceModified(job.modifiedDate) || "N/A"} ago`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 p-4 overflow-auto">
        {selectedJob ? (
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">{selectedJob.jobTitle || "N/A"}</h3>
            <p className="text-sm text-gray-500">{selectedJob.company || "N/A"}</p>
            <div className="flex flex-wrap gap-2 my-2">
              <span className="bg-gray-200 text-sm px-2 py-1 rounded">{selectedJob.location || "N/A"}</span>
              <span className="bg-gray-200 text-sm px-2 py-1 rounded">{`${selectedJob.totalExpMin || 0} Years`}</span>
              <span className="bg-gray-200 text-sm px-2 py-1 rounded">{selectedJob.jobType || "N/A"}</span>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4">
              Apply Now
            </button>
            <div>
              <h4 className="font-semibold text-md mb-2">Job Description:</h4>
              <p className="text-sm text-gray-600 mb-4">{selectedJob.jobDesc || "No description available."}</p>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">Select a job to view details.</div>
        )}
      </div>
    </div>
  );
}

export default Career;
