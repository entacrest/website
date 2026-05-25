import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import SubscribeNews from "../SubscribeNews";

const socials = [
  {
    icon: <FaFacebook className="hover:text-blue-600 cursor-pointer" />,
    path: "https://web.facebook.com/entacrest",
  },
  {
    icon: <FaInstagram className="hover:text-pink-500 cursor-pointer" />,
    path: "https://instagram.com/entacrest",
  },
  {
    icon: <FaLinkedin className="hover:text-blue-800 cursor-pointer" />,
    path: "https://www.linkedin.com/company/entacrest/",
  },
  {
    icon: <FaXTwitter className="hover:text-black cursor-pointer" />,
    path: "https://x.com/entacrest",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <article className="py-16 px-6 flex justify-center">
        <section className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between gap-6 w-full max-w-7xl text-secondary-one">
          <div className="space-y-5">
            <Image
              src="/entacrest_logo.png"
              alt="Entacrest logo"
              width={180}
              height={80}
            />
            <div className="text-secondary-one">
              <p className="text-[16px] leading-[26px] font-semibold text-button-blue">
                Parent company of SynchGate
              </p>
              <p className="text-sm text-gray-500 mt-1">info@entacrest.com</p>
              <p className="text-sm text-gray-500">+2349010380794</p>
              <p className="text-sm text-gray-500">Oba Akran, Ikeja Lagos</p>
            </div>
            <div className="flex gap-4 text-xl text-gray-500">
              {socials.map(({ icon, path }, i) => (
                <Link href={path} target="_blank" key={i}>
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="mt-5 space-y-4 text-secondary-one flex flex-col">
              <Link href="/" className="hover:text-button-blue transition text-sm">Home</Link>
              <Link href="/about" className="hover:text-button-blue transition text-sm">About Entacrest</Link>
              <Link href="/career" className="hover:text-button-blue transition text-sm">Careers</Link>
              <Link href="/blog" className="hover:text-button-blue transition text-sm">Blog</Link>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">Products</h2>
            <ul className="mt-5 space-y-4 text-secondary-one flex flex-col">
              <Link href="/products" className="hover:text-button-blue transition text-sm">SynchGate</Link>
              <li className="text-sm text-gray-400">More coming soon</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">Contact</h2>
            <ul className="mt-5 space-y-4 text-secondary-one flex flex-col">
              <Link href="/contact" className="hover:text-button-blue transition text-sm">Contact Us</Link>
              <li className="text-sm text-gray-500">Partners</li>
              <li className="text-sm text-gray-500">Press</li>
            </ul>
          </div>

          <div>
            <SubscribeNews />
          </div>
        </section>
      </article>
      <hr className="text-secondary-one/70" />
      <p className="text-center pt-4 pb-10 text-secondary-one text-sm">
        Entacrest © {year} · All copyright reserved · Parent company of SynchGate
      </p>
    </>
  );
};

export default Footer;
