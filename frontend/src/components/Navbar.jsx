
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/#packages" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const linkClass =
    "text-sm font-medium text-emerald-950 transition-colors duration-200 hover:text-amber-700";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-900/10 bg-[#faf8f2] shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0"
          aria-label="ZAAD-E-RAZA Home"
        >
          <span className="block font-serif text-2xl font-bold tracking-wide text-emerald-950 sm:text-3xl">
            ZAAD-E-RAZA
          </span>

          <span className="mt-1 block text-[9px] font-medium tracking-[0.35em] text-amber-600 sm:text-[10px]">
            YOUR SACRED JOURNEY
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={linkClass}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/#packages"
          className="hidden rounded-full border border-amber-500 px-6 py-3 text-sm font-medium text-emerald-950 transition-all duration-300 hover:bg-emerald-950 hover:text-white md:inline-flex"
        >
          Explore Packages
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-900/15 text-emerald-950 transition hover:bg-emerald-900/5 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-emerald-900/10 bg-[#faf8f2] px-5 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-emerald-950 transition hover:bg-emerald-900/5 hover:text-amber-700"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/#packages"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-emerald-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-900"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
