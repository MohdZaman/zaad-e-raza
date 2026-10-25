
import { useState } from "react";
import EnquiryModal from "../components/EnquiryModel";

const highlights = [
  {
    number: "01",
    title: "Guidance You Can Trust",
    description:
      "Clear guidance to help pilgrims prepare for their sacred journey with confidence.",
  },
  {
    number: "02",
    title: "Packages for Every Need",
    description:
      "Explore Economy, Deluxe and Premium options to find a package that suits your needs.",
  },
  {
    number: "03",
    title: "Support Throughout",
    description:
      "Get in touch with our team for package details, travel arrangements and assistance.",
  },
];

const AboutSection = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className="scroll-mt-24 bg-[#faf8f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1100&q=85"
              alt="The Holy Kaaba in Makkah"
              loading="lazy"
              className="h-72 w-full rounded-2xl object-cover sm:h-96 lg:h-[440px]"
            />

            <div className="absolute -bottom-4 right-4 rounded-xl border border-amber-500/30 bg-white px-5 py-4 shadow-lg sm:-right-4 sm:px-7">
              <p className="font-serif text-lg font-semibold text-emerald-950">
                A Sacred Journey
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Every step deserves care
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="pt-3 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              About ZAAD-E-RAZA
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl lg:text-5xl">
              Helping You Prepare for Your Sacred Journey
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
              Your Hajj and Umrah journey deserves thoughtful preparation and
              clear information. ZAAD-E-RAZA helps you explore travel packages
              and understand the arrangements available for your pilgrimage.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Whether you are exploring an Economy, Deluxe or Premium package,
              our goal is to help you take the next step with greater clarity
              and confidence.
            </p>

            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
            >
              Talk to Our Team
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trust highlights */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              The ZAAD-E-RAZA Difference
            </p>

            <h2 className="mt-4 font-serif text-3xl text-emerald-950 sm:text-4xl">
              Your Journey, Carefully Considered
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Find package information and get guidance as you plan your
              pilgrimage.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-emerald-900/10 bg-[#faf8f2] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <span className="font-serif text-3xl text-amber-600">
                  {item.number}
                </span>

                <h3 className="mt-5 font-serif text-xl font-semibold text-emerald-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable enquiry modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
};

export default AboutSection;
