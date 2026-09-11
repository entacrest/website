import Button from "@/components/Button";
import api from "@/config/api_config";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoBookmarks } from "react-icons/io5";
import JobCard from "./JobCard";
import { workBenefits } from "@/components/data";
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
      <section className="relative bg-ink-950 grid-pattern w-full py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "60%" }} />
        <div className="max-w-4xl relative mx-auto text-center">
          <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-4">Careers</p>
          <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-6">
            Build Your Career with Us
          </h1>
          <p className="text-slate-300 leading-8 text-lg max-w-2xl mx-auto">
            We foster a collaborative, innovative, and inclusive culture where ideas thrive and people grow — transparency, continuous learning, and a shared commitment to excellence in everything we do.
          </p>
          <div className="flex items-center mt-8 justify-center">
            <Button
              title="See Open Roles"
              onClick={() =>
                document
                  .getElementById("job-application-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-auto px-8 py-3.5"
            />
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="px-4 py-20 md:py-28">
        <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3 text-center">Open Roles</p>
        <h2 className="text-ink-900 text-center font-bold heading-text">
          Job Openings
        </h2>
        <article className="mt-12">
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
      <section className="bg-ink-950 px-4 py-20 md:py-28">
        <p className="text-brand-300/80 font-semibold text-sm uppercase tracking-widest mb-3 text-center">Why Join Us</p>
        <h2 className="text-white text-center font-bold heading-text">
          Work Benefits
        </h2>
        <section className="mt-12 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {workBenefits.map(({ title, iconSrc, description }, i) => {
            return (
              <div key={i} className="border border-white/10 bg-white/[0.03] p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <h2 className="md:text-2xl text-white font-bold">{title}</h2>
                  <img src={iconSrc} alt={title} width={28} height={28} className="brightness-0 invert opacity-80" />
                </div>
                <p className="mt-4 text-slate-400 leading-7">{description}</p>
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
