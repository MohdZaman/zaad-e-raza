
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-wide">
                ZAAD-E-RAZA
              </span>
            </Link>

            <p className="mt-2 text-[10px] font-medium tracking-[0.3em] text-amber-400">
              YOUR SACRED JOURNEY
            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
              Explore Hajj and Umrah packages and get guidance as you prepare
              for your sacred journey.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-amber-300">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#packages" className="transition hover:text-white">
                  Our Packages
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="transition hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Package categories */}
          <div>
            <h3 className="font-semibold text-amber-300">
              Our Packages
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <Link
                  to="/packages/economy"
                  className="transition hover:text-white"
                >
                  Economy Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/deluxe"
                  className="transition hover:text-white"
                >
                  Deluxe Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/packages/premium"
                  className="transition hover:text-white"
                >
                  Premium Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-amber-300">
              Get in Touch
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/70">
              Have questions about a package? Contact our team to discuss your
              requirements.
            </p>

            <a
              href="/#contact"
              className="mt-5 inline-flex rounded-full border border-amber-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-400 hover:text-emerald-950"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center sm:mt-12 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} ZAAD-E-RAZA. All rights reserved.
          </p>

          <p className="mt-3 text-xs text-white/60 sm:mt-0">
            Your sacred journey deserves thoughtful preparation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
