---
name: ebay-evo-design-system
description: >
  Use this skill whenever the user asks to build any UI, website, component, or
  page that should look like eBay or follow the eBay Evo (Playbook) design system.
  Triggers include: "eBay style", "like eBay", "eBay design system", "Playbook",
  "Market Sans", or any request for an e-commerce UI that references eBay.
  This skill encodes all tokens, components, and rules from https://playbook.ebay.com
  so Claude can produce pixel-faithful eBay Evo output without browsing.
source: https://playbook.ebay.com (eBay Evo / Playbook — crawled May 2026)
---

# eBay Evo Design System — Claude Skill

Produce HTML/CSS/JS (or React) output that faithfully matches the eBay Evo (Playbook)
design system. Every choice — color, type, spacing, radius, motion — must come from the
tokens and guidelines below. Do not invent or substitute values.

---

## 1. Brand Identity

- System name: **eBay Evo** (internal), **eBay Playbook** (public docs)
- Tagline: *Things. People. Love.*
- Personality: bold yet approachable, vibrant, inclusive, globally consistent,
  "real / smart / spirited / dependable"
- Core logo colors: **Red · Blue · Yellow · Green** (the four heritage squares)

---

## 2. Color System

eBay Evo uses **17 color families × 8 shades = 136 colors**.
Core brand families + neutrals listed below. Always use the CSS custom-property
names when writing code; hex values are the resolved defaults.

### Core brand colors (logo heritage)

| Name      | Hex      | CSS var (suggestion)        |
|-----------|----------|-----------------------------|
| eBay Red  | `#E53238`| `--color-brand-red`         |
| eBay Blue | `#0064D2`| `--color-brand-blue`        |
| eBay Yellow | `#F5AF02`| `--color-brand-yellow`    |
| eBay Green | `#86B817`| `--color-brand-green`      |

### Extended palette (subset most used in product UI)

Each family has shades 100–800. Use lower numbers for light fills/backgrounds,
higher numbers for text on light backgrounds. All combinations are WCAG AA or AAA
verified per the Playbook color pairing tool.

**Blue family (primary interactive / CTA)**
- Blue-100 `#CCE0F5`  Blue-200 `#99C2EB`  Blue-300 `#66A3E0`
- Blue-400 `#3385D6`  Blue-500 `#0064D2` ← brand  Blue-600 `#0050A8`
- Blue-700 `#003C7E`  Blue-800 `#002854`

**Red family (destructive / alerts / price drops)**
- Red-100 `#FBCCCF`  Red-300 `#F47176`  Red-500 `#E53238` ← brand
- Red-600 `#B72830`  Red-800 `#6D171C`

**Yellow family (highlights / badges / CTAs on dark)**
- Yellow-100 `#FEF0C2`  Yellow-300 `#FBD166`  Yellow-500 `#F5AF02` ← brand
- Yellow-600 `#C48C02`  Yellow-800 `#745301`

**Green family (success / confirmation)**
- Green-100 `#DCF0AC`  Green-300 `#AECF61`  Green-500 `#86B817` ← brand
- Green-600 `#6A9312`  Green-800 `#3F580B`

**Neutral (gray) — UI surfaces, borders, text**
- Neutral-50  `#F7F7F7`  Neutral-100 `#EEEEEE`  Neutral-200 `#D9D9D9`
- Neutral-300 `#C2C2C2`  Neutral-400 `#A6A6A6`  Neutral-500 `#8C8C8C`
- Neutral-600 `#6E6E6E`  Neutral-700 `#4D4D4D`  Neutral-800 `#2B2B2B`
- Neutral-900 `#111111`

### Semantic color tokens

```css
:root {
  /* Backgrounds */
  --bg-page:           #FFFFFF;
  --bg-surface:        #F7F7F7;   /* Neutral-50 */
  --bg-elevated:       #FFFFFF;

  /* Text */
  --text-primary:      #111111;   /* Neutral-900 */
  --text-secondary:    #6E6E6E;   /* Neutral-600 */
  --text-disabled:     #A6A6A6;   /* Neutral-400 */
  --text-on-dark:      #FFFFFF;
  --text-link:         #0064D2;   /* Blue-500 */
  --text-link-hover:   #0050A8;   /* Blue-600 */
  --text-danger:       #E53238;   /* Red-500  */
  --text-success:      #3A8200;

  /* Interactive / brand */
  --color-cta:         #0064D2;
  --color-cta-hover:   #0050A8;
  --color-cta-active:  #003C7E;
  --color-danger:      #E53238;
  --color-success:     #3A8200;
  --color-warning:     #F5AF02;

  /* Borders */
  --border-default:    #C2C2C2;   /* Neutral-300 */
  --border-strong:     #8C8C8C;   /* Neutral-500 */
  --border-focus:      #0064D2;   /* Blue-500 — 2px outline */
}
```

