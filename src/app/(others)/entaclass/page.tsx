export default function EntaStartPage() {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">
          Introducing EntaStart
        </h1>
        <p className="text-xl mt-4">
          Everything Your Business Needs to Go Digital — Instantly.
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Your complete starter pack for launching a professional online
          presence.
        </p>
      </div>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          What You Get with EntaStart:
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Professional Website",
              description:
                "A clean, modern website that tells your brand story, showcases your products/services, and helps customers reach you — no tech skills needed.",
            },
            {
              title: "Branded Work Email",
              description:
                "Use a business email like info@yourbusiness.com to boost your credibility and close more deals.",
            },
            {
              title: "Google My Business Setup",
              description:
                "Get found on Google Maps and local search with a verified profile to attract nearby customers.",
            },
            {
              title: "Free Domain Name",
              description:
                "Pick your own .com or .com.ng domain — it’s included for free when you start with EntaStart.",
            },
          ].map((item) => (
            <div key={item.title} className="border rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Built For */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Built for:</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Small & Medium Businesses",
            "Freelancers & Side Hustlers",
            "Local Shops & Service Providers",
            "New Startups",
          ].map((group) => (
            <span
              key={group}
              className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              {group}
            </span>
          ))}
        </div>
      </section>

      {/* Why EntaStart */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">Why EntaStart?</h2>
        <p className="text-gray-700 leading-relaxed">
          Because showing up online shouldn’t be hard or expensive. With
          EntaStart, you don’t just look professional — you become discoverable,
          credible, and ready to grow.
        </p>
      </section>

      {/* Offer */}
      <section className="mb-12 border border-yellow-300 rounded-xl p-6 bg-yellow-50">
        <h2 className="text-2xl font-bold text-yellow-700 mb-4">
          Launch Offer
        </h2>
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Get the full EntaStart bundle for only ₦200,000
        </p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Free domain</li>
          <li>1-month free support</li>
          <li>Business setup guide</li>
          <li>Bonus: Social media setup tips</li>
        </ul>
        <p className="mt-2 font-medium text-red-600">
          Offer valid for the first 50 signups!
        </p>
      </section>

      {/* CTA */}
      <section className="text-center mt-10">
        <a
          href="https://entacrest.com/entastart"
          target="_blank"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full text-lg"
        >
          Get Started
        </a>
        <div className="mt-6 text-sm text-gray-600 space-y-1">
          <p>
            Visit:{" "}
            <a
              href="https://entacrest.com/entastart"
              className="text-blue-600 underline"
            >
              entacrest.com/entastart
            </a>
          </p>
          <p>
            Call:{" "}
            <a href="tel:08068535646" className="text-blue-600">
              08068535646
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@entacrest.com" className="text-blue-600">
              info@entacrest.com
            </a>
          </p>
          <p className="mt-2 italic text-xs">Terms and conditions apply</p>
        </div>
      </section>
    </div>
  );
}
