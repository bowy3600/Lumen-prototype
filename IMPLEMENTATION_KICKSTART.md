# Lumen Finance - Implementation Kickstart

## Project Overview

Premium "Fintech 2026 Light Mode" landing page for **Lumen Finance**, a high-end accounting firm targeting PME and startups. Fully responsive (desktop, tablet, mobile). French-language content with rich animations and conversion-optimized CTA placement.

---

## 1. Design Token System

### Color Palette (5 Colors)

| Token | Hex | HSL | Usage |
|-------|-----|-----|-------|
| **Electric Emerald** | `#10b981` | `160 84% 39%` | Primary brand, CTAs, accents, glows, badges |
| **Pure White** | `#FFFFFF` | `0 0% 100%` | Primary background |
| **Ultra-Light Gray** | `#F8FAFC` | `210 40% 98%` | Alternating section backgrounds |
| **Slate-900** | `#0F172A` | `222 47% 11%` | Headlines, titles, primary text |
| **Slate-500** | `#64748B` | `215 16% 47%` | Body text, descriptions, muted content |

### CSS Custom Properties (globals.css)

```css
:root {
  /* Core Backgrounds */
  --background: 0 0% 100%;            /* Pure White #FFFFFF */
  --foreground: 222 47% 11%;          /* Slate-900 #0F172A */

  /* Card / Surface */
  --card: 0 0% 100%;                  /* White */
  --card-foreground: 222 47% 11%;     /* Slate-900 */

  /* Primary (Electric Emerald) */
  --primary: 160 84% 39%;             /* #10b981 */
  --primary-foreground: 0 0% 100%;    /* White text on emerald */

  /* Secondary (Ultra-Light Gray) */
  --secondary: 210 40% 98%;           /* #F8FAFC */
  --secondary-foreground: 222 47% 11%;/* Slate-900 */

  /* Muted */
  --muted: 210 40% 98%;               /* #F8FAFC */
  --muted-foreground: 215 16% 47%;    /* Slate-500 */

  /* Accent (Emerald light variant) */
  --accent: 160 84% 95%;              /* Very light emerald tint */
  --accent-foreground: 160 84% 25%;   /* Dark emerald */

  /* Border / Input */
  --border: 214 32% 91%;              /* Slate-200 */
  --input: 214 32% 91%;               /* Slate-200 */
  --ring: 160 84% 39%;                /* Emerald focus ring */

  /* Radius */
  --radius: 0.75rem;                  /* 12px base, cards use 24px (2xl) */

  /* Custom Tokens */
  --glass-bg: 0 0% 100% / 0.7;       /* Glassmorphism base */
  --glass-border: 0 0% 100% / 0.2;   /* Glassmorphism border */
  --glow-emerald: 0 0 20px rgba(16, 185, 129, 0.3);
  --glow-emerald-strong: 0 0 40px rgba(16, 185, 129, 0.5);
}
```

### Typography

| Element | Font | Weight | Size (Desktop) | Tracking | Line Height |
|---------|------|--------|----------------|----------|-------------|
| H1 (Hero) | Geist | 800 (extrabold) | 64px-72px (`text-6xl`/`text-7xl`) | `-0.02em` (`tracking-tight`) | 1.1 |
| H2 (Sections) | Geist | 700 (bold) | 40px-48px (`text-4xl`/`text-5xl`) | `-0.02em` (`tracking-tight`) | 1.2 |
| H3 (Cards) | Geist | 600 (semibold) | 24px (`text-2xl`) | Normal | 1.3 |
| Body | Geist | 400 (normal) | 16px-18px (`text-base`/`text-lg`) | Normal | 1.6 (`leading-relaxed`) |
| Small / Labels | Geist | 500 (medium) | 14px (`text-sm`) | `0.05em` (`tracking-wide`) | 1.5 |
| Mono (Prices) | Geist Mono | 700 | Varies | Normal | 1.2 |

### Shadows & Effects

