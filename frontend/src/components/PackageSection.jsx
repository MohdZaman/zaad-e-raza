
import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryModal from "./EnquiryModel.jsx";

const packages = [
  {
    id: "economy",
    name: "Economy",
    subtitle: "Comfort for every journey",
    description:
      "Umrah visa assistance, comfortable accommodation, meals, local transport assistance and Ziyarat.",
    price: 80000,
    duration: "21 Days",
    makkahHotel: "Within 1200 meters(Shuttle Service)",
    madinahHotel: "Within 800 meters",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "deluxe",
    name: "Deluxe",
    subtitle: "An elevated experience",
    description:
      "Enhanced accommodation and travel arrangements for a more comfortable pilgrimage.",
    price: 110000,
    duration: "21 Days",
    makkahHotel: "Within 800 meters(Shuttle Service)",
    madinahHotel: "Within 500 meters",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "A refined pilgrimage",
    description:
      "A premium pilgrimage experience with upgraded accommodation and personalised assistance.",
    price: 135000,
    duration: "21 Days",
    makkahHotel: "Within 300 meters",
    madinahHotel: "Within 200 meters",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
  },
];

const PackageSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const openBooking = (item) => {
    setSelectedPackage(item);
  };

  const closeBooking = () => {
    setSelectedPackage(null);
  };

  return (
    <section
      id="packages"
      className="bg-[#faf8f2] px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 sm:text-sm">
            Find your perfect journey
          </p>

          <h2 className="font-serif text-3xl font-medium text-emerald-950 sm:text-4xl lg:text-5xl">
            Choose Your Umrah Package
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Explore our Economy, Deluxe and Premium packages and enquire
            directly about the journey that suits you.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {packages.map((item) => (
            <article
              key={item.id}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Package image */}
              <div className="relative h-48 overflow-hidden sm:h-52">
                <img
                  src={item.image}
                  alt={`${item.name} Umrah package`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-amber-400/50 bg-emerald-950 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-300">
                  Umrah {item.name}
                </span>

                <span className="absolute bottom-4 right-4 rounded-full bg-emerald-900/90 px-3 py-1.5 text-xs font-semibold text-white">
                  {item.duration}
                </span>
              </div>

              {/* Package information */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  {item.subtitle}
                </p>

                <h3 className="mt-2 font-serif text-2xl font-semibold text-emerald-950">
                  {item.name} Umrah Package
                </h3>

                <p className="mt-3 min-h-16 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                {/* Starting price */}
                <div className="mt-5 rounded-2xl border border-emerald-800/30 bg-gradient-to-r from-emerald-950 to-emerald-800 p-4 text-white shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-100">
                    Package pricing
                  </p>

                  <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
                    <span className="text-sm font-medium text-emerald-100">
                      Starting from
                    </span>

                    <span className="text-3xl font-bold tracking-tight text-amber-300">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-sm text-emerald-100">
                      / person
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-emerald-100">
                    Confirm availability and inclusions with our team.
                  </p>
                </div>

               

                {/* Details and Book Now */}
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-100 pt-5">
                  <Link
                    to={`/packages/${item.id}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm font-semibold text-gray-800 transition hover:border-emerald-800 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                  >
                    Details
                  </Link>

                  <button
                    type="button"
                    onClick={() => openBooking(item)}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-400 px-3 py-3 text-sm font-bold text-emerald-950 shadow-sm transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Shared enquiry modal */}
      <EnquiryModal
        isOpen={Boolean(selectedPackage)}
        onClose={closeBooking}
        packageInfo={
          selectedPackage
            ? {
                id: selectedPackage.id,
                name: selectedPackage.name,
              }
            : null
        }
      />
    </section>
  );
};

export default PackageSection;
