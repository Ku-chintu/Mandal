import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import listAni from '../../public/animation/candidate_animation.json';
import ResumeUpload from "../components/ResumeUpload";
import ApplyResumeUpload from "../components/ApplyResumeUpload";
import service from "../service";
import btnsearch from "../assets/svg/btnsearch.svg";
import "../assets/css/career.css";
import DOMPurify from 'dompurify';

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
  const [locationSuggestions, setLocationSuggestions] = useState([]);


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
  const handleExperience = (min, max) => {
    if (min <= 0 && max <= 0) return '0-5 Years';
    else { return min + '-' + max + 'Years' };
  };
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      fetchJobs();
    } catch (error) {
      console.error("Error submitting the search:", error);
    }
  };
  const handleLocationChange = async (e) => {
    const value = e.target.value;
    setpayload({ ...searchPayload, location: value });

    if (value.length > 1) {
      try {
        const res = await service.requestApi.fetchLocations(value);
        setLocationSuggestions(res.data || []);
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
      }
    } else {
      setLocationSuggestions([]);
    }
  };


  return (
    <div className="flex flex-col mt-20 -scroll-mt-96 md:flex-row bg-gray-100 h-screen">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 bg-white p-4 overflow-auto">
        <h2 className="bg-primary text-gray-300 text-lg font-semibold mb-4 border-b pb-2">
          Total openings   {" "}
          <span className=" text-gray-300 text-lg align-middle ml-64 float-right mr-2 ">
            {totalJobs}
          </span>
        </h2>
        <div className="space-y-4">
          {loading ? (
            <>
              <div className=" flex flex-col items-center justify-center h-[calc(100vh-12rem)] bg-white w-full ">
                <Lottie loop animationData={listAni} />
                <p className="-translate-y-20 font-semibold text-base">
                  Fetching candidates list
                </p>
              </div>
            </>
          ) : (
            <>
              {jobs.map((job, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedJob(job)} // Update the selected job
                  className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${selectedJob === job ? "border-primary" : ""
                    }`}
                >
                  <h3 className="text-md font-medium">{job.jobTitle}
                    <p className="text-sm text-gray-500">{job.company}</p></h3>
                  <div className="flex flex-wrap gap-2 my-2">
                    <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                      {job.location}
                    </span>
                    <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                      {handleExperience(job.totalExpMin, job.totalExpMax)}</span>
                    {/* <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                  {job.jobType || "N/A"}
                </span> */}
                  </div>
                  <p className="text-sm text-gray-600">
                    {truncateString(job.jobDesc, 115) ||
                      "No description available."}
                  </p>
                  <div className="text-xs text-gray-400 mt-2 flex justify-between">
                    {/* <span>{`${job.applications || 0} Applications`}</span> */}
                    <div></div>
                    <span className="float-end">{`Posted ${getTimeSinceModified(job.modifiedDate)
                      } ago`}</span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 p-4 overflow-auto">
        {/* ResumeUpload components */}
        {/* <ResumeUpload /> */}
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
              placeholder="Location"
              name="location"
              value={searchPayload.location}
              onChange={handleLocationChange}
              className="flex-1 border border-primary shadow-sm hover:outline-primary rounded px-4 py-2"
              autoComplete="off"
            />
            {locationSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white border mt-1 rounded shadow w-1/3 max-h-60 overflow-auto">
                {locationSuggestions.map((loc, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setpayload({ ...searchPayload, location: loc });
                      setLocationSuggestions([]);
                    }}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={handleSubmit}
              className="text-white px-4 py-2 rounded hover"
            >
              <img src={btnsearch} alt="search" />
            </button>
          </div>
        </form>
        {loading ? (
          <>
            <div className=" flex flex-col items-center justify-center h-[calc(100vh-12rem)] bg-white w-full ">
              <Lottie loop animationData={listAni} />
              <p className="-translate-y-20 font-semibold text-base">
                Fetching candidates list
              </p>
            </div>
          </>
        ) : (
          <>
            {selectedJob ? (
              <div className="bg-white p-4 rounded-lg shadow">
                {/* <h3 className="text-lg font-semibold mb-2">
              {selectedJob.jobTitle}
              <p className="text-sm text-gray-500">
              {selectedJob.company}
            </p>
            </h3> */}

                {/* <button className="flex-1 bg-primary text-white px-4 py-2 rounded hover:bg-green-900 mb-4">
              Apply Now
            </button> */}
                <ApplyResumeUpload jobId={selectedJob.jobId} />

                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedJob.jobTitle}
                </h1>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Company:</span> {selectedJob.company}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Location:</span> {selectedJob.location}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Employment Type:</span>{" "}
                  {selectedJob.employmentType}
                </p>
                <p className="text-gray-600 mb-6">
                  <span className="font-medium">Experience:</span>{" "}
                  {selectedJob.totalExpMin}-{selectedJob.totalExpMax} years
                </p>
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">About Us</h2>
                <p className="text-gray-600 mb-6">{selectedJob.aboutUs}</p>
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                  Job Description
                </h2>
                <p className="text-gray-600 mb-6">{selectedJob.jobDesc}</p>

                <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                  Roles & Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  {selectedJob.rolesResponsibilities.map((role, index) => (
                    <li key={index} className="text-gray-600">
                      {role}
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                  Required Skills & Qualifications
                </h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  {selectedJob.requiredSkillsQualifications.map((skill, index) => (
                    <li key={index} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                  Preferred Qualifications
                </h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  {selectedJob.preferredQualifications.map((qualification, index) => (
                    <li key={index} className="text-gray-600">
                      {qualification}
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Benefits</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600">
                      {benefit}
                    </li>
                  ))}
                </ul>

                <ApplyResumeUpload jobId={selectedJob.jobId} />


                {/* <div className="flex flex-wrap gap-2 my-2">
              <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                {selectedJob.location}
              </span>
              <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                 {handleExperience(selectedJob.totalExpMin,selectedJob.totalExpMax)}
                 </span> */}
                {/* <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                {selectedJob.jobType}
              </span> */}
                {/* </div> */}

                {/* <div>
              <h4 className="font-semibold text-md mb-2">Job Description:</h4>
              <p className="text-sm text-gray-600 mb-4">
                {selectedJob.jobDesc || "No description available."}
              </p>
            </div> */}
                {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedJob.jobDesc) }} /> */}
                {/* </div> */}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                Select a job to view details.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Career;
