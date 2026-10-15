
import { Link, useParams } from "react-router-dom";

const packageInfo = {
  economy: {
    label: "Economy",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1800&q=85",
    description:
      "Explore an Economy package option and enquire about the arrangements for your pilgrimage.",
    inclusions: [
      "Package-specific travel arrangements",
      "Accommodation details to be confirmed",
      "Guidance before booking",
    ],
    exclusions: [
      "Flights and transport not explicitly confirmed",
      "Meals not specified in the confirmed itinerary",
      "Personal expenses and other unlisted services",
    ],
  },
  deluxe: {
    label: "Deluxe",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1800&q=85",
    description:
      "Explore a Deluxe package option and discuss the available arrangements with our team.",
    inclusions: [
      "Package-specific travel arrangements",
      "Accommodation details to be confirmed",
      "Guidance before booking",
    ],
    exclusions: [
      "Flights and transport not explicitly confirmed",
      "Meals not specified in the confirmed itinerary",
      "Personal expenses and other unlisted services",
    ],
  },
  premium: {
    label: "Premium",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1800&q=85",
    description:
      "Discover a Premium package option and enquire about its arrangements and availability.",
    inclusions: [
      "Package-specific travel arrangements",
      "Accommodation details to be confirmed",
      "Guidance before booking",
    ],
    exclusions: [
      "Flights and transport not explicitly confirmed",
      "Meals not specified in the confirmed itinerary",
      "Personal expenses and other unlisted services",
    ],
  },
};

const PackageDetails = () => {
  const { category, packageId } = useParams();

  const data = packageInfo[category?.toLowerCase()];

  const title = packageId
    ? packageId
        .split("-")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ")
    : "Pilgrimage Package";

  // Carry this specific package into the Contact form.
  const enquiryUrl = `/?package=${encodeURIComponent(packageId || "")}#contact`;

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf8f2] px-5 pt-24">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-emerald-950">
            Package not found
          </h1>

          <Link
            to="/"
            className="mt-5 inline-block text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            Return Home →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f2] pb-16 pt-28 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm"
        >
          <Link to="/" className="transition hover:text-amber-700">
            Home
          </Link>

          <span>/</span>

          <Link
            to={`/packages/${category}`}
            className="capitalize transition hover:text-amber-700"
          >
            {category} packages
          </Link>

          <span>/</span>

          <span className="text-emerald-950">{title}</span>
        </nav>

        {/* Hero */}
        <section className="relative isolate mt-6 min-h-[350px] overflow-hidden rounded-2xl bg-emerald-950 sm:min-h-[430px]">
          <img
            src={data.image}
            alt="Pilgrimage destination"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950/95 via-emerald-950/75 to-emerald-950/20" />

          <div className="flex min-h-[350px] items-end p-6 sm:min-h-[430px] sm:p-10 lg:items-center lg:p-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300 sm:text-sm">
                ZAAD-E-RAZA · {data.label} Package
              </p>

              <h1 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                {data.description}
              </p>

              <a
                href={enquiryUrl}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-amber-300"
              >
                Enquire About This Package →
              </a>
            </div>
          </div>
        </section>

        {/* Package summary */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Package Price", value: "Contact for Price" },
            { label: "Departure Date", value: "Confirm with our team" },
            { label: "Trip Duration", value: "To be confirmed" },
            { label: "Accommodation", value: "Details on enquiry" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-emerald-900/10 bg-white p-5"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                {item.label}
              </p>

              <p className="mt-3 font-serif text-lg font-semibold text-emerald-950">
                {item.value}
              </p>
            </div>
          ))}
        </section>

        {/* Package information */}
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_340px] lg:gap-12">
          <div className="space-y-8">
            <section className="rounded-2xl border border-emerald-900/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-emerald-950 sm:text-3xl">
                Package Overview
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Every departure may have different arrangements. Contact
                ZAAD-E-RAZA to confirm the final itinerary, availability,
                accommodation, transport, inclusions and total cost before
                booking.
              </p>
            </section>

            <section className="rounded-2xl border border-emerald-900/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-emerald-950">
                Package Inclusions
              </h2>

              <ul className="mt-5 space-y-4">
                {data.inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                  >
                    <span className="text-emerald-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 rounded-lg bg-amber-50 p-4 text-xs leading-6 text-amber-900">
                These are provisional descriptions. Only services listed in
                your confirmed package will be included.
              </p>
            </section>

            <section className="rounded-2xl border border-emerald-900/10 bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-emerald-950">
                Exclusions & Important Information
              </h2>

              <ul className="mt-5 space-y-4">
                {data.exclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                  >
                    <span className="text-amber-700">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs leading-6 text-gray-500">
                Confirm the final inclusions, exclusions and terms with the
                agency before making a payment.
              </p>
            </section>
          </div>

          {/* Enquiry sidebar */}
          <aside className="rounded-2xl border border-amber-500/30 bg-emerald-950 p-6 text-white sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Start Planning
            </p>

            <h2 className="mt-4 font-serif text-2xl">
              Interested in This Package?
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/75">
              Ask our team about prices, departure dates, accommodation and
              availability for this specific package.
            </p>

            <a
              href={enquiryUrl}
              className="mt-7 flex w-full items-center justify-center rounded-full bg-amber-400 px-5 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-amber-300"
            >
              Contact for Price
            </a>

            <Link
              to={`/packages/${category}`}
              className="mt-5 block text-center text-sm text-white/75 transition hover:text-white"
            >
              ← Explore Other Packages
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default PackageDetails;
