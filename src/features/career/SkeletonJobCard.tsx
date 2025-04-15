import React from "react";

const SkeletonJobCard = () => {
  return (
    <div className="bg-white w-full shadow-md rounded-xl p-4 max-w-3xl mx-auto animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
        <div className="border border-gray-300 rounded-full p-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div className="h-3 bg-gray-300 rounded mt-4 w-full"></div>
      <div className="h-3 bg-gray-300 rounded mt-4 w-5/6"></div>
      <div className="flex items-center gap-4 mt-4">
        <div className="h-4 w-16 bg-gray-300 rounded"></div>
        <div className="h-4 w-16 bg-gray-300 rounded"></div>
      </div>
      <div className="flex items-center mt-4 gap-6">
        <div className="h-4 w-16 bg-gray-300 rounded"></div>
        <div className="h-4 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonJobCard;
