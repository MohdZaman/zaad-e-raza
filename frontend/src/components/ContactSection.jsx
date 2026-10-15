
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  packageType: "Umrah",
  travellers: "1",
  travelDate: "",
  message: "",
};

const formatPackageName = (value) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const ContactSection = () => {
  const location = useLocation();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const params = new URLSearchParams(location.search);
  const selectedPackage = params.get("package");

  useEffect(() => {
    if (!selectedPackage) return;

    setForm((previous) => ({
      ...previous,
      packageType: selectedPackage,
    }));

    setSubmitted(false);
  }, [selectedPackage]);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend demo only. No enquiry is sent or saved yet.
    console.log("Customer enquiry:", form);
    setSubmitted(true);
  };

  const inputClass =
    "mt-2 w-full rounded-lg border border-emerald-900/15 bg-white px-4 py-3 text-sm text-emerald-950 outline-none transition placeholder:text-gray-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/15";

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Contact information */}
        <div className="lg:py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            Contact Us
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Let’s Plan Your Sacred Journey
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Have questions about our Hajj or Umrah packages? Share your
            requirements and enquire about the available options.
          </p>

          <div className="mt-8 rounded-xl border border-emerald-900/10 bg-[#faf8f2] p-5 sm:p-6">
            <h3 className="font-serif text-xl font-semibold text-emerald-950">
              How can we help?
            </h3>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
              <li>• Package information and availability</li>
              <li>• Travel dates and group requirements</li>
              <li>• Accommodation and transport questions</li>
              <li>• Guidance before making a booking</li>
            </ul>
          </div>

          <p className="mt-5 text-xs leading-6 text-gray-500">
            Please do not submit passport numbers, payment details or other
            sensitive documents through this form.
          </p>
        </div>

        {/* Enquiry form */}
        <div className="rounded-2xl border border-emerald-900/10 bg-[#faf8f2] p-5 sm:p-8 lg:p-10">
          <h3 className="font-serif text-2xl font-semibold text-emerald-950">
            Send an Enquiry
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Fill in your details and tell us what you need.
          </p>

          {selectedPackage && (
            <div className="mt-5 rounded-lg border border-emerald-900/10 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                Your selected package
              </p>
              <p className="mt-1 font-medium text-emerald-950">
                {formatPackageName(selectedPackage)}
              </p>
            </div>
          )}

          {submitted && (
            <div
              role="status"
              className="mt-5 rounded-lg border border-emerald-700/20 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900"
            >
              Form validation passed, but your enquiry has not been sent or
              saved yet. We'll enable submission after backend integration.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-emerald-950"
                >
                  Full name *
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Enter your name"
                  autoComplete="name"
                  maxLength={100}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-emerald-950"
                >
                  Phone number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  maxLength={20}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-emerald-950"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
                className={inputClass}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="packageType"
                  className="text-sm font-medium text-emerald-950"
                >
                  Interested in *
                </label>

                <select
                  id="packageType"
                  name="packageType"
                  value={form.packageType}
                  onChange={updateField}
                  className={inputClass}
                  required
                >
                  <option value="Umrah">Umrah</option>
                  <option value="Hajj">Hajj</option>
                  <option value="Economy">Economy package</option>
                  <option value="Deluxe">Deluxe package</option>
                  <option value="Premium">Premium package</option>
                  <option value="Other">Other enquiry</option>
                  {selectedPackage && (
                    <option value={selectedPackage}>
                      {formatPackageName(selectedPackage)}
                    </option>
                  )}
                </select>
              </div>

              <div>
                <label
                  htmlFor="travellers"
                  className="text-sm font-medium text-emerald-950"
                >
                  Number of travellers *
                </label>

                <select
                  id="travellers"
                  name="travellers"
                  value={form.travellers}
                  onChange={updateField}
                  className={inputClass}
                  required
                >
                  {Array.from({ length: 20 }, (_, index) => (
                    <option key={index + 1} value={String(index + 1)}>
                      {index + 1} {index === 0 ? "traveller" : "travellers"}
                    </option>
                  ))}
                  <option value="20+">More than 20</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="travelDate"
                className="text-sm font-medium text-emerald-950"
              >
                Preferred travel date
              </label>
              <input
                id="travelDate"
                name="travelDate"
                type="date"
                value={form.travelDate}
                onChange={updateField}
                min={new Date().toLocaleDateString("en-CA")}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-emerald-950"
              >
                Additional requirements
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="Tell us about your travel requirements..."
                rows={4}
                maxLength={2000}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-emerald-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
            >
              Submit Enquiry →
            </button>

            <p className="text-center text-xs leading-5 text-gray-500">
              Enquiry submission will be activated after backend integration.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
