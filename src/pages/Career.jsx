import React, { useEffect, useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import ApplyResumeUpload from "../components/ApplyResumeUpload";
import service from "../service";
import btnsearch from "../assets/svg/btnsearch.svg";
import "../assets/css/career.css";

function Career() {
  const [totalJobs, setTotalJobs] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchPayload, setpayload] = useState({
    title: "",
    location: "",
    skills: [""],
    experience: { min: 0, max: 0 },
    from: 0,
    pagesize: 1000,
  });

  const [applyPayload, setApplyPayload] = useState();

  useEffect(() => {
    document.title = "Career";
    fetchJobs();
  }, []);

  const handleChange = (event) => {
    setpayload({
      ...searchPayload,
      [event.target.name]: event.target.value,
    });
  };

  const fetchJobs = async () => {
    try {
      const response = await service.requestApi.fetchJobs(searchPayload);
      setTotalJobs(response.data.total);
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
  const config = {
   // JobId : selectedJob.jobId,
    
  }
  const getTimeSinceModified = (modifiedDate) => {
    const modified = new Date(modifiedDate);
    const today = new Date();
    const diffTime = Math.abs(today - modified);

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    if (days > 31) {
      let month = Math.trunc(days / 30);
      return month > 1 ? `1 month+` : `${month} month`;
    } 
    else if (days >= 7) {
      let month = Math.trunc(days / 7);
      return month > 1 ? `${month} weeks` : `${month} week`;
    }
    else if (days > 0) {
      return days > 1 ? `${days} days` : `${days} day`;
    } else if (hours > 0) {
      return hours > 1 ? `${hours} hours` : `${hours} hour`;
    } else if (minutes > 0) {
      return minutes > 1 ? `${minutes} minutes` : `${minutes} minute`;
    } else {
      return `few second`;
    }
  };

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return `${str.slice(0, maxLength)} ........`;
    }
    return str;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      fetchJobs();
    } catch (error) {
      console.error("Error submitting the search:", error);
    }
  };

  return (
    <div className="flex flex-col mt-20 -scroll-mt-96 md:flex-row bg-gray-100 h-screen">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 bg-white p-4 overflow-auto">
        <h2 className="bg-primary text-gray-300 text-lg font-semibold mb-4 border-b pb-2">
          Best Matches{" "}
          <span className="text-gray-300 text-sm align-middle ml-64 ">
            {totalJobs} Jobs
          </span>
        </h2>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              onClick={() => setSelectedJob(job)} // Update the selected job
              className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${
                selectedJob === job ? "border-primary" : ""
              }`}
            >
              <h3 className="text-md font-medium">{job.jobTitle || "N/A"}</h3>
              <p className="text-sm text-gray-500">{job.company || "N/A"}</p>
              <div className="flex flex-wrap gap-2 my-2">
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                  {job.location || "N/A"}
                </span>
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">{`${
                  job.totalExpMin || 0
                } Years`}</span>
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                  {job.jobType || "N/A"}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {truncateString(job.jobDesc, 115) ||
                  "No description available."}
              </p>
              <div className="text-xs text-gray-400 mt-2 flex justify-between">
                <span>{`${job.applications || 0} Applications`}</span>
                <span>{`Posted ${
                  getTimeSinceModified(job.modifiedDate) || "N/A"
                } ago`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 p-4 overflow-auto">
        {/* ResumeUpload components */}
        <ResumeUpload />
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Job Title"
              name="title"
              value={searchPayload.title}
              onChange={handleChange}
              className="flex-1 border border-primary shadow-sm hover:outline-primary outline-1 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Search Location"
              name="location"
              value={searchPayload.location}
              onChange={handleChange}
              className="flex-1 border border-primary shadow-sm hover:outline-primary rounded px-4 py-2"
            />
            <button
              onClick={handleSubmit}
              className="text-white px-4 py-2 rounded hover"
            >
              <img src={btnsearch} alt="search" />
            </button>
          </div>
        </form>
        {selectedJob ? (
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">
              {selectedJob.jobTitle || "N/A"}
            </h3>
            {/* <button className="flex-1 bg-primary text-white px-4 py-2 rounded hover:bg-green-900 mb-4">
              Apply Now
            </button> */}
            <ApplyResumeUpload jobId={selectedJob.jobId}/>
            <p className="text-sm text-gray-500">
              {selectedJob.company || "N/A"}
            </p>
            <div className="flex flex-wrap gap-2 my-2">
              <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                {selectedJob.location || "N/A"}
              </span>
              <span className="bg-gray-200 text-sm px-2 py-1 rounded">{`${
                selectedJob.totalExpMin || 0
              } Years`}</span>
              <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                {selectedJob.jobType || "N/A"}
              </span>
            </div>

            <div>
              <h4 className="font-semibold text-md mb-2">Job Description:</h4>
              <p className="text-sm text-gray-600 mb-4">
                {selectedJob.jobDesc || "No description available."}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            Select a job to view details.
          </div>
        )}
      </div>
    </div>
  );
}

export default Career;