| Effect | Value |
|--------|-------|
| Card shadow (soft) | `shadow-lg shadow-slate-200/50` |
| Glassmorphism blur | `backdrop-blur-xl` (24px) |
| Glassmorphism bg | `bg-white/70 border border-white/20` |
| Emerald glow (button) | `shadow-[0_0_20px_rgba(16,185,129,0.3)]` |
| Emerald glow (strong) | `shadow-[0_0_40px_rgba(16,185,129,0.5)]` |
| Card radius | `rounded-3xl` (24px) |
| Button radius | `rounded-full` (pill shape) |

---

## 2. Dependency Map

### Already Available (package.json)

| Package | Version | Usage |
|---------|---------|-------|
| `next` | 16.1.6 | Framework |
| `react` | ^19 | UI Library |
| `tailwindcss` | ^3.4.17 | Styling |
| `tailwindcss-animate` | ^1.0.7 | Animation utilities |
| `lucide-react` | ^0.544.0 | Icons |
| `@radix-ui/react-accordion` | 1.2.2 | FAQ section |
| `@radix-ui/react-dialog` | 1.1.4 | CTA modal |
| `embla-carousel-react` | 8.5.1 | Testimonial carousel |
| `recharts` | 2.15.0 | Hero chart component |
| `class-variance-authority` | ^0.7.1 | Component variants |

### To Install

| Package | Version | Usage |
|---------|---------|-------|
| `framer-motion` | ^11.x | Scroll animations, shimmer, magnetic effect, border beam, counters, marquee |

### Shadcn Components to Use

| Component | File | Section |
|-----------|------|---------|
| `Button` | `components/ui/button.tsx` | CTAs everywhere |
| `Card` | `components/ui/card.tsx` | Pricing, Services, Metrics |
| `Accordion` | `components/ui/accordion.tsx` | FAQ |
| `Dialog` | `components/ui/dialog.tsx` | CTA Modal |
| `Badge` | `components/ui/badge.tsx` | Verified badge, "Populaire" label |
| `Separator` | `components/ui/separator.tsx` | FAQ dividers |
| `Avatar` | `components/ui/avatar.tsx` | Testimonial profiles |
| `Sheet` | `components/ui/sheet.tsx` | Mobile menu |

---

## 3. Component Architecture

### File Structure

```
app/
  layout.tsx                      -- Root layout (fonts, metadata, lang="fr")
  page.tsx                        -- Page shell importing all sections
  globals.css                     -- Updated design tokens

components/
  navbar.tsx                      -- Floating glassmorphism nav + mobile burger
  hero.tsx                        -- Hero section with chart + CTA
  hero-chart.tsx                  -- Interactive Recharts growth chart in glass card
  social-proof.tsx                -- Bento metrics with animated counters
  services.tsx                    -- 360 expertise bento grid
  pricing.tsx                     -- 3 glassmorphism pricing cards
  testimonials.tsx                -- Auto-scroll carousel with profiles + stars
  faq.tsx                         -- Accordion section
  final-cta.tsx                   -- Conversion section with pulsing CTA
  footer.tsx                      -- Minimalist footer
  cta-modal.tsx                   -- "Diagnostic Gratuit" modal form
  border-beam.tsx                 -- Rotating animated border effect
  magnetic-button.tsx             -- Magnetic hover effect wrapper
  shimmer-button.tsx              -- CTA button with shimmer animation
  logo-marquee.tsx                -- Infinite scrolling grayscale logos
  section-wrapper.tsx             -- Reusable scroll-reveal animation wrapper
```

### Component Dependency Graph

```
page.tsx
  |-- navbar.tsx
  |     |-- cta-modal.tsx (Dialog)
  |     |-- magnetic-button.tsx
  |     |-- Sheet (mobile menu)
  |
  |-- hero.tsx
  |     |-- hero-chart.tsx (Recharts)
  |     |-- shimmer-button.tsx
  |     |-- magnetic-button.tsx
  |     |-- cta-modal.tsx
  |
  |-- social-proof.tsx
  |     |-- section-wrapper.tsx (scroll reveal)
  |     |-- [animated counter logic internal]
  |
  |-- services.tsx
  |     |-- section-wrapper.tsx
  |     |-- Card (shadcn)
  |
  |-- pricing.tsx
  |     |-- section-wrapper.tsx
  |     |-- border-beam.tsx (on "Croissance" card)
  |     |-- magnetic-button.tsx
  |     |-- cta-modal.tsx
  |     |-- Badge (shadcn)
  |
  |-- testimonials.tsx
  |     |-- section-wrapper.tsx
  |     |-- Avatar (shadcn)
  |     |-- logo-marquee.tsx
  |
  |-- faq.tsx
  |     |-- section-wrapper.tsx
  |     |-- Accordion (shadcn)
  |
  |-- final-cta.tsx
  |     |-- shimmer-button.tsx / magnetic-button.tsx
  |     |-- cta-modal.tsx
  |
  |-- footer.tsx
```

