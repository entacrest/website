import Image from "next/image";

const Footer = () => {
  return (
    <article className="py-16 px-6 flex justify-center">
      <section className="flex justify-between gap-6 w-full max-w-6xl text-secondary-one">
        <div>
          <Image src="/entacrest_logo.png" alt="logo" width={100} height={80} />
          <div className="mt-5">
            <p>Pinnacle to enterprise solution</p>
            <p>info@entacrest.com</p>
            <p>+2348068535646</p>
            <div className="flex items-center"></div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold ">Links</h2>
          <ul className="mt-5">
            <li>Home</li>
            <li>ISMS Policy</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold ">Contact us</h2>
          <ul className="mt-5">
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
  );
};

export default Footer;
