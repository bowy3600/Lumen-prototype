"use client"

import { Check } from "lucide-react"
import { SectionWrapper, StaggerChild } from "@/components/section-wrapper"
import { MagneticButton } from "@/components/magnetic-button"
import { ShimmerButton } from "@/components/shimmer-button"
import { CTAModal } from "@/components/cta-modal"
import { BorderBeam } from "@/components/border-beam"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Essentiel",
    price: "149",
    target: "Freelances & TPE",
    features: [
      "Comptabilite de base",
      "Declarations fiscales",
      "Support email",
      "Tableau de bord basique",
    ],
    cta: "Choisir Essentiel",
    popular: false,
  },
  {
    name: "Croissance",
    price: "249",
    target: "PME en croissance",
    features: [
      "Tout Essentiel +",
      "Optimisation fiscale",
      "Conseil strategique trimestriel",
      "Support prioritaire",
      "Tableau de bord avance",
    ],
    cta: "Commencer maintenant",
    popular: true,
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    target: "ETI & Groupes",
    features: [
      "Tout Croissance +",
      "CFO externalise",
      "Audit & conformite",
      "Equipe dediee",
      "API & integrations",
    ],
    cta: "Nous contacter",
    popular: false,
  },
]

export function Pricing() {
  return (
    <SectionWrapper id="pricing" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Tarifs
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Des offres claires, sans surprise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Choisissez le plan adapte a la taille de votre ambition."}
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <StaggerChild key={plan.name} index={i}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-6 md:p-8 ${
                  plan.popular
                    ? "border-primary/30 bg-background shadow-xl shadow-primary/10 lg:scale-105"
                    : "border-border/30 bg-background/80 shadow-lg shadow-foreground/[0.03]"
                }`}
              >
                {plan.popular && <BorderBeam />}
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Populaire
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.target}
                  </p>
                </div>

                <div className="mb-6">
                  {plan.price === "Sur mesure" ? (
                    <span className="text-3xl font-bold tracking-tight text-foreground">
                      Sur mesure
                    </span>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="font-mono text-4xl font-bold tracking-tight text-foreground">
                        {plan.price}
                      </span>
                      <span className="font-mono text-lg text-muted-foreground">
                        {"EUR"}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        /mois
                      </span>
                    </div>
                  )}
                </div>

                <ul className="mb-8 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <CTAModal>
                    {plan.popular ? (
                      <MagneticButton className="w-full">
                        <ShimmerButton className="w-full py-3 shadow-[0_0_20px_rgba(66,66,205,0.3)]">
                          {plan.cta}
                        </ShimmerButton>
                      </MagneticButton>
                    ) : (
                      <MagneticButton className="w-full">
                        <Button
                          variant="outline"
                          className="w-full rounded-full border-border/60 py-3 text-foreground hover:bg-secondary bg-transparent"
                        >
                          {plan.cta}
                        </Button>
                      </MagneticButton>
                    )}
                  </CTAModal>
                </div>
              </div>
            </StaggerChild>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
