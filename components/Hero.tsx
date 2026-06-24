import Link from 'next/link'
import SectionLabel from './SectionLabel'
import { SERVICES } from '@/lib/constants'

export default function Hero() {
  return (
    <div className="bg-navy-deep text-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column */}
          <div>
            <SectionLabel light>Chartered Accountants · Ambikapur</SectionLabel>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-paper text-balance mt-2">
              Considered counsel in audit, tax, and compliance.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-border leading-relaxed max-w-prose">
              Santosh Singh &amp; Co. provides chartered accountancy services to
              businesses and individuals across Surguja district and
              Chhattisgarh — with attention to accuracy, regulatory compliance,
              and the particular circumstances of each client.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#services"
                className="px-6 py-3 bg-gold text-paper font-sans text-sm hover:bg-gold-light transition-colors duration-150"
              >
                View Services
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 border border-slate-border text-slate-border font-sans text-sm hover:border-paper hover:text-paper transition-colors duration-150"
              >
                Contact the Firm
              </Link>
            </div>
          </div>

          {/* Right column — practice areas card */}
          <div className="border border-navy-light p-6 sm:p-8">
            <p className="font-mono text-2xs tracking-[0.2em] uppercase text-gold mb-5">
              Practice Areas
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((s) => (
                <li key={s.title} className="flex items-start gap-2 text-sm text-slate-border">
                  <span className="mt-1 w-3 h-px flex-shrink-0 bg-gold inline-block" aria-hidden="true" />
                  {s.title}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-navy-light">
              <p className="text-xs text-slate-muted leading-relaxed">
                Serving businesses and individuals in Surguja district and
                across Chhattisgarh.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px bg-navy-light" />
    </div>
  )
}