---

## 4. Animation Specifications

### Framer Motion Animations

| Animation | Trigger | Duration | Easing | Details |
|-----------|---------|----------|--------|---------|
| **Scroll Reveal** (all sections) | Viewport entry (0.2 threshold) | 0.6s | `[0.25, 0.4, 0, 1]` | `y: 40 -> 0`, `opacity: 0 -> 1`, stagger children by 0.1s |
| **Number Counter** | Viewport entry | 2s | `easeOut` | Animate from 0 to target using `useMotionValue` + `useTransform` |
| **Shimmer** | Continuous loop | 2s | `linear` | CSS gradient moving left-to-right across button surface |
| **Border Beam** (Pricing) | Continuous loop | 3s | `linear` | Rotating conic-gradient border using pseudo-element + `animate: { rotate: 360 }` |
| **Magnetic Button** | Mouse move within 100px radius | Instant (spring) | `spring: { stiffness: 150, damping: 15 }` | Track cursor offset, apply `x`/`y` transform (max 10px displacement) |
| **Pulse** (Final CTA) | Continuous loop | 2s | `easeInOut` | `scale: [1, 1.02, 1]` with `boxShadow` pulse |
| **Logo Marquee** | Continuous | 30s | `linear` | `x: [0, -50%]` infinite repeat, duplicated children for seamless loop |
| **Hero Chart Float** | Continuous | 4s | `easeInOut` | `y: [-8, 8]` oscillation with slight rotation |

### Responsive Animation Rules

| Viewport | Behavior |
|----------|----------|
| Desktop (1024px+) | All animations enabled at full intensity |
| Tablet (768-1023px) | All animations enabled, magnetic effect radius reduced to 60px |
| Mobile (<768px) | Scroll reveals enabled, magnetic effect disabled, marquee speed reduced, hero chart static position |
| `prefers-reduced-motion` | All motion disabled, instant reveals, no floating/pulsing |

---

## 5. Section-by-Section Content & Specs

### 5.1 Navigation

- **Position**: `fixed top-4 left-1/2 -translate-x-1/2 z-50`
- **Width**: `max-w-5xl w-[calc(100%-2rem)]`
- **Style**: Glassmorphism (`bg-white/70 backdrop-blur-xl border border-white/20 rounded-full`)
- **Left**: "Lumen Finance" bold logo text
- **Center (desktop)**: Links - Expertise, Tarifs, Temoignages, FAQ (smooth scroll anchors)
- **Right**: Pill CTA "Diagnostic Gratuit" (emerald, glow, opens modal)
- **Mobile**: Burger icon (Menu from Lucide), opens Sheet with nav links + CTA

### 5.2 Hero Section

- **Layout**: Centered, `min-h-[90vh]`, massive `pt-32 pb-20`
- **Headline**: "Pilotez votre croissance, nous gerons la complexite." -- Gradient text `bg-gradient-to-b from-slate-900 to-slate-500 bg-clip-text text-transparent`
- **Subheadline**: "L'expertise comptable nouvelle generation pour PME et startups."
- **Chart**: Interactive Recharts `AreaChart` inside a glass card with float animation. Shows sample growth data (revenue over 6 months). Card has `rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl`
- **CTA 1**: Shimmer Button "Commencer le diagnostic" (opens modal)
- **CTA 2**: Ghost/outline "Decouvrir nos offres" (scrolls to pricing)
- **Layout**: On desktop, text left + chart right (or centered with chart below). On mobile, stacked.

