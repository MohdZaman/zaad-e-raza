
import { Link, useParams } from "react-router-dom";

const packageData = {
  economy: {
    title: "Economy Packages",
    subtitle: "Essential comfort, thoughtfully planned",
    description:
      "Explore our Economy pilgrimage options and find a journey suited to your needs.",
    packages: [
      {
        id: "december-umrah",
        name: "December Umrah Package",
        month: "December Departure",
        description:
          "Explore our December departure option for your Umrah journey.",
        image:
          "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "january-umrah",
        name: "January Umrah Package",
        month: "January Departure",
        description:
          "Explore our January departure option for your Umrah journey.",
        image:
          "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },

  deluxe: {
    title: "Deluxe Packages",
    subtitle: "Added comfort for your sacred journey",
    description:
      "Explore our Deluxe package options and upcoming departures.",
    packages: [
      {
        id: "december-deluxe-umrah",
        name: "December Deluxe Umrah",
        month: "December Departure",
        description: "Explore the Deluxe option for December travel.",
        image:
          "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "january-deluxe-umrah",
        name: "January Deluxe Umrah",
        month: "January Departure",
        description: "Explore the Deluxe option for January travel.",
        image:
          "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },

  premium: {
    title: "Premium Packages",
    subtitle: "Thoughtfully planned pilgrimage options",
    description:
      "Explore our Premium package options and upcoming departures.",
    packages: [
      {
        id: "december-premium-umrah",
        name: "December Premium Umrah",
        month: "December Departure",
        description: "Explore the Premium option for December travel.",
        image:
          "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "january-premium-umrah",
        name: "January Premium Umrah",
        month: "January Departure",
        description: "Explore the Premium option for January travel.",
        image:
          "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
};

const PackageCategory = () => {
  const { category } = useParams();
  const data = packageData[category?.toLowerCase()];

  if (!data) {
    return (
      <main className="min-h-screen bg-[#faf8f2] px-5 pt-32 text-center">
        <h1 className="font-serif text-3xl text-emerald-950">
          Package category not found
        </h1>
        <Link to="/" className="mt-5 inline-block text-amber-700">
          Return Home →
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f2] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
          ZAAD-E-RAZA · OUR PACKAGES
        </p>

        <h1 className="mt-4 font-serif text-4xl text-emerald-950 sm:text-5xl">
          {data.title}
        </h1>

        <p className="mt-3 font-serif text-xl italic text-emerald-800">
          {data.subtitle}
        </p>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          {data.description}
        </p>

        {/* Monthly package cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {data.packages.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-48 w-full object-cover sm:h-52"
              />

              <div className="p-5 sm:p-6">
                <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                  {item.month}
                </span>

                <h2 className="mt-5 font-serif text-xl font-semibold text-emerald-950">
                  {item.name}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                <Link
                  to={`/packages/${category}/${item.id}`}
                  className="mt-6 flex w-full items-center justify-center rounded-full bg-emerald-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-900"
                >
                  View Package Details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/#packages"
            className="text-sm font-medium text-emerald-800 hover:text-amber-700"
          >
            ← Back to all package categories
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PackageCategory;
