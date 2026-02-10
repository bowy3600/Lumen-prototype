"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, BadgeCheck } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { LogoMarquee } from "@/components/logo-marquee"
import { MagneticButton } from "@/components/magnetic-button"
import { ShimmerButton } from "@/components/shimmer-button"
import { CTAModal } from "@/components/cta-modal"

const testimonials = [
  {
    quote:
      "Lumen Finance n'est pas qu'un comptable, c'est notre partenaire de croissance. Ils ont transforme notre gestion financiere.",
    author: "Sarah L.",
    role: "CEO de TechFlow",
    avatar: "/avatars/sarah.jpg",
    initials: "SL",
  },
  {
    quote:
      "Depuis que nous travaillons avec Lumen, nous avons economise 15% sur nos impots. Leur expertise est inegalee.",
    author: "Marc D.",
    role: "Fondateur de GreenScale",
    avatar: "/avatars/marc.jpg",
    initials: "MD",
  },
  {
    quote:
      "Un accompagnement sur mesure, une reactivite exemplaire. Lumen Finance comprend les enjeux des startups.",
    author: "Julie P.",
    role: "COO de DataPulse",
    avatar: "/avatars/julie.jpg",
    initials: "JP",
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 etoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-primary text-primary"
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationId: number
    let position = 0
    const speed = 0.5

    const animate = () => {
      if (!isPaused) {
        position += speed
        const half = container.scrollWidth / 2
        if (position >= half) {
          position = 0
        }
        container.scrollLeft = position
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <SectionWrapper id="testimonials" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Temoignages
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Ils nous font confiance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Decouvrez comment Lumen Finance accompagne la croissance de ses clients."}
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-6 overflow-x-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allTestimonials.map((t, i) => (
            <div
              key={`${t.author}-${i}`}
              className="w-[340px] flex-shrink-0 rounded-3xl border border-border/30 bg-background p-6 shadow-lg shadow-foreground/[0.03] md:w-[400px] md:p-8"
            >
              <StarRating />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full bg-secondary">
                  <Image
                    src={t.avatar || "/placeholder.svg"}
                    alt={`Photo de ${t.author}`}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-foreground">
                      {t.author}
                    </span>
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo marquee */}
        <div className="mt-12">
          <LogoMarquee />
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <CTAModal>
            <MagneticButton>
              <ShimmerButton className="px-8 py-3 shadow-[0_0_20px_rgba(66,66,205,0.3)]">
                Rejoindre nos clients satisfaits
              </ShimmerButton>
            </MagneticButton>
          </CTAModal>
        </div>
      </div>
    </SectionWrapper>
  )
}
