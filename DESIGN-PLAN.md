# BLD Landing Page — Design Plan (draft, not built yet)

Sources: the BLD quiz asset doc (Opt-In tab, see `../_ref/bld-quiz-asset-doc.md`) and add1zero4.com.

## 1. Brand system

| Role | Color | Where it comes from | Used for |
|---|---|---|---|
| Navy (primary dark) | `#152235` | Site headings/dark bands, doc hero, "1" in the A1Z4 logo | Hero, Attract/Close/Repeat band, final CTA band, headings |
| Red (action) | `#CB2026` | Site buttons, logo "A" and "Z" | Every CTA button, key numbers ($100K+), arrows |
| Red hover | `#A8191E` | darker red | Button hover/press |
| Blue (accent) | `#2E74B5` | Doc section headings | Eyebrow labels, section headings, highlights, "Attract" |
| Green (small accent) | `#167655` | Logo "4" and "BIG LOGO DEALS" | Ticks, "Repeat" stage, growth stats (use sparingly) |
| Heading text | `#161E2A` | Site h2 | Headings on white |
| Body text | `#4A4F57` | Site body is `#595959`; a little darker for readability | Paragraphs |
| White | `#FFFFFF` | — | Main background |
| Light band | `#F5F7FA` | Site `#F5F5F5` / doc `#F8FAFD` | Alternating sections |

The three stages each get one logo colour: Attract = blue, Close = red, Repeat = green.

**Type:** Montserrat 700/800 for headlines (the doc's font: bold and punchy) and Open Sans 400/600/700 for body (the site's font).
**Buttons:** red pill shape (like the site), uppercase, bold, a soft shadow, and an arrow that moves on hover.

## 2. Page rhythm (background per section)

Navy hero → white logo strip → light testimonials → white story → navy Attract/Close/Repeat → white Ledge bio → light "quiz will show you" → navy final CTA.

## 3. Section by section

1. **Hero (navy, faint glass skyline overlay like the site)**
   - Small A1Z4 logo at the top.
   - The eyebrow "For agencies, SaaS, and service firms:" as a blue pill.
   - The lead-in in soft white.
   - A big Montserrat headline with "$100K+ CONTRACTS" in red.
   - The sub-copy, then the red CTA, then the line under the button.
   - An engaging touch: a small animated "$5K → $100K+" contract chip near the CTA.
2. **Logo strip**: "Our Add1Zero Method Has Closed:" followed by a slow, endless scrolling row of the 12 logos, greyscale until hovered. Falls back to styled text names if we don't get logo files.
3. **Testimonials**: two cards with headshots and a big quote mark. Each card gets a result badge ("Under $1M → $3M", "$20K → $90K MRR").
4. **Story: "From a $1.2M Ceiling to $4.8M in 18 Months…"**
   - The three pain quotes as staggered chat bubbles that appear on scroll.
   - The "I won't be stuck here next year" loop as a repeating year strip.
   - The Velocity case study with a before/after stat panel: $1.2M → $4.8M, 3 Fortune 500 clients, $100k/mo → $400k/mo. The bar grows on scroll.
   - Then the CTA.
5. **Attract. Close. Repeat. (navy)**
   - Intro copy, then three numbered cards (01/02/03) in blue, red and green.
   - The cards are joined by a circular loop arrow to show the "repeat" idea.
   - Closing copy, then the CTA.
6. **Meet Ledge**: photo in a navy frame with three stat badges overlapping it ("13× founder", "$50M closed", "80% close rate with $1B+ companies"), and the bio on the right.
7. **"Here's what the $100K Contract Quiz will show you:"**: 7 numbered items in a 2-column grid on desktop, each with a red → and a bold lead-in. Then the CTA.
8. **Final CTA (navy)**: big headline, short copy, and the two-line button ("I'll Show You How" / "TAKE THE QUIZ").

Across the page: a slim top bar with the logo and a small "Take the Quiz" button that appears after you scroll past the hero; a sticky bottom CTA on mobile; subtle fade-up animations on scroll (they turn off for users who prefer reduced motion). Fully responsive.

## 4. Assets
- From the doc (saved in `../_ref/doc-images/`): `lp-1.png` and `lp-2.png` are the testimonial headshots (probably Derek and Jake, in doc order), `lp-3.png` is the A1Z4 Big Logo Deals logo, and `lp-4.png` is Ledge's photo.
- Still needed: the 12 client logo files (optional) and a skyline/building image for the hero (optional; we can use a CSS pattern instead).

## 5. Open questions
- Where do the quiz buttons go: the quiz in this same app, or another URL?
- Copy typos to confirm: "Ad1Zero" (in Jake's quote) and "100's of hours".
