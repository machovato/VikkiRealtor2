---
version: "alpha"
name: Casa Verde
description: >
  A bohemian sanctuary aesthetic for a small, intentional real estate practice
  serving Austin and the Texas Hill Country. The visual language draws from
  adobe walls, brass lanterns, live-oak shade, and the quality of light at
  golden hour. Warm, layered, and deeply unhurried.

colors:
  primary: "#2c3a2a"
  on-primary: "#f5f0e8"
  secondary: "#7a5c3a"
  on-secondary: "#f5f0e8"
  tertiary: "#c9a84c"
  on-tertiary: "#2c1f0a"
  neutral: "#f5f0e8"
  on-neutral: "#2c1f0a"
  surface: "#f5f0e8"
  on-surface: "#2c1f0a"
  bark: "#3a2a1a"
  moss: "#4a6b4a"
  moss-deep: "#2c3a2a"
  clay: "#c97a4a"
  clay-deep: "#8a4a28"
  brass: "#c9a84c"
  ivory: "#f5f0e8"
  indigo-night: "#1e2240"
  rose: "#c87878"

typography:
  display-xl:
    fontFamily: Fraunces
    fontSize: clamp(3rem, 9vw, 8.5rem)
    fontWeight: 300
    lineHeight: "0.95"
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 144"
  display-lg:
    fontFamily: Fraunces
    fontSize: 7rem
    fontWeight: 300
    lineHeight: "0.95"
    letterSpacing: "-0.025em"
  display-md:
    fontFamily: Fraunces
    fontSize: 5rem
    fontWeight: 300
    lineHeight: "1.0"
    letterSpacing: "-0.025em"
  display-sm:
    fontFamily: Fraunces
    fontSize: 3rem
    fontWeight: 300
    lineHeight: "1.05"
    letterSpacing: "-0.02em"
  display-italic:
    fontFamily: Fraunces
    fontSize: inherit
    fontWeight: 300
    fontStyle: italic
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: Inter Tight
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0"
  body-md:
    fontFamily: Inter Tight
    fontSize: 1rem
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "0"
  body-sm:
    fontFamily: Inter Tight
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0"
  eyebrow:
    fontFamily: Inter Tight
    fontSize: 0.7rem
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0.32em"
    fontFeature: "ss01, cv11"

rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 112px
  4xl: 160px

components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.bark}"
    rounded: "{rounded.full}"
    padding: "16px 28px"
    typography: "{typography.eyebrow}"
  button-primary-hover:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.bark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    typography: "{typography.eyebrow}"
  button-outline-hover:
    backgroundColor: "transparent"
    textColor: "{colors.brass}"
  nav:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    typography: "{typography.eyebrow}"
  listing-card:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.sm}"
  form-field:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.none}"
  form-field-focus:
    textColor: "{colors.ivory}"
---

## Overview

**Sanctuary Minimalism.** Casa Verde's UI is designed to feel like stepping
into a shaded porch on a warm afternoon — calm, intentional, and rich with
quiet detail. The aesthetic is rooted in the physical textures of the Texas
Hill Country: hand-laid limestone, aged brass fixtures, live-oak canopy, and
the terracotta warmth of adobe walls at dusk.

This is not a listings portal. It is an invitation. Every visual decision
should reinforce the idea that this is a practice built on relationships,
patience, and a deep respect for the land and the people who inhabit it.

The design supports a single-page, vertically scrolling structure with distinct
tonal sections: dark (`bark`/`moss-deep`) sections alternate with light
(`ivory`) sections to create visual rhythm without relying on complexity.

## Colors

The palette draws from the natural pigments of the Hill Country landscape. It
uses warm-shifted OKLCH colors to ensure perceptual consistency across
light levels and display technologies.

- **Ivory (`#f5f0e8`):** The warm off-white foundation. Never pure white —
  pure white would feel clinical. Ivory suggests old paper, linen, and morning
  light through muslin curtains.

- **Bark (`#3a2a1a`):** Deep walnut brown used as the dark surface. Grounds
  dark sections. Warmer and more organic than charcoal or near-black.

- **Moss / Moss Deep (`#4a6b4a` / `#2c3a2a`):** Forest-floor greens. The
  primary dark section background (Listings) uses `moss-deep`. Feels like
  the underside of a live oak canopy.

- **Brass (`#c9a84c`):** The signature accent. Used for eyebrow labels, CTAs,
  highlights, and decorative glows. Evokes aged lanterns and hardware.
  Not gold — it must read as worn, not luxurious.

- **Clay / Clay Deep (`#c97a4a` / `#8a4a28`):** Terracotta warmth for emphasis
  and italicized display text. Used in the Philosophy and Gallery sections to
  warm the ivory backgrounds.

- **Indigo Night (`#1e2240`):** The base of the dusk gradient used in the
  Contact section. Signals transition — the end of the day, the beginning of
  a conversation.

- **Rose (`#c87878`):** Rarely used. Reserved for future soft accent needs
  (e.g., hover states on light backgrounds).

**Do not** introduce new hues. The palette is intentionally constrained.
If a new color seems needed, explore opacity variations of existing tokens
first (e.g., `brass/40`, `ivory/75`).

## Typography

Two typefaces only. No exceptions.

**Fraunces** (display) is a variable, optical-size serif with a softly
bohemian character. Its italic is especially distinctive — slightly informal
and warm. It is used exclusively for headings and pull-quote text. Set at
`font-weight: 300` to maintain its delicate, hand-drawn feeling. The
`opsz` axis should be set high (e.g., `144`) for large display sizes to take
advantage of optical refinements.

