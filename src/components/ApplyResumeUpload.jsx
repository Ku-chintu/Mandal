import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

import service from "../service";
import utility from "../utility";

const ApplyResumeUpload = ({ jobId }) => {
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
              jobId: jobId
            };
      
            const response = await service.requestApi.resumeUpload(
              resumeData,
              config
            );
            if (response.status === 200) {
                toast.success(`You have successfully applied!`);
            } else {
                toast.error(`Failed to apply!`);
            }
          } catch (error) {
            toast.error(`Failed to apply!`);
            console.error(error);
          }
    }
  };

  return (
    <div className="flex justify-between items-center mb-4 font-semibold">
      <button
        type="button"
        className="bg-primary text-white px-4 py-2 text-center rounded hover:bg-green-900"
        onClick={handleUploadClick}
      >
        Apply Now
        <p style={{fontSize:'4px'}} >pdf, doc, docx, rtf</p>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.rtf"
      />
      {/* <p className="font-normal text-xs">Accepted formats: PDF, DOC, DOCX</p> */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ApplyResumeUpload;
