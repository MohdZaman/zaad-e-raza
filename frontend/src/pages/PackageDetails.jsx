
import { Link, useParams } from "react-router-dom";

const PackageDetails = () => {
  const { category, packageId } = useParams();

  const title = packageId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-[#faf8f2] px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Link
          to={`/packages/${category}`}
          className="inline-flex items-center gap-2 text-sm text-emerald-800 hover:text-amber-700"
        >
          ← Back to {category} packages
        </Link>

        <section className="mt-8 overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-sm">
          <div className="bg-emerald-950 px-6 py-12 sm:px-10 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              ZAAD-E-RAZA · {category}
            </p>

            <h1 className="mt-4 font-serif text-3xl font-medium text-white sm:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Discover the arrangements for your pilgrimage and contact
              our team to discuss availability, pricing and travel dates.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            <h2 className="font-serif text-2xl text-emerald-950">
              Package Overview
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Package inclusions, accommodation, transport, itinerary
              and pricing will be confirmed by our team.
            </p>

            <div className="mt-8 rounded-xl bg-[#faf8f2] p-5 sm:p-6">
              <h3 className="font-semibold text-emerald-950">
                Interested in this package?
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Contact ZAAD-E-RAZA to discuss your requirements.
              </p>

              <a
                href={`/#contact?package=${packageId}`}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-emerald-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 sm:w-auto"
              >
                Enquire About This Package →
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PackageDetails;
