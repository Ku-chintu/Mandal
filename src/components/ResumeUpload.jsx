import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

import service from "../service";
import utility from "../utility";

const ResumeUpload = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    // Programmatically trigger the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded file:", file.name);
      // Add further logic to handle the uploaded file

      try {
            // Convert the resume file to base64
            const base64Content = await utility.convertFileToBase64(file);
      
            // Construct the resume object
            const resumeData = {
              name: file.name,
              content: base64Content,
              length: file.size,
              mediaType: `.${file.name.split(".").pop()}`,
            };
      
            // Create the payload to send to the API
            const formData = new FormData();
            formData.append("resumes", JSON.stringify(resumeData));
      
            // Mock the POST request to API with progress
            const config = {
              headers: { "Content-Type": "application/json" },
            };
      
            const response = await service.requestApi.resumeUpload(
              resumeData,
              config
            );
            if (response.status === 200) {
                toast.success(`Uploaded "${file.name}" successfully!`);
            } else {
                toast.error(`Uploaded "${file.name}" failed!`);
            }
          } catch (error) {
            toast.error(`Uploaded "${file.name}" failed!`);
            console.error(error);
          }
    }
  };

  return (
    <div className="flex justify-between items-center mb-4 font-semibold">
      <h2>Upload Resume</h2>
      <div>
      <button
        type="button"
        className="bg-primary text-white px-4 py-2 text-center rounded hover:bg-green-900"
        onClick={handleUploadClick}
      >
        Upload Resume
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.rtf"
      />
      <p className="font-normal text-xs">Accepted formats: pdf, doc, docx, rtf</p>
      <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default ResumeUpload;
