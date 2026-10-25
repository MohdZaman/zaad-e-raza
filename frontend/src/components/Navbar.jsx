
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = decodeURIComponent(location.hash.slice(1));
      let attempts = 0;

      const intervalId = setInterval(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          clearInterval(intervalId);
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else if (++attempts >= 30) {
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }

    // When opening a page without a section hash, start at the top.
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);

  const goHome = () => {
    setMenuOpen(false);
    navigate("/");
  };

  const goToSection = (sectionId) => {
    setMenuOpen(false);
    navigate(`/#${sectionId}`);
  };

  const links = [
    { label: "Home", action: goHome },
    { label: "Packages", action: () => goToSection("packages") },
    { label: "About Us", action: () => goToSection("about") },
    { label: "FAQs", action: () => goToSection("faq") },
    { label: "Contact Us", action: () => goToSection("contact") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-900/10 bg-[#faf8f2] shadow-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0"
        >
          <span className="block font-serif text-xl font-bold tracking-wide text-emerald-950 sm:text-2xl">
            ZAAD-E-RAZA
          </span>
          <span className="mt-1 block text-[8px] font-medium tracking-[0.25em] text-amber-700 sm:text-[10px]">
            YOUR SACRED JOURNEY
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={link.action}
              className="text-sm font-medium text-emerald-950 transition hover:text-amber-700"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToSection("packages")}
          className="hidden rounded-full border border-amber-500 px-5 py-3 text-sm font-medium text-emerald-950 transition hover:bg-emerald-950 hover:text-white lg:inline-flex"
        >
          Explore Packages
        </button>

        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-900/15 text-emerald-950 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl" aria-hidden="true">×</span>
          ) : (
            <span className="text-2xl" aria-hidden="true">☰</span>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-emerald-900/10 bg-[#faf8f2] px-5 py-4 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={link.action}
                className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-emerald-950 transition hover:bg-emerald-900/5 hover:text-amber-700"
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToSection("packages")}
              className="mt-2 w-full rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white"
            >
              Explore Packages
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
