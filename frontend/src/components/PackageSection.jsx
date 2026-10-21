
import { Link } from "react-router-dom";

const packages = [
  {
    id: "economy",
    name: "Economy",
    subtitle: "Comfort for every journey",
    description:
      "- Umrah Visa Assistance\n- Comfortable Hotel Accommodations\n- Meals\n- Local Transport Assistance\n- Ziyarat ",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "deluxe",
    name: "Deluxe",
    subtitle: "An elevated experience",
    description:
      "Discover enhanced travel options designed around comfort and convenience.",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "A refined pilgrimage",
    description:
      "Explore personalised travel options for a more tailored journey.",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
  },
];

const PackageSection = () => {
  return (
    <section
      id="packages"
      className="bg-[#faf8f2] px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 sm:text-sm">
            Find your perfect journey
          </p>

          <h2 className="font-serif text-3xl font-medium text-emerald-950 sm:text-4xl lg:text-5xl">
            Explore Our Packages
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Choose a package category to explore the journeys available
            for your sacred pilgrimage.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {packages.map((item) => (
            <article
              key={item.id}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-emerald-950/10 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4"
            >
              {/* Compact landscape image */}
              <div className="relative h-36 overflow-hidden rounded-xl bg-emerald-950/10 sm:h-40">
                <img
                  src={item.image}
                  alt={`${item.name} pilgrimage package category`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  {item.subtitle}
                </p>

                <h3 className="mt-2 font-serif text-2xl font-semibold text-emerald-950">
                  {item.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                <Link
                  to={`/packages/${item.id}`}
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                >
                  Explore Packages
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
