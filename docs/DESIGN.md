---
name: Vibrant Cravings
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5b4137'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8f7065'
  outline-variant: '#e4beb1'
  surface-tint: '#a73a00'
  primary: '#a73a00'
  on-primary: '#ffffff'
  primary-container: '#ff5c00'
  on-primary-container: '#521800'
  inverse-primary: '#ffb59a'
  secondary: '#006d37'
  on-secondary: '#ffffff'
  secondary-container: '#6bfe9c'
  on-secondary-container: '#00743a'
  tertiary: '#705d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#caa900'
  on-tertiary-container: '#4c3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#802a00'
  secondary-fixed: '#6bfe9c'
  secondary-fixed-dim: '#4ae183'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005228'
  tertiary-fixed: '#ffe170'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: beVietnamPro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: beVietnamPro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: beVietnamPro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: beVietnamPro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style
The brand personality is high-energy, appetizing, and immediate. It aims to evoke a sense of "hunger-fulfillment" through a visual language that is both professional and playful. The target audience is the urban explorer and the busy professional who values speed but doesn't want to sacrifice the joy of a good meal.

The design style is **Modern / High-Contrast**, characterized by saturated color hits, generous whitespace to allow food photography to breathe, and soft, tactile UI elements. It avoids the clinical feel of traditional SaaS by using organic curves and "delicious" color transitions that mimic the freshness of high-quality ingredients.

## Colors
The palette is centered around **Action Orange**, a high-chroma hue designed to stimulate appetite and drive conversion. 

- **Primary (Action Orange):** Used for primary CTAs, active states, and critical brand moments.
- **Secondary (Fresh Green):** Reserved for health-oriented categories, "Available" status indicators, and success states.
- **Tertiary (Sunny Yellow):** Used for ratings, badges, and promotional highlights.
- **Neutral:** A range of warm greys (Cooling into Deep Charcoal) to ensure the interface feels grounded and legible against the vibrant accents.

The background should remain primarily off-white (#FAFAFA) to maintain a sense of cleanliness and freshness.

## Typography
Typography is a blend of expressive headlines and highly functional body text. 

**Plus Jakarta Sans** is used for headlines to provide a modern, friendly, and slightly rounded geometric feel. **Be Vietnam Pro** is used for all body text and UI labels, chosen for its exceptional legibility at small sizes—crucial for reading menu details and delivery times. 

Bold weights (700-800) are used aggressively for item names and prices to ensure they pop against the vibrant backgrounds.

## Layout & Spacing
The layout uses a **Fluid Grid** system based on an 8px base unit to ensure consistent vertical rhythm. 

- **Mobile:** 4-column grid with 20px side margins and 16px gutters.
- **Desktop:** 12-column fixed-width grid (max 1200px) centered, with 24px gutters.

Spacing should favor a "loose" feel in the discovery phase (browsing restaurants) and a "tight" feel during the utility phase (checkout and order tracking). High-priority content, like food images, should utilize a full-bleed or wide-margin approach to maximize visual impact.

## Elevation & Depth
Depth is created using **Ambient Shadows** and **Tonal Layers**. Shadows should never be pure black; they are tinted with the brand’s neutral charcoal at low opacities (8-12%) to keep the UI looking clean.

- **Level 1 (Surface):** Default background for the app.
- **Level 2 (Cards):** Subtle shadow (Y: 4px, B: 12px) to lift restaurant and menu cards.
- **Level 3 (Modals/Bottom Sheets):** More pronounced shadow (Y: 10px, B: 24px) to indicate high-level interaction.
- **Active State:** Elements like pressed buttons or selected chips use a slight inner shadow or "squish" effect to feel tactile.

## Shapes
The shape language is defined by **Roundedness Level 2**. This level (0.5rem base) provides a friendly, modern appearance that feels safe and approachable.

- **Buttons & Inputs:** Use the standard `rounded-md` (0.5rem).
- **Food Cards:** Use `rounded-lg` (1rem) to frame food photography softly.
- **Promotional Banners:** Use `rounded-xl` (1.5rem) to differentiate from standard content cards.
- **Search Bars:** Use pill-shaped (full radius) to signify "active exploration."

## Components

### Buttons
Primary buttons use **Action Orange** with white text. They should be tall (min-height 48px) with a heavy font weight for maximum prominence. Secondary buttons use a light tint of orange (10% opacity) with orange text.

### Cards
Restaurant cards are the most critical component. They must feature a large image container (16:9 ratio) with a `rounded-lg` corner radius. Information like "Delivery Time" and "Rating" should be displayed as floating chips on the image.

### Chips
Used for food categories (e.g., "Burger," "Vegan," "Spicy"). These are pill-shaped with light background fills and medium-weight labels. When active, they transition to the Primary color.

### Input Fields
Inputs use a soft grey border (1px) that turns Action Orange on focus. Use a large border radius to match the overall shape language.

### Cart / CTA Bar
A persistent floating bar at the bottom of the screen for "View Cart" moments, utilizing a heavy blur backdrop (Glassmorphism) behind a high-contrast Action Orange button to ensure it is always the most visible element.