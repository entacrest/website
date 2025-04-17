"use client";
import Button from "@/components/Button";
import api from "@/config/api_config";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoBookmarks } from "react-icons/io5";
import JobCard from "./JobCard";
import { workBenefits } from "@/components/data";
import Image from "next/image";
import JobApplicationForm from "./JobApplicationForm";
import SkeletonJobCard from "./SkeletonJobCard";

const CareerPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      setMsg("");
      try {
        const resp = await api.get("/webpage/jobs/");
        setJobs(resp.data.data);
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message || error.message;
        setIsError(true);
        setMsg(errorMessage);
        toast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="md:bg-[url('/images/career.jfif')] bg-[url('/images/career-hero.jfif')] backgroundImage w-full h-[600px] flex justify-center items-center md:h-[700px] relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-5xl relative text-center text-white">
          <h2 className="mt-6 font-medium heading-text md:font-bold">
            Build Your Career with Us
          </h2>
          <p className="paragraph-text px-2 mt-2">
            At our core, we foster a collaborative, innovative, and inclusive
            culture where ideas thrive and people grow. We value transparency,
            continuous learning, and a shared commitment to excellence in
            everything we do.
          </p>
          <Button
            title="Get Started"
            className="mt-6 max-w-2xs py-4"
            onClick={() =>
              document
                .getElementById("job-application-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </section>

      {/* Job Openings */}
      <section className="bg-[#FDFDFD] mt-10 px-4 py-8">
        <h2 className="text-secondary-one text-center font-medium heading-text md:font-bold">
          Job Openings
        </h2>
        <article className="mt-6">
          {isError && (
            <p className="text-center text-red-500 font-medium">{msg}</p>
          )}

          {!isLoading && !isError && jobs.length < 0 ? (
            <p className="text-center text-gray-600">
              No job openings available at the moment.
            </p>
          ) : (
            <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {isLoading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonJobCard key={i} />
                  ))
                : jobs.map((job, i) => <JobCard job={job} key={i} />)}
            </section>
          )}
        </article>
      </section>

      {/* What u stand to gain  */}
      <section className="bg-button-blue mt-10 px-4 py-[50px]">
        <h2 className="text-white text-center font-medium heading-text md:font-bold">
          Work Benefits
        </h2>
        <section className="mt-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {workBenefits.map(({ title, iconSrc, description }, i) => {
            return (
              <div key={i} className="border border-white p-2 rounded-md">
                <div className="flex items-center gap-4 ">
                  <h2 className="md:text-3xl text-white font-bold">{title}</h2>
                  <Image src={iconSrc} alt={title} width={32} height={32} />
                </div>
                <p className="my-4 text-white paragraph-text">{description}</p>
              </div>
            );
          })}
        </section>
      </section>
      <div id="job-application-form">
        <JobApplicationForm />
      </div>
    </main>
  );
};

export default CareerPage;
