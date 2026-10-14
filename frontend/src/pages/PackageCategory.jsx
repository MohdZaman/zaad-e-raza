
import { Link, useParams } from "react-router-dom";

const packageData = {
  economy: {
    name: "Economy",
    subtitle: "Essential comfort, thoughtfully planned",
    description:
      "Explore our Economy pilgrimage options and find a journey suited to your needs.",
    packages: [
      {
        id: "economy-umrah",
        name: "Economy Umrah Package",
        description:
          "An Umrah travel option with essential arrangements and accommodation choices.",
        features: [
          "Accommodation options",
          "Travel arrangements",
          "Pilgrimage guidance",
        ],
      },
    ],
  },

  deluxe: {
    name: "Deluxe",
    subtitle: "A more comfortable journey",
    description:
      "Discover enhanced pilgrimage options designed around comfort and convenience.",
    packages: [
      {
        id: "deluxe-umrah",
        name: "Deluxe Umrah Package",
        description:
          "A pilgrimage option with enhanced comfort and travel arrangements.",
        features: [
          "Enhanced accommodation options",
          "Travel coordination",
          "Customer assistance",
        ],
      },
    ],
  },

  premium: {
    name: "Premium",
    subtitle: "A refined pilgrimage experience",
    description:
      "Explore personalised travel options for your sacred journey.",
    packages: [
      {
        id: "premium-umrah",
        name: "Premium Umrah Package",
        description:
          "A pilgrimage option focused on comfort and personalised assistance.",
        features: [
          "Premium accommodation options",
          "Personalised travel assistance",
          "Additional comfort options",
        ],
      },
    ],
  },
};

const PackageCategory = () => {
  const { category } = useParams();
  const selectedCategory = packageData[category?.toLowerCase()];

  if (!selectedCategory) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf8f2] px-5">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-emerald-950">
            Category not found
          </h1>
          <Link
            to="/"
            className="mt-5 inline-block rounded-full bg-emerald-950 px-6 py-3 text-white"
          >
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f2] px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-emerald-800 hover:text-amber-700"
        >
          <span aria-hidden="true">←</span> Back to home
        </Link>

        <header className="mb-10 mt-8 max-w-2xl sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 sm:text-sm">
            ZAAD-E-RAZA · OUR PACKAGES
          </p>

          <h1 className="mt-4 font-serif text-4xl font-medium text-emerald-950 sm:text-5xl">
            {selectedCategory.name} Packages
          </h1>

          <p className="mt-3 font-serif text-xl italic text-emerald-800">
            {selectedCategory.subtitle}
          </p>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            {selectedCategory.description}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {selectedCategory.packages.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm sm:p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-xl text-emerald-900">
                ✦
              </div>

              <h2 className="font-serif text-2xl font-semibold text-emerald-950">
                {item.name}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.description}
              </p>

              <ul className="mt-5 space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="text-amber-700" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={`/packages/${category}/${item.id}`}
                className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                View Package Details →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PackageCategory;
