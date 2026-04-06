import {
  RouterLink
} from "./chunk-EG2W3VGR.js";
import "./chunk-RADNHJCR.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-AHBVTDPW.js";

// src/app/pages/features/features.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function FeaturesComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 19)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.description);
  }
}
function FeaturesComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 19)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r2.description);
  }
}
var FeaturesComponent = class _FeaturesComponent {
  dashboardFeatures = [
    {
      icon: "file_download",
      title: "Download FX rates",
      description: "Browse and download latest or historical exchange rates in Excel or CSV."
    },
    {
      icon: "table_chart",
      title: "Spreadsheet currency conversion",
      description: "Upload Excel/CSV, map date & currency columns, convert using correct historical rates."
    },
    {
      icon: "calendar_today",
      title: "Historical accuracy",
      description: "Every conversion uses the rate for the transaction date \u2014 not today's rate."
    },
    {
      icon: "settings",
      title: "Custom rate support",
      description: "Use system rates or upload your own FX rates for internal or contractual use."
    },
    {
      icon: "person",
      title: "Built for non-technical users",
      description: "No formulas, no scripts \u2014 clean inputs, clean outputs."
    }
  ];
  apiFeatures = [
    {
      icon: "flash_on",
      title: "Fast, simple FX API",
      description: "Clean JSON, predictable responses, easy to integrate."
    },
    {
      icon: "trending_up",
      title: "Latest & historical rates",
      description: "Query by date, currency pair, or convert amounts directly."
    },
    {
      icon: "account_balance",
      title: "Trusted public data sources",
      description: "Rates sourced from Reserve Bank of Australia, European Central Bank, Federal Reserve, and Bank of England (publicly available, transparently used)."
    },
    {
      icon: "rocket_launch",
      title: "Production-ready",
      description: "Cached, stable, and designed for real systems \u2014 not demos."
    },
    {
      icon: "bar_chart",
      title: "Clear limits",
      description: "Simple request caps with no hidden throttling."
    }
  ];
  useCases = [
    {
      title: "E-commerce Platforms",
      description: "Display real-time prices in multiple currencies for international customers.",
      icon: "\u{1F6D2}"
    },
    {
      title: "Financial Applications",
      description: "Power currency converters, portfolio trackers, and financial dashboards.",
      icon: "\u{1F4B0}"
    },
    {
      title: "Travel & Tourism",
      description: "Help travelers understand costs and budget in their home currency.",
      icon: "\u2708\uFE0F"
    },
    {
      title: "Accounting Software",
      description: "Automate foreign exchange calculations for international transactions.",
      icon: "\u{1F4CB}"
    },
    {
      title: "Data Analytics",
      description: "Historical data for research, analysis, and forecasting models.",
      icon: "\u{1F4CA}"
    },
    {
      title: "Mobile Apps",
      description: "Integrate currency data into iOS, Android, and cross-platform apps.",
      icon: "\u{1F4F1}"
    }
  ];
  static \u0275fac = function FeaturesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesComponent, selectors: [["app-features"]], decls: 51, vars: 0, consts: [[1, "features-page"], [1, "container"], [1, "page-header"], [1, "badge"], [1, "subtitle"], [1, "feature-section"], [1, "feature-content"], [1, "feature-list"], [1, "tier-label"], [1, "tier-badge"], [1, "feature-item"], [1, "feature-media"], [1, "media-placeholder"], [1, "material-icons"], [1, "tier-badge", "accent"], [1, "cta-section"], [1, "cta-buttons"], ["routerLink", "/pricing", 1, "btn-primary"], ["routerLink", "/", 1, "btn-secondary"], [1, "feature-icon"], [1, "feature-text"]], template: function FeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Core features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "FX Data & Tools for Modern Finance Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, " Powerful exchange rate data with Dashboard tools for spreadsheets and developer-friendly API. Trusted public sources. Historical accuracy. Built for compliance. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "span", 9);
      \u0275\u0275text(14, "Dashboard Tier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h2");
      \u0275\u0275text(16, "Built for Finance Teams");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(17, FeaturesComponent_For_18_Template, 9, 3, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 11)(20, "div", 12)(21, "span", 13);
      \u0275\u0275text(22, "play_circle_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p");
      \u0275\u0275text(24, "Dashboard Demo");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(25, "div", 5)(26, "div", 6)(27, "div", 7)(28, "div", 8)(29, "span", 14);
      \u0275\u0275text(30, "API Tier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "h2");
      \u0275\u0275text(32, "Developer-First API");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(33, FeaturesComponent_For_34_Template, 9, 3, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 11)(36, "div", 12)(37, "span", 13);
      \u0275\u0275text(38, "code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, "API Demo");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(41, "div", 15)(42, "h2");
      \u0275\u0275text(43, "Ready to get started?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, "Choose the plan that fits your needs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 16)(47, "a", 17);
      \u0275\u0275text(48, "View Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "a", 18);
      \u0275\u0275text(50, "Learn More");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.dashboardFeatures);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.apiFeatures);
    }
  }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.features-page[_ngcontent-%COMP%] {\n  padding: 4rem 2rem;\n}\n@media (max-width: 768px) {\n  .features-page[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem;\n  }\n}\n.features-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin: 0 3rem;\n}\n.features-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n@media (max-width: 768px) {\n  .features-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n    margin-bottom: 3rem;\n  }\n}\n.features-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  background: rgba(var(--accent-rgb), 0.1);\n  color: var(--accent);\n  border-radius: 2rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n}\n.features-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 600;\n  margin: 0 0 1rem;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n@media (max-width: 768px) {\n  .features-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.features-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  margin: 0 3rem;\n  line-height: 1.7;\n}\n@media (max-width: 768px) {\n  .features-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 0.938rem;\n  }\n}\n.features-page[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n@media (max-width: 768px) {\n  .features-page[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%] {\n    margin-bottom: 3rem;\n  }\n}\n.features-page[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 3rem;\n}\n@media (max-width: 768px) {\n  .features-page[_ngcontent-%COMP%]   .feature-section[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 2rem;\n  }\n}\n.features-page[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3rem;\n  align-items: flex-start;\n}\n@media (max-width: 968px) {\n  .features-page[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2.5rem;\n  }\n}\n.features-page[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.features-page[_ngcontent-%COMP%]   .tier-label[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.features-page[_ngcontent-%COMP%]   .tier-label[_ngcontent-%COMP%]   .tier-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.375rem 0.875rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 1.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n}\n.features-page[_ngcontent-%COMP%]   .tier-label[_ngcontent-%COMP%]   .tier-badge.accent[_ngcontent-%COMP%] {\n  background: rgba(var(--accent-rgb), 0.1);\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.features-page[_ngcontent-%COMP%]   .tier-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .features-page[_ngcontent-%COMP%]   .tier-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n.features-page[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  padding: 1.5rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.features-page[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.features-page[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(var(--accent-rgb), 0.1);\n  border-radius: 12px;\n}\n.features-page[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--accent);\n}\n.features-page[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.features-page[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n  color: var(--text-primary);\n}\n.features-page[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.938rem;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.6;\n}\n.features-page[_ngcontent-%COMP%]   .feature-media[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  position: sticky;\n  top: 6rem;\n}\n@media (max-width: 968px) {\n  .features-page[_ngcontent-%COMP%]   .feature-media[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n.features-page[_ngcontent-%COMP%]   .feature-media[_ngcontent-%COMP%]   .media-placeholder[_ngcontent-%COMP%] {\n  aspect-ratio: 16/10;\n  background: rgba(255, 255, 255, 0.05);\n  border: 2px dashed rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  transition: all 0.3s ease;\n}\n.features-page[_ngcontent-%COMP%]   .feature-media[_ngcontent-%COMP%]   .media-placeholder[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(var(--accent-rgb), 0.3);\n}\n.features-page[_ngcontent-%COMP%]   .feature-media[_ngcontent-%COMP%]   .media-placeholder[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.features-page[_ngcontent-%COMP%]   .feature-media[_ngcontent-%COMP%]   .media-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n}\n.features-page[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 16px;\n  margin-top: 4rem;\n}\n.features-page[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .features-page[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.375rem;\n  }\n}\n.features-page[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  margin: 0 0 2rem;\n}\n.features-page[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.features-page[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n}\n.features-page[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #000;\n}\n.features-page[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.3);\n}\n.features-page[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--text-primary);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n}\n.features-page[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   a.btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n/*# sourceMappingURL=features.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesComponent, [{
    type: Component,
    args: [{ selector: "app-features", standalone: true, imports: [CommonModule, RouterLink], template: '<section class="features-page">\n  <div class="container">\n    <!-- Header -->\n    <div class="page-header">\n      <span class="badge">Core features</span>\n      <h1>FX Data & Tools for Modern Finance Teams</h1>\n      <p class="subtitle">\n        Powerful exchange rate data with Dashboard tools for spreadsheets and developer-friendly API.\n        Trusted public sources. Historical accuracy. Built for compliance.\n      </p>\n    </div>\n\n    <!-- Dashboard Tier -->\n    <div class="feature-section">\n      <div class="feature-content">\n        <div class="feature-list">\n          <div class="tier-label">\n            <span class="tier-badge">Dashboard Tier</span>\n            <h2>Built for Finance Teams</h2>\n          </div>\n          \n          @for (feature of dashboardFeatures; track feature.title) {\n            <div class="feature-item">\n              <div class="feature-icon">\n                <span class="material-icons">{{ feature.icon }}</span>\n              </div>\n              <div class="feature-text">\n                <h3>{{ feature.title }}</h3>\n                <p>{{ feature.description }}</p>\n              </div>\n            </div>\n          }\n        </div>\n\n        <div class="feature-media">\n          <div class="media-placeholder">\n            <span class="material-icons">play_circle_outline</span>\n            <p>Dashboard Demo</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- API Tier -->\n    <div class="feature-section">\n      <div class="feature-content">\n        <div class="feature-list">\n          <div class="tier-label">\n            <span class="tier-badge accent">API Tier</span>\n            <h2>Developer-First API</h2>\n          </div>\n          \n          @for (feature of apiFeatures; track feature.title) {\n            <div class="feature-item">\n              <div class="feature-icon">\n                <span class="material-icons">{{ feature.icon }}</span>\n              </div>\n              <div class="feature-text">\n                <h3>{{ feature.title }}</h3>\n                <p>{{ feature.description }}</p>\n              </div>\n            </div>\n          }\n        </div>\n\n        <div class="feature-media">\n          <div class="media-placeholder">\n            <span class="material-icons">code</span>\n            <p>API Demo</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- CTA Section -->\n    <div class="cta-section">\n      <h2>Ready to get started?</h2>\n      <p>Choose the plan that fits your needs</p>\n      <div class="cta-buttons">\n        <a routerLink="/pricing" class="btn-primary">View Pricing</a>\n        <a routerLink="/" class="btn-secondary">Learn More</a>\n      </div>\n    </div>\n  </div>\n</section>\n', styles: ["/* src/app/pages/features/features.component.scss */\n.features-page {\n  padding: 4rem 2rem;\n}\n@media (max-width: 768px) {\n  .features-page {\n    padding: 3rem 1.5rem;\n  }\n}\n.features-page .container {\n  margin: 0 3rem;\n}\n.features-page .page-header {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n@media (max-width: 768px) {\n  .features-page .page-header {\n    margin-bottom: 3rem;\n  }\n}\n.features-page .page-header .badge {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  background: rgba(var(--accent-rgb), 0.1);\n  color: var(--accent);\n  border-radius: 2rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n}\n.features-page .page-header h1 {\n  font-size: 2.25rem;\n  font-weight: 600;\n  margin: 0 0 1rem;\n  color: var(--text-primary);\n  line-height: 1.3;\n}\n@media (max-width: 768px) {\n  .features-page .page-header h1 {\n    font-size: 1.5rem;\n  }\n}\n.features-page .page-header .subtitle {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  margin: 0 3rem;\n  line-height: 1.7;\n}\n@media (max-width: 768px) {\n  .features-page .page-header .subtitle {\n    font-size: 0.938rem;\n  }\n}\n.features-page .feature-section {\n  margin-bottom: 4rem;\n}\n@media (max-width: 768px) {\n  .features-page .feature-section {\n    margin-bottom: 3rem;\n  }\n}\n.features-page .feature-section:last-of-type {\n  margin-bottom: 3rem;\n}\n@media (max-width: 768px) {\n  .features-page .feature-section:last-of-type {\n    margin-bottom: 2rem;\n  }\n}\n.features-page .feature-content {\n  display: flex;\n  gap: 3rem;\n  align-items: flex-start;\n}\n@media (max-width: 968px) {\n  .features-page .feature-content {\n    flex-direction: column;\n    gap: 2.5rem;\n  }\n}\n.features-page .feature-list {\n  flex: 1;\n  min-width: 0;\n}\n.features-page .tier-label {\n  margin-bottom: 2.5rem;\n}\n.features-page .tier-label .tier-badge {\n  display: inline-block;\n  padding: 0.375rem 0.875rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 1.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n}\n.features-page .tier-label .tier-badge.accent {\n  background: rgba(var(--accent-rgb), 0.1);\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.features-page .tier-label h2 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .features-page .tier-label h2 {\n    font-size: 1.25rem;\n  }\n}\n.features-page .feature-item {\n  display: flex;\n  gap: 1.5rem;\n  padding: 1.5rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.features-page .feature-item:last-child {\n  border-bottom: none;\n}\n.features-page .feature-item .feature-icon {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(var(--accent-rgb), 0.1);\n  border-radius: 12px;\n}\n.features-page .feature-item .feature-icon .material-icons {\n  font-size: 24px;\n  color: var(--accent);\n}\n.features-page .feature-item .feature-text {\n  flex: 1;\n}\n.features-page .feature-item .feature-text h3 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n  color: var(--text-primary);\n}\n.features-page .feature-item .feature-text p {\n  font-size: 0.938rem;\n  color: var(--text-secondary);\n  margin: 0;\n  line-height: 1.6;\n}\n.features-page .feature-media {\n  flex: 1;\n  min-width: 0;\n  position: sticky;\n  top: 6rem;\n}\n@media (max-width: 968px) {\n  .features-page .feature-media {\n    position: static;\n  }\n}\n.features-page .feature-media .media-placeholder {\n  aspect-ratio: 16/10;\n  background: rgba(255, 255, 255, 0.05);\n  border: 2px dashed rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  transition: all 0.3s ease;\n}\n.features-page .feature-media .media-placeholder:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(var(--accent-rgb), 0.3);\n}\n.features-page .feature-media .media-placeholder .material-icons {\n  font-size: 64px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.features-page .feature-media .media-placeholder p {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n}\n.features-page .cta-section {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 16px;\n  margin-top: 4rem;\n}\n.features-page .cta-section h2 {\n  font-size: 1.75rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .features-page .cta-section h2 {\n    font-size: 1.375rem;\n  }\n}\n.features-page .cta-section p {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  margin: 0 0 2rem;\n}\n.features-page .cta-section .cta-buttons {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.features-page .cta-section .cta-buttons a {\n  padding: 1rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n}\n.features-page .cta-section .cta-buttons a.btn-primary {\n  background: var(--accent);\n  color: #000;\n}\n.features-page .cta-section .cta-buttons a.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.3);\n}\n.features-page .cta-section .cta-buttons a.btn-secondary {\n  background: transparent;\n  color: var(--text-primary);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n}\n.features-page .cta-section .cta-buttons a.btn-secondary:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n/*# sourceMappingURL=features.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesComponent, { className: "FeaturesComponent", filePath: "src/app/pages/features/features.component.ts", lineNumber: 18 });
})();
export {
  FeaturesComponent
};
//# sourceMappingURL=chunk-LEEWPCZ3.js.map
