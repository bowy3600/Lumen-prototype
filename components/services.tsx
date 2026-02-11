"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts"
import { Shield, Sparkles } from "lucide-react"
import { SectionWrapper, StaggerChild } from "@/components/section-wrapper"
import { MagneticButton } from "@/components/magnetic-button"
import { CTAModal } from "@/components/cta-modal"
import { Button } from "@/components/ui/button"
import { NeonOrbs } from "@/components/ui/neon-orbs"

const barData = [
  { v: 40 }, { v: 65 }, { v: 50 }, { v: 80 }, { v: 60 }, { v: 90 }, { v: 75 },
]
const lineData = [
  { v: 20 }, { v: 35 }, { v: 30 }, { v: 50 }, { v: 45 }, { v: 70 }, { v: 65 },
]

export function Services() {
  return (
    <SectionWrapper id="services" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NeonOrbs showText={false} backgroundColor="bg-white" orbColor="#4242cd" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Nos services
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {"Une expertise 360\u00B0"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Des solutions completes pour chaque dimension de votre entreprise.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {/* Card 1 - Large */}
          <StaggerChild index={0} className="md:col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-border/30 bg-background/80 p-6 shadow-lg shadow-foreground/[0.03] backdrop-blur-sm md:p-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                  Comptabilite Augmentee
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Automatisation intelligente de votre comptabilite avec suivi en temps reel.
                </p>
              </div>
              <div className="mt-6 flex gap-4">
                <div className="flex-1 rounded-2xl bg-secondary p-4">
                  <p className="mb-2 text-xs font-medium text-muted-foreground">
                    Revenus mensuels
                  </p>
                  <ResponsiveContainer width="100%" height={100}>
                    <BarChart data={barData}>
                      <Bar dataKey="v" fill="#4242cd" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 rounded-2xl bg-secondary p-4">
                  <p className="mb-2 text-xs font-medium text-muted-foreground">
                    Tendance
                  </p>
                  <ResponsiveContainer width="100%" height={100}>
                    <LineChart data={lineData}>
                      <Line
                        type="monotone"
                        dataKey="v"
                        stroke="#4242cd"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </StaggerChild>

          {/* Card 2 */}
          <StaggerChild index={1}>
            <div className="flex h-full flex-col items-start rounded-3xl border border-border/30 bg-background/80 p-6 shadow-lg shadow-foreground/[0.03] backdrop-blur-sm md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-7 w-7 text-primary drop-shadow-[0_0_8px_rgba(66,66,205,0.4)]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                Optimisation Fiscale
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Strategies fiscales sur mesure pour maximiser vos economies.
              </p>
              <div className="mt-auto pt-6">
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
                  <span className="text-xs font-semibold text-primary">
                    {"Jusqu'a 15% d'economie"}
                  </span>
                </div>
              </div>
            </div>
          </StaggerChild>

          {/* Card 3 */}
          <StaggerChild index={2}>
            <div className="flex h-full flex-col items-start rounded-3xl border border-border/30 bg-background/80 p-6 shadow-lg shadow-foreground/[0.03] backdrop-blur-sm md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Sparkles className="h-7 w-7 text-primary drop-shadow-[0_0_8px_rgba(66,66,205,0.4)]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground md:text-2xl">
                Conseil Decisionnel
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                Tableaux de bord et analyses pour eclairer vos decisions strategiques.
              </p>
              <div className="mt-auto pt-6">
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
                  <span className="text-xs font-semibold text-primary">
                    Reporting en temps reel
                  </span>
                </div>
              </div>
            </div>
          </StaggerChild>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <CTAModal>
            <MagneticButton>
              <Button
                variant="outline"
                className="rounded-full border-primary/30 px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/5 bg-transparent"
              >
                Explorer nos services
              </Button>
            </MagneticButton>
          </CTAModal>
        </div>
      </div>
    </SectionWrapper>
  )
}
