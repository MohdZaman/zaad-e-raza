
import { useState } from "react";
import EnquiryModal from "../components/EnquiryModel.jsx";

const Hero = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <section
        className="relative flex min-h-[680px] items-center overflow-hidden bg-emerald-950 bg-cover bg-center md:min-h-[760px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 35, 27, 0.92) 0%, rgba(2, 35, 27, 0.68) 48%, rgba(2, 35, 27, 0.25) 100%), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2200&q=85')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-36 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 sm:text-sm">
              <span className="h-px w-10 bg-amber-200" />
              A journey of faith
            </p>

            <h1 className="font-serif text-5xl font-medium leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your sacred journey
              <span className="mt-2 block italic text-amber-200">
                begins here.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Experience the blessings of Hajj and Umrah with thoughtful
              guidance, carefully planned journeys, and care at every step.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="rounded-full bg-amber-200 px-7 py-4 text-sm font-semibold text-emerald-950 transition hover:bg-amber-100"
              >
                Explore Our Packages
              </a>

              <button
                type="button"
                onClick={() => setEnquiryOpen(true)}
                className="rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
              >
                Talk to Our Team
              </button>
            </div>

           
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
};

export default Hero;