### Color rules
- Never place text lighter than Neutral-600 on a white background.
- Blue-500 (`#0064D2`) is the **only** primary CTA color in product UI.
- Yellow (`#F5AF02`) is for highlights, badges, and marketing — not body text.
- Red (`#E53238`) is reserved for price, sale, error, and destructive states.
- Background surfaces alternate between white and Neutral-50; never go darker
  than Neutral-100 for a content surface.

---

## 3. Typography

### Typeface: Market Sans

eBay's proprietary typeface. Use these CDN fallbacks when the font file is unavailable:

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

:root {
  --font-family: 'Market Sans', 'DM Sans', 'Helvetica Neue', Arial, sans-serif;
}
```

> Note: For faithful rendering outside eBay's infrastructure, "DM Sans" is the
> closest publicly available substitute for Market Sans (same geometric open-counter
> character). Always declare Market Sans first so it loads if the user has it.

**Weights used**: Regular (400) and Bold (700) only. No intermediate weights.

### Type scale (digital / product)

| Token          | Size  | Weight | Line-height | Usage                        |
|----------------|-------|--------|-------------|------------------------------|
| `--type-display-xl` | 48px | 700 | 1.1 | Hero headlines           |
| `--type-display-lg` | 36px | 700 | 1.15| Section headlines        |
| `--type-display-md` | 28px | 700 | 1.2 | Card / module titles     |
| `--type-title-lg`   | 24px | 700 | 1.25| Page titles              |
| `--type-title-md`   | 20px | 700 | 1.3 | Sub-titles               |
| `--type-title-sm`   | 18px | 700 | 1.35| Small section heads      |
| `--type-body-lg`    | 16px | 400 | 1.5 | Primary body copy        |
| `--type-body-md`    | 14px | 400 | 1.5 | Secondary body copy      |
| `--type-body-sm`    | 12px | 400 | 1.4 | Captions, labels         |
| `--type-label`      | 12px | 700 | 1.0 | Uppercase labels (0.5px letter-spacing) |

```css
:root {
  --type-display-xl: 700 48px/1.1 var(--font-family);
  --type-display-lg: 700 36px/1.15 var(--font-family);
  --type-display-md: 700 28px/1.2 var(--font-family);
  --type-title-lg:   700 24px/1.25 var(--font-family);
  --type-title-md:   700 20px/1.3 var(--font-family);
  --type-title-sm:   700 18px/1.35 var(--font-family);
  --type-body-lg:    400 16px/1.5 var(--font-family);
  --type-body-md:    400 14px/1.5 var(--font-family);
  --type-body-sm:    400 12px/1.4 var(--font-family);
}
```

---

## 4. Spacing & Layout Tokens

eBay Evo uses an **8px base grid**.

```css
:root {
  --space-2:   2px;
  --space-4:   4px;
  --space-8:   8px;
  --space-12:  12px;
  --space-16:  16px;
  --space-24:  24px;
  --space-32:  32px;
  --space-40:  40px;
  --space-48:  48px;
  --space-64:  64px;
  --space-80:  80px;
  --space-96:  96px;
}
```

### Breakpoints

| Name  | Min-width | Usage                         |
|-------|-----------|-------------------------------|
| `sm`  | 480px     | Large phones                  |
| `md`  | 768px     | Tablets                       |
| `lg`  | 1024px    | Laptops                       |
| `xl`  | 1280px    | Desktops                      |
| `2xl` | 1600px    | Wide screens                  |

Content max-width: **1280px** centered with `auto` horizontal margins.
Standard page gutters: 16px (mobile) → 24px (tablet) → 40px (desktop).

---

## 5. Shape / Border Radius

```css
:root {
  --radius-none:   0px;
  --radius-xs:     2px;    /* Subtle, data tables */
  --radius-sm:     4px;    /* Chips, badges, tags */
  --radius-md:     8px;    /* Inputs, buttons, small cards */
  --radius-lg:     12px;   /* Standard cards, panels */
  --radius-xl:     16px;   /* Large cards, modals */
  --radius-2xl:    24px;   /* Image containers (product photos) */
  --radius-full:   9999px; /* Pill buttons, avatars */
}
```

eBay Evo is notably **not fully rounded** — prefer `--radius-md` (8px) and
`--radius-lg` (12px) for most surfaces. Full pill only for tags and avatar circles.

---

## 6. Shadow Tokens

```css
:root {
  --shadow-1: 0 1px 2px rgba(0,0,0,0.08);              /* Subtle lift */
  --shadow-2: 0 2px 8px rgba(0,0,0,0.10);              /* Cards */
  --shadow-3: 0 4px 16px rgba(0,0,0,0.12);             /* Dropdowns, popovers */
  --shadow-4: 0 8px 32px rgba(0,0,0,0.16);             /* Modals, sheets */
}
```

---

## 7. Core Components

### 7.1 Button

Four variants:

**Primary (CTA)**
```css
.btn-primary {
  background: var(--color-cta);
  color: #fff;
  border: none;
  border-radius: var(--radius-full);  /* Pill shape */
  padding: 12px 24px;
  font: 700 16px/1 var(--font-family);
  cursor: pointer;
  transition: background 0.15s ease;
}
.btn-primary:hover  { background: var(--color-cta-hover); }
.btn-primary:active { background: var(--color-cta-active); transform: scale(0.98); }
.btn-primary:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
```

**Secondary (outlined)**
```css
.btn-secondary {
  background: transparent;
  color: var(--color-cta);
  border: 1px solid var(--color-cta);
  border-radius: var(--radius-full);
  padding: 11px 24px;   /* 1px less to account for border */
  font: 700 16px/1 var(--font-family);
}
.btn-secondary:hover { background: #CCE0F5; }
```

**Tertiary (text only)**
```css
.btn-tertiary {
  background: none; border: none;
  color: var(--color-cta);
  font: 700 16px/1 var(--font-family);
  padding: 12px 8px;
  cursor: pointer;
}
.btn-tertiary:hover { text-decoration: underline; }
```

**Destructive**
```css
.btn-danger {
  background: var(--color-danger);
  color: #fff;
  border: none;
  border-radius: var(--radius-full);
  padding: 12px 24px;
  font: 700 16px/1 var(--font-family);
}
```

### 7.2 Item Tile (Product Card)

The fundamental unit of eBay's grid — used in search results, categories, homepage.

```html
<article class="item-tile">
  <div class="item-tile__media">
    <img src="…" alt="Product name" class="item-tile__img" />
  </div>
  <div class="item-tile__info">
    <p class="item-tile__title">Product title up to 2 lines</p>
    <p class="item-tile__condition">Brand New</p>
    <div class="item-tile__price">
      <span class="item-tile__price-main">$24.99</span>
      <span class="item-tile__price-original">$39.99</span>
    </div>
    <p class="item-tile__shipping">Free shipping</p>
    <p class="item-tile__seller">Top Rated Seller</p>
  </div>
</article>
```

```css
.item-tile {
  background: var(--bg-elevated);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-2);
  overflow: hidden;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.item-tile:hover {
  box-shadow: var(--shadow-3);
  transform: translateY(-2px);
}
.item-tile__media {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--bg-surface);
}
.item-tile__img {
  width: 100%; height: 100%;
  object-fit: contain;        /* eBay uses contain, not cover */
  padding: 8px;
}
.item-tile__info { padding: var(--space-12) var(--space-12) var(--space-16); }
.item-tile__title {
  font: 400 14px/1.4 var(--font-family);
  color: var(--text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--space-4);
}
.item-tile__condition {
  font: 400 12px/1 var(--font-family);
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}
.item-tile__price { display: flex; align-items: baseline; gap: 6px; margin-bottom: var(--space-4); }
.item-tile__price-main {
  font: 700 20px/1 var(--font-family);
  color: var(--text-primary);
}
.item-tile__price-original {
  font: 400 14px/1 var(--font-family);
  color: var(--text-secondary);
  text-decoration: line-through;
}
.item-tile__shipping, .item-tile__seller {
  font: 400 12px/1.3 var(--font-family);
  color: var(--text-secondary);
}
.item-tile__seller { color: var(--color-success); font-weight: 700; }
```

### 7.3 Search Field

```html
<div class="search-field">
  <input type="search" class="search-field__input" placeholder="Search for anything" />
  <button class="search-field__btn" aria-label="Search">
    <svg>…magnifier icon…</svg>
  </button>
