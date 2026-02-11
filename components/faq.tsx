"use client"

import { ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionWrapper } from "@/components/section-wrapper"
import { MagneticButton } from "@/components/magnetic-button"
import { ShimmerButton } from "@/components/shimmer-button"
import { CTAModal } from "@/components/cta-modal"

const faqs = [
  {
    question: "Comment se passe la transition depuis mon comptable actuel ?",
    answer:
      "Nous gerons l'integralite de la transition. Notre equipe recupere vos donnees, les migre dans nos systemes et assure une continuite parfaite. Le processus prend en moyenne 2 semaines, sans interruption pour votre activite.",
  },
  {
    question: "Mes donnees financieres sont-elles securisees ?",
    answer:
      "Absolument. Nous utilisons un chiffrement de niveau bancaire (AES-256), des serveurs certifies ISO 27001, et sommes pleinement conformes au RGPD. Vos donnees sont sauvegardees quotidiennement avec une redondance geographique.",
  },
  {
    question:
      "Le diagnostic initial est-il vraiment gratuit et sans engagement ?",
    answer:
      "Oui, 100%. Le diagnostic gratuit est une analyse complete de votre situation comptable et fiscale, sans aucun engagement. Vous recevez un rapport detaille avec des recommandations concretes, que vous choisissiez ou non de travailler avec nous.",
  },
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer:
      "Nous accompagnons principalement les PME, startups et ETI, de 1 a 500 collaborateurs. Nos solutions s'adaptent a tous les secteurs : tech, e-commerce, conseil, industrie, et bien d'autres.",
  },
]

export function FAQ() {
  return (
    <SectionWrapper id="faq" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Questions frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Tout ce que vous devez savoir avant de nous confier votre
            comptabilite.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border/40 py-1"
            >
              <AccordionTrigger className="py-5 text-left text-base font-bold text-foreground hover:no-underline md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <CTAModal>
            <MagneticButton>
              <ShimmerButton className="px-8 py-3.5 shadow-[0_0_20px_rgba(66,66,205,0.3)]">
                {"Encore des questions ? Parlons-en"}
                <ArrowRight className="h-4 w-4" />
              </ShimmerButton>
            </MagneticButton>
          </CTAModal>
        </div>
      </div>
    </SectionWrapper>
  )
}
