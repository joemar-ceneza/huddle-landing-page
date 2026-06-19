# Huddle — Landing Page

A modern, dark-themed SaaS landing page for **Huddle**, a fictional community
platform. Built as a single-page React app with TailwindCSS.

## What This Does

A marketing landing page with a sticky navigation bar and the following sections:
hero, logo cloud, feature grid, animated stats, testimonials, pricing tiers, an
FAQ accordion, a call-to-action band, and a multi-column footer with a newsletter
sign-up.

## Tech Stack

- React 18 (Create React App)
- TailwindCSS for styling
- react-animated-numbers for the animated stat counters
- MUI icons (`@mui/icons-material`) for UI icons

## Prerequisites

- Node.js 18+

## Setup

1. Clone the repo
2. `npm install`
3. `npm start` — opens http://localhost:3000

## Available Scripts

| Command          | Description                                  |
| ---------------- | -------------------------------------------- |
| `npm start`      | Run the dev server                           |
| `npm run build`  | Build the production bundle to `build/`      |
| `npm run deploy` | Build and publish to GitHub Pages (gh-pages) |
| `npm test`       | Run the test runner                          |

## Project Structure

```
src/
├── components/      # NavigationBar, Hero, LogoCloud, Features, Stats,
│                    # Testimonials, Pricing, Faq, CtaBand, HuddlePage, Footer, App
├── data.js          # Content for features, testimonials, pricing, and FAQs
├── images/          # SVG illustrations and logo assets
├── css/index.css    # Tailwind entry + base styles and design-system classes
└── index.js         # App entry point
```

## Design System

Defined in `tailwind.config.js` and `src/css/index.css`:

- **Palette:** `night` (background), `brand` indigo→fuchsia gradient with a `cyan`
  highlight, `muted` slate text
- **Effects:** `shadow-glow`, `shadow-glass`, and a `fade-up` animation
- **Helper classes:** `.container-x` (page width), `.glass` (frosted panel),
  `.text-gradient` (gradient text)
