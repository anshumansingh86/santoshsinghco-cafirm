import { FIRM } from '@/lib/constants'

const ITEMS = [
  { label: 'Firm Name', value: FIRM.name },
  { label: 'Registration No.', value: FIRM.frn },
  { label: 'Regulated By', value: 'ICAI' },
  { label: 'Location', value: `${FIRM.address.line1}, ${FIRM.address.state}` },
]

export default function TrustStrip() {
  return (
    <div className="bg-white border-b border-slate-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-border">
          {ITEMS.map((item) => (
            <div key={item.label} className="px-4 py-5 first:pl-0 last:pr-0">
              <dt className="font-mono text-2xs tracking-[0.15em] uppercase text-slate-muted mb-1">
                {item.label}
              </dt>
              <dd className="font-sans text-sm text-navy font-medium">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