### 5.3 Social Proof Metrics

- **Background**: `bg-secondary` (Ultra-Light Gray)
- **Layout**: 4-column bento grid on desktop, 2x2 on tablet, stacked on mobile
- **Cards**: `rounded-3xl bg-white shadow-lg shadow-slate-200/50 p-8`
- **Metrics**:
  1. `+20h` - "gagnees par mois" (Clock icon, emerald)
  2. `15%` - "d'economie d'impots" (TrendingDown icon, emerald)
  3. `450+` - "clients accompagnes" (Users icon, emerald)
  4. `4.9/5` - "sur Google" (Star icon, emerald)
- **Animation**: Number counters trigger on scroll into view

### 5.4 Services Bento Grid

- **Title**: "Une expertise 360" with degree symbol
- **Subtitle**: "Des solutions completes pour chaque dimension de votre entreprise."
- **Layout**: Asymmetrical 3-card grid. Card 1 spans 2 cols on desktop. Cards 2+3 each 1 col.
- **Card 1 - "Comptabilite Augmentee"**: Contains mini dashboard UI (bar chart + line chart mock using Recharts). Description: "Automatisation intelligente de votre comptabilite avec suivi en temps reel."
- **Card 2 - "Optimisation Fiscale"**: Shield icon with soft emerald glow (`drop-shadow`). Description: "Strategies fiscales sur mesure pour maximiser vos economies."
- **Card 3 - "Conseil Decisionnel"**: Lightbulb/Sparkles icon. Description: "Tableaux de bord et analyses pour eclairer vos decisions strategiques."
- **Cards**: Glassmorphism style, `backdrop-blur-sm bg-white/80 rounded-3xl`
- **CTA**: "Explorer nos services" at bottom of section (opens modal)

### 5.5 Pricing Table

- **Background**: `bg-white`
- **Title**: "Des offres claires, sans surprise"
- **Subtitle**: "Choisissez le plan adapte a la taille de votre ambition."
- **3 Cards**:

| Plan | Essentiel | Croissance (Popular) | Entreprise |
|------|-----------|---------------------|------------|
| Price | 149 EUR/mois | 249 EUR/mois | Sur mesure |
| Target | "Freelances & TPE" | "PME en croissance" | "ETI & Groupes" |
| Features | Comptabilite de base, Declarations fiscales, Support email, Tableau de bord basique | Tout Essentiel +, Optimisation fiscale, Conseil strategique trimestriel, Support prioritaire, Tableau de bord avance | Tout Croissance +, CFO externalise, Audit & conformite, Equipe dediee, API & integrations |
| CTA | "Choisir Essentiel" (outline) | "Commencer maintenant" (emerald solid, shimmer) | "Nous contacter" (outline) |

- **Croissance Card**: Border Beam effect (rotating light trail), `scale-105` lifted, "Populaire" badge
- **All CTAs open modal**

### 5.6 Testimonials

- **Background**: `bg-secondary`
- **3 Testimonials** (auto-scrolling infinite carousel):

| # | Quote | Author | Role | Stars |
|---|-------|--------|------|-------|
| 1 | "Lumen Finance n'est pas qu'un comptable, c'est notre partenaire de croissance. Ils ont transforme notre gestion financiere." | Sarah L. | CEO de TechFlow | 5/5 |
| 2 | "Depuis que nous travaillons avec Lumen, nous avons economise 15% sur nos impots. Leur expertise est inegalee." | Marc D. | Fondateur de GreenScale | 5/5 |
| 3 | "Un accompagnement sur mesure, une reactivite exemplaire. Lumen Finance comprend les enjeux des startups." | Julie P. | COO de DataPulse | 5/5 |

- **Each card**: Profile avatar (generated), name, role, emerald "Verified" badge, 5 yellow/emerald stars
- **Below carousel**: Grayscale logo marquee (6-8 fake partner logos as SVG text placeholders: "TechFlow", "GreenScale", "DataPulse", "NovaCorp", "FinBridge", "CloudStack")
- **CTA**: "Rejoindre nos clients satisfaits" (opens modal)

