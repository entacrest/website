import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
  return (
    <main className="relative">
      <section className="md:bg-[url('/images/contact.jfif')] bg-[url('/images/resp-contact.jfif')]  backgroundImage w-full min-h-[600px]  md:min-h-[700px] bg-black/60 relative">
        <div className="absolute inset-0 bg-black/40" />
      </section>
      <div className="w-full mx-auto h-full flex bg-button-blue md:bg-transparent justify-center items-center md:absolute md:top-0">
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
