"use client"

import { type ReactNode, type MouseEvent, useState, useId } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ShimmerButton } from "@/components/shimmer-button"

interface CTAModalProps {
  children: ReactNode
}

export function CTAModal({ children }: CTAModalProps) {
  const [open, setOpen] = useState(false)
  const uid = useId()

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setOpen(true)
  }

  return (
    <>
      <div onClick={handleClick} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true) }}} role="button" tabIndex={0} className="cursor-pointer">
        {children}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl border-border/50 bg-background sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
              Diagnostic Gratuit
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Recevez une analyse personnalisee de votre situation comptable et
              fiscale. Sans engagement.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setOpen(false)
            }}
            className="flex flex-col gap-4 pt-2"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`cta-name-${uid}`}
                className="text-sm font-medium text-foreground"
              >
                Nom complet
              </label>
              <input
                id={`cta-name-${uid}`}
                type="text"
                required
                placeholder="Jean Dupont"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`cta-email-${uid}`}
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id={`cta-email-${uid}`}
                type="email"
                required
                placeholder="jean@entreprise.fr"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`cta-phone-${uid}`}
                className="text-sm font-medium text-foreground"
              >
                Telephone
              </label>
              <input
                id={`cta-phone-${uid}`}
                type="tel"
                placeholder="+33 6 12 34 56 78"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`cta-company-${uid}`}
                className="text-sm font-medium text-foreground"
              >
                {"Nom de l'entreprise"}
              </label>
              <input
                id={`cta-company-${uid}`}
                type="text"
                required
                placeholder="Ma Startup SAS"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`cta-message-${uid}`}
                className="text-sm font-medium text-foreground"
              >
                Message{" "}
                <span className="text-muted-foreground">(optionnel)</span>
              </label>
              <textarea
                id={`cta-message-${uid}`}
                rows={3}
                placeholder="Decrivez brievement votre situation..."
                className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <ShimmerButton type="submit" className="mt-2 w-full py-3">
              Envoyer ma demande
            </ShimmerButton>
            <p className="text-center text-xs text-muted-foreground">
              Nous vous recontactons sous 24h.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
