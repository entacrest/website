import ContactForm from "./ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const contactPoints = [
  { icon: Mail, label: "Email", value: "info@entacrest.com" },
  { icon: Phone, label: "Phone", value: "+234 901 038 0794" },
  { icon: MapPin, label: "Office", value: "Oba Akran, Ikeja, Lagos" },
];

const ContactPage = () => {
  return (
    <main className="relative bg-ink-950 grid-pattern overflow-hidden">
      <div className="absolute inset-0 glow-brand" style={{ ["--x" as string]: "75%" }} />
      <section className="relative max-w-7xl mx-auto px-5 pt-20 pb-16 md:pt-28 grid md:grid-cols-2 gap-14">
        <article>
          <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="heading-text font-bold text-white mb-6">
            Let&apos;s build something that has to work
          </h1>
          <p className="text-slate-300 leading-8 text-lg mb-10 max-w-md">
            Whether it&apos;s a product question about Synchgate or EBS, or a custom platform your business needs built, tell us about it and our team will get back to you.
          </p>
          <div className="space-y-5">
            {contactPoints.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-brand-300" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;
