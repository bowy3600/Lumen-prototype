"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ShimmerButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}

export function ShimmerButton({
  children,
  className = "",
  onClick,
  type = "button",
}: ShimmerButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(66,66,205,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:200%_100%]"
      />
    </button>
  )
}
