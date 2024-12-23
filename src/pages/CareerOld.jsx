import React from "react";
import service from "../service";
import search from "../assets/svg/search.svg";
import "../assets/css/career.css";

function Career() {
  return (
    <div style={{marginTop: '100px'}} className="flex flex-col md:flex-row bg-gray-100 h-screen">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 bg-white p-4 overflow-auto">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Best Matches <span className="text-gray-500 text-sm">46 Jobs</span></h2>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="text-md font-medium">UI/UX Designer</h3>
              <p className="text-sm text-gray-500">Salesforce</p>
              <div className="flex flex-wrap gap-2 my-2">
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">Hyderabad</span>
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">4 Years Experience</span>
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">Hybrid</span>
              </div>
              <p className="text-sm text-gray-600">
                We are looking for a talented and experienced Senior Software
                Engineer to join our dynamic team. The ideal candidate ........
              </p>
              <div className="text-xs text-gray-400 mt-2 flex justify-between">
                <span>120 Applications</span>
                <span>Posted 3 days ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 p-4 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Upload Your Resume For Perfect Match</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Upload Resume</button>
        </div>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Search Job"
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Search Location"
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">🔍</button>
        </div>

        {/* Job Details Section */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">UI/UX Designer</h3>
          <p className="text-sm text-gray-500">Salesforce</p>
          <div className="flex flex-wrap gap-2 my-2">
            <span className="bg-gray-200 text-sm px-2 py-1 rounded">Hyderabad</span>
            <span className="bg-gray-200 text-sm px-2 py-1 rounded">4 Years Experience</span>
            <span className="bg-gray-200 text-sm px-2 py-1 rounded">Hybrid</span>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4">
            Apply Now
          </button>
          <div>
            <h4 className="font-semibold text-md mb-2">Job Description:</h4>
            <p className="text-sm text-gray-600 mb-4">
              Role Overview: We are seeking a Senior Software Engineer with a
              passion for technology and a drive for crafting cutting-edge
              solutions. As a senior member of our team, you will play a
              pivotal role in developing, deploying, and optimizing scalable
              software applications. This is a unique opportunity to influence
              the technology direction of our company while working on exciting
              and impactful projects.
            </p>

            <h4 className="font-semibold text-md mb-2">Key Responsibilities:</h4>
            <ul className="list-disc ml-6 text-sm text-gray-600 space-y-2">
              <li>Design, develop, test, and maintain high-quality software applications and systems.</li>
              <li>Lead architecture discussions and technical decision-making processes.</li>
              <li>Collaborate closely with cross-functional teams to gather requirements and deliver tailored solutions.</li>
              <li>Optimize system performance and ensure scalability and security best practices.</li>
              <li>Mentor junior engineers and promote best practices within the team.</li>
              <li>Stay abreast of emerging technologies and contribute to continuous innovation.</li>
            </ul>

            <h4 className="font-semibold text-md mb-2">Required Qualifications:</h4>
            <ul className="list-disc ml-6 text-sm text-gray-600 space-y-2">
              <li>Bachelor's/Master's degree in Computer Science, Engineering, or related field.</li>
              <li>[X]+ years of experience in software development (specific tech stack optional: e.g., Python, Java, .NET, etc.).</li>
              <li>Proficiency in developing scalable and secure applications.</li>
              <li>Strong problem-solving skills and a deep understanding of system architecture.</li>
              <li>Experience with Agile methodologies and version control systems (e.g., Git).</li>
              <li>Excellent communication and leadership skills.</li>
            </ul>

            <h4 className="font-semibold text-md mb-2">Preferred Skills:</h4>
            <ul className="list-disc ml-6 text-sm text-gray-600 space-y-2">
              <li>Knowledge of microservices architecture.</li>
              <li>Familiarity with CI/CD pipelines.</li>
              <li>Excellent communication and teamwork skills.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
