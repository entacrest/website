"use client";
import Image from "next/image";
import HeaderNav from "./HeaderNav";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "@/components/Button";
const Header = () => {
  const [toggleSide, setToggleSide] = useState(false);
  return (
    <header className="bg-white w-full flex items-center justify-between p-4">
      <div className="flex items-center">
        <Image src="/entacrest_logo.png" alt="logo" width={150} height={50} />
      </div>
      <div className="hidden md:flex justify-end items-center basis-6/10 gap-2">
        <HeaderNav />
      </div>
      <div className="md:hidden flex items-center ">
        <Menu className="cursor-pointer " onClick={() => setToggleSide(true)} />
      </div>
      {toggleSide && (
        <div className="md:hidden fixed right-0 top-0 w-9/10 z-20 bg-black/80 h-full">
          <X onClick={() => setToggleSide(false)} className="cursor-pointer" />
          <HeaderNav />
        </div>
      )}
    </header>
  );
};

export default Header;
