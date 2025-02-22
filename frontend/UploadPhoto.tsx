import React, { useState, useCallback } from 'react';
import { Upload, CheckCircle2, Camera } from 'lucide-react';
import { IP_ADDR } from './parameters';

function UploadPhoto() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [serverResponse, setServerResponse] = useState<any>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch(`${IP_ADDR}/upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Parse the JSON response
        const data = await response.json();
        // setServerResponse(data);
        setUploadSuccess(true);
      } else {
        alert("Failed to upload the file. Please try again.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred while uploading. Please try again.");
    }
  };

  if (uploadSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-4 animate-fade-in">
          <div className="flex justify-center">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
          <p className="text-gray-600">
            Your marathon photo has been successfully uploaded.
          </p>
          {/* Displaying JSON response */}
          {serverResponse && (
            <pre className="text-left bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
              {JSON.stringify(serverResponse, null, 2)}
            </pre>
          )}
          <button
            onClick={() => {
              setUploadSuccess(false);
              setSelectedFile(null);
              setServerResponse(null);
            }}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Upload Another Photo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        {/* Upload Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="text-center">
            <Camera className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <h1 className="text-2xl font-bold text-gray-800">Marathon Photo Upload</h1>
            <p className="text-gray-600 mt-2">Share your marathon memories with us!</p>
          </div>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
          >
            <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Drop your photo here</p>
            <div className="text-sm text-black text-center font-bold">
            Supported formats: JPG, PNG, GIF (max 10MB)
          </div>
            <label className="block w-full">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
              />
              <span className="mt-2 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-center">
                Browse Files
              </span>
            </label>
            {selectedFile && (
              <p className="mt-4 text-sm text-gray-500">
                Selected: {selectedFile.name}
              </p>
            )}
          </div>

          {/* Upload Button */}
          {selectedFile && (
            <button
              onClick={handleUpload}
              className="mt-4 w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Upload Photo
            </button>
          )}
        </div>

        {/* WhatsApp Scanner Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center">
          <div className="text-center">
            <Camera className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <h1 className="text-2xl font-bold text-gray-800">Share on WhatsApp</h1>
            <p className="text-gray-600 mt-2">Scan the QR code to join our group and see the NEEV Global 5k run happening worldwide!</p>
          </div>

          <div className="border-2 border-dashed rounded-lg p-8 flex justify-center items-center transition-colors border-gray-300 hover:border-green-400">
            <img
              src="WhatsappImg.png"
              alt="WhatsApp Scanner"
              className="w-32 h-32 mx-auto mb-4 rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm text-gray-500 text-center">
            Share your inspirational photos too.
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadPhoto;
