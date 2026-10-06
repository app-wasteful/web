import Breadcrumbs from "../components/Breadcrumbs";
import site from "../data/site.json";

export default function Terms() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              {
                label: "Terms of Service",
              },
            ]}
          />

          <h1 className="mb-4 font-unica text-6xl tracking-wide">
            Terms of Service<span className="text-accent">.</span>
          </h1>

          <p className="mb-12 text-sm opacity-60">
            Last updated: {site.terms.lastUpdated}
          </p>

          <div className="space-y-10 leading-7">
            {/* 1 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                About these terms
              </h2>

              <p>
                These Terms of Service govern your use of the Wasteful mobile
                application and website.
              </p>

              <p className="mt-4">
                By downloading, installing or using Wasteful, you agree to
                these terms. If you do not agree with them, please do not use
                the app.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                About Wasteful
              </h2>

              <p>
                Wasteful is a bin collection reminder app designed to help you
                organise collection schedules and receive reminders about
                upcoming bin collections.
              </p>

              <p className="mt-4">
                Wasteful is currently provided free of charge and does not
                require you to create an account.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Using Wasteful
              </h2>

              <p>
                You may use Wasteful for its intended purpose of managing your
                own bin collection schedules and reminders.
              </p>

              <p className="mt-4">
                You must not use Wasteful in a way that:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  breaks applicable laws or regulations;
                </li>
                <li>
                  attempts to interfere with or damage the app;
                </li>
                <li>
                  attempts to gain unauthorised access to systems or services
                  associated with Wasteful; or
                </li>
                <li>
                  intentionally uses the app in a way that could compromise
                  its security or availability.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Collection information
              </h2>

              <p>
                Wasteful is a reminder tool. It does not provide an official
                waste collection service and does not control collection
                schedules.
              </p>

              <p className="mt-4">
                Collection dates and arrangements can change. Information
                entered into Wasteful may therefore become inaccurate or out
                of date.
              </p>

              <p className="mt-4">
                You should check your local council or waste collection
                provider for the most current and authoritative collection
                information.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Notifications
              </h2>

              <p>
                Wasteful uses local notifications to remind you about upcoming
                collections.
              </p>

              <p className="mt-4">
                Notification delivery can be affected by your device settings,
                operating system, battery-saving features, notification
                permissions or other technical circumstances.
              </p>

              <p className="mt-4">
                You should not rely solely on a Wasteful notification as
                confirmation of a collection date.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Your information
              </h2>

              <p>
                You are responsible for ensuring that the information you enter
                into Wasteful is accurate and appropriate for your use of the
                app.
              </p>

              <p className="mt-4">
                Information entered into the current version of Wasteful is
                stored locally on your device. Our handling of information is
                described in our{" "}
                <a
                  href="/privacy"
                  className="underline decoration-accent underline-offset-4 hover:opacity-70"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Availability and changes
              </h2>

              <p>
                We aim to keep Wasteful available and functioning properly,
                but we cannot guarantee that the app or website will always
                be available, uninterrupted or free from errors.
              </p>

              <p className="mt-4">
                We may update, improve, change or discontinue features of
                Wasteful from time to time.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Intellectual property
              </h2>

              <p>
                Wasteful, including its name, branding, visual design,
                software and other original materials, belongs to Wasteful or
                its respective rights holders.
              </p>

              <p className="mt-4">
                You may use the app for its intended purpose. You must not
                copy, reproduce, distribute, modify or commercially exploit
                Wasteful or its branding without permission, except where
                applicable law permits you to do so.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Open-source software
              </h2>

              <p>
                Wasteful may include open-source software and third-party
                components that are distributed under their respective
                licences.
              </p>

              <p className="mt-4">
                Those components remain subject to the terms of their
                applicable open-source licences.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Liability
              </h2>

              <p>
                Nothing in these terms limits or excludes any liability that
                cannot lawfully be limited or excluded under applicable law.
              </p>

              <p className="mt-4">
                Subject to that, Wasteful is not intended to replace official
                information from your local council or waste collection
                provider. We are not responsible for changes to collection
                schedules made by those providers or for missed collections
                resulting from inaccurate information, changed schedules or
                notification delivery issues.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Suspension or termination
              </h2>

              <p>
                We may restrict or discontinue access to Wasteful where
                reasonably necessary, including where this is required for
                security, legal or operational reasons.
              </p>

              <p className="mt-4">
                You can stop using Wasteful at any time and may uninstall the
                app from your device.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Security vulnerabilities
              </h2>

              <p>
                If you believe you have discovered a security vulnerability in
                Wasteful, please report it responsibly rather than publicly
                disclosing the vulnerability before we have had an opportunity
                to investigate it.
              </p>

              <p className="mt-4">
                Security reports can be sent to{" "}
                <a
                  href={`mailto:${site.security.email}`}
                  className="underline decoration-accent underline-offset-4 hover:opacity-70"
                >
                  {site.security.email}
                </a>
                .
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Privacy
              </h2>

              <p>
                Your use of Wasteful is also subject to our{" "}
                <a
                  href="/privacy"
                  className="underline decoration-accent underline-offset-4 hover:opacity-70"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Changes to these terms
              </h2>

              <p>
                We may update these Terms of Service when Wasteful&apos;s
                functionality, services or legal requirements change.
              </p>

              <p className="mt-4">
                The latest version will be published on this page with the
                applicable updated date.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Governing law
              </h2>

              <p>
                These terms are governed by the laws of England and Wales,
                subject to any mandatory consumer protection rights that apply
                to you under applicable law.
              </p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Contact
              </h2>

              <p>
                If you have questions about these Terms of Service, contact us
                at{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="underline decoration-accent underline-offset-4 hover:opacity-70"
                >
                  {site.contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}