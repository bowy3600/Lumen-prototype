"use client"

import { ArrowRight } from "lucide-react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { HeroDashboard } from "@/components/hero-chart"
import { ShimmerButton } from "@/components/shimmer-button"
import { MagneticButton } from "@/components/magnetic-button"
import { CTAModal } from "@/components/cta-modal"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-primary">
                Expertise comptable nouvelle generation
              </span>
            </div>
            <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                {"Pilotez votre croissance, nous gerons la complexite."}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {"L'expertise comptable nouvelle generation pour PME et startups. Automatisation, optimisation fiscale et conseil strategique."}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <CTAModal>
                <MagneticButton>
                  <ShimmerButton className="px-8 py-3.5 text-sm shadow-[0_0_20px_rgba(66,66,205,0.3)] md:text-base">
                    Commencer le diagnostic
                    <ArrowRight className="h-4 w-4" />
                  </ShimmerButton>
                </MagneticButton>
              </CTAModal>
              <CTAModal>
                <MagneticButton>
                  <Button
                    variant="outline"
                    className="rounded-full border-border/60 px-8 py-3.5 text-sm text-foreground hover:bg-secondary md:text-base bg-transparent"
                  >
                    Decouvrir nos offres
                  </Button>
                </MagneticButton>
              </CTAModal>
            </div>
          </div>
        }
      >
        <HeroDashboard />
      </ContainerScroll>
    </section>
  )
}
