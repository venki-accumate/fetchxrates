import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AHBVTDPW.js";

// src/app/pages/terms/terms.component.ts
var TermsComponent = class _TermsComponent {
  lastUpdated = "2024-01-01";
  static \u0275fac = function TermsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TermsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TermsComponent, selectors: [["app-terms"]], decls: 126, vars: 1, consts: [[1, "legal-page"], [1, "hero"], [1, "container"], [1, "last-updated"], [1, "section"], [1, "legal-content"], [1, "disclaimer-box"]], template: function TermsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Terms of Service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "h2");
      \u0275\u0275text(11, "1. Acceptance of Terms");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "p");
      \u0275\u0275text(13, 'By accessing and using the fetchxrates API service ("Service"), you accept and agree to be bound by the terms and provisions of this agreement.');
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "h2");
      \u0275\u0275text(15, "2. Description of Service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "p");
      \u0275\u0275text(17, 'fetchxrates provides access to exchange rate data sourced from the Reserve Bank of Australia through a REST API. The Service is provided "as is" and "as available" without warranties of any kind.');
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "h2");
      \u0275\u0275text(19, "3. Registration and Account");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "ul")(21, "li");
      \u0275\u0275text(22, "You must provide accurate and complete registration information");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "li");
      \u0275\u0275text(24, "You are responsible for maintaining the confidentiality of your API keys");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "li");
      \u0275\u0275text(26, "You are responsible for all activities that occur under your account");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "li");
      \u0275\u0275text(28, "You must notify us immediately of any unauthorized use");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "h2");
      \u0275\u0275text(30, "4. Use of Service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "h3");
      \u0275\u0275text(32, "Permitted Use");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "ul")(34, "li");
      \u0275\u0275text(35, "Integration into commercial and non-commercial applications");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "li");
      \u0275\u0275text(37, "Display of exchange rate data to end users");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "li");
      \u0275\u0275text(39, "Currency conversion calculations");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "li");
      \u0275\u0275text(41, "Historical data analysis and research");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(42, "h3");
      \u0275\u0275text(43, "Prohibited Use");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "ul")(45, "li");
      \u0275\u0275text(46, "Reselling or redistributing the API service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "li");
      \u0275\u0275text(48, "Attempting to circumvent rate limits");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "li");
      \u0275\u0275text(50, "Using the Service for illegal purposes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "li");
      \u0275\u0275text(52, "Attempting to gain unauthorized access to the Service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "li");
      \u0275\u0275text(54, "Scraping or automated access outside of the API");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(55, "h2");
      \u0275\u0275text(56, "5. API Usage Limits");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "p");
      \u0275\u0275text(58, "Your use of the API is subject to rate limits based on your subscription plan. Exceeding these limits may result in temporary suspension of access.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "h2");
      \u0275\u0275text(60, "6. Data Accuracy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(61, "p");
      \u0275\u0275text(62, "While we strive to provide accurate and timely data:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(63, "ul")(64, "li");
      \u0275\u0275text(65, "Exchange rates are sourced from RBA public data");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(66, "li");
      \u0275\u0275text(67, "We do not guarantee absolute accuracy or timeliness");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(68, "li");
      \u0275\u0275text(69, "The Service should not be used as the sole basis for financial decisions");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(70, "li");
      \u0275\u0275text(71, "We are not liable for errors in the data or delays in updates");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(72, "h2");
      \u0275\u0275text(73, "7. Fees and Payment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(74, "ul")(75, "li");
      \u0275\u0275text(76, "Subscription fees are billed monthly or annually as selected");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(77, "li");
      \u0275\u0275text(78, "All fees are non-refundable except as required by law");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(79, "li");
      \u0275\u0275text(80, "We reserve the right to change pricing with 30 days notice");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(81, "li");
      \u0275\u0275text(82, "Failure to pay may result in service suspension");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(83, "h2");
      \u0275\u0275text(84, "8. Intellectual Property");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(85, "p");
      \u0275\u0275text(86, "The Service, including all code, documentation, and content, is owned by fetchxrates and protected by intellectual property laws. The exchange rate data itself is derived from RBA public data.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(87, "h2");
      \u0275\u0275text(88, "9. Termination");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(89, "p");
      \u0275\u0275text(90, "We reserve the right to suspend or terminate your access to the Service at any time for violations of these terms or for any other reason at our discretion.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "h2");
      \u0275\u0275text(92, "10. Limitation of Liability");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(93, "p");
      \u0275\u0275text(94, "To the maximum extent permitted by law, fetchxrates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(95, "h2");
      \u0275\u0275text(96, "11. Disclaimer of Warranties");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(97, "p");
      \u0275\u0275text(98, 'The Service is provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose.');
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(99, "h2");
      \u0275\u0275text(100, "12. Indemnification");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(101, "p");
      \u0275\u0275text(102, "You agree to indemnify and hold harmless fetchxrates from any claims, damages, or expenses arising from your use of the Service or violation of these terms.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(103, "h2");
      \u0275\u0275text(104, "13. Changes to Terms");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(105, "p");
      \u0275\u0275text(106, "We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the modified terms.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(107, "h2");
      \u0275\u0275text(108, "14. Governing Law");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(109, "p");
      \u0275\u0275text(110, "These terms shall be governed by the laws of Australia. Any disputes shall be resolved in the courts of Australia.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(111, "h2");
      \u0275\u0275text(112, "15. Contact");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(113, "p");
      \u0275\u0275text(114, "For questions about these terms, please contact us at support@fetchxrates.com.au");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(115, "div", 6)(116, "h3");
      \u0275\u0275text(117, "\u26A0\uFE0F Important Disclaimers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(118, "p")(119, "strong");
      \u0275\u0275text(120, "Not Financial Advice:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(121, " This service provides data for informational purposes only and should not be used as the sole basis for financial decisions.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(122, "p")(123, "strong");
      \u0275\u0275text(124, "Not Affiliated with RBA:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(125, " fetchxrates is an independent service and is not affiliated with, endorsed by, or officially connected to the Reserve Bank of Australia.");
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Last updated: ", ctx.lastUpdated);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5rem 0 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-secondary) 0%,\n      var(--bg-primary) 100%);\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.hero[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.legal-content[_ngcontent-%COMP%] {\n  margin: 0 3rem;\n  line-height: 1.8;\n}\n.legal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid var(--border);\n}\n.legal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.legal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-top: 2rem;\n  margin-bottom: 0.75rem;\n}\n.legal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 1rem;\n}\n.legal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-left: 2rem;\n}\n.legal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 0.5rem;\n}\n.legal-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.disclaimer-box[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  padding: 2rem;\n  background-color: var(--bg-warning);\n  border: 2px solid var(--border-warning);\n  border-radius: 0.75rem;\n}\n.disclaimer-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-warning);\n  margin-top: 0 !important;\n  margin-bottom: 1rem;\n  padding-bottom: 0;\n  border-bottom: none;\n}\n.disclaimer-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.disclaimer-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 968px) {\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .legal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=terms.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TermsComponent, [{
    type: Component,
    args: [{ selector: "app-terms", standalone: true, imports: [CommonModule], template: '<div class="legal-page">\n  <section class="hero">\n    <div class="container">\n      <h1>Terms of Service</h1>\n      <p class="last-updated">Last updated: {{ lastUpdated }}</p>\n    </div>\n  </section>\n\n  <section class="section">\n    <div class="container">\n      <div class="legal-content">\n        <h2>1. Acceptance of Terms</h2>\n        <p>By accessing and using the fetchxrates API service ("Service"), you accept and agree to be bound by the terms and provisions of this agreement.</p>\n\n        <h2>2. Description of Service</h2>\n        <p>fetchxrates provides access to exchange rate data sourced from the Reserve Bank of Australia through a REST API. The Service is provided "as is" and "as available" without warranties of any kind.</p>\n\n        <h2>3. Registration and Account</h2>\n        <ul>\n          <li>You must provide accurate and complete registration information</li>\n          <li>You are responsible for maintaining the confidentiality of your API keys</li>\n          <li>You are responsible for all activities that occur under your account</li>\n          <li>You must notify us immediately of any unauthorized use</li>\n        </ul>\n\n        <h2>4. Use of Service</h2>\n        <h3>Permitted Use</h3>\n        <ul>\n          <li>Integration into commercial and non-commercial applications</li>\n          <li>Display of exchange rate data to end users</li>\n          <li>Currency conversion calculations</li>\n          <li>Historical data analysis and research</li>\n        </ul>\n\n        <h3>Prohibited Use</h3>\n        <ul>\n          <li>Reselling or redistributing the API service</li>\n          <li>Attempting to circumvent rate limits</li>\n          <li>Using the Service for illegal purposes</li>\n          <li>Attempting to gain unauthorized access to the Service</li>\n          <li>Scraping or automated access outside of the API</li>\n        </ul>\n\n        <h2>5. API Usage Limits</h2>\n        <p>Your use of the API is subject to rate limits based on your subscription plan. Exceeding these limits may result in temporary suspension of access.</p>\n\n        <h2>6. Data Accuracy</h2>\n        <p>While we strive to provide accurate and timely data:</p>\n        <ul>\n          <li>Exchange rates are sourced from RBA public data</li>\n          <li>We do not guarantee absolute accuracy or timeliness</li>\n          <li>The Service should not be used as the sole basis for financial decisions</li>\n          <li>We are not liable for errors in the data or delays in updates</li>\n        </ul>\n\n        <h2>7. Fees and Payment</h2>\n        <ul>\n          <li>Subscription fees are billed monthly or annually as selected</li>\n          <li>All fees are non-refundable except as required by law</li>\n          <li>We reserve the right to change pricing with 30 days notice</li>\n          <li>Failure to pay may result in service suspension</li>\n        </ul>\n\n        <h2>8. Intellectual Property</h2>\n        <p>The Service, including all code, documentation, and content, is owned by fetchxrates and protected by intellectual property laws. The exchange rate data itself is derived from RBA public data.</p>\n\n        <h2>9. Termination</h2>\n        <p>We reserve the right to suspend or terminate your access to the Service at any time for violations of these terms or for any other reason at our discretion.</p>\n\n        <h2>10. Limitation of Liability</h2>\n        <p>To the maximum extent permitted by law, fetchxrates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.</p>\n\n        <h2>11. Disclaimer of Warranties</h2>\n        <p>The Service is provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose.</p>\n\n        <h2>12. Indemnification</h2>\n        <p>You agree to indemnify and hold harmless fetchxrates from any claims, damages, or expenses arising from your use of the Service or violation of these terms.</p>\n\n        <h2>13. Changes to Terms</h2>\n        <p>We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the modified terms.</p>\n\n        <h2>14. Governing Law</h2>\n        <p>These terms shall be governed by the laws of Australia. Any disputes shall be resolved in the courts of Australia.</p>\n\n        <h2>15. Contact</h2>\n        <p>For questions about these terms, please contact us at support&#64;fetchxrates.com.au</p>\n\n        <div class="disclaimer-box">\n          <h3>\u26A0\uFE0F Important Disclaimers</h3>\n          <p><strong>Not Financial Advice:</strong> This service provides data for informational purposes only and should not be used as the sole basis for financial decisions.</p>\n          <p><strong>Not Affiliated with RBA:</strong> fetchxrates is an independent service and is not affiliated with, endorsed by, or officially connected to the Reserve Bank of Australia.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n', styles: ["/* src/app/pages/terms/terms.component.scss */\n.hero {\n  text-align: center;\n  padding: 5rem 0 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-secondary) 0%,\n      var(--bg-primary) 100%);\n}\n.hero h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.hero .last-updated {\n  color: var(--text-secondary);\n}\n.legal-content {\n  margin: 0 3rem;\n  line-height: 1.8;\n}\n.legal-content h2 {\n  font-size: 1.75rem;\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid var(--border);\n}\n.legal-content h2:first-child {\n  margin-top: 0;\n}\n.legal-content h3 {\n  font-size: 1.25rem;\n  margin-top: 2rem;\n  margin-bottom: 0.75rem;\n}\n.legal-content p {\n  color: var(--text-secondary);\n  margin-bottom: 1rem;\n}\n.legal-content ul {\n  margin-bottom: 1.5rem;\n  padding-left: 2rem;\n}\n.legal-content ul li {\n  color: var(--text-secondary);\n  margin-bottom: 0.5rem;\n}\n.legal-content strong {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.disclaimer-box {\n  margin-top: 3rem;\n  padding: 2rem;\n  background-color: var(--bg-warning);\n  border: 2px solid var(--border-warning);\n  border-radius: 0.75rem;\n}\n.disclaimer-box h3 {\n  color: var(--text-warning);\n  margin-top: 0 !important;\n  margin-bottom: 1rem;\n  padding-bottom: 0;\n  border-bottom: none;\n}\n.disclaimer-box p {\n  margin-bottom: 1rem;\n}\n.disclaimer-box p:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 968px) {\n  .hero h1 {\n    font-size: 2.5rem;\n  }\n  .legal-content h2 {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=terms.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TermsComponent, { className: "TermsComponent", filePath: "src/app/pages/terms/terms.component.ts", lineNumber: 11 });
})();
export {
  TermsComponent
};
//# sourceMappingURL=chunk-YYYQILJH.js.map
