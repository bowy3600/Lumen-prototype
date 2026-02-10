"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { CTAModal } from "@/components/cta-modal"
import { ShimmerButton } from "@/components/shimmer-button"

const navLinks = [
  { label: "Expertise", href: "#services" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Temoignages", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <nav
        className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 md:px-6 ${
          scrolled
            ? "border-border/50 bg-background/80 shadow-lg shadow-foreground/5 backdrop-blur-xl"
            : "border-border/30 bg-background/60 backdrop-blur-lg"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          Lumen Finance
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CTAModal>
            <ShimmerButton className="px-5 py-2 text-xs shadow-[0_0_20px_rgba(66,66,205,0.3)]">
              Diagnostic Gratuit
            </ShimmerButton>
          </CTAModal>
        </div>

        {/* Mobile burger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="flex items-center justify-center rounded-full p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background">
            <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
            <div className="flex flex-col gap-6 pt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <CTAModal>
                <ShimmerButton className="mt-4 w-full py-3">
                  Diagnostic Gratuit
                </ShimmerButton>
              </CTAModal>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
