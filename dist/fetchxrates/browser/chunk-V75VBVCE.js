import {
  PricingComponent
} from "./chunk-5DPYN43D.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-EG2W3VGR.js";
import {
  ButtonComponent
} from "./chunk-EO4F4QDA.js";
import "./chunk-RADNHJCR.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-AHBVTDPW.js";

// src/app/components/features/hero/hero.component.ts
var HeroComponent = class _HeroComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  navigateToSignup() {
    window.location.href = "https://app.fetchxrates.com/signup";
  }
  navigateToFeatures() {
    this.router.navigate(["/features"]);
  }
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], decls: 32, vars: 0, consts: [[1, "hero"], [1, "container"], [1, "hero-layout"], [1, "hero-content"], [1, "hero-title"], [1, "highlight"], [1, "hero-subtitle"], [1, "hero-supporting"], [1, "hero-actions"], ["variant", "primary", "size", "lg", 3, "click"], ["variant", "outline", "size", "lg", 3, "click"], [1, "hero-note"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"], [1, "hero-visual"], [1, "visual-placeholder"], [1, "placeholder-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"], ["d", "M12 7v0m-3 3h1.5a1.5 1.5 0 0 1 0 3H12v0m0 0v3"], [1, "placeholder-text"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5, " Exchange rates, currency conversion, and spreadsheet automation \u2014 ");
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "in one platform.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, " Access historical and latest exchange rates, convert currencies at scale, or upload Excel files securely and get fully converted, audit-ready data in seconds. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, " Built for both finance teams (dashboard tier) and developers (API tier). Save hours of manual work on every report. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "app-button", 9);
      \u0275\u0275listener("click", function HeroComponent_Template_app_button_click_13_listener() {
        return ctx.navigateToSignup();
      });
      \u0275\u0275text(14, "Get Started Free");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "app-button", 10);
      \u0275\u0275listener("click", function HeroComponent_Template_app_button_click_15_listener() {
        return ctx.navigateToFeatures();
      });
      \u0275\u0275text(16, "Explore Features");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 12);
      \u0275\u0275element(19, "circle", 13)(20, "line", 14)(21, "line", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Dashboard or REST API \xB7 Transparent pricing \xB7 No hidden limits \xB7 Cancel anytime");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 16)(25, "div", 17)(26, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 19);
      \u0275\u0275element(28, "path", 20)(29, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "span", 22);
      \u0275\u0275text(31, "Product visual coming soon");
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [CommonModule, ButtonComponent], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  padding: 5rem 2rem;\n  background: var(--bg-hero);\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem;\n  }\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(74, 222, 128, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(59, 130, 246, 0.1) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.hero-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  gap: 4rem;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  margin: 0 2rem;\n}\n@media (max-width: 968px) {\n  .hero-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: 1.5rem;\n  letter-spacing: -0.02em;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n.highlight[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  color: var(--text-secondary);\n  margin-bottom: 1.25rem;\n  line-height: 1.7;\n}\n.hero-supporting[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--text-muted);\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-style: italic;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n.hero-note[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-muted);\n  font-size: 0.8125rem;\n}\n.hero-note[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--accent);\n  flex-shrink: 0;\n}\n.hero-visual[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 968px) {\n  .hero-visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.visual-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 4/3;\n  border: 2px dashed var(--border-card);\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  background: rgba(var(--accent-rgb), 0.03);\n  transition: border-color 0.3s ease;\n}\n.visual-placeholder[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n}\n.placeholder-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  opacity: 0.5;\n}\n.placeholder-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=hero.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "app-hero", standalone: true, imports: [CommonModule, ButtonComponent], template: '<section class="hero">\n  <div class="container">\n    <div class="hero-layout">\n      <div class="hero-content">\n        <h1 class="hero-title">\n          Exchange rates, currency conversion, and spreadsheet automation \u2014 <span class="highlight">in one platform.</span>\n        </h1>\n        \n        <p class="hero-subtitle">\n          Access historical and latest exchange rates, convert currencies at scale, or upload Excel files securely and get fully converted, audit-ready data in seconds.\n        </p>\n\n        <p class="hero-supporting">\n          Built for both finance teams (dashboard tier) and developers (API tier). Save hours of manual work on every report.\n        </p>\n\n        <div class="hero-actions">\n          <app-button variant="primary" size="lg" (click)="navigateToSignup()">Get Started Free</app-button>\n          <app-button variant="outline" size="lg" (click)="navigateToFeatures()">Explore Features</app-button>\n        </div>\n\n        <div class="hero-note">\n          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n            <circle cx="12" cy="12" r="10"/>\n            <line x1="12" y1="16" x2="12" y2="12"/>\n            <line x1="12" y1="8" x2="12.01" y2="8"/>\n          </svg>\n          <span>Dashboard or REST API \xB7 Transparent pricing \xB7 No hidden limits \xB7 Cancel anytime</span>\n        </div>\n      </div>\n\n      <div class="hero-visual">\n        <div class="visual-placeholder">\n          <div class="placeholder-icon">\n            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\n              <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>\n              <path d="M12 7v0m-3 3h1.5a1.5 1.5 0 0 1 0 3H12v0m0 0v3"/>\n            </svg>\n          </div>\n          <span class="placeholder-text">Product visual coming soon</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', styles: ['/* src/app/components/features/hero/hero.component.scss */\n.hero {\n  padding: 5rem 2rem;\n  background: var(--bg-hero);\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .hero {\n    padding: 3rem 1.5rem;\n  }\n}\n.hero::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(74, 222, 128, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(59, 130, 246, 0.1) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.hero-layout {\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  gap: 4rem;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  margin: 0 2rem;\n}\n@media (max-width: 968px) {\n  .hero-layout {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.hero-content {\n  text-align: left;\n}\n.hero-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: 1.5rem;\n  letter-spacing: -0.02em;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .hero-title {\n    font-size: 1.75rem;\n  }\n}\n.highlight {\n  color: var(--accent);\n}\n.hero-subtitle {\n  font-size: 1.0625rem;\n  color: var(--text-secondary);\n  margin-bottom: 1.25rem;\n  line-height: 1.7;\n}\n.hero-supporting {\n  font-size: 0.9375rem;\n  color: var(--text-muted);\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-style: italic;\n}\n.hero-actions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n.hero-note {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-muted);\n  font-size: 0.8125rem;\n}\n.hero-note svg {\n  color: var(--accent);\n  flex-shrink: 0;\n}\n.hero-visual {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 968px) {\n  .hero-visual {\n    display: none;\n  }\n}\n.visual-placeholder {\n  width: 100%;\n  aspect-ratio: 4/3;\n  border: 2px dashed var(--border-card);\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  background: rgba(var(--accent-rgb), 0.03);\n  transition: border-color 0.3s ease;\n}\n.visual-placeholder:hover {\n  border-color: var(--accent);\n}\n.placeholder-icon {\n  color: var(--text-muted);\n  opacity: 0.5;\n}\n.placeholder-text {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=hero.component.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/components/features/hero/hero.component.ts", lineNumber: 13 });
})();