**Inter Tight** (sans) handles all UI copy: navigation labels, body text,
eyebrows, captions, and form inputs. Its condensed proportions keep small-size
text crisp and prevent the UI from feeling overly airy.

**Eyebrow type** (`.eyebrow`) is the primary UI label pattern: `0.7rem`,
`letter-spacing: 0.32em`, `text-transform: uppercase`, `font-weight: 500`.
It appears in navigation links, section labels, listing numbers, and button
text. Its generosity of letter-spacing creates calm and formality without
stiffness.

**Display italic** (`.display-italic`) is used for the key emotional phrases
in each section: *"that breathes,"* *"currently open,"* *"a place to root."*
The italic weight of Fraunces carries most of the emotional register of the
brand voice.

**Never** set body copy in Fraunces. The display face is a punctuation mark,
not a workhorse.

## Spacing

Spacing follows a scale loosely anchored to `8px`. Section padding is generous
(`py-28` → `py-40`, ~112–160px) to give the content room to breathe. This is
intentional: empty space signals confidence and restraint, matching the brand
positioning of a practice that "moves slowly."

Internal component spacing (between heading and subtext, between form fields)
follows the tighter `sm`/`md`/`lg` scale.

The max-width container varies by section (`1300px`–`1600px`) to prevent
wide-screen lines from becoming too long while allowing the hero and gallery
to feel expansive.

## Rounded

Corners are nearly square (`rounded: 2px`) on all cards and images. This is a
deliberate reference to the hard edges of limestone blocks, timber frames, and
adobe construction. Rounded corners would soften the UI too much and lose the
architectural grounding.

The only fully-rounded elements (`rounded: full`) are pill buttons and the
lantern-glow ambient blur effects, which use `border-radius: 9999px` to
produce soft circular light pools.

## Components

### Navigation

Fixed position, full-width. Uses `mix-blend-mode: difference` to remain
legible against both the dark hero and light sections without a background
fill. Link text in `eyebrow` style. No underlines; hover state transitions
to `brass`.

On mobile, only the logo and "Inquire" CTA are visible. A hamburger/drawer
menu should be added before launch.

### Buttons

Two variants:

1. **Primary (pill):** `brass` background, `bark` text, pill-shaped. Used for
   primary CTAs ("Wander the listings," "Send the note").
2. **Outline (pill):** Transparent, `ivory/40` border, `ivory` text. Used in
   the navigation bar for the secondary "Inquire" CTA.

Hover states swap backgrounds smoothly. The CTA arrow (`→`) shifts `translate-x-1`
on hover as a micro-animation cue.

### Listing Cards

Three-column grid on desktop. Cards use a `3:4` aspect-ratio image with a
`from-bark/70` gradient overlay on the lower third. The card eyebrow label
(`No. 01 · Wimberley`) sits inside the image over the overlay. Title in
`display-serif`, detail in `brass`, note text in `ivory/75`. Price in
`display-italic`. The "Inquire →" link uses a `brass` underline with
`underline-offset-4`.

### Contact Form

Underline-only inputs (`border-b border-ivory/30`) on a dark background.
No box borders. Focus state transitions the underline to `brass`. Labels are
`eyebrow` style in `brass`. The textarea does not resize.

Submit button uses the primary pill variant. On success, the button text
updates to "Received — talk soon" and disables. The form does not currently
POST to an endpoint and must be wired to a service (Resend, Formspree, or a
Cloudflare Worker) before going live.

## Animations

All animations are CSS-only. No JavaScript animation libraries.

- **`animate-breathe`** (`breathe 18s ease`): Applied to the hero background
  image. A slow, almost imperceptible `scale(1) → scale(1.04)` loop that
  gives the impression of the landscape exhaling. Duration must remain ≥ 12s —
  faster feels restless.

- **`animate-rise`** (`rise 1.1s ease both`): Entrance animation for hero text
  and CTA blocks. `translateY(24px) opacity(0)` → `translateY(0) opacity(1)`.
  Applied only once (no loop). Used sparingly: only on the hero text stack.

- **`animate-lantern`** (`lantern-glow 4s ease-in-out infinite`): Subtle
  opacity pulse (`0.85 → 1.0`) on the radial blur orbs that simulate lantern
  light. Creates ambient warmth without calling attention to itself.

- **`animate-sway`** (`sway 9s ease infinite`): Available for decorative
  botanical elements (not yet used). `translateY` + slight rotation.

Image hover effects on listing and gallery cards use
`transition-transform duration-[1400ms]` to produce a very slow `scale-105`
zoom — slow enough to feel organic rather than snappy.

**Do not** add `transition-duration` values below `300ms` for content-level
animations. The brand rhythm is slow and deliberate.

## Voice & Tone

The written voice of the UI is restrained, literary, and warm. It avoids
the vocabulary of conventional real estate ("sqft," "open floor plan,"
"motivated seller"). Instead it reaches for sensory and poetic language:

- ✅ *"A creek you can hear from the bedroom."*
- ✅ *"The quietest sky in Texas."*
- ✅ *"Where the green hour pools."*
- ❌ *"Stunning views!" / "Must-see!" / "Price reduced."*

**Eyebrow labels** are short, calm, and often use the "No. 01 ·" numbering
convention to confer deliberateness.

**CTAs** are invitations, not commands: "Wander the listings," "Send the note,"
"Begin the conversation."

When adding new sections or copy, ask: *does this sound like something you'd
read in a handwritten letter from a trusted friend, or a billboard?* If the
latter, rewrite it.
