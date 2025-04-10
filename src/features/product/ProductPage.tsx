"use client";
import Image from "next/image";

const ProductPage = () => {
  return (
    <main>
      <section className="bg-button-blue w-full min-h-[600px] md:min-h-[700px] px-6 py-10">
        <h2 className="font-bold text-[40px] md:text-[70px] leading-tight text-white text-center mb-10">
          Products
        </h2>
        <article className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          <div className="text-white md:basis-1/2 max-w-xl">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Transform The Way You Manage Your Real Estate Business
            </h3>
            <p className="md:text-[24px] md:leading-12  mb-6">
              A powerful all-in-one platform for managing clients, realtors,
              employees, finances, and properties seamlessly.
            </p>
            <button className="bg-green-button text-white hover:bg-green-400 px-6 py-3 rounded font-bold">
              Coming soon
            </button>
          </div>
          <div className="w-full md:basis-1/2 flex justify-center">
            <Image
              src="/icons/product1.svg"
              alt="product"
              width={400}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default ProductPage;
