import { JobCardProps } from "@/types/global";
import React from "react";
import { IoBookmarks } from "react-icons/io5";

const JobCard = ({ job }: JobCardProps) => {
  const { id, description, is_active, mode, title, type } = job;
  return (
    <div key={id} className="bg-white shadow-md rounded p-4 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-secondary-one">{title}</h3>
        <div className="border rounded-full p-2">
          <IoBookmarks />
        </div>
      </div>
      <p className="text-gray-600 mt-1">{description}</p>
      <p className="text-sm mt-2">Location: {is_active}</p>
      <div>
        <p>{mode}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default JobCard;
