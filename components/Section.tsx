import { ReactNode } from 'react'
import { clsx } from 'clsx'

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
  /** Use paper (default) or navy background */
  variant?: 'paper' | 'navy' | 'white'
}

export default function Section({
  id,
  className,
  children,
  variant = 'paper',
}: SectionProps) {
  const bg = {
    paper: 'bg-paper',
    navy: 'bg-navy-deep text-paper',
    white: 'bg-white',
  }[variant]

  return (
    <section id={id} className={clsx('py-16 md:py-24', bg, className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
