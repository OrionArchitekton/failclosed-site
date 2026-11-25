---
brand: "failclosed-site"
name: "failclosed"
archetype: "WorksTechnicalMonograph"
polarity: "dark"
tokens: "tokens/brand.tokens.json"
---

# failclosed Design System (Archetype A: WorksTechnicalMonograph)

Dark technical monograph surface aligned with `danmercede.com` Midnight Navy continuity (`#020B29`), Deep Navy (`#07143A`) sticky specification rail and code plates, and Copper Mid (`#E68249`) primary action accents.

## Palette and Contrast Rules

- Canvas: `#020B29` (Midnight Navy)
- Raised specification rail & terminal plates: `#07143A` (Deep Navy)
- Elevated interactive surface: `#0E1F4F`
- Primary ink: `#F8FAFC` (`>=12:1` on all dark surfaces)
- Secondary prose ink: `#E2E8F0`
- Muted metadata & terminal comments: `#94A3B8` (`>=5.4:1` on `#0E1F4F`, `7.57:1` on `#020B29`)
- Primary CTA fill: `#E68249` (Copper Mid), hover `#F0975A`, ink always `#020B29` (`>=7.07:1`)
- Accent inline text/markers on dark surfaces: `#F0975A` (`>=7.3:1`)
- Focus ring: `#FFC08B`

## Typography

- Display / Headings: `Newsreader Variable` (`@fontsource-variable/newsreader`, OFL-1.1)
- Body / UI: `IBM Plex Sans Variable` (`@fontsource-variable/ibm-plex-sans`, OFL-1.1)
- Code / Status codes / Numerals: `JetBrains Mono Variable` (`@fontsource-variable/jetbrains-mono`, OFL-1.1)

## Layout Archetype

- Asymmetric 12-column technical monograph (`lg:grid-cols-12`):
  - Left 4 columns: sticky specification rail (`<nav aria-label="Specification rail">`) with chapter jumps (`>=44px` hit targets) and deterministic status-code legend.
  - Right 8 columns: above-fold `<h1>`, value proposition, proof line, primary/secondary CTAs, `ProductDemo` media plate, interactive gate walkthrough, quickstart command plates, status-code specification, and differentiators.
- Mandatory `@media (prefers-reduced-motion: reduce)` disables all transitions and animations.