</div>
```

```css
.search-field {
  display: flex;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-full);
  overflow: hidden;
  background: #fff;
  height: 48px;
}
.search-field:focus-within {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 2px rgba(0,100,210,0.25);
}
.search-field__input {
  flex: 1;
  border: none; outline: none;
  padding: 0 var(--space-16);
  font: 400 16px/1 var(--font-family);
  color: var(--text-primary);
  background: transparent;
}
.search-field__btn {
  width: 48px; min-width: 48px;
  background: var(--color-cta);
  border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: #fff;
}
.search-field__btn:hover { background: var(--color-cta-hover); }
```

### 7.4 Top Navigation Bar

```html
<header class="top-nav">
  <div class="top-nav__inner">
    <a href="/" class="top-nav__logo"><!-- eBay logo SVG --></a>
    <div class="top-nav__search"><!-- search field --></div>
    <nav class="top-nav__actions">
      <a href="/signin" class="top-nav__link">Sign in</a>
      <a href="/register" class="top-nav__link">Register</a>
      <a href="/watchlist" class="top-nav__icon-btn" aria-label="Watchlist">…</a>
      <a href="/cart" class="top-nav__icon-btn" aria-label="Cart">…</a>
    </nav>
  </div>
  <nav class="top-nav__categories">
    <a class="top-nav__cat-link" href="#">Electronics</a>
    <a class="top-nav__cat-link" href="#">Motors</a>
    <a class="top-nav__cat-link" href="#">Fashion</a>
    <!-- … -->
  </nav>
