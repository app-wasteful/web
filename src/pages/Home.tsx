import googlePlayBadge from "../assets/google-play-badge.png"
import homeBg from "../assets/home-bg.png"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="sm:h-screen overflow-hidden bg-bg text-text">
      <section className="flex h-full flex-col items-center ">

        {/* Hero content */}
        <div className="flex h-[45%] w-full flex-col items-center justify-center px-6 mt-10">

          {/* Logo */}
          <h1 className="font-unica text-7xl tracking-wide md:text-8xl">
            Wasteful<span className="text-accent">.</span>
          </h1>

          {/* Tagline */}
          <p className="mt-3 font-unica text-xl tracking-wide text-muted md:text-2xl">
            Never forget collection day
          </p>

          {/* App buttons */}
          <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row">

            {/* Google Play */}
            <a
              href="/"
              className="flex items-center transition hover:scale-[1.02]">
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="h-14 w-auto"
              />
            </a>

            {/* App Store */}
            <div className="flex h-14 cursor-default items-center gap-3 rounded-xl border border-border bg-surface px-6 text-muted">
              <span className="text-2xl">●</span>

              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase">
                  Coming soon on
                </span>

                <span className="block text-lg font-medium">
                  App Store
                </span>
              </span>
            </div>

          </div>

          {/* Navigation */}
          <nav className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 font-unica decoration-accent uppercase text-sm text-muted bg-white border border-accent rounded-full px-6 py-3 font-bold text-sm md:text-base mb-10">
            <a href="/demo" className="transition hover:text-accent hover:underline">
              Demo
            </a>

            <a href="/about" className="transition hover:text-accent hover:underline">
              About
            </a>

            <a href="/privacy" className="transition hover:text-accent hover:underline">
              Privacy
            </a>

            <a href="/terms" className="transition hover:text-accent hover:underline">
              Terms
            </a>
          </nav>

        </div>

        {/* Image */}
        <div className="h-[35%] md:h-[45%] lg:h-[55%] w-full overflow-hidden">
          <img
            src={homeBg}
            alt="Wasteful app"
            className="h-full w-full object-cover object-top"
          />
        </div>

      </section>
    </main>
  )
}