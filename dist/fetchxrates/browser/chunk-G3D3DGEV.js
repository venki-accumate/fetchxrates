import {
  RouterLink
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
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-AHBVTDPW.js";

// src/app/pages/about/about.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.name;
function AboutComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r1.description);
  }
}
function AboutComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.description);
  }
}
var AboutComponent = class _AboutComponent {
  values = [
    {
      icon: "\u{1F3AF}",
      title: "Accuracy",
      description: "We source exchange rates directly from the Reserve Bank of Australia, ensuring the highest accuracy and reliability for your applications."
    },
    {
      icon: "\u26A1",
      title: "Performance",
      description: "Sub-100ms response times powered by global CDN infrastructure and optimized caching ensure your applications stay fast."
    },
    {
      icon: "\u{1F512}",
      title: "Security",
      description: "Enterprise-grade security with API key authentication, rate limiting, and HTTPS encryption protects your data and applications."
    },
    {
      icon: "\u{1F499}",
      title: "Developer-First",
      description: "Clean API design, comprehensive documentation, and responsive support help you integrate quickly and build with confidence."
    }
  ];
  team = [
    {
      name: "Technical Team",
      role: "Engineering & Operations",
      description: "Experienced engineers maintaining reliable infrastructure and ensuring 99.9% uptime."
    },
    {
      name: "Support Team",
      role: "Customer Success",
      description: "Dedicated support professionals helping developers integrate and succeed with our API."
    }
  ];
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 62, vars: 4, consts: [[1, "about-page"], [1, "hero"], [1, "container"], [1, "subtitle"], [1, "section"], [1, "story"], [1, "section", "values-section"], [1, "section-title"], [1, "values-grid"], [1, "value-card"], [1, "disclaimer-box"], ["href", "https://www.rba.gov.au", "target", "_blank", "rel", "noopener noreferrer"], [1, "section", "team-section"], [1, "team-grid"], [1, "team-card"], [1, "section", "cta"], [1, "cta-content"], [1, "cta-actions"], [3, "variant", "size"], ["routerLink", "/pricing", 2, "color", "white", "text-decoration", "none"], ["routerLink", "/contact", 2, "color", "white", "text-decoration", "none"], [1, "value-icon"], [1, "role"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "About fetchxrates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Providing reliable Australian exchange rate data since 2018");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "h2");
      \u0275\u0275text(11, "Our Story");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "fetchxrates was created to solve a simple problem: developers and businesses needed a reliable, fast, and affordable way to access official Australian exchange rate data from the Reserve Bank of Australia (RBA).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15, "What started as a side project to help Australian fintech startups has grown into a trusted API serving thousands of requests daily for businesses worldwide. We take pride in providing accurate, timely exchange rate data that powers e-commerce platforms, financial applications, and analytical tools.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17, "While the RBA publishes official exchange rates, accessing this data programmatically was often cumbersome. We built fetchxrates to make this process seamless with a modern REST API, comprehensive documentation, and developer-friendly features.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "section", 6)(19, "div", 2)(20, "h2", 7);
      \u0275\u0275text(21, "Our Values");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 8);
      \u0275\u0275repeaterCreate(23, AboutComponent_For_24_Template, 7, 3, "div", 9, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "section", 4)(26, "div", 2)(27, "div", 10)(28, "h3");
      \u0275\u0275text(29, "\u26A0\uFE0F Important Disclaimer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p");
      \u0275\u0275text(31, "fetchxrates is an independent service that sources exchange rate data from publicly available Reserve Bank of Australia (RBA) publications. We are not affiliated with, endorsed by, or officially connected to the Reserve Bank of Australia.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "The exchange rates we provide are derived from RBA data but are provided through our own infrastructure and API. For official RBA rates, please visit ");
      \u0275\u0275elementStart(34, "a", 11);
      \u0275\u0275text(35, "rba.gov.au");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p")(38, "strong");
      \u0275\u0275text(39, "This service is not intended for financial advice.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " Exchange rates are provided for informational purposes only. For financial decisions, please consult with qualified financial professionals.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "section", 12)(42, "div", 2)(43, "h2", 7);
      \u0275\u0275text(44, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 13);
      \u0275\u0275repeaterCreate(46, AboutComponent_For_47_Template, 7, 3, "div", 14, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "section", 15)(49, "div", 2)(50, "div", 16)(51, "h2");
      \u0275\u0275text(52, "Ready to Get Started?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p");
      \u0275\u0275text(54, "Join thousands of developers using fetchxrates for reliable exchange rate data.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 17)(56, "app-button", 18)(57, "a", 19);
      \u0275\u0275text(58, "View Pricing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "app-button", 18)(60, "a", 20);
      \u0275\u0275text(61, "Contact Us");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.values);
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.team);
      \u0275\u0275advance(10);
      \u0275\u0275property("variant", "primary")("size", "lg");
      \u0275\u0275advance(3);
      \u0275\u0275property("variant", "outline")("size", "lg");
    }
  }, dependencies: [CommonModule, RouterLink, ButtonComponent], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5rem 0 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-secondary) 0%,\n      var(--bg-primary) 100%);\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--text-secondary);\n}\n.story[_ngcontent-%COMP%] {\n  margin: 0 3rem;\n}\n.story[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 2rem;\n}\n.story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.8;\n  color: var(--text-secondary);\n  margin-bottom: 1.5rem;\n}\n.values-section[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n}\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n  margin: 0 3rem;\n}\n.value-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.75rem;\n}\n.value-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.value-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.75rem;\n}\n.value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.disclaimer-box[_ngcontent-%COMP%] {\n  margin: 0 3rem;\n  padding: 2rem;\n  background-color: var(--bg-warning);\n  border: 2px solid var(--border-warning);\n  border-radius: 0.75rem;\n}\n.disclaimer-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n  color: var(--text-warning);\n}\n.disclaimer-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.disclaimer-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.disclaimer-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent);\n  text-decoration: underline;\n}\n.disclaimer-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent-hover);\n}\n.disclaimer-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.team-section[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n}\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n  margin: 0 3rem;\n}\n.team-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.75rem;\n  text-align: center;\n}\n.team-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.team-card[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.team-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.role) {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.cta[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #0066ff);\n  color: white;\n  text-align: center;\n  padding: 5rem 0;\n}\n.cta-content[_ngcontent-%COMP%] {\n  margin: 0 3rem;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: white;\n  margin-bottom: 1rem;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 2rem;\n}\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 968px) {\n  .values-grid[_ngcontent-%COMP%], \n   .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", standalone: true, imports: [CommonModule, RouterLink, ButtonComponent], template: `<div class="about-page">
  <section class="hero">
    <div class="container">
      <h1>About fetchxrates</h1>
      <p class="subtitle">Providing reliable Australian exchange rate data since 2018</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="story">
        <h2>Our Story</h2>
        <p>fetchxrates was created to solve a simple problem: developers and businesses needed a reliable, fast, and affordable way to access official Australian exchange rate data from the Reserve Bank of Australia (RBA).</p>
        <p>What started as a side project to help Australian fintech startups has grown into a trusted API serving thousands of requests daily for businesses worldwide. We take pride in providing accurate, timely exchange rate data that powers e-commerce platforms, financial applications, and analytical tools.</p>
        <p>While the RBA publishes official exchange rates, accessing this data programmatically was often cumbersome. We built fetchxrates to make this process seamless with a modern REST API, comprehensive documentation, and developer-friendly features.</p>
      </div>
    </div>
  </section>

  <section class="section values-section">
    <div class="container">
      <h2 class="section-title">Our Values</h2>
      <div class="values-grid">
        @for (value of values; track value.title) {
          <div class="value-card">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        }
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="disclaimer-box">
        <h3>\u26A0\uFE0F Important Disclaimer</h3>
        <p>fetchxrates is an independent service that sources exchange rate data from publicly available Reserve Bank of Australia (RBA) publications. We are not affiliated with, endorsed by, or officially connected to the Reserve Bank of Australia.</p>
        <p>The exchange rates we provide are derived from RBA data but are provided through our own infrastructure and API. For official RBA rates, please visit <a href="https://www.rba.gov.au" target="_blank" rel="noopener noreferrer">rba.gov.au</a>.</p>
        <p><strong>This service is not intended for financial advice.</strong> Exchange rates are provided for informational purposes only. For financial decisions, please consult with qualified financial professionals.</p>
      </div>
    </div>
  </section>

  <section class="section team-section">
    <div class="container">
      <h2 class="section-title">Our Team</h2>
      <div class="team-grid">
        @for (member of team; track member.name) {
          <div class="team-card">
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
            <p>{{ member.description }}</p>
          </div>
        }
      </div>
    </div>
  </section>

  <section class="section cta">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of developers using fetchxrates for reliable exchange rate data.</p>
        <div class="cta-actions">
          <app-button [variant]="'primary'" [size]="'lg'">
            <a routerLink="/pricing" style="color: white; text-decoration: none;">View Pricing</a>
          </app-button>
          <app-button [variant]="'outline'" [size]="'lg'">
            <a routerLink="/contact" style="color: white; text-decoration: none;">Contact Us</a>
          </app-button>
        </div>
      </div>
    </div>
  </section>
</div>
`, styles: ["/* src/app/pages/about/about.component.scss */\n.hero {\n  text-align: center;\n  padding: 5rem 0 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-secondary) 0%,\n      var(--bg-primary) 100%);\n}\n.hero h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.hero .subtitle {\n  font-size: 1.25rem;\n  color: var(--text-secondary);\n}\n.story {\n  margin: 0 3rem;\n}\n.story h2 {\n  font-size: 2.5rem;\n  margin-bottom: 2rem;\n}\n.story p {\n  font-size: 1.125rem;\n  line-height: 1.8;\n  color: var(--text-secondary);\n  margin-bottom: 1.5rem;\n}\n.values-section {\n  background-color: var(--bg-secondary);\n}\n.section-title {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n}\n.values-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n  margin: 0 3rem;\n}\n.value-card {\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.75rem;\n}\n.value-icon {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.value-card h3 {\n  font-size: 1.5rem;\n  margin-bottom: 0.75rem;\n}\n.value-card p {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.disclaimer-box {\n  margin: 0 3rem;\n  padding: 2rem;\n  background-color: var(--bg-warning);\n  border: 2px solid var(--border-warning);\n  border-radius: 0.75rem;\n}\n.disclaimer-box h3 {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n  color: var(--text-warning);\n}\n.disclaimer-box p {\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.disclaimer-box p:last-child {\n  margin-bottom: 0;\n}\n.disclaimer-box a {\n  color: var(--accent);\n  text-decoration: underline;\n}\n.disclaimer-box a:hover {\n  color: var(--accent-hover);\n}\n.disclaimer-box strong {\n  color: var(--text-primary);\n}\n.team-section {\n  background-color: var(--bg-secondary);\n}\n.team-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n  margin: 0 3rem;\n}\n.team-card {\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.75rem;\n  text-align: center;\n}\n.team-card h3 {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.team-card .role {\n  color: var(--accent);\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.team-card p:not(.role) {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.cta {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent),\n      #0066ff);\n  color: white;\n  text-align: center;\n  padding: 5rem 0;\n}\n.cta-content {\n  margin: 0 3rem;\n}\n.cta-content h2 {\n  font-size: 2.5rem;\n  color: white;\n  margin-bottom: 1rem;\n}\n.cta-content p {\n  font-size: 1.25rem;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 2rem;\n}\n.cta-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 968px) {\n  .values-grid,\n  .team-grid {\n    grid-template-columns: 1fr;\n  }\n  .hero h1 {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/pages/about/about.component.ts", lineNumber: 13 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-G3D3DGEV.js.map
