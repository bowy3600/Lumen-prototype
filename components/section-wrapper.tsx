"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export function SectionWrapper({
  children,
  className = "",
  id,
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

interface StaggerChildProps {
  children: ReactNode
  className?: string
  index?: number
}

export function StaggerChild({
  children,
  className = "",
  index = 0,
}: StaggerChildProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