### 5.7 FAQ Section

- **Background**: `bg-white`
- **Title**: "Questions frequentes"
- **Subtitle**: "Tout ce que vous devez savoir avant de nous confier votre comptabilite."
- **Accordion Items** (shadcn, no borders, soft dividers):

| Question | Answer |
|----------|--------|
| "Comment se passe la transition depuis mon comptable actuel ?" | "Nous gerons l'integralite de la transition. Notre equipe recupere vos donnees, les migre dans nos systemes et assure une continuite parfaite. Le processus prend en moyenne 2 semaines, sans interruption pour votre activite." |
| "Mes donnees financieres sont-elles securisees ?" | "Absolument. Nous utilisons un chiffrement de niveau bancaire (AES-256), des serveurs certifies ISO 27001, et sommes pleinement conformes au RGPD. Vos donnees sont sauvegardees quotidiennement avec une redondance geographique." |
| "Le diagnostic initial est-il vraiment gratuit et sans engagement ?" | "Oui, 100%. Le diagnostic gratuit est une analyse complete de votre situation comptable et fiscale, sans aucun engagement. Vous recevez un rapport detaille avec des recommandations concretes, que vous choisissiez ou non de travailler avec nous." |
| "Quels types d'entreprises accompagnez-vous ?" | "Nous accompagnons principalement les PME, startups et ETI, de 1 a 500 collaborateurs. Nos solutions s'adaptent a tous les secteurs : tech, e-commerce, conseil, industrie, et bien d'autres." |

### 5.8 Final CTA Section

- **Background**: Soft emerald gradient `bg-gradient-to-b from-white via-emerald-50/50 to-white`
- **Headline**: "Pret a deleguer votre complexite ?"
- **Subheadline**: "Rejoignez plus de 450 entreprises qui font confiance a Lumen Finance."
- **CTA**: Large pulsing emerald button "Planifier mon diagnostic gratuit" (opens modal)
- **Sub-text**: "Gratuit, sans engagement, en 30 minutes."

### 5.9 Footer

- **Border**: `border-t border-border`
- **Layout**: 3-column on desktop, stacked on mobile
- **Left**: "Lumen Finance" logo + tagline "L'expertise comptable nouvelle generation"
- **Center**: "Inscrit a l'Ordre des Experts-Comptables" (text badge with building icon)
- **Right**: Legal links - "Mentions legales", "Politique de confidentialite", "RGPD"
- **Bottom**: Copyright 2026 Lumen Finance

### 5.10 CTA Modal (Dialog)

- **Trigger**: All "Diagnostic Gratuit" / CTA buttons across the page
- **Content**: Simple lead capture form
  - Fields: Nom complet, Email, Telephone, Nom de l'entreprise, Message (optional textarea)
  - Submit button: "Envoyer ma demande" (emerald, shimmer)
  - Sub-text: "Nous vous recontactons sous 24h."
- **Style**: Glassmorphism overlay, `rounded-2xl`, centered

---

## 6. CTA Placement Map (Minimum 3)

| # | Location | Button Text | Style | Action |
|---|----------|-------------|-------|--------|
| 1 | **Navbar** (persistent) | "Diagnostic Gratuit" | Pill, emerald, glow | Opens modal |
| 2 | **Hero** (primary) | "Commencer le diagnostic" | Large, shimmer, magnetic | Opens modal |
| 3 | **Hero** (secondary) | "Decouvrir nos offres" | Ghost/outline | Scrolls to pricing |
| 4 | **Services** (bottom) | "Explorer nos services" | Emerald outline, magnetic | Opens modal |
| 5 | **Pricing** (Essentiel) | "Choisir Essentiel" | Outline | Opens modal |
| 6 | **Pricing** (Croissance) | "Commencer maintenant" | Emerald solid, shimmer, magnetic | Opens modal |
| 7 | **Pricing** (Entreprise) | "Nous contacter" | Outline | Opens modal |
| 8 | **Testimonials** (bottom) | "Rejoindre nos clients satisfaits" | Emerald, magnetic | Opens modal |
| 9 | **Final CTA** | "Planifier mon diagnostic gratuit" | Large, pulsing, shimmer, magnetic | Opens modal |

