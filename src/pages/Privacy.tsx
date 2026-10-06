import Breadcrumbs from "../components/Breadcrumbs";
import site from "../data/site.json";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              {
                label: "Privacy Policy",
              },
            ]}
          />

          <h1 className="mb-4 font-unica text-6xl tracking-wide">
            Privacy Policy<span className="text-accent">.</span>
          </h1>

          <p className="mb-12 text-sm opacity-60">
            Last updated: {site.privacy.lastUpdated}
          </p>

          <div className="space-y-10 leading-7">
            {/* Introduction */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                About this policy
              </h2>

              <p>
                This Privacy Policy explains how Wasteful handles information
                when you use the Wasteful mobile application and website.
              </p>

              <p className="mt-4">
                Wasteful is designed to work without an account or backend
                service. We aim to collect and process only the information
                needed to provide the app&apos;s functionality.
              </p>
            </section>

            {/* Information stored */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Information you enter
              </h2>

              <p>
                Wasteful allows you to enter information needed to manage your
                bin collection schedules. This may include:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Addresses</li>
                <li>Bin types</li>
                <li>Collection days</li>
                <li>Collection schedules</li>
                <li>Reminder preferences</li>
                <li>Information associated with your schedules</li>
              </ul>

              <p className="mt-4">
                This information is stored locally on your device. The current
                version of Wasteful does not send this information to a
                Wasteful backend or store it on Wasteful servers.
              </p>
            </section>

            {/* Where data is stored */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Where your data is stored
              </h2>

              <p>
                Your Wasteful schedules and addresses are stored locally on
                the device where you use the app. They are not stored in a
                Wasteful cloud database.
              </p>

              <p className="mt-4">
                Wasteful does not currently share this information with
                third-party companies or use it for advertising or analytics.
              </p>
            </section>

            {/* Notifications */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Notifications
              </h2>

              <p>
                Wasteful uses local notifications to remind you about upcoming
                bin collections.
              </p>

              <p className="mt-4">
                Notification schedules are created on your device and are not
                sent to a Wasteful server.
              </p>
            </section>

            {/* Information we collect */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Information we collect
              </h2>

              <p>
                Wasteful does not currently require an account and does not
                collect personal information through a Wasteful account.
              </p>

              <p className="mt-4">
                The current version of Wasteful does not use advertising,
                third-party analytics or crash-reporting services.
              </p>
            </section>

            {/* Third-party services */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Third-party services
              </h2>

              <p>
                Wasteful may rely on third-party software libraries required
                for the app to function. These libraries are used to provide
                app functionality and are not used by Wasteful to create a
                user account or maintain a Wasteful database.
              </p>

              <p className="mt-4">
                We review the software dependencies used by the app and aim to
                keep them reasonably up to date, including addressing relevant
                security updates.
              </p>
            </section>

            {/* Data deletion */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Deleting your data
              </h2>

              <p>
                Because your Wasteful information is stored locally on your
                device, you can delete schedules and addresses through the
                app.
              </p>

              <p className="mt-4">
                Uninstalling Wasteful or clearing the app&apos;s stored data
                may also remove information stored locally by the app.
              </p>

              <p className="mt-4">
                Because Wasteful does not currently store this information on
                its servers, there is no Wasteful cloud account or database
                from which your schedules need to be deleted.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Security
              </h2>

              <p>
                We take reasonable steps to keep Wasteful and its dependencies
                maintained and to address security issues that come to our
                attention.
              </p>

              <p className="mt-4">
                If you believe you have discovered a security vulnerability in
                Wasteful, please contact us at{" "}
                <a
                  href={`mailto:${site.security.email}`}
                  className="underline decoration-accent underline-offset-4 hover:opacity-70"
                >
                  {site.security.email}
                </a>
                .
              </p>
            </section>

            {/* Children's privacy */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Children&apos;s privacy
              </h2>

              <p>
                Wasteful is not specifically designed for children and does
                not knowingly collect personal information from children.
              </p>
            </section>

            {/* Website */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Our website
              </h2>

              <p>
                Our website does not currently require an account to access
                Wasteful information or download the app.
              </p>

              <p className="mt-4">
                We do not currently use advertising or analytics tracking on
                the Wasteful website.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Changes to this Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy when Wasteful&apos;s
                functionality, data practices or legal requirements change.
                The latest version will always be published on this page.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-3 text-2xl font-semibold">
                Contact
              </h2>

              <p>
                If you have questions about this Privacy Policy or how
                Wasteful handles information, contact us at{" "}
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