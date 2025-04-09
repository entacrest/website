"use client";

import { useState } from "react";

const SubscribeNews = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="max-w-[270px] rounded-2xl bg-blue-600 p-4">
      <div className="relative z-10 max-w-xl mx-auto sm:text-center">
        <div className="space-y-3">
          <h3 className="text-2xl text-white font-bold">
            Subscribe to our newsletter
          </h3>
          <p className="text-blue-100 leading-relaxed">
            Subscribe to our newsletter and get our latest update about our
            products and company
          </p>
        </div>
        <div className="mt-6">
          <form className="space-y-3 rounded-lg p-1 sm:max-w-md sm:mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="text-gray-500 bg-white border-none rounded-md w-full p-2 outline-none"
            />
            <button className="p-2 px-3 w-full rounded-lg font-medium bg-white text-blue-600 hover:bg-gray-100 active:bg-blue-700 active:text-white duration-150 outline-none shadow-md focus:shadow-none sm:px-4">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNews;
