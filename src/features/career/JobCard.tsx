import { JobCardProps } from "@/types/global";
import Image from "next/image";
import React from "react";
import { IoBookmarks } from "react-icons/io5";

const JobCard = ({ job }: JobCardProps) => {
  const { id, description, is_active, mode, title, type } = job;
  return (
    <div
      key={id}
      className="bg-white  shadow-md rounded-xl px-4 py-6 max-w-3xl mx-auto"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-secondary-one">{title}</h3>
        <div
          className={` ${
            !is_active ? "border-[#b4b4b4]" : "border-[#b3b3b3]"
          } border border-[#b4b4b4] rounded-full p-2`}
        >
          <Image
            src={
              is_active ? "/icons/bookmark_filled.svg" : "/icons/bookmark.svg"
            }
            alt="bk_icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <p className="mt-5 text-gray-600">{description}</p>
      <p className="text-sm mt-2">{is_active}</p>
      <div className="flex items-center my-5 gap-4">
        <p className="bg-[#CFCFCF] text-secondary-one p-1 px-2 rounded-sm">
          {type}
        </p>
        <p className="bg-[#CFCFCF] text-secondary-one p-1 px-2 rounded-sm">
          {mode}
        </p>
      </div>
      <div className="flex items-center pb-5 gap-6">
        <button className="cursor-pointer hover:bg-button-blue hover:text-white border-button-blue text-button-blue font-bold rounded-xl  p-2 px-6 border-2">
          Apply Now
        </button>
        <p
          className={`text-xl capitalize ${
            is_active ? "text-green-success" : "text-red-danger"
          }`}
        >
          {is_active ? "open" : "closed"}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
