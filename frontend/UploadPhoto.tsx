import React, { useState, useCallback } from 'react';
import { Upload, CheckCircle2, Camera } from 'lucide-react';

function UploadPhoto() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
      handleUpload(file);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      handleUpload(file);
    }
  }, []);

  const handleUpload = (file: File) => {
    // Simulate upload delay
    setTimeout(() => {
      setUploadSuccess(true);
    }, 1500);
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
            Your marathon photo has been successfully uploaded. We appreciate you sharing your achievement with us!
          </p>
          <button
            onClick={() => {
              setUploadSuccess(false);
              setSelectedFile(null);
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
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-6">
        <div className="text-center">
          <Camera className="w-12 h-12 text-blue-600 mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">Marathon Photo Upload</h1>
          <p className="text-gray-600 mt-2">Share your marathon memories with us!</p>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center transition-colors
            ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}
          `}
        >
          <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Drag and drop your photo here, or</p>
          <label className="inline-block">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Browse Files
            </span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileSelect}
            />
          </label>
          {selectedFile && (
            <p className="mt-4 text-sm text-gray-500">
              Selected: {selectedFile.name}
            </p>
          )}
        </div>

        <div className="text-sm text-gray-500 text-center">
          Supported formats: JPG, PNG, GIF (max 10MB)
        </div>
      </div>
    </div>
  );
}

export default UploadPhoto;