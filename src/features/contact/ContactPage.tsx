import ContactForm from "./components/ContactForm";

const ContactPage = () => {
  return (
    <main>
      <section className="contact-hero w-full h-[600px]  md:h-[700px] bg-black/60">
        <div className="max-w-6xl mx-auto h-full flex items-center">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
