
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import EnquiryModal from "../components/EnquiryModel.jsx";

const packages = {
  economy: {
    id: "economy",
    name: "Economy",
    subtitle: "Essential comfort for your sacred journey",
    description:
      "Our Economy Umrah package focuses on essential travel arrangements, comfortable accommodation and guidance throughout your journey.",
    duration: "21 Days",
    makkahHotel: "Within 1200 meters(Shuttle Service)",
    madinahHotel: "Within 800 meters",
    inclusions: [
      "Umrah visa assistance",
      "Hotel accommodation",
      "Meals as per package",
      "Local transportation assistance",
      "Ziyarat arrangements",
      "Travel guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1400&q=85",
  },

  deluxe: {
    id: "deluxe",
    name: "Deluxe",
    subtitle: "More comfort, more convenience",
    description:
      "Our Deluxe Umrah package offers enhanced accommodation options and thoughtfully arranged travel services for a comfortable pilgrimage.",
    duration: "21 Days",
    makkahHotel: "Within 800 meters(Shuttle Service)",
    madinahHotel: "Within 500 meters",
    inclusions: [
      "Umrah visa assistance",
      "Enhanced accommodation options",
      "Meals as per package",
      "Local transportation assistance",
      "Ziyarat arrangements",
      "Travel guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=85",
  },

  premium: {
    id: "premium",
    name: "Premium",
    subtitle: "An elevated pilgrimage experience",
    description:
      "Our Premium Umrah package is designed for pilgrims seeking upgraded accommodation and more personalised travel assistance.",
    duration: "21 Days",
    makkahHotel: "Within 300 meters",
    madinahHotel: "Within 200 meters",
    inclusions: [
      "Umrah visa assistance",
      "Premium accommodation options",
      "Meals as per package",
      "Local transportation assistance",
      "Ziyarat arrangements",
      "Personalised travel assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1400&q=85",
  },
};

const PackageInfo = () => {
  const { category } = useParams();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const selectedPackage = packages[category?.toLowerCase()];

  if (!selectedPackage) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#faf8f2] px-5 pt-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            ZAAD-E-RAZA
          </p>
          <h1 className="mt-4 font-serif text-3xl text-emerald-950">
            Package not found
          </h1>
          <Link
            to="/#packages"
            className="mt-6 inline-flex rounded-full bg-emerald-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Back to Packages
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="overflow-hidden bg-[#faf8f2] pb-20">
        {/* Hero */}
        <section className="relative isolate min-h-[520px] overflow-hidden bg-emerald-950 lg:min-h-[610px]">
          <img
            src={selectedPackage.image}
            alt={`${selectedPackage.name} Umrah package`}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-emerald-950/30" />

          <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-28 sm:px-8 lg:min-h-[610px] lg:px-10">
            <div className="max-w-3xl">
              <Link
                to="/#packages"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-amber-200"
              >
                <span aria-hidden="true">←</span>
                All Umrah Packages
              </Link>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-px w-10 bg-amber-300" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                  ZAAD-E-RAZA · UMRAH
                </p>
              </div>

              <h1 className="mt-5 font-serif text-5xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
                {selectedPackage.name}
                <span className="mt-1 block italic text-amber-200">
                  Umrah Package
                </span>
              </h1>

              <p className="mt-5 max-w-xl font-serif text-xl italic leading-relaxed text-white/85 sm:text-2xl">
                {selectedPackage.subtitle}
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                {selectedPackage.description}
              </p>

              <button
                type="button"
                onClick={() => setEnquiryOpen(true)}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-200 px-7 py-4 text-sm font-bold text-emerald-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-100"
              >
                Enquire About This Package
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
        </section>

        {/* Overview */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                Your Journey
              </p>

              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl">
                Thoughtfully Planned for Your Peace of Mind
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-gray-600 sm:text-base">
                Every pilgrimage deserves careful preparation. Explore the
                arrangements associated with the {selectedPackage.name}
                {" "}package and speak with our team to confirm the details
                of your preferred journey.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 transition hover:border-amber-400/70">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-950 text-amber-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M16 3v4M8 3v4M3 10h18" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-emerald-950">
                    Travel Duration
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {selectedPackage.duration}
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 transition hover:border-amber-400/70">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-950 text-amber-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M3 21V8l9-5 9 5v13" />
                      <path d="M9 21v-7h6v7M7 10h.01M12 10h.01M17 10h.01" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-emerald-950">
                    Accommodation
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Hotel options in Makkah and Madinah, as confirmed for your
                    selected package.
                  </p>
                </div>
              </div>
            </div>

            {/* Accommodation card */}
            <div className="relative overflow-hidden rounded-2xl bg-emerald-950 p-7 text-white shadow-xl sm:p-9">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-amber-300/20" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-amber-300/20" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
                Package Overview
              </p>

              <h2 className="mt-3 font-serif text-3xl">
                Your Stay
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Accommodation details are confirmed with our team according
                to your selected itinerary and availability.
              </p>

              <div className="my-7 h-px bg-white/15" />

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300/30 text-amber-200">
                    M
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/55">
                      Holy City
                    </p>
                    <h3 className="mt-1 font-serif text-xl">
                      Makkah
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      {selectedPackage.makkahHotel}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300/30 text-amber-200">
                    M
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/55">
                      City of the Prophet ﷺ
                    </p>
                    <h3 className="mt-1 font-serif text-xl">
                      Madinah
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      {selectedPackage.madinahHotel}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEnquiryOpen(true)}
                className="mt-8 w-full rounded-xl bg-amber-200 px-5 py-3.5 text-sm font-bold text-emerald-950 transition hover:bg-amber-100"
              >
                Check Availability →
              </button>
            </div>
          </div>
        </section>

        {/* Inclusions */}
        <section className="border-y border-emerald-900/10 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                What's Included
              </p>

              <h2 className="mt-4 font-serif text-3xl text-emerald-950 sm:text-4xl">
                Package Inclusions
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Review the services associated with your selected package.
                Exact inclusions will be confirmed with your itinerary.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selectedPackage.inclusions.map((inclusion, index) => (
                <div
                  key={inclusion}
                  className="group flex items-start gap-4 rounded-xl border border-emerald-900/10 bg-[#faf8f2] p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-400/70 hover:shadow-md"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-950 text-sm font-semibold text-amber-200 transition group-hover:bg-amber-200 group-hover:text-emerald-950">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1.5 text-sm leading-6 text-gray-700">
                    {inclusion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final call to action */}
        <section className="px-5 pt-16 sm:px-8 sm:pt-20 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-emerald-950 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full border border-amber-200/10" />
            <div className="absolute -bottom-32 -right-10 h-72 w-72 rounded-full border border-amber-200/10" />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
                Let Us Help You Prepare
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
                Ready to Plan Your Sacred Journey?
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                Contact our team to discuss the {selectedPackage.name}
                {" "}package, available departures, accommodation and pricing.
              </p>

              <button
                type="button"
                onClick={() => setEnquiryOpen(true)}
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-amber-200 px-8 py-4 text-sm font-bold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-amber-100"
              >
                Talk to Our Team
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-7xl text-center">
            <Link
              to="/#packages"
              className="text-sm font-medium text-emerald-800 transition hover:text-amber-700"
            >
              ← Explore Other Packages
            </Link>
          </div>
        </section>
      </main>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageInfo={{
          id: selectedPackage.id,
          name: selectedPackage.name,
        }}
      />
    </>
  );
};

export default PackageInfo;
