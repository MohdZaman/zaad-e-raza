
import { useState } from "react";

const faqs = [
  {
    question: "How can I choose the right Umrah package?",
    answer:
      "Explore our Economy, Deluxe and Premium categories. Compare the available package details and contact our team to discuss your travel requirements.",
  },
  {
    question: "What is included in an Umrah package?",
    answer:
      "Inclusions can vary by package. Please confirm the accommodation, transport, flights, visa assistance and other services with our team before booking.",
  },
  {
    question: "Can I enquire about a package before booking?",
    answer:
      "Yes. You can contact our team with your preferred package and travel requirements to ask questions before making a decision.",
  },
  {
    question: "Can I plan a journey for my family?",
    answer:
      "You can enquire about arrangements for families and groups. Share your expected travel dates and group size so our team can discuss the available options.",
  },
  {
    question: "How do I confirm the latest prices and availability?",
    answer:
      "Prices and availability may change depending on travel dates and package arrangements. Contact our team for the latest details before making a booking.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-[#faf8f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 font-serif text-3xl text-emerald-950 sm:text-4xl">
            Questions Before Your Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Find answers to common questions about planning your Hajj or Umrah
            journey.
          </p>
        </div>

        <div className="mt-10 space-y-3 sm:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-xl border border-emerald-900/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold leading-6 text-emerald-950 sm:text-base">
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-xl text-amber-700">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="border-t border-emerald-900/10 px-5 py-5 sm:px-6"
                  >
                    <p className="text-sm leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-950 transition hover:text-amber-700"
          >
            Still have questions? Contact us
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
