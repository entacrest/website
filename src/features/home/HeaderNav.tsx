"use client";
import { motion } from "motion/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

const HeaderNav = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex space-x-6 p-4 flex-col md:flex-row ">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={` transition  text-base ${
              pathname === link.href
                ? "text-button-blue font-semibold border-b-2 border-button-blue"
                : "text-custom-blue900 hover:text-blue-300"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default HeaderNav;
