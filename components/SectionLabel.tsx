type Props = { children: React.ReactNode; light?: boolean }

/** Small mono label displayed above section headings */
export default function SectionLabel({ children, light = false }: Props) {
  return (
    <p
      className={`font-mono text-2xs tracking-[0.2em] uppercase mb-3 ${
        light ? 'text-gold-light' : 'text-gold'
      }`}
    >
      {children}
    </p>
  )
}
