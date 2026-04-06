import {
  RouterLink
} from "./chunk-EG2W3VGR.js";
import {
  ButtonComponent
} from "./chunk-EO4F4QDA.js";
import {
  HttpClient
} from "./chunk-RADNHJCR.js";
import {
  CommonModule,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AHBVTDPW.js";

// src/app/pages/pricing/pricing.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.question;
function PricingComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 3)(2, "h1");
    \u0275\u0275text(3, "Simple, Transparent Pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5, "Choose the plan that fits your needs. All plans include access to our full API and 21 currencies.");
    \u0275\u0275elementEnd()()();
  }
}
function PricingComponent_For_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tier_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tier_r2.badgeText);
  }
}
function PricingComponent_For_27_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Billed annually");
    \u0275\u0275elementEnd();
  }
}
function PricingComponent_For_27_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feature_r4);
  }
}
function PricingComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275conditionalCreate(1, PricingComponent_For_27_Conditional_1_Template, 2, 1, "div", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 24)(8, "div", 25)(9, "span", 26);
    \u0275\u0275text(10, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, PricingComponent_For_27_Conditional_15_Template, 2, 0, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 30);
    \u0275\u0275listener("click", function PricingComponent_For_27_Template_button_click_16_listener() {
      const tier_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPlan(tier_r2));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 31);
    \u0275\u0275elementStart(19, "div", 32)(20, "p", 33);
    \u0275\u0275text(21, "What's included:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ul", 34);
    \u0275\u0275repeaterCreate(23, PricingComponent_For_27_For_24_Template, 5, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tier_r2 = ctx.$implicit;
    const \u0275$index_57_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("popular", tier_r2.popular);
    \u0275\u0275advance();
    \u0275\u0275conditional(tier_r2.badgeText ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tier_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tier_r2.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.getPrice(\u0275$index_57_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/", ctx_r2.billingCycle === "monthly" ? "mo" : "yr");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.billingCycle === "yearly" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("primary", tier_r2.popular);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tier_r2.cta, " ");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(tier_r2.features);
  }
}
function PricingComponent_Conditional_28_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "button", 47);
    \u0275\u0275listener("click", function PricingComponent_Conditional_28_For_9_Template_button_click_1_listener() {
      const \u0275$index_126_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFAQ(\u0275$index_126_r7));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 48);
    \u0275\u0275element(5, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 50)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const faq_r8 = ctx.$implicit;
    \u0275\u0275classProp("open", faq_r8.open);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r8.question);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(faq_r8.answer);
  }
}
function PricingComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37)(1, "div", 3)(2, "div", 38)(3, "h2");
    \u0275\u0275text(4, "Frequently Asked Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Have questions about pricing? We're here to help.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275repeaterCreate(8, PricingComponent_Conditional_28_For_9_Template, 9, 4, "div", 40, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "section", 41)(11, "div", 3)(12, "div", 42)(13, "h2");
    \u0275\u0275text(14, "Still have questions?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Contact our sales team to discuss custom plans or enterprise solutions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 43)(18, "app-button", 44)(19, "a", 45);
    \u0275\u0275text(20, "Contact Sales");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.faqs);
    \u0275\u0275advance(10);
    \u0275\u0275property("variant", "primary")("size", "lg");
  }
}
var PricingComponent = class _PricingComponent {
  http;
  embedded = false;
  pricingTiers = [];
  billingCycle = "monthly";
  tierType = "dashboard";
  allPricing = {};
  monthlyPrices = [];
  yearlyPrices = [];
  allTiers = {};
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get("assets/pricing-tiers.json").subscribe({
      next: (data) => {
        this.allPricing = data.pricing;
        this.monthlyPrices = data.pricing.dashboard.monthly;
        this.yearlyPrices = data.pricing.dashboard.yearly;
        this.allTiers = data.tiers;
        this.pricingTiers = data.tiers.dashboard;
      },
      error: (error) => {
        console.error("Error loading pricing tiers:", error);
      }
    });
  }
  faqs = [
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the start of your next billing cycle.",
      open: false
    },
    {
      question: "What happens if I exceed my request limit?",
      answer: "If you exceed your monthly limit, API requests will return a 429 (Too Many Requests) error. You can upgrade your plan or wait until the next billing cycle. We'll send you email notifications before you reach your limit.",
      open: false
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start your trial.",
      open: false
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), as well as PayPal for monthly subscriptions. Annual plans can also be paid via bank transfer.",
      open: false
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for annual plans. Monthly subscriptions can be cancelled at any time with no refunds for the current month.",
      open: false
    },
    {
      question: "Can I get a discount for annual billing?",
      answer: "Yes! Save 20% by switching to annual billing. Contact our sales team for enterprise volume discounts.",
      open: false
    }
  ];
  toggleFAQ(index) {
    this.faqs[index].open = !this.faqs[index].open;
  }
  toggleBillingCycle(cycle) {
    this.billingCycle = cycle;
  }
  switchTierType(type) {
    this.tierType = type;
    this.pricingTiers = this.allTiers[type];
    this.monthlyPrices = this.allPricing[type]?.monthly ?? [];
    this.yearlyPrices = this.allPricing[type]?.yearly ?? [];
  }
  getPrice(index) {
    return this.billingCycle === "monthly" ? this.monthlyPrices[index] : this.yearlyPrices[index];
  }
  selectPlan(tier) {
    if (typeof window !== "undefined") {
      window.location.href = `https://localhost:4200/signup/${tier.id}`;
    }
  }
  getSavingsPercent() {
    const monthlyTotal = this.monthlyPrices[1] * 12;
    const yearlyTotal = this.yearlyPrices[1];
    return Math.round((monthlyTotal - yearlyTotal) / monthlyTotal * 100);
  }
  static \u0275fac = function PricingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingComponent, selectors: [["app-pricing"]], inputs: { embedded: "embedded" }, decls: 29, vars: 10, consts: [[1, "pricing-page"], [1, "hero"], [1, "section"], [1, "container"], [1, "tier-toggle-row"], [1, "tier-toggle"], [1, "tier-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "billing-toggle-row"], [1, "billing-toggle"], [1, "toggle-btn", 3, "click"], [1, "savings-badge"], [1, "pricing-grid"], [1, "pricing-card", 3, "popular"], [1, "subtitle"], [1, "pricing-card"], [1, "recommendation-badge"], [1, "card-header"], [1, "description"], [1, "card-price"], [1, "price"], [1, "currency"], [1, "amount"], [1, "period"], [1, "price-note"], [1, "select-button", 3, "click"], [1, "card-divider"], [1, "card-features"], [1, "features-label"], [1, "features-list"], ["width", "18", "height", "18", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M16.6667 5L7.50004 14.1667L3.33337 10", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "section", "faq-section"], [1, "section-header"], [1, "faq-list"], [1, "faq-item", 3, "open"], [1, "section", "cta"], [1, "cta-content"], [1, "cta-actions"], [3, "variant", "size"], ["routerLink", "/contact", 2, "color", "white", "text-decoration", "none"], [1, "faq-item"], [1, "faq-question", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M6 9L12 15L18 9", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "faq-answer"]], template: function PricingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, PricingComponent_Conditional_1_Template, 6, 0, "section", 1);
      \u0275\u0275elementStart(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "button", 6);
      \u0275\u0275listener("click", function PricingComponent_Template_button_click_6_listener() {
        return ctx.switchTierType("dashboard");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 7);
      \u0275\u0275element(8, "rect", 8)(9, "rect", 9)(10, "rect", 10)(11, "rect", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "button", 6);
      \u0275\u0275listener("click", function PricingComponent_Template_button_click_13_listener() {
        return ctx.switchTierType("restapi");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 7);
      \u0275\u0275element(15, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " REST API ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "button", 15);
      \u0275\u0275listener("click", function PricingComponent_Template_button_click_19_listener() {
        return ctx.toggleBillingCycle("monthly");
      });
      \u0275\u0275text(20, " Pay monthly ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275listener("click", function PricingComponent_Template_button_click_21_listener() {
        return ctx.toggleBillingCycle("yearly");
      });
      \u0275\u0275text(22, " Pay yearly ");
      \u0275\u0275elementStart(23, "span", 16);
      \u0275\u0275text(24, "save 17%");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 17);
      \u0275\u0275repeaterCreate(26, PricingComponent_For_27_Template, 25, 11, "div", 18, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(28, PricingComponent_Conditional_28_Template, 21, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.embedded ? 1 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.tierType === "dashboard");
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.tierType === "restapi");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.billingCycle === "monthly");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.billingCycle === "yearly");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.pricingTiers);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.embedded ? 28 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, ButtonComponent], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: var(--bg-hero);\n  position: relative;\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(74, 222, 128, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(59, 130, 246, 0.1) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n.hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  margin: 0 3rem;\n  position: relative;\n  z-index: 1;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 0.938rem;\n    margin: 0;\n  }\n}\n.tier-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.tier-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0.5rem;\n}\n.tier-toggle[_ngcontent-%COMP%]   .tier-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.5rem;\n  border: 1px solid var(--border-card);\n  border-radius: 0.5rem;\n  background: var(--bg-card);\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.tier-toggle[_ngcontent-%COMP%]   .tier-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  border-color: var(--accent);\n  color: var(--text-primary);\n}\n.tier-toggle[_ngcontent-%COMP%]   .tier-btn.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #000;\n  border-color: var(--accent);\n}\n.tier-toggle[_ngcontent-%COMP%]   .tier-btn.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #000;\n}\n.tier-toggle[_ngcontent-%COMP%]   .tier-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: currentColor;\n  flex-shrink: 0;\n}\n.billing-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2.5rem;\n}\n.billing-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: var(--bg-secondary);\n  border-radius: 50px;\n  padding: 4px;\n  gap: 4px;\n  border: 1px solid var(--border);\n}\n.billing-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border: none;\n  border-radius: 50px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.billing-toggle[_ngcontent-%COMP%]   .toggle-btn.active[_ngcontent-%COMP%] {\n  background: var(--text-primary);\n  color: var(--bg-primary);\n}\n.billing-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--text-primary);\n}\n.billing-toggle[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]   .savings-badge[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: #000;\n  padding: 0.125rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.6875rem;\n  font-weight: 700;\n}\n.section[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.pricing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 768px) {\n  .pricing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 420px;\n    padding: 0 1rem;\n  }\n}\n.pricing-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border-card);\n  border-radius: 1rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n}\n.pricing-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px var(--shadow);\n  border-color: var(--accent);\n}\n.pricing-card.popular[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 1px var(--accent), 0 8px 24px rgba(var(--accent-rgb), 0.15);\n}\n.recommendation-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.75rem;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.25rem 1rem;\n  background-color: var(--accent);\n  color: #000;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  border-radius: 1rem;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.card-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n}\n.card-header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.card-price[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.card-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.125rem;\n}\n.card-price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.card-price[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.card-price[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1rem;\n  margin-left: 0.25rem;\n}\n.card-price[_ngcontent-%COMP%]   .price-note[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8125rem;\n  margin-top: 0.25rem;\n}\n.select-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.875rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border: 1px solid var(--border-card);\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  background-color: transparent;\n  color: var(--text-primary);\n}\n.select-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--accent);\n  color: #000;\n  border-color: var(--accent);\n}\n.select-button.primary[_ngcontent-%COMP%] {\n  background-color: var(--accent);\n  color: #000;\n  border-color: var(--accent);\n}\n.select-button.primary[_ngcontent-%COMP%]:hover {\n  background-color: var(--accent-hover);\n  border-color: var(--accent-hover);\n}\n.card-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border);\n  margin: 1.5rem 0;\n}\n.card-features[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card-features[_ngcontent-%COMP%]   .features-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n}\n.features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n  line-height: 1.4;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--accent);\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.faq-section[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 2rem 3rem;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.75rem;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  color: var(--text-secondary);\n}\n.faq-list[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.faq-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 0.5rem;\n  margin-bottom: 0.75rem;\n  overflow: hidden;\n  background-color: var(--bg-card);\n}\n.faq-item.open[_ngcontent-%COMP%]   .faq-answer[_ngcontent-%COMP%] {\n  max-height: 500px;\n  padding: 0 1.5rem 1.5rem;\n}\n.faq-item.open[_ngcontent-%COMP%]   .faq-question[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.faq-question[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  background: transparent;\n  border: none;\n  text-align: left;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  cursor: pointer;\n  font-family: inherit;\n}\n.faq-question[_ngcontent-%COMP%]:hover {\n  background-color: var(--bg-secondary);\n}\n.faq-question[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  transition: transform 0.3s ease;\n  flex-shrink: 0;\n}\n.faq-answer[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 1.5rem;\n  transition: all 0.3s ease;\n}\n.faq-answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.cta[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.75rem;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1.0625rem;\n  margin-bottom: 2rem;\n}\n.cta[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #0066ff);\n  color: white;\n  text-align: center;\n  padding: 5rem 0;\n}\n.cta-content[_ngcontent-%COMP%] {\n  margin: 0 3rem;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: white;\n  margin-bottom: 1rem;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 2rem;\n}\n.cta-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n@media (max-width: 968px) {\n  .pricing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=pricing.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingComponent, [{
    type: Component,
    args: [{ selector: "app-pricing", standalone: true, imports: [CommonModule, RouterLink, ButtonComponent], template: `<div class="pricing-page">
  @if (!embedded) {
    <section class="hero">
      <div class="container">
        <h1>Simple, Transparent Pricing</h1>
        <p class="subtitle">Choose the plan that fits your needs. All plans include access to our full API and 21 currencies.</p>
      </div>
    </section>
  }

  <section class="section">
    <div class="container">
      <!-- Tier Type Toggle -->
      <div class="tier-toggle-row">
        <div class="tier-toggle">
          <button 
            class="tier-btn" 
            [class.active]="tierType === 'dashboard'"
            (click)="switchTierType('dashboard')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
            </svg>
            Dashboard
          </button>
          <button 
            class="tier-btn" 
            [class.active]="tierType === 'restapi'"
            (click)="switchTierType('restapi')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            REST API
          </button>
        </div>
      </div>

      <!-- Billing Cycle Toggle -->
      <div class="billing-toggle-row">
        <div class="billing-toggle">
          <button 
            class="toggle-btn" 
            [class.active]="billingCycle === 'monthly'"
            (click)="toggleBillingCycle('monthly')">
            Pay monthly
          </button>
          <button 
            class="toggle-btn" 
            [class.active]="billingCycle === 'yearly'"
            (click)="toggleBillingCycle('yearly')">
            Pay yearly <span class="savings-badge">save 17%</span>
          </button>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="pricing-grid">
        @for (tier of pricingTiers; track tier.id; let i = $index) {
          <div class="pricing-card" [class.popular]="tier.popular">
            @if (tier.badgeText) {
              <div class="recommendation-badge">{{ tier.badgeText }}</div>
            }
            
            <div class="card-header">
              <h3>{{ tier.name }}</h3>
              <p class="description">{{ tier.description }}</p>
            </div>

            <div class="card-price">
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">{{ getPrice(i) }}</span>
                <span class="period">/{{ billingCycle === 'monthly' ? 'mo' : 'yr' }}</span>
              </div>
              @if (billingCycle === 'yearly') {
                <p class="price-note">Billed annually</p>
              }
            </div>

            <button class="select-button" [class.primary]="tier.popular" (click)="selectPlan(tier)">
              {{ tier.cta }}
            </button>

            <div class="card-divider"></div>

            <div class="card-features">
              <p class="features-label">What's included:</p>
              <ul class="features-list">
                @for (feature of tier.features; track feature) {
                  <li>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>{{ feature }}</span>
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  </section>

  @if (!embedded) {
    <section class="section faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Have questions about pricing? We're here to help.</p>
        </div>
        <div class="faq-list">
          @for (faq of faqs; track faq.question; let i = $index) {
            <div class="faq-item" [class.open]="faq.open">
              <button class="faq-question" (click)="toggleFAQ(i)">
                <span>{{ faq.question }}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="faq-answer">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2>Still have questions?</h2>
          <p>Contact our sales team to discuss custom plans or enterprise solutions.</p>
          <div class="cta-actions">
            <app-button [variant]="'primary'" [size]="'lg'">
              <a routerLink="/contact" style="color: white; text-decoration: none;">Contact Sales</a>
            </app-button>
          </div>
        </div>
      </div>
    </section>
  }
</div>
`, styles: ['/* src/app/pages/pricing/pricing.component.scss */\n.hero {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: var(--bg-hero);\n  position: relative;\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .hero {\n    padding: 3rem 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n}\n.hero::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(74, 222, 128, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(59, 130, 246, 0.1) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.hero h1 {\n  font-size: 2.25rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .hero h1 {\n    font-size: 1.75rem;\n  }\n}\n.hero .subtitle {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  margin: 0 3rem;\n  position: relative;\n  z-index: 1;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .hero .subtitle {\n    font-size: 0.938rem;\n    margin: 0;\n  }\n}\n.tier-toggle-row {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.tier-toggle {\n  display: inline-flex;\n  gap: 0.5rem;\n}\n.tier-toggle .tier-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.5rem;\n  border: 1px solid var(--border-card);\n  border-radius: 0.5rem;\n  background: var(--bg-card);\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.tier-toggle .tier-btn:hover:not(.active) {\n  border-color: var(--accent);\n  color: var(--text-primary);\n}\n.tier-toggle .tier-btn.active {\n  background: var(--accent);\n  color: #000;\n  border-color: var(--accent);\n}\n.tier-toggle .tier-btn.active svg {\n  stroke: #000;\n}\n.tier-toggle .tier-btn svg {\n  stroke: currentColor;\n  flex-shrink: 0;\n}\n.billing-toggle-row {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2.5rem;\n}\n.billing-toggle {\n  display: inline-flex;\n  background: var(--bg-secondary);\n  border-radius: 50px;\n  padding: 4px;\n  gap: 4px;\n  border: 1px solid var(--border);\n}\n.billing-toggle .toggle-btn {\n  padding: 0.5rem 1.25rem;\n  border: none;\n  border-radius: 50px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.billing-toggle .toggle-btn.active {\n  background: var(--text-primary);\n  color: var(--bg-primary);\n}\n.billing-toggle .toggle-btn:hover:not(.active) {\n  color: var(--text-primary);\n}\n.billing-toggle .toggle-btn .savings-badge {\n  background: var(--accent);\n  color: #000;\n  padding: 0.125rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.6875rem;\n  font-weight: 700;\n}\n.section {\n  padding: 2rem 0;\n}\n.pricing-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 768px) {\n  .pricing-grid {\n    grid-template-columns: 1fr;\n    max-width: 420px;\n    padding: 0 1rem;\n  }\n}\n.pricing-card {\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border-card);\n  border-radius: 1rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n}\n.pricing-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px var(--shadow);\n  border-color: var(--accent);\n}\n.pricing-card.popular {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 1px var(--accent), 0 8px 24px rgba(var(--accent-rgb), 0.15);\n}\n.recommendation-badge {\n  position: absolute;\n  top: -0.75rem;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.25rem 1rem;\n  background-color: var(--accent);\n  color: #000;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  border-radius: 1rem;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.card-header {\n  margin-bottom: 1.5rem;\n}\n.card-header h3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n}\n.card-header .description {\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.card-price {\n  margin-bottom: 1.5rem;\n}\n.card-price .price {\n  display: flex;\n  align-items: baseline;\n  gap: 0.125rem;\n}\n.card-price .currency {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.card-price .amount {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.card-price .period {\n  color: var(--text-muted);\n  font-size: 1rem;\n  margin-left: 0.25rem;\n}\n.card-price .price-note {\n  color: var(--text-muted);\n  font-size: 0.8125rem;\n  margin-top: 0.25rem;\n}\n.select-button {\n  width: 100%;\n  padding: 0.875rem 1.5rem;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  border: 1px solid var(--border-card);\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  background-color: transparent;\n  color: var(--text-primary);\n}\n.select-button:hover {\n  background-color: var(--accent);\n  color: #000;\n  border-color: var(--accent);\n}\n.select-button.primary {\n  background-color: var(--accent);\n  color: #000;\n  border-color: var(--accent);\n}\n.select-button.primary:hover {\n  background-color: var(--accent-hover);\n  border-color: var(--accent-hover);\n}\n.card-divider {\n  height: 1px;\n  background: var(--border);\n  margin: 1.5rem 0;\n}\n.card-features {\n  flex: 1;\n}\n.card-features .features-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 1rem;\n}\n.features-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.features-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n  line-height: 1.4;\n}\n.features-list li svg {\n  color: var(--accent);\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.features-list li span {\n  flex: 1;\n}\n.faq-section {\n  background-color: var(--bg-secondary);\n}\n.section-header {\n  text-align: center;\n  margin: 0 2rem 3rem;\n}\n.section-header h2 {\n  font-size: 2rem;\n  margin-bottom: 0.75rem;\n}\n.section-header p {\n  font-size: 1.0625rem;\n  color: var(--text-secondary);\n}\n.faq-list {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.faq-item {\n  border: 1px solid var(--border);\n  border-radius: 0.5rem;\n  margin-bottom: 0.75rem;\n  overflow: hidden;\n  background-color: var(--bg-card);\n}\n.faq-item.open .faq-answer {\n  max-height: 500px;\n  padding: 0 1.5rem 1.5rem;\n}\n.faq-item.open .faq-question svg {\n  transform: rotate(180deg);\n}\n.faq-question {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  background: transparent;\n  border: none;\n  text-align: left;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  cursor: pointer;\n  font-family: inherit;\n}\n.faq-question:hover {\n  background-color: var(--bg-secondary);\n}\n.faq-question svg {\n  color: var(--text-secondary);\n  transition: transform 0.3s ease;\n  flex-shrink: 0;\n}\n.faq-answer {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 1.5rem;\n  transition: all 0.3s ease;\n}\n.faq-answer p {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.cta {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.cta-content h2 {\n  font-size: 2rem;\n  margin-bottom: 0.75rem;\n}\n.cta-content p {\n  color: var(--text-secondary);\n  font-size: 1.0625rem;\n  margin-bottom: 2rem;\n}\n.cta {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #0066ff);\n  color: white;\n  text-align: center;\n  padding: 5rem 0;\n}\n.cta-content {\n  margin: 0 3rem;\n}\n.cta-content h2 {\n  font-size: 2.5rem;\n  color: white;\n  margin-bottom: 1rem;\n}\n.cta-content p {\n  font-size: 1.25rem;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 2rem;\n}\n.cta-actions a {\n  text-decoration: none;\n  color: inherit;\n}\n@media (max-width: 968px) {\n  .pricing-grid {\n    grid-template-columns: 1fr;\n  }\n  .hero h1 {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=pricing.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }], { embedded: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingComponent, { className: "PricingComponent", filePath: "src/app/pages/pricing/pricing.component.ts", lineNumber: 14 });
})();

export {
  PricingComponent
};
//# sourceMappingURL=chunk-5DPYN43D.js.map
