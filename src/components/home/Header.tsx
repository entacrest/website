"use client";
import Image from "next/image";
import HeaderNav from "./HeaderNav";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
const Header = () => {
  const [toggleSide, setToggleSide] = useState(false);
  return (
    <header className="bg-white w-full flex items-center justify-between max-w-7xl mx-auto p-4">
      <div className="flex items-center">
        <Image src="/entacrest_logo.png" alt="logo" width={200} height={60} />
      </div>
      <div className="hidden md:flex justify-end items-center basis-6/10 gap-2">
        <HeaderNav onClick={() => setToggleSide(false)} />
      </div>
      <div className="md:hidden flex items-center ">
        <Menu className="cursor-pointer " onClick={() => setToggleSide(true)} />
      </div>
      {toggleSide && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="md:hidden fixed right-0 top-0 w-9/10 max-w-[300px] z-20 bg-gray-200 p-5 h-full"
        >
          <X
            onClick={() => setToggleSide(false)}
            className="cursor-pointer mb-5"
          />
          <HeaderNav onClick={() => setToggleSide(false)} />
        </motion.div>
      )}
    </header>
  );
};

export default Header;
