# fetchxrates - Design System Documentation

## Color System

### CSS Custom Properties

All colors are defined as CSS custom properties in `src/styles.scss`:

#### Light Theme (default)
```scss
--bg-primary: #ffffff           // Main background
--bg-secondary: #f8fafc         // Secondary background
--bg-card: #ffffff              // Card backgrounds
--text-primary: #0f172a         // Main text color
--text-secondary: #475569       // Secondary text
--text-muted: #94a3b8           // Muted/disabled text
--accent: #6366f1               // Brand accent color
--accent-hover: #4f46e5         // Accent hover state
--border: #e2e8f0               // Border colors
--shadow: rgba(0, 0, 0, 0.1)    // Box shadows
--success: #10b981              // Success states
--warning: #f59e0b              // Warning states
--danger: #ef4444               // Error states
--info: #3b82f6                 // Info states
```

#### Dark Theme
```scss
--bg-primary: #0f172a
--bg-secondary: #1e293b
--bg-card: #1e293b
--text-primary: #f1f5f9
--text-secondary: #cbd5e1
--text-muted: #64748b
// Colors remain vibrant in dark mode
```

### Using Colors

```scss
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border);
}
```

## Typography

### Font Family
- Primary: 'Inter', system-ui, sans-serif
- Import from Google Fonts in index.html

### Font Sizes
```scss
// Headings
h1: 3rem (48px)
h2: 2.5rem (40px)
h3: 2rem (32px)
h4: 1.5rem (24px)
h5: 1.25rem (20px)
h6: 1rem (16px)

// Body
body: 1rem (16px)
small: 0.875rem (14px)
```

### Font Weights
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Spacing Scale

Use consistent spacing throughout:
```scss
0.25rem = 4px   // xs
0.5rem  = 8px   // sm
0.75rem = 12px  
1rem    = 16px  // md (base)
1.5rem  = 24px  // lg
2rem    = 32px  // xl
3rem    = 48px  // 2xl
4rem    = 64px  // 3xl
5rem    = 80px  // 4xl
```

## Components

### Button Component

**Import:**
```typescript
import { ButtonComponent } from './components/shared/button/button.component';
```

**Usage:**
```html
<!-- Primary button -->
<app-button [variant]="'primary'" [size]="'lg'">
  Get Started
</app-button>

<!-- Secondary button -->
<app-button [variant]="'secondary'" [size]="'md'">
  Learn More
</app-button>

<!-- Outline button -->
<app-button [variant]="'outline'">
  Cancel
</app-button>

<!-- Ghost button -->
<app-button [variant]="'ghost'" [size]="'sm'">
  <svg>...</svg>
</app-button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `type`: 'button' | 'submit' | 'reset' (default: 'button')
- `disabled`: boolean (default: false)

**Variants:**
- **Primary**: Blue accent background, white text (main actions)
- **Secondary**: Gray background, dark text (secondary actions)
- **Outline**: Transparent with border (tertiary actions)
- **Ghost**: Transparent, no border (minimal actions)

### Badge Component

**Import:**
```typescript
import { BadgeComponent } from './components/shared/badge/badge.component';
```

**Usage:**
```html
<!-- Success badge -->
<app-badge [variant]="'success'">Active</app-badge>

<!-- Warning badge -->
<app-badge [variant]="'warning'">Pending</app-badge>

<!-- Info badge -->
<app-badge [variant]="'info'">Beta</app-badge>

<!-- Danger badge -->
<app-badge [variant]="'danger'">Error</app-badge>

<!-- Default badge -->
<app-badge>New</app-badge>

<!-- Large badge -->
<app-badge [variant]="'success'" [size]="'lg'">Premium</app-badge>
```

**Props:**
- `variant`: 'success' | 'warning' | 'info' | 'danger' | 'default' (default: 'default')
- `size`: 'sm' | 'md' | 'lg' (default: 'sm')

**Styles:**
- Pill-shaped (border-radius: 9999px)
- Semi-transparent backgrounds
- Color-coded for different states

### Hero Component

**Import:**
```typescript
import { HeroComponent } from './components/features/hero/hero.component';
```

**Usage:**
```html
<app-hero></app-hero>
```

Displays:
- Main headline
- Subtitle
- Call-to-action buttons
- Note about free tier

### Navbar Component

**Import:**
```typescript
import { NavbarComponent } from './components/layout/navbar/navbar.component';
```

**Usage:**
```html
<app-navbar></app-navbar>
```

Features:
- Logo/brand
- Navigation links
- Theme toggle
- Mobile hamburger menu
- Status badge
- Responsive design

### Footer Component

**Import:**
```typescript
import { FooterComponent } from './components/layout/footer/footer.component';
```

**Usage:**
```html
<app-footer></app-footer>
```

Sections:
- Product links
- Company links
- Legal links
- RBA disclaimer
- Copyright notice

## Layout Patterns

### Container
```scss
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

