import React, { useState, useRef } from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const handleFile = (file) => {
    setFile(file);
    uploadFile(file);
  };

  const uploadFile = (file) => {
    setIsUploading(true);
    const totalSize = file.size;
    let uploadedSize = 0;
    const chunkSize = totalSize / 100;

    const upload = setInterval(() => {
      uploadedSize += chunkSize;
      const progress = Math.round((uploadedSize / totalSize) * 100);
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(upload);
        setIsUploading(false);
        console.log("File uploaded:", file.name);
      }
    }, 50);
  };

  const removeFile = () => {
    setFile(null);
    setUploadProgress(0);
  };

  return (
    <Card className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Upload Your Resume For Perfect Match</h2>
      {isUploading ? (
        <div className="mt-3 drop-drag">
          <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} />
        </div>
      ) : (
        
        
        <div
          className={`d-flex flex-column justify-content-center align-items-center drop-drag ${
            isDragging ? "bg-light" : ""
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <button onClick={() => fileInputRef.current?.click()} className="bg-primary text-white px-4 py-2 rounded hover:bg-green-900">
          Drag & Drop a File Or Upload Resume</button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInput}
            style={{ display: "none" }}
          />
        </div>
        
      )}
      {file && !isUploading && (
        <div className="mt-3 d-flex justify-content-between align-items-center">
          <span>{file.name}</span>
          <Button variant="outline-danger" size="sm" onClick={removeFile}>
            ×
          </Button>
        </div>
      )}
    </Card>
  );
};

export default UploadResume;
