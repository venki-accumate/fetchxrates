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

// src/app/pages/privacy/privacy.component.ts
var PrivacyComponent = class _PrivacyComponent {
  lastUpdated = "2024-01-01";
  static \u0275fac = function PrivacyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrivacyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivacyComponent, selectors: [["app-privacy"]], decls: 184, vars: 1, consts: [[1, "legal-page"], [1, "hero"], [1, "container"], [1, "last-updated"], [1, "section"], [1, "legal-content"], [1, "disclaimer-box"]], template: function PrivacyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Privacy Policy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "h2");
      \u0275\u0275text(11, "1. Introduction");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "p");
      \u0275\u0275text(13, 'fetchxrates ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our API service.');
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "h2");
      \u0275\u0275text(15, "2. Information We Collect");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "h3");
      \u0275\u0275text(17, "Personal Information");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "p");
      \u0275\u0275text(19, "When you register for our service, we collect:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "ul")(21, "li");
      \u0275\u0275text(22, "Name and email address");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "li");
      \u0275\u0275text(24, "Company name (if applicable)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "li");
      \u0275\u0275text(26, "Payment information (processed securely by third-party payment processors)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "li");
      \u0275\u0275text(28, "Account credentials");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "h3");
      \u0275\u0275text(30, "Usage Information");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "p");
      \u0275\u0275text(32, "We automatically collect certain information about your use of the Service:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "ul")(34, "li");
      \u0275\u0275text(35, "API requests (endpoints, timestamps, response codes)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "li");
      \u0275\u0275text(37, "IP addresses");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "li");
      \u0275\u0275text(39, "Browser type and version");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "li");
      \u0275\u0275text(41, "Usage patterns and statistics");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(42, "h3");
      \u0275\u0275text(43, "Cookies and Tracking");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "p");
      \u0275\u0275text(45, "We use cookies and similar tracking technologies to:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "ul")(47, "li");
      \u0275\u0275text(48, "Maintain your session");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "li");
      \u0275\u0275text(50, "Remember your preferences");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "li");
      \u0275\u0275text(52, "Analyze usage patterns");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "li");
      \u0275\u0275text(54, "Improve our Service");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(55, "h2");
      \u0275\u0275text(56, "3. How We Use Your Information");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "p");
      \u0275\u0275text(58, "We use the collected information for:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "ul")(60, "li");
      \u0275\u0275text(61, "Providing and maintaining the Service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(62, "li");
      \u0275\u0275text(63, "Processing payments and managing subscriptions");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(64, "li");
      \u0275\u0275text(65, "Sending service-related communications");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(66, "li");
      \u0275\u0275text(67, "Monitoring and analyzing usage to improve the Service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(68, "li");
      \u0275\u0275text(69, "Detecting and preventing fraud or abuse");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(70, "li");
      \u0275\u0275text(71, "Complying with legal obligations");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(72, "li");
      \u0275\u0275text(73, "Responding to customer support requests");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(74, "h2");
      \u0275\u0275text(75, "4. Data Sharing and Disclosure");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(76, "p");
      \u0275\u0275text(77, "We do not sell your personal information. We may share your information with:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(78, "h3");
      \u0275\u0275text(79, "Service Providers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(80, "ul")(81, "li");
      \u0275\u0275text(82, "Payment processors (for subscription billing)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(83, "li");
      \u0275\u0275text(84, "Cloud hosting providers (AWS)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(85, "li");
      \u0275\u0275text(86, "Analytics services (for usage statistics)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(87, "li");
      \u0275\u0275text(88, "Email service providers (for service communications)");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(89, "h3");
      \u0275\u0275text(90, "Legal Requirements");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "p");
      \u0275\u0275text(92, "We may disclose your information if required by law or in response to valid legal requests.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(93, "h2");
      \u0275\u0275text(94, "5. Data Security");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(95, "p");
      \u0275\u0275text(96, "We implement appropriate technical and organizational measures to protect your information:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(97, "ul")(98, "li");
      \u0275\u0275text(99, "Encryption of data in transit (HTTPS/TLS)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(100, "li");
      \u0275\u0275text(101, "Secure storage of API keys and credentials");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(102, "li");
      \u0275\u0275text(103, "Regular security audits and updates");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(104, "li");
      \u0275\u0275text(105, "Access controls and authentication");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(106, "li");
      \u0275\u0275text(107, "Monitoring for suspicious activity");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(108, "h2");
      \u0275\u0275text(109, "6. Data Retention");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(110, "p");
      \u0275\u0275text(111, "We retain your information for as long as:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(112, "ul")(113, "li");
      \u0275\u0275text(114, "Your account is active");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(115, "li");
      \u0275\u0275text(116, "Needed to provide the Service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(117, "li");
      \u0275\u0275text(118, "Required by law or for legitimate business purposes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(119, "p");
      \u0275\u0275text(120, "You can request deletion of your account and associated data at any time.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(121, "h2");
      \u0275\u0275text(122, "7. Your Rights");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(123, "p");
      \u0275\u0275text(124, "Depending on your location, you may have the following rights:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(125, "ul")(126, "li")(127, "strong");
      \u0275\u0275text(128, "Access:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(129, " Request a copy of your personal information");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(130, "li")(131, "strong");
      \u0275\u0275text(132, "Correction:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(133, " Request correction of inaccurate information");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(134, "li")(135, "strong");
      \u0275\u0275text(136, "Deletion:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(137, " Request deletion of your personal information");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(138, "li")(139, "strong");
      \u0275\u0275text(140, "Portability:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(141, " Request transfer of your data");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(142, "li")(143, "strong");
      \u0275\u0275text(144, "Objection:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(145, " Object to processing of your personal information");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(146, "li")(147, "strong");
      \u0275\u0275text(148, "Withdrawal:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(149, " Withdraw consent at any time");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(150, "p");
      \u0275\u0275text(151, "To exercise these rights, please contact us at privacy@fetchxrates.com.au");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(152, "h2");
      \u0275\u0275text(153, "8. International Data Transfers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(154, "p");
      \u0275\u0275text(155, "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(156, "h2");
      \u0275\u0275text(157, "9. Children's Privacy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(158, "p");
      \u0275\u0275text(159, "Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(160, "h2");
      \u0275\u0275text(161, "10. Third-Party Links");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(162, "p");
      \u0275\u0275text(163, "Our Service may contain links to third-party websites. We are not responsible for the privacy practices of these websites.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(164, "h2");
      \u0275\u0275text(165, "11. Changes to This Policy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(166, "p");
      \u0275\u0275text(167, 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy and updating the "Last updated" date.');
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(168, "h2");
      \u0275\u0275text(169, "12. Contact Us");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(170, "p");
      \u0275\u0275text(171, "If you have questions about this Privacy Policy, please contact us:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(172, "ul")(173, "li");
      \u0275\u0275text(174, "Email: privacy@fetchxrates.com.au");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(175, "li");
      \u0275\u0275text(176, "For general inquiries: support@fetchxrates.com.au");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(177, "div", 6)(178, "h3");
      \u0275\u0275text(179, "\u{1F512} Your Privacy Matters");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(180, "p");
      \u0275\u0275text(181, "We are committed to protecting your privacy and handling your data responsibly. We do not sell your personal information to third parties.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(182, "p");
      \u0275\u0275text(183, "For specific questions about how we handle your data, please don't hesitate to contact our privacy team.");
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Last updated: ", ctx.lastUpdated);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5rem 0 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-secondary) 0%,\n      var(--bg-primary) 100%);\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.hero[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.legal-content[_ngcontent-%COMP%] {\n  margin: 0 3rem;\n  line-height: 1.8;\n}\n.legal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid var(--border);\n}\n.legal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.legal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-top: 2rem;\n  margin-bottom: 0.75rem;\n}\n.legal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 1rem;\n}\n.legal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-left: 2rem;\n}\n.legal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 0.5rem;\n}\n.legal-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.disclaimer-box[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 2px solid var(--accent);\n  border-radius: 0.75rem;\n}\n.disclaimer-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--accent);\n  margin-top: 0 !important;\n  margin-bottom: 1rem;\n  padding-bottom: 0;\n  border-bottom: none;\n}\n.disclaimer-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.disclaimer-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 968px) {\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .legal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=privacy.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrivacyComponent, [{
    type: Component,
    args: [{ selector: "app-privacy", standalone: true, imports: [CommonModule], template: `<div class="legal-page">
  <section class="hero">
    <div class="container">
      <h1>Privacy Policy</h1>
      <p class="last-updated">Last updated: {{ lastUpdated }}</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="legal-content">
        <h2>1. Introduction</h2>
        <p>fetchxrates ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our API service.</p>

        <h2>2. Information We Collect</h2>
        
        <h3>Personal Information</h3>
        <p>When you register for our service, we collect:</p>
        <ul>
          <li>Name and email address</li>
          <li>Company name (if applicable)</li>
          <li>Payment information (processed securely by third-party payment processors)</li>
          <li>Account credentials</li>
        </ul>

        <h3>Usage Information</h3>
        <p>We automatically collect certain information about your use of the Service:</p>
        <ul>
          <li>API requests (endpoints, timestamps, response codes)</li>
          <li>IP addresses</li>
          <li>Browser type and version</li>
          <li>Usage patterns and statistics</li>
        </ul>

        <h3>Cookies and Tracking</h3>
        <p>We use cookies and similar tracking technologies to:</p>
        <ul>
          <li>Maintain your session</li>
          <li>Remember your preferences</li>
          <li>Analyze usage patterns</li>
          <li>Improve our Service</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for:</p>
        <ul>
          <li>Providing and maintaining the Service</li>
          <li>Processing payments and managing subscriptions</li>
          <li>Sending service-related communications</li>
          <li>Monitoring and analyzing usage to improve the Service</li>
          <li>Detecting and preventing fraud or abuse</li>
          <li>Complying with legal obligations</li>
          <li>Responding to customer support requests</li>
        </ul>

        <h2>4. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share your information with:</p>

        <h3>Service Providers</h3>
        <ul>
          <li>Payment processors (for subscription billing)</li>
          <li>Cloud hosting providers (AWS)</li>
          <li>Analytics services (for usage statistics)</li>
          <li>Email service providers (for service communications)</li>
        </ul>

        <h3>Legal Requirements</h3>
        <p>We may disclose your information if required by law or in response to valid legal requests.</p>

        <h2>5. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your information:</p>
        <ul>
          <li>Encryption of data in transit (HTTPS/TLS)</li>
          <li>Secure storage of API keys and credentials</li>
          <li>Regular security audits and updates</li>
          <li>Access controls and authentication</li>
          <li>Monitoring for suspicious activity</li>
        </ul>

        <h2>6. Data Retention</h2>
        <p>We retain your information for as long as:</p>
        <ul>
          <li>Your account is active</li>
          <li>Needed to provide the Service</li>
          <li>Required by law or for legitimate business purposes</li>
        </ul>
        <p>You can request deletion of your account and associated data at any time.</p>

        <h2>7. Your Rights</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of your personal information</li>
          <li><strong>Correction:</strong> Request correction of inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Portability:</strong> Request transfer of your data</li>
          <li><strong>Objection:</strong> Object to processing of your personal information</li>
          <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
        </ul>
        <p>To exercise these rights, please contact us at privacy&#64;fetchxrates.com.au</p>

        <h2>8. International Data Transfers</h2>
        <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.</p>

        <h2>9. Children's Privacy</h2>
        <p>Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>

        <h2>10. Third-Party Links</h2>
        <p>Our Service may contain links to third-party websites. We are not responsible for the privacy practices of these websites.</p>

        <h2>11. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy and updating the "Last updated" date.</p>

        <h2>12. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>Email: privacy&#64;fetchxrates.com.au</li>
          <li>For general inquiries: support&#64;fetchxrates.com.au</li>
        </ul>

        <div class="disclaimer-box">
          <h3>\u{1F512} Your Privacy Matters</h3>
          <p>We are committed to protecting your privacy and handling your data responsibly. We do not sell your personal information to third parties.</p>
          <p>For specific questions about how we handle your data, please don't hesitate to contact our privacy team.</p>
        </div>
      </div>
    </div>
  </section>
</div>
`, styles: ["/* src/app/pages/privacy/privacy.component.scss */\n.hero {\n  text-align: center;\n  padding: 5rem 0 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-secondary) 0%,\n      var(--bg-primary) 100%);\n}\n.hero h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.hero .last-updated {\n  color: var(--text-secondary);\n}\n.legal-content {\n  margin: 0 3rem;\n  line-height: 1.8;\n}\n.legal-content h2 {\n  font-size: 1.75rem;\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid var(--border);\n}\n.legal-content h2:first-child {\n  margin-top: 0;\n}\n.legal-content h3 {\n  font-size: 1.25rem;\n  margin-top: 2rem;\n  margin-bottom: 0.75rem;\n}\n.legal-content p {\n  color: var(--text-secondary);\n  margin-bottom: 1rem;\n}\n.legal-content ul {\n  margin-bottom: 1.5rem;\n  padding-left: 2rem;\n}\n.legal-content ul li {\n  color: var(--text-secondary);\n  margin-bottom: 0.5rem;\n}\n.legal-content ul li strong {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.disclaimer-box {\n  margin-top: 3rem;\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 2px solid var(--accent);\n  border-radius: 0.75rem;\n}\n.disclaimer-box h3 {\n  color: var(--accent);\n  margin-top: 0 !important;\n  margin-bottom: 1rem;\n  padding-bottom: 0;\n  border-bottom: none;\n}\n.disclaimer-box p {\n  margin-bottom: 1rem;\n}\n.disclaimer-box p:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 968px) {\n  .hero h1 {\n    font-size: 2.5rem;\n  }\n  .legal-content h2 {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=privacy.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivacyComponent, { className: "PrivacyComponent", filePath: "src/app/pages/privacy/privacy.component.ts", lineNumber: 11 });
})();
export {
  PrivacyComponent
};
//# sourceMappingURL=chunk-ELL4Q65A.js.map
