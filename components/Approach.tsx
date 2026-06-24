import Section from './Section'
import SectionLabel from './SectionLabel'
import { APPROACH_STEPS } from '@/lib/constants'

export default function Approach() {
  return (
    <Section id="approach" variant="navy">
      <div className="mb-12">
        <SectionLabel light>Our Approach</SectionLabel>
        <h2 className="font-serif text-3xl sm:text-4xl text-paper leading-snug">
          How the Firm Works
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-navy-light">
        {APPROACH_STEPS.map((s) => (
          <div key={s.step} className="md:px-10 first:pl-0 last:pr-0 flex flex-col gap-4">
            {/* Step number */}
            <span className="font-mono text-2xs tracking-[0.25em] text-gold">
              {s.step}
            </span>

            {/* Divider */}
            <div className="h-px w-10 bg-navy-light" />

            {/* Title */}
            <h3 className="font-serif text-xl text-paper">{s.title}</h3>

            {/* Body */}
            <p className="text-sm text-slate-border leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
