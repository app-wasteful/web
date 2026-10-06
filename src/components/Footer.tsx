import site from "../data/site.json";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-4 mt-5">

      <div className="mx-auto flex flex-col max-w-6xl items-center justify-between gap-4 text-sm">

        <a href="/" className="font-unica text-xl tracking-wide">
           © {new Date().getFullYear()} Wasteful <span className="text-accent">.</span>
        </a>

        <nav className="flex gap-4">
          <a href="/demo" className="hover:text-accent font-bold font-unica">
            Demo
          </a>
          <a href="/about" className="hover:text-accent font-bold font-unica">
            About
          </a>
          <a href="/privacy" className="hover:text-accent font-bold font-unica">
            Privacy
          </a>
          <a href="/terms" className="hover:text-accent font-bold font-unica">
            Terms
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="hover:text-accent font-bold font-unica">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}