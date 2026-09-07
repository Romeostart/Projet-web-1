<!-- Generated from .project/PROJECT.md by the engine — do not run `impeccable init`, which would interview a user who isn't here. Edit .project/PROJECT.md; this file is regenerated from it. -->
# Alex Morgan Portfolio

**Platform:** Responsive web — Next.js, React, Tailwind. shadcn/ui and lucide are installed and available; the direction decides whether they fit or whether this surface needs its own vocabulary.
**Task mode:** Experience (pass as `--mode experience` to any script)

## What this is

A recruiter-focused portfolio that presents Alex Morgan's engineering work, skills, contact details, résumé, and a playable Snake demo.

## What it enables

Help IT recruiters quickly understand Alex's strengths, see proof of work, and start a conversation.

## Primary user

IT recruiters, hiring managers, and engineering leads evaluating a product-minded software engineer.

## What exists today

Responsive portfolio homepage with recruiter-focused hero, availability signal, selected work, about section, skills list, contact CTA, and footer navigation. - Functional Snake game with keyboard/WASD input, touch-friendly direction buttons, score tracking, reset, collision handling, and game-over state. - Downloadable résumé text file linked from the hero. - Category-standard visual treatment using a white and pale-green canvas, deep evergreen typography, mint/sand/blue project cards, and restrained rounded surfaces.

## Brand commitments & durable constraints

Keep the experience direct, readable, mobile-friendly, and honest about what is implemented. Preserve the working preview runtime and use the existing web stack.

- **This project already HAS a committed visual world — do NOT offer a design picker.** `.project/DESIGN_SYSTEM.md` records a direction someone decided on, and the code, tokens and components are built around it. Read it, inherit it, and make the requested change inside it. Dealing six alternative worlds here offers to throw away a working design system nobody asked you to replace.
- **Tailoring is not redesigning.** "Make it about my business", new copy, a different logo, swapped imagery, a brand colour — all of that lands INSIDE the committed world. Change what was asked for and leave the direction alone.
- **The one exception is an explicit, whole-app redesign** — the user asking for a different look outright, not merely a change that happens to be large. Then the direction is open again and the picker applies. When they name the new direction themselves, that is the decision: pin it and build, still without a picker.
- The user's own words always outrank the roll. A direction, palette, face or reference they named is pinned; the roll only decides what they left open.
- Two review rounds is the budget, then ship and report open items honestly under the reviewer's own verdict — never announce a table with open findings as a pass.
- Web fonts load through Fontsource, never `next/font/google` — this sandbox has no Google egress, so the fetch hangs at compile and the preview renders blank.
- No AI-builder badge, watermark, or attribution anywhere in the product.
- Decisions recorded in `.project/` (ledger, DESIGN_SYSTEM.md) are commitments; contradict one only when the user asks.

## Positioning

A recruiter-focused portfolio that presents Alex Morgan's engineering work, skills, contact details, résumé, and a playable Snake demo.

## Operating Context

Responsive web, built unattended in one pass. Task mode: Experience.

## Evidence on Hand

Responsive portfolio homepage with recruiter-focused hero, availability signal, selected work, about section, skills list, contact CTA, and footer navigation. - Functional Snake game with keyboard/WASD input, touch-friendly direction buttons, score tracking, reset, collision handling, and game-over state. - Downloadable résumé text file linked from the hero. - Category-standard visual treatment using a white and pale-green canvas, deep evergreen typography, mint/sand/blue project cards, and restrained rounded surfaces.

## Product Principles

- Clarity of the task beats decoration; the interface earns attention only where the product does.
- Say what is true: no invented prices, customers, benchmarks or capabilities the product does not have.
