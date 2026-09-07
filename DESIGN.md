---
name: "CV en ligne de Roméo Paris"
description: "Un CV en ligne en français qui présente le projet professionnel, les projets personnels et l’objectif de CFC d’informaticien de Roméo Paris."
colors:
  background: "oklch(0.985 0.006 145)"
  foreground: "oklch(0.2 0.035 155)"
  card: "oklch(1 0 0)"
  card-foreground: "oklch(0.2 0.035 155)"
  popover: "oklch(1 0 0)"
  popover-foreground: "oklch(0.2 0.035 155)"
  primary: "oklch(0.48 0.12 155)"
  primary-foreground: "oklch(0.99 0.005 145)"
  secondary: "oklch(0.94 0.025 145)"
  secondary-foreground: "oklch(0.24 0.05 155)"
  muted: "oklch(0.94 0.015 145)"
  muted-foreground: "oklch(0.42 0.03 155)"
  accent: "oklch(0.8 0.08 155)"
  accent-foreground: "oklch(0.2 0.035 155)"
  border: "oklch(0.86 0.025 145)"
  input: "oklch(0.86 0.025 145)"
  ring: "oklch(0.48 0.12 155)"
typography:
  display:
    fontFamily: "bold geometric sans with tight tracking and compact line-height"
  body:
    fontFamily: "neutral system sans with readable line-height"
rounded:
  sm: "calc(var(--radius) * 0.6)"
  md: "calc(var(--radius) * 0.8)"
  lg: "0.75rem"
  xl: "calc(var(--radius) * 1.4)"
---

<!-- Generated from .project/DESIGN_SYSTEM.md + app/globals.css by the engine. Tokens above are normative and mirror the CSS; edit the CSS and DESIGN_SYSTEM.md, not this file. -->

## Overview

Category-standard recruiter portfolio: clear editorial hierarchy, proof-led content, and friendly utility.

## Colors

| Token | Value |
| background | Pale green-white |
| surface | White |
| text / muted | Deep evergreen / soft sage |
| border | Light sage |
| primary | Evergreen |
| accent | Soft mint |
| success / warning / danger | Evergreen / warm sand / muted red |

Declared in `globals.css` as `--color-*` and mirrored in the frontmatter. Use the token, never a raw hex.

## Typography

- Headings: bold geometric sans with tight tracking and compact line-height
- Body: neutral system sans with readable line-height

- Display: `bold geometric sans with tight tracking and compact line-height`
- Body: `neutral system sans with readable line-height`

## Layout

- Radius / shadow / spacing rhythm: 12–16px corners, low soft shadows, generous vertical sections, 3-column proof grid collapsing to one column on phones.
- Shared components: shadcn Button for game controls and interactive actions, lucide icons, semantic project cards, responsive section frame.

## Shapes

Radii: `sm` calc(var(--radius) * 0.6), `md` calc(var(--radius) * 0.8), `lg` 0.75rem, `xl` calc(var(--radius) * 1.4)

## Do's and Don'ts

- Voice: Plain, confident, specific, and no hype.

- Do load faces through Fontsource, not `next/font/google`.
- Don't introduce a colour or radius that isn't a token above.
- Don't use gradient text, or a purple/violet gradient as the brand signal.
- Don't use bounce or elastic easing; real objects decelerate smoothly.
