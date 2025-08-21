import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import logo from "../assets/logo.png";

const ExcelFile = () => {
  const axiosPublic = useAxiosPublic();
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Validate file type
    const validTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel'
    ];
    
    if (!validTypes.includes(selectedFile.type)) {
      setError('Please upload a valid Excel file (.xlsx or .xls)');
      return;
    }

    // Validate file size (5MB max)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size too large (max 5MB)');
      return;
    }

    setFile(selectedFile);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const data = e.target.result.split(',')[1]; // Get base64 part
          const response = await axiosPublic.post('/excel', {
            filename: file.name,
            data: data
          });
          
          setSuccess('File uploaded successfully!');
          console.log('Upload successful:', response.data);
        } catch (err) {
          setError(err.response?.data?.message || 'Failed to upload file');
          console.error('Upload error:', err);
        } finally {
          setIsLoading(false);
        }
      };
      
      reader.onerror = () => {
        setError('Error reading file');
        setIsLoading(false);
      };
      
      reader.readAsDataURL(file);
    } catch (err) {
      setError('An unexpected error occurred');
      setIsLoading(false);
      console.error('Error:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-100 p-6">
      <img src={logo} alt="" className="w-90 bg-amber-950 rounded-4xl"/>
      <Link to="/exceldetails">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Uploaded Data
        </button>
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Upload Excel File
        </h2>

        {/* Upload Section */}
        <label
          htmlFor="fileUpload"
          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-gray-500 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <p className="text-gray-600 text-sm">
            Drag & drop or click to upload
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Only .xlsx, .xls files are allowed (max 5MB)
          </p>
          <input 
            type="file" 
            id="fileUpload" 
            className="hidden" 
            accept=".xlsx,.xls"
            onChange={handleFileChange}
          />
        </label>

        {/* File info */}
        {file && (
          <div className="mt-2 p-2 bg-gray-50 rounded">
            <p className="text-gray-600 text-sm">
              Selected: <span className="font-medium">{file.name}</span>
            </p>
            <p className="text-gray-500 text-xs">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        {/* Status messages */}
        {error && (
          <div className="mt-2 p-2 bg-red-50 text-red-600 rounded text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mt-2 p-2 bg-green-50 text-green-600 rounded text-sm">
            {success}
          </div>
        )}

        {/* Submit button */}
        <button
          onClick={handleUpload}
          disabled={isLoading || !file}
          className={`mt-6 w-full py-2 rounded-lg shadow-md transition
            ${isLoading 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          {isLoading ? 'Uploading...' : 'Submit File'}
        </button>
      </div>
    </div>
  );
};

export default ExcelFile;