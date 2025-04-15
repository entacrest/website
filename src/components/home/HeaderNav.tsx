"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
  { href: "/career", label: "Career" },
  { href: "/blog", label: "Blog" },
];

const HeaderNav = ({ onClick }: { onClick: () => void }) => {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex gap-6 lg:gap-10 p-4 flex-col md:flex-row ">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className={` transition  text-lg ${
              pathname === link.href
                ? "text-button-blue font-semibold md:border-b-2 border-button-blue"
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
