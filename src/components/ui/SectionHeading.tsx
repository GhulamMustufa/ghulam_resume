type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-caption mb-3 font-semibold text-sky-300">{eyebrow}</p>
      <h2 className="text-section-title font-semibold text-white">{title}</h2>
      <p className="mt-3 text-body-lg text-slate-300">{description}</p>
    </div>
  )
}