// src/app/pages/home/home.component.ts
var HomeComponent = class _HomeComponent {
  selectedCodeTab = "curl";
  codeExamples = {
    curl: `curl -X GET "https://api.fetchxrates.com/v1/latest" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
    javascript: `const response = await fetch('https://api.fetchxrates.com/v1/latest', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});
const data = await response.json();
console.log(data.rates);`,
    python: `import requests

response = requests.get(
  'https://api.fetchxrates.com/v1/latest',
  headers={'Authorization': 'Bearer YOUR_API_KEY'}
)
data = response.json()
print(data['rates'])`,
    php: `<?php
$ch = curl_init('https://api.fetchxrates.com/v1/latest');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  'Authorization: Bearer YOUR_API_KEY'
]);
$response = curl_exec($ch);
$data = json_decode($response, true);
echo $data['rates'];`
  };
  selectCodeTab(tab) {
    this.selectedCodeTab = tab;
  }
  copyCode() {
    const code = this.codeExamples[this.selectedCodeTab];
    navigator.clipboard.writeText(code);
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 89, vars: 10, consts: [[1, "features-overview", "section"], [1, "container"], [1, "section-header", "text-center"], [1, "badge"], [1, "features-preview"], [1, "tier-preview"], [1, "tier-header"], [1, "tier-badge"], [1, "tier-features"], [1, "feature-item"], [1, "material-icons"], [1, "tier-badge", "accent"], [1, "cta-center"], ["routerLink", "/features", 1, "btn-primary"], [1, "code-example", "section"], [1, "code-wrapper"], [1, "code-tabs"], [3, "click"], [1, "copy-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], [1, "code-content"], [3, "embedded"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-hero");
      \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "span", 3);
      \u0275\u0275text(5, "Core features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2");
      \u0275\u0275text(7, "Everything You Need for FX Data Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Dashboard tools for finance teams and powerful API for developers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "div", 5)(12, "div", 6)(13, "span", 7);
      \u0275\u0275text(14, "Dashboard Tier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h3");
      \u0275\u0275text(16, "Built for Finance Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Powerful FX tools for spreadsheets \u2014 no formulas, no coding required");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8)(20, "div", 9)(21, "span", 10);
      \u0275\u0275text(22, "file_download");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Download FX rates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 9)(26, "span", 10);
      \u0275\u0275text(27, "table_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Spreadsheet currency conversion");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 9)(31, "span", 10);
      \u0275\u0275text(32, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "Historical date range export");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 5)(36, "div", 6)(37, "span", 11);
      \u0275\u0275text(38, "API Tier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "h3");
      \u0275\u0275text(40, "Developer-First API");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "Fast, reliable FX data for your applications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 8)(44, "div", 9)(45, "span", 10);
      \u0275\u0275text(46, "flash_on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "Real-time FX rates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 9)(50, "span", 10);
      \u0275\u0275text(51, "trending_up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "Historical data access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 9)(55, "span", 10);
      \u0275\u0275text(56, "account_balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Multi-currency conversion");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(59, "div", 12)(60, "a", 13);
      \u0275\u0275text(61, "View All Features");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "section", 14)(63, "div", 1)(64, "div", 2)(65, "h2");
      \u0275\u0275text(66, "Simple Integration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p");
      \u0275\u0275text(68, "Get started with just a few lines of code");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 15)(70, "div", 16)(71, "button", 17);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_71_listener() {
        return ctx.selectCodeTab("curl");
      });
      \u0275\u0275text(72, " cURL ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 17);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_73_listener() {
        return ctx.selectCodeTab("javascript");
      });
      \u0275\u0275text(74, " JavaScript ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 17);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_75_listener() {
        return ctx.selectCodeTab("python");
      });
      \u0275\u0275text(76, " Python ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "button", 17);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_77_listener() {
        return ctx.selectCodeTab("php");
      });
      \u0275\u0275text(78, " PHP ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "button", 18);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_79_listener() {
        return ctx.copyCode();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(80, "svg", 19);
      \u0275\u0275element(81, "rect", 20)(82, "path", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, " Copy ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(84, "div", 22)(85, "pre")(86, "code");
      \u0275\u0275text(87);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(88, "app-pricing", 23);
    }
    if (rf & 2) {
      \u0275\u0275advance(71);
      \u0275\u0275classProp("active", ctx.selectedCodeTab === "curl");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedCodeTab === "javascript");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedCodeTab === "python");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedCodeTab === "php");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.codeExamples[ctx.selectedCodeTab]);
      \u0275\u0275advance();
      \u0275\u0275property("embedded", true);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, HeroComponent, PricingComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  padding: 5rem 2rem;\n}\n@media (max-width: 768px) {\n  .section[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem;\n  }\n}\n.section.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n}\n.features-overview[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 640px;\n  margin: 0 auto 3rem;\n}\n.section-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.375rem 1rem;\n  background: rgba(var(--accent-rgb), 0.1);\n  color: var(--accent);\n  border: 1px solid rgba(var(--accent-rgb), 0.2);\n  border-radius: 2rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  letter-spacing: 0.02em;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 768px) {\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  color: var(--text-secondary);\n}\n@media (max-width: 768px) {\n  .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.938rem;\n  }\n}\n.features-preview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 2.5rem;\n}\n@media (max-width: 768px) {\n  .features-preview[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.25rem;\n  }\n}\n.tier-preview[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border-card);\n  border-radius: 1rem;\n  transition: all 0.3s ease;\n}\n@media (max-width: 768px) {\n  .tier-preview[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.tier-preview[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px var(--shadow);\n  border-color: var(--accent);\n}\n.tier-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.375rem 0.875rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 1.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n}\n.tier-header[_ngcontent-%COMP%]   .tier-badge.accent[_ngcontent-%COMP%] {\n  background: rgba(var(--accent-rgb), 0.1);\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.tier-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .tier-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n}\n.tier-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.6;\n  font-size: 0.938rem;\n}\n@media (max-width: 768px) {\n  .tier-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n.tier-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.625rem 0.75rem;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 0.5rem;\n  transition: all 0.2s ease;\n}\n.feature-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.feature-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--text-primary);\n  font-weight: 500;\n  font-size: 0.938rem;\n}\n.cta-center[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2.5rem;\n}\n.cta-center[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.875rem 1.75rem;\n  background: var(--accent);\n  color: #000;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.cta-center[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.3);\n}\n.code-example[_ngcontent-%COMP%] {\n  background-color: var(--bg-primary);\n}\n.code-wrapper[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  background-color: var(--code-bg);\n  border: 1px solid var(--border-card);\n  border-radius: 1rem;\n  overflow: hidden;\n}\n.code-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.875rem 1rem 0;\n  background-color: var(--bg-secondary);\n  border-bottom: 1px solid var(--border);\n  position: relative;\n}\n.code-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: transparent;\n  color: var(--text-secondary);\n  border: none;\n  border-radius: 0.5rem 0.5rem 0 0;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.code-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: var(--code-bg);\n  color: var(--accent);\n}\n.code-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--text-primary);\n  background-color: var(--card-hover);\n}\n.copy-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.copy-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.code-content[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  overflow-x: auto;\n}\n.code-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.code-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-family: "Courier New", monospace;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterModule, HeroComponent, PricingComponent], template: `<app-hero></app-hero>

