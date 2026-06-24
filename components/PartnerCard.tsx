import Image from 'next/image'
import type { Partner } from '@/lib/constants'

type Props = { partner: Partner }

/** Placeholder avatar SVG rendered as a data URI — replace with next/image once real photos are available */
function AvatarPlaceholder() {
  return (
    <div
      className="w-20 h-20 bg-navy-deep border border-slate-border flex items-center justify-center"
      aria-hidden="true"
    >
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="14" r="7" stroke="#a9824a" strokeWidth="1.2" fill="none"/>
        <path d="M4 34c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#a9824a" strokeWidth="1.2" strokeLinecap="square" fill="none"/>
      </svg>
    </div>
  )
}

export default function PartnerCard({ partner }: Props) {
  return (
    <article className="border border-slate-border bg-white p-6 flex flex-col gap-4">
      {/* Avatar */}
      <div>
        {partner.photo ? (
          <Image
            src={partner.photo}
            alt={`Photo of ${partner.name}`}
            width={80}
            height={80}
            className="w-20 h-20 object-cover"
          />
        ) : (
          <AvatarPlaceholder />
        )}
      </div>

      {/* Identity */}
      <div>
        <h3 className="font-serif text-lg text-navy leading-tight">{partner.name}</h3>
        <p className="font-sans text-sm text-slate-muted mt-0.5">{partner.designation}</p>
      </div>

      {/* Membership number */}
      <dl className="border-t border-slate-border pt-4 space-y-2">
        <div className="flex gap-3">
          <dt className="font-mono text-2xs tracking-widest uppercase text-slate-muted w-28 flex-shrink-0 mt-px">
            Membership No.
          </dt>
          <dd className="font-mono text-sm text-navy">{partner.membershipNo}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="font-mono text-2xs tracking-widest uppercase text-slate-muted w-28 flex-shrink-0 mt-px">
            Qualifications
          </dt>
          <dd className="font-sans text-sm text-slate-text">
            {partner.qualifications.join(', ')}
          </dd>
        </div>
      </dl>

      {/* Practice areas — one factual line, as permitted by ICAI guidelines */}
      <p className="text-sm text-slate-muted border-t border-slate-border pt-4">
        <span className="font-mono text-2xs tracking-widest uppercase text-slate-muted block mb-1">
          Practice Areas
        </span>
        {partner.practiceAreas}
      </p>
    </article>
  )
}
