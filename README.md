# fetchxrates - Australian Exchange Rates API Marketing Website

A modern, high-performance marketing website for fetchxrates - an API service providing reliable Australian exchange rate data from the Reserve Bank of Australia (RBA).

## 🌟 Features

- **Modern Angular 20**: Built with standalone components architecture
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Fully Responsive**: Mobile-first design using Flexbox and Grid
- **Performance Optimized**: Lazy-loaded routes, sub-100KB initial bundle
- **SEO-Friendly**: Semantic HTML, proper meta tags, clean URLs
- **No Heavy Dependencies**: Pure CSS, no Bootstrap/Material/Tailwind
- **Comprehensive Pages**: Home, Features, Pricing, About, Articles, Contact, Status, Terms, Privacy

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start
# Visit http://localhost:4200

# Build for production
npm run build
# Output in dist/fetchxrates

# Run tests
npm test
```

## 📁 Project Structure

```
fetchxrates/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── features/
│   │   │   │   └── hero/              # Hero section component
│   │   │   ├── layout/
│   │   │   │   ├── navbar/            # Navigation with theme toggle
│   │   │   │   └── footer/            # Footer with legal links
│   │   │   └── shared/
│   │   │       ├── button/            # Reusable button component
│   │   │       └── badge/             # Reusable badge component
│   │   ├── pages/
│   │   │   ├── home/                  # Homepage
│   │   │   ├── features/              # Features page
│   │   │   ├── pricing/               # Pricing tiers
│   │   │   ├── about/                 # About us
│   │   │   ├── articles/              # Blog/articles
│   │   │   ├── contact/               # Contact form
│   │   │   ├── status/                # System status
│   │   │   ├── terms/                 # Terms of service
│   │   │   └── privacy/               # Privacy policy
│   │   ├── services/
│   │   │   └── theme.service.ts       # Theme management
│   │   ├── app.component.ts           # Root component
│   │   ├── app.config.ts              # App configuration
│   │   └── app.routes.ts              # Route definitions
│   ├── styles.scss                    # Global styles & CSS variables
│   ├── index.html                     # HTML entry point
│   └── main.ts                        # TypeScript entry point
├── angular.json                       # Angular CLI configuration
├── package.json                       # Dependencies
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # This file
```

## 🎨 Theme System

The application uses CSS custom properties for theming:

```scss
:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  --accent: #6366f1;
  // ... more variables
}

[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
  // ... dark overrides
}
```

Theme is managed by `ThemeService` with:
- Signal-based reactive state
- localStorage persistence
- System preference detection
- Smooth transitions

## 🧩 Components

### Shared Components

**Button** (`app-button`)
- Variants: primary, secondary, outline, ghost
- Sizes: sm, md, lg
- Usage: `<app-button [variant]="'primary'" [size]="'lg'">Click</app-button>`

**Badge** (`app-badge`)
- Variants: success, warning, info, danger, default
- Sizes: sm, md, lg
- Usage: `<app-badge [variant]="'success'">Active</app-badge>`

### Layout Components

**Navbar** - Responsive navigation with mobile menu
**Footer** - Site links and legal disclaimers

### Feature Components

**Hero** - Homepage hero section with CTA buttons

## 📄 Page Components

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with features, pricing, FAQ |
| Features | `/features` | Detailed feature descriptions |
| Pricing | `/pricing` | Pricing tiers and FAQ |
| About | `/about` | Company information and values |
| Articles | `/articles` | Blog/resources (coming soon) |
| Contact | `/contact` | Contact form |
| Status | `/status` | System status dashboard |
| Terms | `/terms` | Terms of service |
| Privacy | `/privacy` | Privacy policy |

## 🎯 Key Technologies

- **Angular**: 20.3.0
- **TypeScript**: 5.8.3
- **RxJS**: 7.8.0
- **Zone.js**: 0.15.0
- **SCSS**: CSS preprocessor
- **CSS Variables**: For theming
- **Signals**: For reactive state

## 📱 Responsive Design

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 968px
- Desktop: 968px - 1200px
- Wide: > 1200px

## ⚡ Performance

- Initial bundle: ~83KB (gzipped)
- Lazy-loaded routes for optimal loading
- Sub-100ms response times target
- Optimized for Core Web Vitals

## 🔧 Configuration

### Angular Configuration (`angular.json`)
- Strict mode enabled
- Budget warnings at 500KB, errors at 1MB
- Source maps for development
- Optimization enabled for production

### TypeScript Configuration
- Strict type checking
- ES2022 target
- Standalone components default

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Development Guidelines

1. **Components**: Use standalone components
2. **State**: Use signals for reactive state
3. **Styling**: Use SCSS with BEM-like naming
4. **Types**: Strict TypeScript, no `any`
5. **Routes**: Lazy load all page routes
6. **Accessibility**: Semantic HTML, ARIA labels

## 🚨 Legal Disclaimers

⚠️ **Important**: This service is **not affiliated** with the Reserve Bank of Australia (RBA). Exchange rates are sourced from publicly available RBA data.

📊 **Not Financial Advice**: This service provides data for informational purposes only.

## 📦 Build Output

Production build outputs to `dist/fetchxrates/`:
```
dist/fetchxrates/
├── browser/
│   ├── index.html
│   ├── main-[hash].js
│   ├── polyfills-[hash].js
│   ├── styles-[hash].css
│   └── chunk-*.js (lazy-loaded routes)
└── server/ (if SSR enabled)
```

## 🔍 Code Quality

```bash
# Lint TypeScript
npm run lint

# Format code (if configured)
npm run format

# Type check
npm run type-check
```

## 📈 Future Enhancements

- [ ] Add blog/articles functionality
- [ ] Implement actual API integration for status page
- [ ] Add contact form backend
- [ ] Implement user authentication
- [ ] Add documentation pages
- [ ] Enable Server-Side Rendering (SSR)
- [ ] Add analytics integration
- [ ] Implement A/B testing

## 🤝 Contributing

1. Follow Angular style guide
2. Use conventional commits
3. Write unit tests for new features
4. Ensure responsive design works
5. Test in all supported browsers

## 📄 License

Copyright © 2024 fetchxrates. All rights reserved.

## 📧 Contact

- Support: support@fetchxrates.com.au
- Privacy: privacy@fetchxrates.com.au

---

**Built with ❤️ using Angular 20**
