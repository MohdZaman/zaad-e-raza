
import { useState } from "react";
import axios from "axios";

const API_URL = "https://zaad-e-raza-gve3.vercel.app/api/enquiries" || "http://localhost:5000/api/enquiries";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  travelDate: "",
  travellers: "1",
  message: "",
};

export default function EnquiryModal({
  isOpen,
  onClose,
  packageInfo = null,
}) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleClose = () => {
    if (status === "loading") return;

    onClose();
    setForm(initialForm);
    setStatus("idle");
    setFeedback("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("loading");
    setFeedback("");

    try {
      const response = await axios.post(API_URL, {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        travelDate: form.travelDate || null,
        travellers: Number(form.travellers),
        message: form.message.trim(),
        packageId: packageInfo?.id || "general",
        packageName: packageInfo
          ? `${packageInfo.name} Umrah Package`
          : "General Enquiry",
      });

      setStatus("success");
      setFeedback(
        response.data.message ||
          "Your enquiry has been submitted successfully."
      );
    } catch (error) {
      setStatus("error");
      setFeedback(
        error.response?.data?.message ||
          "We couldn't submit your enquiry. Please try again."
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative my-auto max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-[#faf8f2] p-5 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={handleClose}
          disabled={status === "loading"}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 rounded-full px-3 py-1 text-2xl text-gray-500 hover:bg-gray-200 disabled:opacity-50"
        >
          &times;
        </button>

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
          ZAAD-E-RAZA
        </p>

        <h2
          id="enquiry-title"
          className="mt-2 pr-8 font-serif text-3xl font-semibold text-emerald-950"
        >
          {status === "success"
            ? "Thank You!"
            : packageInfo
              ? `Enquire About ${packageInfo.name} Packages`
              : "Talk to Our Team"}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {status === "success"
            ? "Your enquiry has been received."
            : "Planning your sacred journey? Share your details and our team will help you with your Hajj or Umrah plans."}
        </p>

        {status === "success" ? (
          <div
            role="status"
            className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5"
          >
            <p className="leading-6 text-emerald-900">{feedback}</p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-5 rounded-xl bg-emerald-950 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="enquiry-name"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Full name *
              </label>
              <input
                id="enquiry-name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-emerald-800"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="enquiry-email"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Email address *
                </label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-emerald-800"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Phone number *
                </label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-emerald-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="enquiry-date"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Preferred travel date
                </label>
                <input
                  id="enquiry-date"
                  name="travelDate"
                  type="date"
                  min={new Date().toLocaleDateString("en-CA")}
                  value={form.travelDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-emerald-800"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-travellers"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Number of travellers *
                </label>
                <input
                  id="enquiry-travellers"
                  name="travellers"
                  type="number"
                  min="1"
                  max="100"
                  required
                  value={form.travellers}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-emerald-800"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="enquiry-message"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                How can we help? (optional)
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                rows="3"
                maxLength={2000}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your travel plans..."
                className="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-emerald-800"
              />
            </div>

            {status === "error" && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
              >
                {feedback}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl bg-amber-300 px-5 py-3.5 font-bold text-emerald-950 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading"
                ? "Submitting..."
                : "Send Enquiry"}
            </button>

            <p className="text-center text-xs leading-5 text-gray-500">
              Our team will contact you to discuss your plans and package
              availability.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