<!-- Features Overview - Links to Features Page -->
<section class="features-overview section">
  <div class="container">
    <div class="section-header text-center">
      <span class="badge">Core features</span>
      <h2>Everything You Need for FX Data Management</h2>
      <p>Dashboard tools for finance teams and powerful API for developers</p>
    </div>
    
    <div class="features-preview">
      <!-- Dashboard Tier Preview -->
      <div class="tier-preview">
        <div class="tier-header">
          <span class="tier-badge">Dashboard Tier</span>
          <h3>Built for Finance Teams</h3>
          <p>Powerful FX tools for spreadsheets \u2014 no formulas, no coding required</p>
        </div>
        
        <div class="tier-features">
          <div class="feature-item">
            <span class="material-icons">file_download</span>
            <span>Download FX rates</span>
          </div>
          <div class="feature-item">
            <span class="material-icons">table_chart</span>
            <span>Spreadsheet currency conversion</span>
          </div>
          <div class="feature-item">
            <span class="material-icons">calendar_today</span>
            <span>Historical date range export</span>
          </div>
        </div>
      </div>

      <!-- API Tier Preview -->
      <div class="tier-preview">
        <div class="tier-header">
          <span class="tier-badge accent">API Tier</span>
          <h3>Developer-First API</h3>
          <p>Fast, reliable FX data for your applications</p>
        </div>
        
        <div class="tier-features">
          <div class="feature-item">
            <span class="material-icons">flash_on</span>
            <span>Real-time FX rates</span>
          </div>
          <div class="feature-item">
            <span class="material-icons">trending_up</span>
            <span>Historical data access</span>
          </div>
          <div class="feature-item">
            <span class="material-icons">account_balance</span>
            <span>Multi-currency conversion</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="cta-center">
      <a routerLink="/features" class="btn-primary">View All Features</a>
    </div>
  </div>
