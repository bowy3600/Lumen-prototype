"use client"

import { ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { MagneticButton } from "@/components/magnetic-button"
import { CTAModal } from "@/components/cta-modal"
import { GradientTracing } from "@/components/ui/gradient-tracing"

export function FinalCTA() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* Animated gradient tracing lines */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 flex h-full w-full flex-col justify-evenly"
      >
        <GradientTracing
          width={2000}
          height={2}
          baseColor="white"
          gradientColors={["#4242cd", "#4242cd", "#4242cd"]}
          animationDuration={3}
          strokeWidth={2}
          path="M0,1 L2000,1"
        />
        <GradientTracing
          width={2000}
          height={2}
          baseColor="white"
          gradientColors={["#4242cd", "#4242cd", "#4242cd"]}
          animationDuration={4}
          strokeWidth={2}
          path="M0,1 L2000,1"
        />
        <GradientTracing
          width={2000}
          height={2}
          baseColor="white"
          gradientColors={["#4242cd", "#4242cd", "#4242cd"]}
          animationDuration={3.5}
          strokeWidth={2}
          path="M0,1 L2000,1"
        />
        <GradientTracing
          width={2000}
          height={2}
          baseColor="white"
          gradientColors={["#4242cd", "#4242cd", "#4242cd"]}
          animationDuration={5}
          strokeWidth={2}
          path="M0,1 L2000,1"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          {"Pret a deleguer votre complexite ?"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-gray-600 md:text-lg">
          Rejoignez plus de 450 entreprises qui font confiance a Lumen Finance.
        </p>
        <div className="mt-10 flex justify-center">
          <CTAModal>
            <MagneticButton>
              <button
                type="button"
                className="inline-flex animate-pulse-glow items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-lg"
              >
                Planifier mon diagnostic gratuit
                <ArrowRight className="h-5 w-5" />
              </button>
            </MagneticButton>
          </CTAModal>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Gratuit, sans engagement, en 30 minutes.
        </p>
      </div>
    </SectionWrapper>
  )
}
