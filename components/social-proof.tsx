"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { Clock, TrendingDown, Users, Star } from "lucide-react"
import { SectionWrapper, StaggerChild } from "@/components/section-wrapper"

interface CounterProps {
  target: number
  suffix: string
  prefix?: string
  decimals?: number
}

function AnimatedCounter({ target, suffix, prefix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const startTime = Date.now()
    const step = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(eased * target)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-mono text-4xl font-bold tracking-tight text-foreground md:text-5xl">
      {prefix}
      {decimals > 0 ? current.toFixed(decimals) : Math.round(current)}
      {suffix}
    </span>
  )
}

const metrics = [
  {
    icon: Clock,
    target: 20,
    prefix: "+",
    suffix: "h",
    label: "gagnees par mois",
    decimals: 0,
  },
  {
    icon: TrendingDown,
    target: 15,
    prefix: "",
    suffix: "%",
    label: "d'economie d'impots",
    decimals: 0,
  },
  {
    icon: Users,
    target: 450,
    prefix: "",
    suffix: "+",
    label: "clients accompagnes",
    decimals: 0,
  },
  {
    icon: Star,
    target: 4.9,
    prefix: "",
    suffix: "/5",
    label: "sur Google",
    decimals: 1,
  },
]

export function SocialProof() {
  return (
    <SectionWrapper className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {metrics.map((metric, i) => (
            <StaggerChild key={metric.label} index={i}>
              <div className="flex flex-col items-center gap-3 rounded-3xl bg-background p-8 text-center shadow-lg shadow-foreground/[0.03]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <metric.icon className="h-6 w-6 text-primary" />
                </div>
                <AnimatedCounter
                  target={metric.target}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  decimals={metric.decimals}
                />
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            </StaggerChild>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
