import Section from './Section'
import SectionLabel from './SectionLabel'
import PartnerCard from './PartnerCard'
import { FIRM, PARTNERS } from '@/lib/constants'

export default function About() {
  return (
    <Section id="about" variant="white">
      {/* Firm overview */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <SectionLabel>About the Firm</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-snug text-balance">
            {FIRM.name}
          </h2>
          <p className="mt-2 font-mono text-2xs tracking-widest text-slate-muted uppercase">
            {FIRM.type}
          </p>
        </div>

        <div className="space-y-5 text-slate-text leading-relaxed">
          <p>
            {FIRM.name} is a Chartered Accountancy firm registered with the
            Institute of Chartered Accountants of India (ICAI), based in
            Ambikapur, District Surguja, Chhattisgarh.
          </p>
          <p>
            The firm provides audit and assurance, income tax, GST, company law,
            accounting, and advisory services to individuals, partnership firms,
            private limited companies, and other entities in the region.
          </p>
          <p>
            All practice is conducted in accordance with the standards and
            guidelines prescribed by ICAI and the relevant statutory framework.
          </p>

          {/* Firm registration — factual, mono treatment */}
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-slate-border pt-6 text-sm">
            <div>
              <dt className="font-mono text-2xs tracking-widest uppercase text-slate-muted mb-1">FRN</dt>
              <dd className="font-mono text-navy">{FIRM.frn}</dd>
            </div>
            <div>
              <dt className="font-mono text-2xs tracking-widest uppercase text-slate-muted mb-1">Regulated by</dt>
              <dd className="font-sans text-navy">ICAI</dd>
            </div>
            <div>
              <dt className="font-mono text-2xs tracking-widest uppercase text-slate-muted mb-1">Office</dt>
              <dd className="font-sans text-navy">
                {FIRM.address.line1}, {FIRM.address.line2},<br />
                {FIRM.address.state} – {FIRM.address.pin}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Partners */}
      <div className="mt-20 pt-16 border-t border-slate-border">
        <div className="mb-10">
          <SectionLabel>Partners</SectionLabel>
          <h2 className="font-serif text-2xl text-navy">Partners of the Firm</h2>
          <p className="mt-2 text-sm text-slate-muted max-w-prose">
            Details are as filed with ICAI. Membership numbers can be verified
            at icai.org.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS.map((partner) => (
            <PartnerCard key={partner.membershipNo} partner={partner} />
          ))}
        </div>
      </div>
    </Section>
  )
}