### Section
```scss
.section {
  padding: 4rem 0;
  
  &:nth-child(even) {
    background-color: var(--bg-secondary);
  }
}
```

### Card
```scss
.card {
  padding: 2rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--shadow);
  }
}
```

### Grid Layouts
```scss
// Features grid (3 columns)
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

// Pricing grid (5 columns)
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
}
```

## Responsive Breakpoints

```scss
// Mobile first approach
@media (max-width: 640px) {
  // Mobile styles
}

@media (max-width: 968px) {
  // Tablet styles
}

@media (max-width: 1200px) {
  // Desktop styles
}
```

## Utility Classes

Defined in `src/styles.scss`:

```scss
// Text alignment
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

// Display
.flex { display: flex; }
.grid { display: grid; }
.hidden { display: none; }

// Spacing
.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-4 { margin-top: 1rem; }
.mb-1 { margin-bottom: 0.25rem; }
// ... etc
```

## Animation Guidelines

### Transitions
```scss
// Standard transition
transition: all 0.3s ease;

// Specific properties
transition: transform 0.3s ease, box-shadow 0.3s ease;
```

### Hover Effects
```scss
.interactive-element {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--shadow);
  }
}
```

## Accessibility

### Focus States
```scss
button:focus,
input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<button>` for actions, `<a>` for navigation
- Include alt text for images
- Use ARIA labels when needed

## Theme Service

**Import:**
```typescript
import { ThemeService } from './services/theme.service';
```

**Usage in Component:**
```typescript
export class MyComponent {
  themeService = inject(ThemeService);
  
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
```

**Usage in Template:**
```html
<button (click)="themeService.toggleTheme()">
  @if (themeService.isDark()) {
    <svg><!-- Sun icon --></svg>
  } @else {
    <svg><!-- Moon icon --></svg>
  }
</button>
```

## Code Style Guidelines

### TypeScript
```typescript
// Use explicit types
export interface User {
  id: string;
  name: string;
  email: string;
}

// Use readonly for immutable data
readonly users: User[] = [];

// Use signals for reactive state
isDark = signal(false);

// Use arrow functions
const processData = (data: Data[]): Result[] => {
  return data.map(item => transform(item));
};
```

### SCSS
```scss
// BEM-like naming
.card {
  &__header {
    // Card header styles
  }
  
  &__body {
    // Card body styles
  }
  
  &--featured {
    // Featured card modifier
  }
}

// Nesting max 3 levels
.parent {
  .child {
    .grandchild {
      // Avoid going deeper
    }
  }
}
```

### HTML
```html
<!-- Use Angular control flow -->
@if (condition) {
  <div>Content</div>
}

@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}

<!-- Avoid inline styles -->
<!-- Use CSS classes instead -->
```

## Performance Tips

1. **Lazy load routes**: All page components are lazy-loaded
2. **Use trackBy**: Always provide track function in @for loops
3. **Optimize images**: Use WebP format, proper sizing
4. **Minimize bundle**: Keep component SCSS < 4KB
5. **Code splitting**: Separate large features into modules
6. **Tree shaking**: Import only what you need

## Common Patterns

### Page Template
```html
<div class="page-name">
  <section class="hero">
    <div class="container">
      <h1>Page Title</h1>
      <p class="subtitle">Description</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <!-- Main content -->
    </div>
  </section>

  <section class="section cta">
    <div class="container">
      <!-- Call to action -->
    </div>
  </section>
</div>
```

### Card Grid
```html
<div class="cards-grid">
  @for (item of items; track item.id) {
    <div class="card">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  }
</div>
```

### Form Pattern
```html
<form (ngSubmit)="onSubmit()" #form="ngForm">
  <div class="form-group">
    <label for="email">Email</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      [(ngModel)]="formData.email" 
      required>
  </div>
  
  <app-button 
    type="submit" 
    [disabled]="!form.valid">
    Submit
  </app-button>
</form>
```

---

**Last Updated**: 2024-01-01  
**Version**: 1.0.0