</section>

<!-- Code Example -->
<section class="code-example section">
  <div class="container">
    <div class="section-header text-center">
      <h2>Simple Integration</h2>
      <p>Get started with just a few lines of code</p>
    </div>
    
    <div class="code-wrapper">
      <div class="code-tabs">
        <button 
          [class.active]="selectedCodeTab === 'curl'"
          (click)="selectCodeTab('curl')">
          cURL
        </button>
        <button 
          [class.active]="selectedCodeTab === 'javascript'"
          (click)="selectCodeTab('javascript')">
          JavaScript
        </button>
        <button 
          [class.active]="selectedCodeTab === 'python'"
          (click)="selectCodeTab('python')">
          Python
        </button>
        <button 
          [class.active]="selectedCodeTab === 'php'"
          (click)="selectCodeTab('php')">
          PHP
        </button>
        
        <button class="copy-btn" (click)="copyCode()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copy
        </button>
      </div>
      
      <div class="code-content">
        <pre><code>{{ codeExamples[selectedCodeTab] }}</code></pre>
      </div>
    </div>
  </div>
</section>

<!-- Pricing -->
<app-pricing [embedded]="true"></app-pricing>
`, styles: ['/* src/app/pages/home/home.component.scss */\n.section {\n  padding: 5rem 2rem;\n}\n@media (max-width: 768px) {\n  .section {\n    padding: 3rem 1.5rem;\n  }\n}\n.section.bg-secondary {\n  background-color: var(--bg-secondary);\n}\n.features-overview {\n  background-color: var(--bg-secondary);\n}\n.section-header {\n  text-align: center;\n  max-width: 640px;\n  margin: 0 auto 3rem;\n}\n.section-header .badge {\n  display: inline-block;\n  padding: 0.375rem 1rem;\n  background: rgba(var(--accent-rgb), 0.1);\n  color: var(--accent);\n  border: 1px solid rgba(var(--accent-rgb), 0.2);\n  border-radius: 2rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  letter-spacing: 0.02em;\n}\n.section-header h2 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 768px) {\n  .section-header h2 {\n    font-size: 1.5rem;\n  }\n}\n.section-header p {\n  font-size: 1.0625rem;\n  color: var(--text-secondary);\n}\n@media (max-width: 768px) {\n  .section-header p {\n    font-size: 0.938rem;\n  }\n}\n.features-preview {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 2.5rem;\n}\n@media (max-width: 768px) {\n  .features-preview {\n    grid-template-columns: 1fr;\n    gap: 1.25rem;\n  }\n}\n.tier-preview {\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border-card);\n  border-radius: 1rem;\n  transition: all 0.3s ease;\n}\n@media (max-width: 768px) {\n  .tier-preview {\n    padding: 1.5rem;\n  }\n}\n.tier-preview:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px var(--shadow);\n  border-color: var(--accent);\n}\n.tier-header {\n  margin-bottom: 1.5rem;\n}\n.tier-header .tier-badge {\n  display: inline-block;\n  padding: 0.375rem 0.875rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 1.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n}\n.tier-header .tier-badge.accent {\n  background: rgba(var(--accent-rgb), 0.1);\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.tier-header h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .tier-header h3 {\n    font-size: 1.125rem;\n  }\n}\n.tier-header p {\n  color: var(--text-secondary);\n  line-height: 1.6;\n  font-size: 0.938rem;\n}\n@media (max-width: 768px) {\n  .tier-header p {\n    font-size: 0.875rem;\n  }\n}\n.tier-features {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.feature-item {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.625rem 0.75rem;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 0.5rem;\n  transition: all 0.2s ease;\n}\n.feature-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.feature-item .material-icons {\n  color: var(--accent);\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.feature-item span:last-child {\n  color: var(--text-primary);\n  font-weight: 500;\n  font-size: 0.938rem;\n}\n.cta-center {\n  text-align: center;\n  margin-top: 2.5rem;\n}\n.cta-center .btn-primary {\n  display: inline-block;\n  padding: 0.875rem 1.75rem;\n  background: var(--accent);\n  color: #000;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.cta-center .btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.3);\n}\n.code-example {\n  background-color: var(--bg-primary);\n}\n.code-wrapper {\n  max-width: 800px;\n  margin: 0 auto;\n  background-color: var(--code-bg);\n  border: 1px solid var(--border-card);\n  border-radius: 1rem;\n  overflow: hidden;\n}\n.code-tabs {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.875rem 1rem 0;\n  background-color: var(--bg-secondary);\n  border-bottom: 1px solid var(--border);\n  position: relative;\n}\n.code-tabs button {\n  padding: 0.5rem 1rem;\n  background: transparent;\n  color: var(--text-secondary);\n  border: none;\n  border-radius: 0.5rem 0.5rem 0 0;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.code-tabs button.active {\n  background-color: var(--code-bg);\n  color: var(--accent);\n}\n.code-tabs button:hover:not(.active) {\n  color: var(--text-primary);\n  background-color: var(--card-hover);\n}\n.copy-btn {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.copy-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.code-content {\n  padding: 1.25rem;\n  overflow-x: auto;\n}\n.code-content pre {\n  margin: 0;\n}\n.code-content pre code {\n  color: var(--text-primary);\n  font-family: "Courier New", monospace;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .section {\n    padding: 3rem 0;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 14 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-V75VBVCE.js.map
