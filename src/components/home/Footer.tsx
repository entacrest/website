import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import SubscribeNews from "../SubscribeNews";

const socials = [
  {
    icon: <FaFacebook className="hover:text-brand-300 cursor-pointer" />,
    path: "https://web.facebook.com/entacrest",
  },
  {
    icon: <FaInstagram className="hover:text-brand-300 cursor-pointer" />,
    path: "https://instagram.com/entacrest",
  },
  {
    icon: <FaLinkedin className="hover:text-brand-300 cursor-pointer" />,
    path: "https://www.linkedin.com/company/entacrest/",
  },
  {
    icon: <FaXTwitter className="hover:text-brand-300 cursor-pointer" />,
    path: "https://x.com/entacrest",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-950 border-t border-white/10">
      <article className="py-16 px-6 flex justify-center">
        <section className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between gap-10 w-full max-w-7xl">
          <div className="space-y-5 max-w-xs">
            <img
              src="/entacrest_logo.png"
              alt="Entacrest logo"
              width={170}
              height={72}
              className="invert brightness-125"
            />
            <div>
              <p className="text-[15px] leading-[24px] font-semibold text-brand-300">
                Fintech infrastructure &amp; custom software
              </p>
              <p className="text-sm text-slate-400 mt-2">info@entacrest.com</p>
              <p className="text-sm text-slate-400">+234 901 038 0794</p>
              <p className="text-sm text-slate-400">Oba Akran, Ikeja, Lagos</p>
            </div>
            <div className="flex gap-4 text-xl text-slate-400">
              {socials.map(({ icon, path }, i) => (
                <a href={path} target="_blank" rel="noreferrer" key={i}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Platforms</h2>
            <ul className="mt-5 space-y-3 flex flex-col">
              <Link to="/products" className="hover:text-brand-300 transition text-sm text-slate-400">Synchgate</Link>
              <Link to="/products" className="hover:text-brand-300 transition text-sm text-slate-400">EBS</Link>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Company</h2>
            <ul className="mt-5 space-y-3 flex flex-col">
              <Link to="/about" className="hover:text-brand-300 transition text-sm text-slate-400">About Entacrest</Link>
              <Link to="/work" className="hover:text-brand-300 transition text-sm text-slate-400">Our Work</Link>
              <Link to="/career" className="hover:text-brand-300 transition text-sm text-slate-400">Careers</Link>
              <Link to="/blog" className="hover:text-brand-300 transition text-sm text-slate-400">Blog</Link>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Contact</h2>
            <ul className="mt-5 space-y-3 flex flex-col">
              <Link to="/contact" className="hover:text-brand-300 transition text-sm text-slate-400">Start a Project</Link>
              <Link to="/contact" className="hover:text-brand-300 transition text-sm text-slate-400">Get in Touch</Link>
            </ul>
          </div>

          <div>
            <SubscribeNews />
          </div>
        </section>
      </article>
      <hr className="border-white/10" />
      <p className="text-center py-6 text-slate-400 text-sm px-4">
        Entacrest © {year} · All rights reserved · Building fintech infrastructure &amp; custom software
      </p>
    </footer>
  );
};

export default Footer;
