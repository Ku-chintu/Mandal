import React, { useState } from 'react';
import axios from 'axios';
import service from '../service';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('text-green-950');

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Convert file to base64 string
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
    });
  };

  // Handle upload
  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);

    try {
      // Convert the resume file to base64
      const base64Content = await convertFileToBase64(file);

      // Construct the resume object
      const resumeData = {
        resumes: [
          {
            id: 0,
            name: file.name,
            originalName: file.name,
            mediaType: `.${file.name.split('.').pop()}`,
            date: new Date().toISOString(),
            resumeType: 1,
            parsedInfo: {
              emailIds: ['example@email.com'],
            },
            content: base64Content,
            length: file.size,
          },
        ],
      };

      // Create the payload to send to the API
      const formData = new FormData();
      formData.append('resumes', JSON.stringify(resumeData));

      // Mock the POST request to API with progress
      const config = {
        headers: { 'Content-Type': 'application/json' },
        onUploadProgress: (progressEvent) => {
          let percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percent);
        },
      };

      const response = await service.requestApi.resumeUpload(resumeData, config)
      if(response.status === 200)
      {
      setProgress(100);
      setUploading(false);
      setMessageColor('text-green-950');
      setMessage("Resume uploaded successfully!");
      handleRemoveFile();
      }
      else{
        setUploading(false);
        setMessageColor('text-red-800');
        setMessage("Error uploading resume!");
      }
    } catch (error) {
      setUploading(false);
      setProgress(0);
      alert('Error uploading resume!');
      console.error(error);
    }
  };

  // Handle file removal
  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="flex justify-between items-center mb-4 font-semibold">
      <h2>Upload Resume</h2>
      <div>
          {/* Show the file input only if no file is selected */}
          {!file && (
            <input type="file"
            className="bg-primary flex-1 text-white px-4 py-1 w-32 text-opacity-0 text-center rounded hover:bg-green-900" 
              onChange={handleFileChange} />
          )}
        {file && (
          <div className='flex-auto'>
            <button 
              className="bg-primary text-white px-4 py-1 rounded hover:bg-green-900" 
              onClick={handleUpload} 
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Upload Resume'}
            </button>
            <span className='px-2 py-1'>{file.name}</span>
            <span className="text-red-800 py-1 rounded hover:text-red-600 font-semibold" onClick={handleRemoveFile} >x</span>
            <span className={messageColor} >{message}</span>
          </div>
        )}
      
      {uploading && (
        <div className="progress-bar-container">
          <progress value={progress} max="100" />
          <span>{progress}%</span>
        </div>
      )}
      </div>
    </div>
  );
};

export default ResumeUpload;