---

## 7. Responsive Breakpoints

| Breakpoint | Class | Layout Changes |
|------------|-------|----------------|
| Mobile | `< 768px` | Single column, stacked sections, burger menu, chart below hero text, 1-col metrics, stacked pricing cards, full-width cards |
| Tablet | `md:` (768px) | 2-column grids, side-by-side hero, 2x2 metrics, 2-col services, pricing cards scroll horizontal or 2+1 |
| Desktop | `lg:` (1024px+) | Full layout, 4-col metrics, asymmetric bento, 3-col pricing, full nav links visible |

---

## 8. Implementation Task Sequence

### Phase 1: Foundation
1. Install `framer-motion`
2. Update `globals.css` with new design tokens
3. Update `tailwind.config.ts` with custom keyframes (shimmer, border-beam, pulse, float)
4. Update `layout.tsx` (lang="fr", fonts, metadata)

### Phase 2: Shared Components
5. Build `section-wrapper.tsx` (scroll-reveal animation wrapper)
6. Build `magnetic-button.tsx` (mouse-tracking hover effect)
7. Build `shimmer-button.tsx` (CTA with shimmer animation)
8. Build `border-beam.tsx` (rotating border animation)
9. Build `cta-modal.tsx` (Dialog with lead capture form)
10. Build `logo-marquee.tsx` (infinite scroll logos)

### Phase 3: Page Sections (top to bottom)
11. Build `navbar.tsx` (glassmorphism + mobile sheet menu)
12. Build `hero.tsx` + `hero-chart.tsx` (Recharts interactive chart)
13. Build `social-proof.tsx` (animated counters + bento layout)
14. Build `services.tsx` (asymmetric bento grid)
15. Build `pricing.tsx` (3 cards + border beam on popular)
16. Build `testimonials.tsx` (auto-scroll carousel + stars + avatars)
17. Build `faq.tsx` (shadcn accordion)
18. Build `final-cta.tsx` (pulsing CTA section)
19. Build `footer.tsx`

### Phase 4: Assembly
20. Compose `page.tsx` with all sections
21. Responsive QA pass across all breakpoints
22. Accessibility pass (reduced-motion, ARIA, focus management)

---

## 9. Potential Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Border Beam performance on low-end devices | Jank/dropped frames | Use CSS `will-change: transform`, GPU-accelerated properties only |
| Too many Framer Motion instances causing re-renders | Sluggish scrolling | Use `useInView` with `once: true`, lazy mount sections |
| Glassmorphism `backdrop-blur` not supported in older browsers | Visual degradation | Fallback to solid `bg-white` with `@supports` |
| Embla carousel + Framer Motion conflicts | Gesture conflicts | Use Embla for carousel logic, Framer Motion only for entry animation |
| Mobile performance with all animations | Battery drain, lag | Disable magnetic effect on mobile, reduce marquee speed |

---

## 10. Acceptance Criteria

- [ ] All 9 sections render correctly on desktop (1440px), tablet (768px), and mobile (375px)
- [ ] Navbar is sticky with glassmorphism; mobile shows burger menu with Sheet
- [ ] Hero chart is interactive (Recharts) with float animation
- [ ] All 4 metric counters animate on scroll
- [ ] Services bento grid has asymmetric layout with glassmorphism cards
- [ ] Pricing "Croissance" card has rotating border beam animation
- [ ] Testimonial carousel auto-scrolls infinitely with 3 profiles, avatars, and star ratings
- [ ] FAQ accordion opens/closes smoothly with no borders
- [ ] At least 9 CTAs placed across the page (see CTA Placement Map)
- [ ] All CTAs open the "Diagnostic Gratuit" modal (except "Decouvrir nos offres" which scrolls)
- [ ] Scroll-reveal animations fire on all sections
- [ ] Magnetic button effect works on desktop, disabled on mobile
- [ ] `prefers-reduced-motion` disables all animations
- [ ] All text content is in French
- [ ] Logo marquee scrolls infinitely with grayscale logos
- [ ] Footer displays "Ordre des Experts-Comptables" badge
