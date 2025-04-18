import { Dispatch, SetStateAction, useRef, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface FileUploadProps {
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  fileName: string;
  setFileName: Dispatch<SetStateAction<string>>;
}
const FileUploader = ({
  selectedFile,
  setSelectedFile,
  fileName,
  setFileName,
}: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "text/plain",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxFileSize = 20 * 1024 * 1024; // 20MB

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only .txt, .pdf, .doc, and .docx files are allowed.");
      return;
    }
    if (file.size > maxFileSize) {
      toast.error("File size exceeds 20MB limit.");
      return;
    }

    setSelectedFile(file);
    setFileName(file.name);
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        toast.success("Upload complete!");
      }
    }, 200);
  };
  const handleBrowseClick = () => {
    if (selectedFile) {
      setSelectedFile(null);
      setFileName("");
      setUploadProgress(null);

      // ✅ Clear the input value so the same file can be reselected
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }

    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="text-gray-700 py-3 px-6 rounded-l-md bg-white basis-9/10">
            {fileName || "Resume Upload"}
          </div>
          <button
            type="button"
            onClick={handleBrowseClick}
            disabled={uploadProgress !== null && uploadProgress < 100}
            className="bg-[#E5E3E3] py-3 px-8 rounded-r-md cursor-pointer basis-1/10 disabled:opacity-50"
          >
            {selectedFile ? "Remove" : "Browse"}
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {uploadProgress !== null && (
        <div
          className={`${
            uploadProgress >= 100
              ? "hidden"
              : "w-full bg-gray-200 rounded-full h-2"
          }`}
        >
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${uploadProgress}%` }}
          />
        </div>
      )}
    </>
  );
};

export default FileUploader;