</header>
```

```css
.top-nav {
  background: #fff;
  border-bottom: 1px solid var(--border-default);
  position: sticky; top: 0; z-index: 100;
}
.top-nav__inner {
  max-width: 1280px; margin: 0 auto;
  padding: var(--space-8) var(--space-16);
  display: flex; align-items: center; gap: var(--space-16);
}
.top-nav__search { flex: 1; max-width: 680px; }
.top-nav__actions { display: flex; align-items: center; gap: var(--space-8); margin-left: auto; }
.top-nav__link {
  font: 400 14px/1 var(--font-family);
  color: var(--text-link);
  text-decoration: none;
}
.top-nav__link:hover { text-decoration: underline; }
.top-nav__categories {
  max-width: 1280px; margin: 0 auto;
  padding: var(--space-4) var(--space-16);
  display: flex; gap: var(--space-4); overflow-x: auto;
}
.top-nav__cat-link {
  font: 400 13px/1 var(--font-family);
  color: var(--text-primary);
  text-decoration: none;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-sm);
  white-space: nowrap;
}
.top-nav__cat-link:hover { background: var(--bg-surface); }
```

### 7.5 Badge / Signal

```css
/* Condition badge */
.badge {
  display: inline-block;
  font: 700 11px/1 var(--font-family);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
}
.badge--new      { background: #CCE0F5; color: #003C7E; }   /* Blue */
.badge--sale     { background: #FBCCCF; color: #6D171C; }   /* Red */
.badge--toprated { background: #DCF0AC; color: #3F580B; }   /* Green */
.badge--trending { background: #FEF0C2; color: #745301; }   /* Yellow */
```

### 7.6 Text Field / Input

```css
.text-field {
  width: 100%;
  height: 48px;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 var(--space-12);
  font: 400 16px/1 var(--font-family);
  color: var(--text-primary);
  background: #fff;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.text-field:hover  { border-color: var(--border-strong); }
.text-field:focus  {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 2px rgba(0,100,210,0.2);
}
.text-field:disabled { background: var(--bg-surface); color: var(--text-disabled); }
```

### 7.7 Chip (Filter)

```css
.chip {
  display: inline-flex; align-items: center; gap: 4px;
  height: 32px;
  padding: 0 var(--space-12);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-full);
  font: 400 14px/1 var(--font-family);
  color: var(--text-primary);
  background: #fff;
  cursor: pointer;
  transition: background 0.1s, border-color 0.1s;
}
.chip:hover   { background: var(--bg-surface); border-color: var(--border-strong); }
.chip--active {
  background: #CCE0F5;
  border-color: var(--color-cta);
  color: var(--color-cta);
  font-weight: 700;
}
```

### 7.8 Pagination

```css
.pagination { display: flex; align-items: center; gap: var(--space-4); }
.page-btn {
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  font: 400 14px/1 var(--font-family);
  color: var(--text-link);
  cursor: pointer; background: none;
}
.page-btn:hover   { background: var(--bg-surface); }
.page-btn--active {
  background: var(--color-cta);
  color: #fff;
  font-weight: 700;
  border-color: var(--color-cta);
}
```

### 7.9 Alert Notice (Inline)

```css
.notice {
  display: flex; gap: var(--space-8);
  padding: var(--space-12) var(--space-16);
  border-radius: var(--radius-md);
  border-left: 4px solid;
  font: 400 14px/1.5 var(--font-family);
}
.notice--info    { background: #E8F1FB; border-color: var(--color-cta);    color: #002854; }
.notice--success { background: #EBFAD4; border-color: var(--color-success); color: #2C5200; }
.notice--warning { background: #FEF3CC; border-color: var(--color-warning); color: #5A3E00; }
.notice--error   { background: #FBCCCF; border-color: var(--color-danger);  color: #6D171C; }
```

### 7.10 Divider

```css
.divider {
  border: none;
  border-top: 1px solid var(--border-default);
  margin: var(--space-16) 0;
}
```

---

## 8. Layout Patterns

### Product grid (search results / category)

```css
.product-grid {
  display: grid;
  gap: var(--space-16);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
/* Responsive overrides */
@media (max-width: 480px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-8); }
}
@media (min-width: 1024px) {
  .product-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (min-width: 1280px) {
  .product-grid { grid-template-columns: repeat(5, 1fr); }
}
```

### Page container

```css
.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-16);
}
@media (min-width: 768px)  { .page-container { padding: 0 var(--space-24); } }
@media (min-width: 1024px) { .page-container { padding: 0 var(--space-40); } }
```

### Sidebar + main layout (search results page)

```css
.search-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: var(--space-24);
  align-items: start;
}
@media (max-width: 768px) {
  .search-layout { grid-template-columns: 1fr; }
  .search-layout__sidebar { display: none; } /* collapse to filter sheet */
}
```

---

## 9. Motion / Animation Tokens

```css
:root {
  --duration-fast:   100ms;
  --duration-normal: 200ms;
  --duration-slow:   300ms;
  --ease-standard:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter:      cubic-bezier(0, 0, 0.2, 1);
  --ease-exit:       cubic-bezier(0.4, 0, 1, 1);
}
```

Principles from eBay Evo motion guidelines:
- Use motion to **inform, not entertain** — every animation has a purpose.
- Preferred durations: 100ms (micro), 200ms (standard UI), 300ms (page transitions).
- Page-level transitions use a **subtle fade + vertical translate (8px)** approach.
- Loaders use eBay's branded expressive loader (circular with brand colors) or a
  skeleton shimmer using a left-to-right gradient sweep.

Skeleton shimmer pattern:
```css
@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
.skeleton {
  border-radius: var(--radius-sm);
  background: linear-gradient(90deg, #EEEEEE 25%, #F7F7F7 50%, #EEEEEE 75%);
  background-size: 800px 100%;
  animation: shimmer 1.4s infinite linear;
}
```

---

## 10. Accessibility Rules (from eBay Playbook)

- All interactive elements must have a minimum touch target of **44×44px**.
- Keyboard focus must be visible: use `outline: 2px solid var(--border-focus)` with `outline-offset: 2px`.
- Color alone must not convey meaning — always pair with an icon or text label.
- All images require descriptive `alt` text.
- Form inputs require an associated `<label>` (visible or `sr-only`).
- WCAG AA contrast is the minimum; AA-Large or AAA preferred.
- All color combinations used in product UI are WCAG-verified per Playbook color pairing tool.

---

## 11. Writing / Tone Rules

- **Sentence case** everywhere — never title case or ALL CAPS in UI labels.
- Price format: `$24.99` (dollar sign, no space, two decimal places).
- Shipping: "Free shipping", "Free returns" — always sentence case.
- Condition values: "Brand New", "Like New", "Very Good", "Good", "Acceptable"
  (these are eBay's official condition strings, keep exact casing).
- CTA verbs: "Buy now", "Add to watchlist", "Place bid", "Make offer".
- Error messages: Specific, actionable, never blame the user.
- Avoid exclamation marks in UI copy.

---

## 12. Quick-start CSS reset for eBay Evo pages

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  /* — paste all tokens from sections 2–9 here — */
}

body {
  font: var(--type-body-lg);
  font-family: var(--font-family);
  color: var(--text-primary);
  background: var(--bg-page);
  -webkit-font-smoothing: antialiased;
}

a { color: var(--text-link); text-decoration: none; }
a:hover { text-decoration: underline; }

img { display: block; max-width: 100%; }

button { font-family: var(--font-family); cursor: pointer; }
```

---

## 13. Checklist before output

Before producing any eBay Evo UI, verify:

- [ ] Font is Market Sans (or DM Sans fallback) — NOT Inter, Roboto, system-ui
- [ ] Primary CTA is Blue-500 (`#0064D2`) pill button
- [ ] Prices shown in bold, left-aligned under the product title
- [ ] Product images use `object-fit: contain` with padding, not `cover`
- [ ] No dark-mode by default (eBay product UI is light-mode primary)
- [ ] Corner radii from token set — no arbitrary values
- [ ] All spacing from 8px grid
- [ ] Focus states present on all interactive elements
- [ ] Sentence case on all labels and headings
- [ ] Hover states on all clickable items (cursor: pointer, subtle bg change)
