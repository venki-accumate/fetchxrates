# FetchXRates Marketing Website

## Overview
Angular 20 standalone-component marketing site for FetchXRates. Serves as the public-facing website with pricing, features, API docs, contact, and legal pages.

**Dev server:** `ng serve` → `http://localhost:4201`

## Tech Stack
- **Angular 20.3.0** (standalone components, signals, lazy-loaded routes)
- **TypeScript 5.8**, SCSS, no Tailwind/Bootstrap
- **Font:** Space Grotesk (Google Fonts) + Material Icons
- **No backend** — static site; links to `app.fetchxrates.com` for the dashboard

## Project Structure
```
src/
├── index.html                          # Entry point, loads fonts + Turnstile script
├── main.ts                             # Bootstrap
├── styles.scss                         # Global CSS variables, dark/light theme, resets
├── assets/
│   ├── pricing-tiers.json              # 3 tiers, comparison table data
│   ├── rate-api-docs.json              # Full API spec (v2.0.0) — loaded by ApiSpec page
│   ├── curl-commands.json              # 18 cURL examples for all API endpoints
│   ├── postman-collection.json         # Postman v2.1 collection with variables
│   ├── fetchRates.png                  # Dashboard screenshot (hero)
│   ├── logo.png, textLogo.png          # Brand assets
│   └── favicon.ico
└── app/
    ├── app.component.ts/html/scss      # Shell: <navbar> + <router-outlet> + <footer>
    ├── app.routes.ts                   # 10 lazy-loaded routes + wildcard
    ├── services/
    │   └── theme.service.ts            # Signal-based light/dark theme (localStorage)
    ├── components/
    │   ├── layout/
    │   │   ├── navbar/                 # Sticky nav, theme toggle, Login/Get Started CTAs
    │   │   └── footer/                 # Brand, links, RBA disclaimer, copyright
    │   ├── shared/
    │   │   ├── button/                 # Reusable variant/size button
    │   │   └── badge/                  # Reusable status badge
    │   └── features/
    │       └── hero/                   # Homepage hero section
    └── pages/
        ├── home/                       # Hero + features preview + pricing embed
        ├── features/                   # Unified feature list (Dashboard + API)
        ├── pricing/                    # Tiers from JSON, comparison table, FAQ
        ├── api-spec/                   # Full 2-column API reference viewer
        ├── contact/                    # Contact form with Turnstile + company info
        ├── about/                      # Story, values, team, disclaimer
        ├── articles/                   # Coming Soon placeholder
        ├── status/                     # Service status dashboard
        ├── terms/                      # Terms of Service
        └── privacy/                    # Privacy Policy
```

## Routes
| Route | Component | Notes |
|-------|-----------|-------|
| `/` | HomeComponent | Hero + embedded pricing |
| `/features` | FeaturesComponent | All features in one list |
| `/pricing` | PricingComponent | Embeddable via `@Input() embedded` |
| `/api-spec` | ApiSpecComponent | Loads rate-api-docs.json |
| `/contact` | ContactComponent | Form → API `/support/contact` |
| `/about` | AboutComponent | Company story |
| `/articles` | ArticlesComponent | Placeholder |
| `/status` | StatusComponent | Service status |
| `/terms` | TermsComponent | Legal |
| `/privacy` | PrivacyComponent | Legal |

## Theme System
- CSS variables in `:root` (dark default) and `[data-theme="light"]`
- Accent: `#22b71b` (green)
- NavbarComponent manages theme via `isDarkTheme` signal + `localStorage`
- `ThemeService` exists but navbar manages its own toggle independently

## External Links
- Dashboard app: `https://app.fetchxrates.com`
- API base: `https://api.fetchxrates.com/api`
- Support email: `support@fetchxrates.com`

## Key Patterns
- All pages are standalone components with lazy-loaded routes
- PricingComponent accepts `@Input() embedded = false` for reuse in HomeComponent
- API Docs page loads spec from `assets/rate-api-docs.json` and generates code samples dynamically
- Contact form uses Cloudflare Turnstile for bot protection, calls backend `/support/contact`
- No tests — marketing site only
