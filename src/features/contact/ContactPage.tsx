import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
  return (
    <main className="relative">
      <section className="md:bg-[url('/images/contact.jfif')] bg-[url('/images/resp-contact.jfif')]  backgroundImage w-full min-h-[300px] md:min-h-[800px]   bg-black/60 relative">
        <div className="absolute inset-0 bg-black/40" />
        <article className="text-center text-white p-5 pt-10 relative">
          <h2 className="heading-text font-bold">Contact Us</h2>
          {/* <p className="paragraph-text">
            Contact us today to learn more about Entacrest and how we can
            transform your payment experience.
          </p> */}
        </article>
      </section>
      <div className="mt-0 md:mt-10 w-full mx-auto h-full flex bg-button-blue md:bg-transparent justify-center items-center md:absolute md:top-0">
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
