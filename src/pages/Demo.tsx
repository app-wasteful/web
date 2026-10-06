import Breadcrumbs from "../components/Breadcrumbs";

import councilImage from "../assets/demo/council.jpg";
import homeImage from "../assets/demo/home.jpg";
import addScheduleImage1 from "../assets/demo/add-schedule-1.jpg";
import manageImage from "../assets/demo/manage.jpg";
import takenOutImage from "../assets/demo/taken-out.jpg";

const steps = [
  {
    number: "01",
    title: "Find your council",
    description:
      "Not sure when your bins are collected? Find your local council and get to the right collection information.",
    image: councilImage,
    alt: "Wasteful Find My Council screen",
  },
  {
    number: "02",
    title: "Add a schedule",
    description:
      "Choose your address, waste type, collection day and repeat interval. Wasteful keeps the details in one place.",
    image: addScheduleImage1,
    alt: "Wasteful add schedule screen",
  },

  {
    number: "04",
    title: "Manage your schedules",
    description:
      "Keep track of all your collection schedules. Search, edit or remove them whenever things change.",
    image: manageImage,
    alt: "Wasteful manage schedules screen",
  },
  {
    number: "05",
    title: "Know what's coming",
    description:
      "See your next collections at a glance, so you know what's going out and when.",
    image: homeImage,
    alt: "Wasteful home screen showing upcoming collections",
  },
  {
    number: "06",
    title: "Mark it as taken out",
    description:
      "Once the bin is out, mark it as taken out and you're done.",
    image: takenOutImage,
    alt: "Wasteful mark as taken out screen",
  },
];

export default function Demo() {
  return (
    <main className="min-h-screen bg-bg text-text">
      {/* Hero */}
      <section className="px-6 pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              {
                label: "Demo",
              },
            ]}
          />

          <div className="mt-14 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              See it in action
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Wasteful,
              <br />
              <span className="text-accent">in action.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 opacity-65 md:text-xl">
              From finding your council to getting reminded about collection
              day, Wasteful keeps bin day simple.
            </p>
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="border-y border-black/10 bg-white/30 px-6 py-6">
        <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white scrollbar-thumb-rounded-full">
          {steps.map((step) => (
            <a
              key={step.number}
              href={`#step-${step.number}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
            >
              <span className="font-medium text-accent">{step.number}</span>
              <span>{step.title}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Demo steps */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          {steps.map((step, index) => {
            const reversed = index % 2 !== 0;

            return (
              <article
                key={step.number}
                id={`step-${step.number}`}
                className="scroll-mt-24"
              >
                <div
                  className={[
                    "grid items-center gap-12 md:grid-cols-2 md:gap-20",
                    reversed ? "md:[&>div:first-child]:order-2" : "",
                  ].join(" ")}
                >
                  {/* Text */}
                  <div className="max-w-xl">
                    <div className="mb-5 flex items-center gap-4">
                      <span className="font-unica text-3xl tracking-wide text-accent">
                        {step.number}
                      </span>

                      <div className="h-px w-12 bg-accent/40" />
                    </div>

                    <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                      {step.title}
                      <span className="text-accent">.</span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 opacity-65">
                      {step.description}
                    </p>
                  </div>

                  {/* Screenshot */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                      <img
                        src={step.image}
                        alt={step.alt}
                        className="block h-auto w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index !== steps.length - 1 && (
                  <div className="my-20 h-px bg-black/10 md:my-28" />
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Ending */}
      <section className="px-6 pb-28 pt-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-accent px-8 py-16 text-center text-white md:px-16 md:py-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] opacity-80">
            That's Wasteful
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Bin day,
            <br />
            sorted.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 opacity-90">
            Set your schedules, get your reminders and spend a little less
            time thinking about the bins.
          </p>
        </div>
      </section>
    </main>
  );
}