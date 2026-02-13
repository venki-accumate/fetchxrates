# fetchxrates - Deployment Guide

## Production Build

### Build the Application

```bash
# Install dependencies (if not already done)
npm install

# Create production build
npm run build

# Output will be in dist/fetchxrates/browser/
```

### Build Output

```
dist/fetchxrates/browser/
├── index.html                    # Entry HTML file
├── main-[hash].js               # Main application bundle
├── polyfills-[hash].js          # Browser polyfills
├── styles-[hash].css            # Global styles
└── chunk-*.js                   # Lazy-loaded route chunks
```

## Deployment Options

### 1. AWS S3 + CloudFront (Recommended)

**Step 1: Create S3 Bucket**
```bash
aws s3 mb s3://fetchxrates-prod
aws s3 website s3://fetchxrates-prod --index-document index.html --error-document index.html
```

**Step 2: Upload Build Files**
```bash
cd dist/fetchxrates/browser
aws s3 sync . s3://fetchxrates-prod --delete
```

**Step 3: Set Cache Headers**
```bash
# Cache static assets for 1 year
aws s3 cp s3://fetchxrates-prod s3://fetchxrates-prod \
  --recursive \
  --exclude "index.html" \
  --metadata-directive REPLACE \
  --cache-control "public, max-age=31536000, immutable"

# index.html should not be cached
aws s3 cp s3://fetchxrates-prod/index.html s3://fetchxrates-prod/index.html \
  --metadata-directive REPLACE \
  --cache-control "public, max-age=0, must-revalidate"
```

**Step 4: Create CloudFront Distribution**
- Origin: S3 bucket
- Default Root Object: index.html
- Custom Error Pages: 404 → /index.html (for client-side routing)
- SSL Certificate: Use ACM certificate
- Price Class: Use All Edge Locations

**Step 5: Configure DNS**
- Add CNAME record pointing to CloudFront distribution
- Example: fetchxrates.com.au → d1234.cloudfront.net

### 2. Netlify

**Step 1: Create `netlify.toml`**
```toml
[build]
  command = "npm run build"
  publish = "dist/fetchxrates/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/index.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

**Step 2: Deploy**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

### 3. Vercel

**Step 1: Create `vercel.json`**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*).js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*).css",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/index.html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

**Step 2: Deploy**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 4. GitHub Pages

**Step 1: Update `angular.json`**
```json
{
  "projects": {
    "fetchxrates": {
      "architect": {
        "build": {
          "options": {
            "baseHref": "/fetchxrates/"
          }
        }
      }
    }
  }
}
```

**Step 2: Build and Deploy**
```bash
# Build
npm run build

# Deploy to gh-pages branch
npx angular-cli-ghpages --dir=dist/fetchxrates/browser
```

### 5. Firebase Hosting

**Step 1: Create `firebase.json`**
```json
{
  "hosting": {
    "public": "dist/fetchxrates/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "index.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=0, must-revalidate"
          }
        ]
      }
    ]
  }
}
```

**Step 2: Deploy**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize project
firebase init hosting

# Build and deploy
npm run build
firebase deploy --only hosting
```

## Environment Configuration

### Production Environment Variables

Create `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.fetchxrates.com.au/v1',
  analyticsId: 'UA-XXXXXXXXX-X',
  stripePublicKey: 'pk_live_...'
};
```

Update `angular.json` to use production config:

```json
{
  "configurations": {
    "production": {
      "fileReplacements": [
        {
          "replace": "src/environments/environment.ts",
          "with": "src/environments/environment.prod.ts"
        }
      ]
    }
  }
}
```

## Pre-Deployment Checklist

### Build Optimization

- [ ] Run production build: `npm run build`
- [ ] Check bundle sizes (should be under budget)
- [ ] Verify no console errors or warnings
- [ ] Test all routes work correctly
- [ ] Verify lazy loading works

### SEO & Meta Tags

- [ ] Update meta description in `index.html`
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Create `robots.txt`
- [ ] Create `sitemap.xml`
- [ ] Verify canonical URLs

### Performance

- [ ] Enable production mode
- [ ] Enable AOT compilation (default in prod)
- [ ] Verify caching headers
- [ ] Optimize images (WebP format)
- [ ] Enable GZIP compression
- [ ] Test Core Web Vitals

### Security

- [ ] Use HTTPS only
- [ ] Set security headers (CSP, HSTS, X-Frame-Options)
- [ ] Remove development tools from production
- [ ] Sanitize user inputs
- [ ] Enable CORS properly

### Analytics & Monitoring

- [ ] Add Google Analytics or alternative
- [ ] Add error tracking (Sentry, Rollbar)
- [ ] Set up uptime monitoring
- [ ] Configure alerts

### Legal & Compliance

- [ ] Verify Terms of Service is up to date
- [ ] Verify Privacy Policy is up to date
- [ ] Add cookie consent banner (if needed)
- [ ] GDPR compliance (if applicable)

## Post-Deployment

### 1. Verify Deployment

```bash
# Check if site is accessible
curl -I https://fetchxrates.com.au

# Verify all routes work
curl https://fetchxrates.com.au/features
curl https://fetchxrates.com.au/pricing
```

### 2. Test Core Functionality

- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Theme toggle works
- [ ] Mobile menu works
- [ ] All routes are accessible
- [ ] Contact form works
- [ ] Links open correctly

### 3. Performance Testing

```bash
# Run Lighthouse audit
npx lighthouse https://fetchxrates.com.au --view

# Check Core Web Vitals
# Use PageSpeed Insights: https://pagespeed.web.dev/
```

### 4. Browser Testing

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@v0.5.1
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: 'ap-southeast-2'
          SOURCE_DIR: 'dist/fetchxrates/browser'
      
      - name: Invalidate CloudFront
        uses: chetan/invalidate-cloudfront-action@v2
        env:
          DISTRIBUTION: ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }}
          PATHS: '/*'
          AWS_REGION: 'ap-southeast-2'
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

## Rollback Strategy

### S3 + CloudFront

```bash
# List previous versions
aws s3api list-object-versions --bucket fetchxrates-prod

# Restore previous version
aws s3api copy-object \
  --copy-source fetchxrates-prod/index.html?versionId=OLD_VERSION_ID \
  --bucket fetchxrates-prod \
  --key index.html

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id DISTRIBUTION_ID \
  --paths "/*"
```

### Netlify

```bash
# List deployments
netlify deploy list

# Rollback to previous
netlify deploy rollback --to DEPLOY_ID
```

## Monitoring

### Uptime Monitoring

Set up monitoring with:
- UptimeRobot
- Pingdom
- StatusCake

### Error Tracking

Integrate Sentry:

```typescript
import * as Sentry from "@sentry/angular";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
  tracesSampleRate: 1.0,
});
```

### Analytics

Google Analytics 4:

```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Troubleshooting

### Issue: 404 on Page Refresh

**Solution**: Configure server to redirect all routes to index.html

### Issue: Blank Page After Deploy

**Solution**: 
1. Check browser console for errors
2. Verify base href in index.html
3. Check file paths are correct

### Issue: Slow Initial Load

**Solution**:
1. Enable GZIP compression
2. Use CDN for static assets
3. Optimize bundle size
4. Enable lazy loading

### Issue: Theme Not Persisting

**Solution**: Check localStorage is enabled and accessible

---

**Last Updated**: 2024-01-01  
**Version**: 1.0.0
