import Section from './Section'
import SectionLabel from './SectionLabel'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  return (
    <Section id="services" variant="paper">
      <div className="mb-12">
        <SectionLabel>Services</SectionLabel>
        <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-snug">
          Areas of Practice
        </h2>
        <p className="mt-3 text-slate-muted max-w-xl">
          The firm offers the following services. Scope and applicability depend
          on individual circumstances; please contact the firm to discuss your
          specific requirements.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-border border border-slate-border">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="bg-paper p-6 sm:p-8 flex flex-col gap-4"
          >
            {/* Title */}
            <h3 className="font-serif text-lg text-navy">{service.title}</h3>

            {/* Description */}
            <p className="text-sm text-slate-text leading-relaxed flex-1">
              {service.description}
            </p>

            {/* Items */}
            <ul className="space-y-1.5 border-t border-slate-border pt-4">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-muted">
                  <span className="mt-2 w-2.5 h-px flex-shrink-0 bg-gold inline-block" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* ICAI compliance note */}
      <p className="mt-6 text-xs text-slate-muted max-w-prose">
        The information above describes services generally offered by the firm
        and is not a guarantee of availability or outcome. Engagement terms are
        determined separately for each assignment.
      </p>
    </Section>
  )
}
