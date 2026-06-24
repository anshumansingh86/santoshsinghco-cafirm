import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FIRM } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for the website of ${FIRM.name}, Chartered Accountants, Ambikapur.`,
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <Link href="/" className="font-mono text-2xs tracking-widest uppercase text-gold hover:underline">
              ← Home
            </Link>
          </nav>

          <p className="font-mono text-2xs tracking-[0.2em] uppercase text-gold mb-3">
            Legal
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-navy mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-muted mb-10">Last updated: June 2025</p>

          <div className="prose-custom space-y-8 text-slate-text text-[0.9375rem] leading-relaxed">

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">1. Scope</h2>
              <p>
                This Privacy Policy describes how {FIRM.name} (&ldquo;the firm&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information in connection with the
                website at {FIRM.domain} (the &ldquo;Site&rdquo;). This Site is static and
                informational; it does not collect personal information through forms, tracking
                scripts, or cookies beyond those set by the hosting platform.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">2. Information We Do Not Collect</h2>
              <p>
                The Site does not operate any server-side contact forms, newsletter sign-ups,
                or lead-capture mechanisms. We do not set first-party analytics cookies. We
                do not use advertising networks or remarketing pixels.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">3. Information Collected by Hosting Platforms</h2>
              <p>
                The Site may be hosted on a third-party platform (such as Cloudflare Pages,
                Netlify, or Vercel). These platforms may automatically log standard web server
                data — such as your IP address, browser type, referring URL, and pages
                visited — as part of their infrastructure operations. This data is governed by
                the privacy policies of the respective platform operator. The firm does not
                control or access this data in a personally identifiable form.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">4. Email Communications</h2>
              <p>
                If you contact the firm by email (via a mailto link on this Site), the message
                and any personal information it contains will be used solely for the purpose of
                responding to your enquiry. Email communications are subject to the firm&apos;s
                professional obligations and are not used for marketing.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">5. Client Records</h2>
              <p>
                Any personal or financial information provided in the course of a professional
                engagement is handled in accordance with the ICAI Code of Ethics, applicable
                data-protection law, and the terms agreed at the time of engagement. Such
                information is strictly confidential and is not connected to this website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">6. Third-Party Links</h2>
              <p>
                This Site may contain links to external websites (e.g., ICAI, government
                portals). These sites are not operated by the firm, and we have no
                responsibility for their content or privacy practices.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">7. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Any material changes will be
                reflected on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">8. Contact</h2>
              <p>
                For any privacy-related queries, contact the firm at{' '}
                <a
                  href={`mailto:${FIRM.email}`}
                  className="text-gold hover:underline"
                >
                  {FIRM.email}
                </a>
                .
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
