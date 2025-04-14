import { useRef, useState } from "react";
import toast from "react-hot-toast";

const FileUploader = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");
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
      toast.error("Only .txt and .pdf files are allowed.");
      return;
    }
    if (file.size > maxFileSize) {
      toast.error("File size exceeds 20MB limit.");
      return;
    }

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
      }
    }, 200);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className=" space-y-3 flex justify-between items-center">
      <div className="w-full flex items-center ">
        <div className="text-gray-700 py-3 px-6 rounded-l-md bg-white basis-9/10">
          {fileName || "Resume Upload"}
        </div>
        <button
          type="button"
          onClick={handleBrowseClick}
          className="bg-[#E5E3E3] py-3 px-8 rounded-r-md cursor-pointer basis-1/10"
        >
          Browse
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".txt,application/pdf"
        className="hidden"
        onChange={handleFileChange}
      />

      {uploadProgress !== null && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${uploadProgress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default FileUploader;
