"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"

export const CONFIG = {
  primaryColor: "66, 66, 205",
  secondaryColor: "66, 66, 205",
  sphereRotationDuration: "240s",
  gridPanDuration: "180s",
  coreGlowDuration: "25s",
  wireframeOpacity: 0.75,
  wireframeShadowIntensity: 70,
  coreBlur: 200,
  parallaxDepth: 35,
  lerpFactor: 0.08,
  sphereDensity: 12,
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

interface GeometricSphereProps {
  showContent?: boolean
  backgroundColor?: string
}

export function GeometricSphere({
  showContent = false,
  backgroundColor = "bg-white"
}: GeometricSphereProps) {
  const [targetMousePos, setTargetMousePos] = useState({ x: 0, y: 0 })
  const currentMousePos = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  const animateLerp = useCallback(() => {
    currentMousePos.current.x = lerp(
      currentMousePos.current.x,
      targetMousePos.x,
      CONFIG.lerpFactor
    )
    currentMousePos.current.y = lerp(
      currentMousePos.current.y,
      targetMousePos.y,
      CONFIG.lerpFactor
    )

    setTargetMousePos({
      x: currentMousePos.current.x,
      y: currentMousePos.current.y,
    })

    animationFrameRef.current = requestAnimationFrame(animateLerp)
  }, [targetMousePos.x, targetMousePos.y])

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animateLerp)
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animateLerp])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const x = (clientX - centerX) / centerX
    const y = (clientY - centerY) / centerY
    setTargetMousePos({ x, y })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  const { x: smoothX, y: smoothY } = currentMousePos.current

  const parallaxDepth = CONFIG.parallaxDepth
  const rotationStrength = 5

  const baseTranslate = `translate3d(${smoothX * parallaxDepth}px, ${smoothY * parallaxDepth}px, 0)`
  const gridTranslate = `translate3d(${-smoothX * (parallaxDepth / 2)}px, ${-smoothY * (parallaxDepth / 2)}px, 0)`
  const hazeTranslate = `translate3d(${smoothX * (parallaxDepth / 2)}px, ${smoothY * (parallaxDepth / 2)}px, 0)`

  const tiltRotateX = smoothY * rotationStrength
  const tiltRotateY = -smoothX * rotationStrength
  const tiltTransform = `rotateX(${tiltRotateX}deg) rotateY(${tiltRotateY}deg)`

  const sphereRings = Array.from({ length: CONFIG.sphereDensity }, (_, i) => {
    const step = 90 / (CONFIG.sphereDensity / 2)
    const angle = i * step
    const commonStyle = {
      transform: i % 2 === 0 ? `rotateY(${angle}deg)` : `rotateX(${angle}deg)`,
    }
    return (
      <div
        key={`ring-${i}`}
        className="wireframe-line"
        style={commonStyle}
        aria-hidden="true"
      />
    )
  })

  const coreLightStyle = {
    width: "400px",
    height: "400px",
    backgroundImage: `radial-gradient(circle, rgba(${CONFIG.secondaryColor}, 0.25) 0%, transparent 70%)`,
    filter: `blur(${CONFIG.coreBlur}px)`,
    boxShadow: `0 0 ${CONFIG.coreBlur / 2}px 30px rgba(${CONFIG.secondaryColor}, 0.15), 0 0 ${CONFIG.coreBlur}px 50px rgba(${CONFIG.primaryColor}, 0.1)`,
  }

  const panningGridStyle = {
    transform: gridTranslate,
    backgroundImage:
      "repeating-linear-gradient(to right, rgba(66,66,205,0.08) 1px, transparent 1px), repeating-linear-gradient(to bottom, rgba(66,66,205,0.08) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    opacity: 0.3,
  }

  const hazeStyle = {
    transform: hazeTranslate,
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.1) 0%, transparent 50%)`,
    filter: "blur(150px)",
    opacity: 0.6,
    mixBlendMode: "multiply" as const,
  }

  const deepBaseStyle = {
    transform: baseTranslate,
    backgroundImage: `radial-gradient(at 50% 50%, rgba(${CONFIG.primaryColor}, 0.05) 0%, transparent 90%)`,
  }

  const bloomStyle = {
    transform: baseTranslate,
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.2) 0%, transparent 50%), radial-gradient(circle at 10% 10%, rgba(${CONFIG.secondaryColor}, 0.15) 0%, transparent 30%)`,
    mixBlendMode: "multiply" as const,
    filter: "blur(100px)",
    opacity: 0.5,
  }

  return (
    <div className={`relative h-full w-full overflow-hidden ${backgroundColor} flex items-center justify-center`}>
      <div className="absolute inset-0 panning-grid" style={panningGridStyle} />
      <div className="absolute inset-0" style={hazeStyle} />
      <div className="absolute inset-0" style={deepBaseStyle}>
        <div
          className="core-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={coreLightStyle}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sphere-container pointer-events-none">
        <div
          className="w-[700px] h-[700px] sphere-rotation"
          style={{
            transform: tiltTransform,
            transformOrigin: "center center",
            animationDuration: CONFIG.sphereRotationDuration,
          }}
        >
          {sphereRings}
        </div>
      </div>

      <div className="absolute inset-0" style={bloomStyle} />

      <div
        className="absolute inset-0 pointer-events-none noise-layer"
        style={{
          backgroundImage:
            'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
          backgroundSize: "200px",
          opacity: 0.02,
          mixBlendMode: "overlay",
        }}
      />

      <style jsx global>{`
        .wireframe-line {
          position: absolute;
          width: 400px;
          height: 400px;
          border: 1.5px solid rgba(66, 66, 205, ${CONFIG.wireframeOpacity});
          border-radius: 50%;
          box-shadow:
            0 0 ${CONFIG.wireframeShadowIntensity}px rgba(66, 66, 205, 0.4),
            inset 0 0 ${CONFIG.wireframeShadowIntensity / 2}px rgba(66, 66, 205, 0.2);
        }

        .sphere-rotation {
          animation: sphereRotate ${CONFIG.sphereRotationDuration} linear infinite;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .panning-grid {
          animation: gridPan ${CONFIG.gridPanDuration} linear infinite;
        }

        .core-light {
          animation: coreGlow ${CONFIG.coreGlowDuration} ease-in-out infinite;
        }

        @keyframes sphereRotate {
          from {
            transform: rotateY(0deg) rotateX(0deg);
          }
          to {
            transform: rotateY(360deg) rotateX(360deg);
          }
        }

        @keyframes gridPan {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        @keyframes coreGlow {
          0%, 100% {
            transform: scale(1.0) translate(-50%, -50%);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.05) translate(-50%, -50%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
