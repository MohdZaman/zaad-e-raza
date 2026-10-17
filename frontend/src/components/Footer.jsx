
const Footer = () => {
  // ==========================================
  // ADD YOUR REAL CONTACT DETAILS HERE
  // ==========================================
  const contact = {
    email: "zaaderaza@gmail.com",
    phone: "+91 8077725417",
    whatsapp: "91 7906575417", // Country code + number, digits only
    instagram: "https://www.instagram.com/zaaderaza/",
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-stone-200">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl font-bold tracking-wide text-white">
            ZAAD-E-RAZA
          </h2>

          <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-amber-400">
            Your Sacred Journey
          </p>

          <p className="mt-5 max-w-xs text-sm leading-7 text-stone-300">
            Your trusted companion for a peaceful and memorable Hajj
            and Umrah journey. Let us help you prepare for your sacred
            pilgrimage with care and dedication.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 font-serif text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="transition hover:text-amber-400">
                Home
              </a>
            </li>
            <li>
              <a href="/#packages" className="transition hover:text-amber-400">
                Our Packages
              </a>
            </li>
            <li>
              <a href="/#about" className="transition hover:text-amber-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/#faq" className="transition hover:text-amber-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="/#contact" className="transition hover:text-amber-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-5 font-serif text-lg font-semibold text-white">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-amber-400">✉</span>
              <a
                href={`mailto:${contact.email}`}
                className="break-all transition hover:text-amber-400"
              >
                {contact.email}
              </a>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-amber-400">☎</span>
              <a
                href={`tel:${contact.phone}`}
                className="transition hover:text-amber-400"
              >
                {contact.phone}
              </a>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-amber-400">◉</span>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-amber-400"
              >
                Chat with us on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-5 font-serif text-lg font-semibold text-white">
            Follow Us
          </h3>

          <p className="mb-5 text-sm leading-6 text-stone-300">
            Stay connected for our latest packages, updates, and travel
            information.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/40 text-amber-400 transition hover:border-amber-400 hover:bg-amber-400 hover:text-emerald-950"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>

            {/* <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/40 text-amber-400 transition hover:border-amber-400 hover:bg-amber-400 hover:text-emerald-950"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.2H7.5V13h2.7v8h3.2Z" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-stone-400 sm:flex-row sm:text-left lg:px-10">
          <p>
            © {currentYear} ZAAD-E-RAZA. All rights reserved.
          </p>

          <p className="text-amber-400/80">
            Your journey, our responsibility.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;