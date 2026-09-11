import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Platforms" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Careers" },
];

const HeaderNav = ({ onClick }: { onClick: () => void }) => {
  const { pathname } = useLocation();
  return (
    <nav className="flex gap-6 lg:gap-8 flex-col md:flex-row md:items-center">
      {navLinks.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClick}
            className={`transition text-lg md:text-sm font-medium ${
              active ? "text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default HeaderNav;
