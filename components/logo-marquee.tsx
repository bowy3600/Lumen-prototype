"use client"

const logos = [
  "TechFlow",
  "GreenScale",
  "DataPulse",
  "NovaCorp",
  "FinBridge",
  "CloudStack",
  "SynergiX",
  "VeloGroup",
]

export function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-8" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-secondary to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-secondary to-transparent" />
      <div className="flex w-max animate-marquee">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="mx-8 flex items-center justify-center lg:mx-12"
          >
            <span className="select-none whitespace-nowrap text-xl font-bold tracking-tight text-muted-foreground/40 lg:text-2xl">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
