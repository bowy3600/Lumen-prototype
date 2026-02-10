"use client"

import { Building2 } from "lucide-react"
import { CTAModal } from "@/components/cta-modal"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Lumen Finance
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              {"L'expertise comptable nouvelle generation"}
            </p>
          </div>

          {/* Professional badge */}
          <div className="flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground">
              {"Inscrit a l'Ordre des Experts-Comptables"}
            </span>
          </div>

          {/* Footer CTA */}
          <CTAModal>
            <Button
              variant="outline"
              className="rounded-full border-primary/30 px-6 py-2 text-sm font-semibold text-primary hover:bg-primary/5 bg-transparent"
            >
              Diagnostic Gratuit
            </Button>
          </CTAModal>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Mentions legales
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Politique de confidentialite
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              RGPD
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border/40 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Lumen Finance. Tous droits reserves."}
          </p>
        </div>
      </div>
    </footer>
  )
}
