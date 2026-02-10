"use client"

import { cn } from "@/lib/utils"

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  borderWidth?: number
  colorFrom?: string
  colorTo?: string
}

export function BorderBeam({
  className,
  size = 200,
  duration = 3,
  borderWidth = 2,
  colorFrom = "#4242cd",
  colorTo = "#7878e0",
}: BorderBeamProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}
      style={{
        padding: borderWidth,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, ${colorFrom} 10%, ${colorTo} 20%, transparent 30%)`,
          animation: `spin ${duration}s linear infinite`,
        }}
      />
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="absolute rounded-[inherit]"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${colorFrom}, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(20px)",
          opacity: 0.3,
          animation: `spin ${duration}s linear infinite`,
        }}
      />
    </div>
  )
}
