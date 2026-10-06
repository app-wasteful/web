import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import site from "../data/site.json";

const sections = [
  {
    title: "What is Wasteful?",
    content:
      "Wasteful is a simple bin collection reminder app designed to make bin day one less thing to remember. Add your addresses, set up your collection schedules and choose when you want to be reminded.",
  },
  {
    title: "Why did we build it?",
    content:
      "Bin collection days are easy to forget, especially when different bins go out on different days. Wasteful was built to make keeping track of them simple, clear and stress-free.",
  },
  {
    title: "How does it work?",
    content:
      "Add an address, choose the type of collection, set the collection day and decide when you'd like a reminder. Wasteful then keeps your upcoming collections organised and sends local reminders when they're due.",
  },
  {
    title: "Is my data private?",
    content:
      "Wasteful doesn't require an account or a backend. Your addresses and collection schedules are stored locally on your device, and reminders are handled locally too.",
  },
  {
    title: "What's next?",
    content:
      "Wasteful is still growing. We're focused on keeping the app useful, simple and easy to use while exploring new ways to make managing bin collections even easier.",
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-bg text-text">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14">

            <Breadcrumbs items={[
                    {
                    label: "About",
                    },
                ]}
            />

            <h1 className="font-unica text-6xl tracking-wide">
              About Wasteful<span className="text-accent">.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg opacity-60 font-unica tracking-wide">
              Never forget collection day.
            </p>
          </div>

          <div className="border-t border-text/10">
            {sections.map((section, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={section.title}
                  className="border-b border-text/10">

                  <button
                    type="button"
                    onClick={() => toggleSection(index)}
                    className="flex w-full items-center justify-between py-6 text-left"
                    aria-expanded={isOpen}>

                    <span className="text-xl font-medium">
                      {section.title}
                    </span>

                    <span
                      className={`text-2xl font-light text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}>
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6"
                        : "grid-rows-[0fr]"
                    }`}>

                    <div className="overflow-hidden">
                      <p className="max-w-2xl leading-7 opacity-70">
                        {section.content}
                      </p>
                    </div>

                  </div>


                </div>
              );
            })}
          </div>
        </div>

        <section className="mx-auto max-w-3xl">
            <h2 className="mb-3 text-2xl font-semibold mt-8 ">
            Contact
            </h2>

            <p>
            If you have questions about this Privacy Policy or Wasteful, contact us at{" "}
            <a
                href={`mailto:${site.contact.email}`}
                className="underline decoration-accent underline-offset-4 hover:opacity-70"
            >
                {site.contact.email}
            </a>
            .
            </p>
        </section>


      </section>
    </main>
  );
}