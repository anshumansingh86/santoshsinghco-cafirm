import Link from 'next/link'
import { FIRM } from '@/lib/constants'

const FOOTER_NAV = [
  { label: 'About',      href: '/#about' },
  { label: 'Services',   href: '/#services' },
  { label: 'Approach',   href: '/#approach' },
  { label: 'Contact',    href: '/#contact' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Privacy',    href: '/privacy' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep border-t border-navy-light text-paper">
      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Wordmark + FRN */}
          <div>
            <p className="font-serif text-lg text-paper">{FIRM.name}</p>
            <p className="font-mono text-2xs tracking-widest uppercase text-gold mt-0.5">
              {FIRM.type}
            </p>
            <p className="font-mono text-2xs text-slate-muted mt-3">
              FRN: {FIRM.frn}
            </p>
            <p className="text-xs text-slate-muted mt-1">Regulated by ICAI</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="font-mono text-2xs tracking-widest uppercase text-slate-muted mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-border hover:text-paper transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-mono text-2xs tracking-widest uppercase text-slate-muted mb-4">
              Contact
            </p>
            <address className="not-italic space-y-2 text-sm text-slate-border">
              <p>
                {FIRM.address.line1}, {FIRM.address.line2},<br />
                {FIRM.address.state} – {FIRM.address.pin}
              </p>
              <p>
                <a href={`tel:${FIRM.phone.replace(/\s/g, '')}`} className="hover:text-paper transition-colors duration-150">
                  {FIRM.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${FIRM.email}`} className="hover:text-paper transition-colors duration-150 break-all">
                  {FIRM.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Compliance disclaimer — required by ICAI guidelines */}
      <div className="border-t border-navy-light">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-slate-muted leading-relaxed">
            This website is intended only to provide general information about{' '}
            {FIRM.name} and is not an advertisement or solicitation of work. The
            contents do not constitute professional advice. By accessing this
            website the user acknowledges that there has been no advertisement,
            solicitation, invitation, or inducement of any kind whatsoever from
            the firm or its members to create a professional relationship.{' '}
            <Link href="/disclaimer" className="underline hover:text-paper transition-colors duration-150">
              Full disclaimer →
            </Link>
          </p>
          <p className="mt-4 text-xs text-slate-muted">
            © {year} {FIRM.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
