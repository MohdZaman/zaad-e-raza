
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f2] px-5">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-[0.25em] text-amber-700">
          ZAAD-E-RAZA
        </p>

        <h1 className="mt-4 font-serif text-4xl text-emerald-950">
          Page not found
        </h1>

        <p className="mt-4 text-gray-600">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-emerald-950 px-6 py-3 text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
