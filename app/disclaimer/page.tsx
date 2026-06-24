import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FIRM } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: `Disclaimer for the website of ${FIRM.name}, Chartered Accountants, Ambikapur.`,
}

export default function DisclaimerPage() {
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
          <h1 className="font-serif text-3xl sm:text-4xl text-navy mb-2">Disclaimer</h1>
          <p className="text-sm text-slate-muted mb-10">
            Pursuant to ICAI guidelines and applicable rules of professional conduct.
          </p>

          <div className="space-y-8 text-slate-text text-[0.9375rem] leading-relaxed">

            <section className="bg-white border border-slate-border p-6">
              <h2 className="font-serif text-lg text-navy mb-3">
                Not an Advertisement or Solicitation
              </h2>
              <p>
                This website is intended only to provide general information about{' '}
                {FIRM.name} and is <strong>not</strong> an advertisement, solicitation,
                or inducement of any nature whatsoever — either directly or indirectly —
                to offer, render, or cause any person to offer or render any professional
                service.
              </p>
              <p className="mt-3">
                By accessing this website the user expressly acknowledges that there has been
                no advertisement, solicitation, invitation, or inducement of any kind
                whatsoever from {FIRM.name} or any of its members to solicit work through
                this website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">General Information Only</h2>
              <p>
                The contents of this website are for general informational purposes only.
                Nothing on this website constitutes legal, financial, tax, or other professional
                advice. The information is provided without warranty of any kind and may not
                reflect recent developments in law or practice.
              </p>
              <p className="mt-3">
                Users should not act on the basis of any information on this website without
                first obtaining specific advice from a qualified professional in relation to
                their particular circumstances.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">No Professional Relationship</h2>
              <p>
                Access to or use of this website does not create a professional relationship of
                any kind between the user and {FIRM.name} or any of its members. A
                professional relationship arises only upon the execution of a formal engagement
                letter or agreement signed by the firm.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">Accuracy of Information</h2>
              <p>
                While every effort is made to keep the information on this website accurate
                and up to date, {FIRM.name} makes no representation or warranty — express or
                implied — as to the accuracy, completeness, or currency of any information
                contained herein. The firm shall not be liable for any loss arising from
                reliance on the contents of this website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">No Guarantee of Outcome</h2>
              <p>
                No statement on this website should be construed as a guarantee, warranty, or
                prediction of the outcome of any matter. Professional results depend on
                individual facts and circumstances, applicable law, and factors beyond the
                firm&apos;s control.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">Regulatory Compliance</h2>
              <p>
                {FIRM.name} (FRN: {FIRM.frn}) is a firm of Chartered Accountants
                registered with and regulated by the Institute of Chartered Accountants of
                India (ICAI). The firm is bound by the ICAI Code of Ethics and the rules
                framed thereunder, including restrictions on advertising and solicitation.
              </p>
              <p className="mt-3">
                This website has been prepared in compliance with the ICAI{' '}
                &ldquo;Guidelines for Posting Particulars on Website by Members in
                Practice&rdquo; and does not contain any content that constitutes
                advertising or solicitation as defined under those guidelines.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">External Links</h2>
              <p>
                This website may contain links to external websites maintained by third parties.
                These links are provided for convenience only. {FIRM.name} does not control
                or endorse the content of any linked site and accepts no responsibility for
                them.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">Governing Law</h2>
              <p>
                Any dispute arising from access to or use of this website shall be subject
                to the jurisdiction of courts in Ambikapur, Chhattisgarh, India, and shall
                be governed by the laws of India.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-navy mb-3">Contact</h2>
              <p>
                For queries relating to this disclaimer or the firm&apos;s compliance
                obligations, please write to{' '}
                <a href={`mailto:${FIRM.email}`} className="text-gold hover:underline">
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
