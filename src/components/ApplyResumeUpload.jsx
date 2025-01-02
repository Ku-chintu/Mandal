import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import service from "../service";
import utility from "../utility";

const ApplyResumeUpload = ({ jobId }) => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded file:", file.name);
      try {
        const base64Content = await utility.convertFileToBase64(file);
        const validExtensions = [".doc", ".docx", ".pdf", ".rtf"];
        const fileExtension = file.name
          .slice(file.name.lastIndexOf("."))
          .toLowerCase();

        const resumeData = {
          name: file.name,
          content: base64Content,
          length: file.size,
          mediaType: `.${file.name.split(".").pop()}`,
        };

        const formData = new FormData();
        formData.append("resumes", JSON.stringify(resumeData));

        const config = {
          headers: { "Content-Type": "application/json" },
          jobId: jobId,
        };

        if (validExtensions.includes(fileExtension)) {
          const response = await service.requestApi.resumeUpload(
            resumeData,
            config
          );
          if (response.status === 200) {
            toast.success(`Your application is successfully submitted!`);
          } else {
            toast.error(`Failed to apply, please try again!`);
          }
        } else {
          toast.error(
            `Invalid file type. Supported file types are doc, docx, pdf, rtf.`
          );
        }
      } catch (error) {
        toast.error(`Failed to apply!`);
        console.error(error);
      } finally {
        fileInputRef.current.value = "";
      }
    } else {
      toast.error("No file selected. Please choose a valid resume.");
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
        <p style={{ fontSize: "4px" }}>pdf, doc, docx, rtf</p>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.rtf"
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ApplyResumeUpload;
