import Section from './Section'
import SectionLabel from './SectionLabel'
import { FIRM } from '@/lib/constants'

export default function Contact() {
  const address = FIRM.address
  const mapsQuery = encodeURIComponent(
    `${FIRM.name} Ambikapur ${address.state} ${address.pin}`
  )

  return (
    <Section id="contact" variant="white">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Left */}
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-snug">
            Get in Touch
          </h2>
          <p className="mt-4 text-slate-text leading-relaxed max-w-prose">
            To enquire about services or schedule a consultation, please contact
            the firm by phone or email. All engagements begin with an initial
            discussion to understand the matter.
          </p>

          {/* Appointment note */}
          <p className="mt-4 text-sm text-slate-muted italic">
            {FIRM.appointmentNote}
          </p>

          {/* Contact details */}
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="font-mono text-2xs tracking-widest uppercase text-slate-muted mb-1">
                Address
              </dt>
              <dd className="text-sm text-slate-text">
                {address.line1}, {address.line2},<br />
                {address.state} – {address.pin},<br />
                {address.country}
              </dd>
            </div>

            <div>
              <dt className="font-mono text-2xs tracking-widest uppercase text-slate-muted mb-1">
                Phone
              </dt>
              <dd>
                <a
                  href={`tel:${FIRM.phone.replace(/\s/g, '')}`}
                  className="text-sm text-navy hover:text-gold transition-colors duration-150"
                >
                  {FIRM.phone}
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-mono text-2xs tracking-widest uppercase text-slate-muted mb-1">
                Email
              </dt>
              <dd>
                <a
                  href={`mailto:${FIRM.email}`}
                  className="text-sm text-navy hover:text-gold transition-colors duration-150 break-all"
                >
                  {FIRM.email}
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-mono text-2xs tracking-widest uppercase text-slate-muted mb-1">
                Firm Reg. No. (FRN)
              </dt>
              <dd className="font-mono text-sm text-navy">{FIRM.frn}</dd>
            </div>
          </dl>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm border border-slate-border text-slate-muted px-4 py-2 hover:border-navy hover:text-navy transition-colors duration-150"
          >
            View on Map ↗
          </a>
        </div>

        {/* Right — office hours */}
        <div>
          <div className="border border-slate-border p-6 sm:p-8">
            <p className="font-mono text-2xs tracking-[0.2em] uppercase text-gold mb-6">
              Office Hours
            </p>

            <table className="w-full text-sm border-collapse">
              <tbody>
                {FIRM.officeHours.map((row) => (
                  <tr key={row.day} className="border-b border-slate-border last:border-0">
                    <td className="py-3 pr-4 text-slate-muted w-1/2">{row.day}</td>
                    <td className="py-3 font-mono text-navy text-xs">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* mailto-based enquiry block */}
            <div className="mt-8 border-t border-slate-border pt-6">
              <p className="text-sm text-slate-muted mb-4">
                To request a consultation, send an email to the firm with a
                brief description of your matter.
              </p>
              <a
                href={`mailto:${FIRM.email}?subject=Consultation%20Request`}
                className="block text-center px-5 py-3 bg-navy text-paper text-sm font-sans hover:bg-navy-light transition-colors duration-150"
              >
                Request a Consultation
              </a>
              {/* ICAI compliance: no urgency language, no marketing CTA */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
