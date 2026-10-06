function App() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <div className="mb-6 font-unica text-6xl tracking-wide">
            Wasteful<span className="text-accent">.</span>
          </div>

          <p className="font-body text-lg text-muted">
            Simple bin collection reminders.
          </p>

          <a
            href="/privacy" className="mt-8 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90">
            Privacy Policy
          </a>
        </div>
      </section>
    </main>
  )
}

export default App