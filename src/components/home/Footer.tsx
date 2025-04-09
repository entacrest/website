import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

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
              alt="logo"
              width={180}
              height={80}
            />
            <div className="text-secondary-one">
              <p className="text-[22px] leading-[26px]">
                Pinnacle of enterprise solution
              </p>
              <p>info@entacrest.com</p>
              <p>+2349010380794</p>
              <div className="flex items-center"></div>
            </div>
            <div className="flex gap-4 text-xl text-gray-500">
              {socials.map(({ icon, path }, i) => {
                return (
                  <Link href={path} target="_blank" key={i}>
                    {icon}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold ">Links</h2>
            <ul className="mt-5 space-y-4 text-secondary-one flex flex-col ">
              <Link href="/">Home</Link>
              <Link href="/about">About us</Link>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Contact us</h2>
            <ul className="mt-5 space-y-4 text-secondary-one">
              <li>Partners</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold ">Our office</h2>
            <p className="mt-5">Oba Akran, Ikeja Lagos</p>
          </div>
        </section>
      </article>
      <hr className="text-secondary-one/70" />
      <p className="text-center pt-4 pb-10 text-secondary-one">
        Entacrest © {year}, All copyright reserved.
      </p>
    </>
  );
};

export default Footer;
