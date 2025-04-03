"use client";
import Button from "@/components/Button";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      {/* hero */}

      <section className="hero w-full h-[600px] md:h-[700px]">
        <div className="p-6 space-y-5 text-white w-full md:max-w-2xl">
          <h2 className="mt-6 text-3xl font-medium md:text-[56px] leading-[90px] md:font-bold">
            Innovative Software Solutions for Seamless Connectivity
          </h2>
          <p className="leading-8">
            Empowering businesses with cutting-edge technology to streamline
            operations, enhance efficieny, and drive digital transformation. Our
            software solutions connect enterprises, entrepreneurs, and
            organizations with scalable tools for automation, security, and
            growth
          </p>
          <div className="flex items-center md:justify-start md:px-0 justify-center px-6">
            <Button
              title="Get Started"
              onClick={() => console.log("clicked")}
              className=" max-w-2xs"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
