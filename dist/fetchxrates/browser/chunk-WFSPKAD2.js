import {
  HttpClient
} from "./chunk-RADNHJCR.js";
import {
  CommonModule,
  Component,
  NgClass,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
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

// src/app/pages/api-spec/api-spec.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.name;
var _forTrack3 = ($index, $item) => $item[0];
var _forTrack4 = ($index, $item) => $item.status + $item.description;
function ApiSpecComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("v", ctx_r0.docs().version);
  }
}
function ApiSpecComponent_Conditional_39_For_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_39_For_1_For_5_Template_button_click_0_listener() {
      const ep_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectEndpoint(ep_r3.id));
    });
    \u0275\u0275elementStart(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ep_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.activeSection() === "endpoint" && ctx_r0.activeEndpointId() === ep_r3.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.methodColor(ep_r3.method));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ep_r3.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r3.path);
  }
}
function ApiSpecComponent_Conditional_39_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ApiSpecComponent_Conditional_39_For_1_For_5_Template, 5, 5, "button", 18, _forTrack1);
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r4.label, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getEndpointsForGroup(group_r4));
  }
}
function ApiSpecComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ApiSpecComponent_Conditional_39_For_1_Template, 6, 2, null, null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.groups);
  }
}
function ApiSpecComponent_Conditional_41_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 33)(2, "span", 4);
    \u0275\u0275text(3, "api");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " REST API ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 35)(10, "span", 36)(11, "span", 4);
    \u0275\u0275text(12, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 36)(15, "span", 4);
    \u0275\u0275text(16, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 37)(19, "span", 4);
    \u0275\u0275text(20, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Bearer Token Auth ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 36)(23, "span", 4);
    \u0275\u0275text(24, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " JSON ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.docs().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.docs().description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" v", ctx_r0.docs().version, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.docs().baseUrl, " ");
  }
}
function ApiSpecComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, ApiSpecComponent_Conditional_41_Conditional_1_Template, 26, 4, "div", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "div", 24)(4, "span", 25);
    \u0275\u0275text(5, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "Live Exchange Rates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Real-time rates sourced from ECB, BOE, RBA, and the US Federal Reserve with up to 14-day fallback for weekends and holidays.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 24)(11, "span", 25);
    \u0275\u0275text(12, "currency_exchange");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14, "Currency Conversion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Single and bulk conversion endpoints. Convert one currency to many targets in a single API call.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 24)(18, "span", 25);
    \u0275\u0275text(19, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "Historical Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Query historical exchange rates for any past date \u2014 ideal for financial reporting and analysis.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 24)(25, "span", 25);
    \u0275\u0275text(26, "dataset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28, "Reference Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "Access the full list of supported currencies, base currencies, and API metadata at any time.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 26)(32, "div", 27)(33, "span", 28);
    \u0275\u0275text(34, "Base URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "code", 29);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 27)(38, "span", 28);
    \u0275\u0275text(39, "Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "code", 29);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 27)(43, "span", 28);
    \u0275\u0275text(44, "Protocol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "code", 29);
    \u0275\u0275text(46, "HTTPS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 27)(48, "span", 28);
    \u0275\u0275text(49, "Response Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "code", 29);
    \u0275\u0275text(51, "application/json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 27)(53, "span", 28);
    \u0275\u0275text(54, "Authentication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "code", 29);
    \u0275\u0275text(56, "Bearer Token (AWS Cognito JWT)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 30)(58, "button", 31);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_41_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectSection("quickstart"));
    });
    \u0275\u0275elementStart(59, "span", 4);
    \u0275\u0275text(60, "flash_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " Get Started ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 32);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_41_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectEndpoint("latest"));
    });
    \u0275\u0275elementStart(63, "span", 4);
    \u0275\u0275text(64, "api");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, " Browse API Reference ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.docs() ? 1 : -1);
    \u0275\u0275advance(35);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.docs()) == null ? null : tmp_2_0.baseUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.docs()) == null ? null : tmp_3_0.version);
  }
}
function ApiSpecComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 38)(2, "h1");
    \u0275\u0275text(3, "Quickstart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Make your first API call in under 5 minutes.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 39)(7, "div", 40);
    \u0275\u0275text(8, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 41)(10, "h3");
    \u0275\u0275text(11, "Sign up and get your API key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, "Create an account at ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15, "fetchxrates.com");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " and subscribe to a plan. Your JWT token is available in the dashboard under ");
    \u0275\u0275elementStart(17, "em");
    \u0275\u0275text(18, "API Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, ". Tokens are issued via AWS Cognito after sign-in.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 42)(21, "span", 4);
    \u0275\u0275text(22, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " View pricing plans ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 39)(25, "div", 40);
    \u0275\u0275text(26, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 41)(28, "h3");
    \u0275\u0275text(29, "Make your first request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31, "Call the ");
    \u0275\u0275elementStart(32, "code", 43);
    \u0275\u0275text(33, "/api/latest");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " endpoint to retrieve the latest exchange rates for a base currency.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 44)(36, "div", 45)(37, "span", 4);
    \u0275\u0275text(38, "terminal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " cURL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "pre", 46)(41, "code")(42, "span", 47);
    \u0275\u0275text(43, "curl");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " -X ");
    \u0275\u0275elementStart(45, "span", 47);
    \u0275\u0275text(46, "GET");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " \\\n  ");
    \u0275\u0275elementStart(48, "span", 48);
    \u0275\u0275text(49, '"https://uapi.fetchxrates.com/api/latest?base=USD"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " \\\n  -H ");
    \u0275\u0275elementStart(51, "span", 49);
    \u0275\u0275text(52, '"Authorization: Bearer YOUR_JWT_TOKEN"');
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(53, "div", 39)(54, "div", 40);
    \u0275\u0275text(55, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 41)(57, "h3");
    \u0275\u0275text(58, "Handle the response");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p");
    \u0275\u0275text(60, "A successful response returns ");
    \u0275\u0275elementStart(61, "code", 43);
    \u0275\u0275text(62, "200 OK");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " with a JSON body containing the base currency, date, and rates object.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 44)(65, "div", 45)(66, "span", 4);
    \u0275\u0275text(67, "output");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " Response ");
    \u0275\u0275elementStart(69, "span", 50);
    \u0275\u0275text(70, "200 OK");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "pre", 46)(72, "code")(73, "span", 51);
    \u0275\u0275text(74, '{\n  "base": "USD",\n  "date": "2026-03-19",\n  "rates": {\n    "EUR": 0.9261,\n    "GBP": 0.7916,\n    "JPY": 149.82,\n    "AUD": 1.5912,\n    "CAD": 1.3571,\n    "CHF": 0.8974\n  }\n}');
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(75, "div", 39)(76, "div", 40);
    \u0275\u0275text(77, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 41)(79, "h3");
    \u0275\u0275text(80, "Explore more endpoints");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p");
    \u0275\u0275text(82, "Now that you're up and running, explore historical rates, bulk conversion, and reference data endpoints.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 52)(84, "button", 53);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_42_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectSection("authentication"));
    });
    \u0275\u0275elementStart(85, "span", 4);
    \u0275\u0275text(86, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(87, " Authentication Guide ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "button", 53);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_42_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectEndpoint("convert"));
    });
    \u0275\u0275elementStart(89, "span", 4);
    \u0275\u0275text(90, "currency_exchange");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91, " Convert Currencies ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "button", 53);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_42_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectEndpoint("history"));
    });
    \u0275\u0275elementStart(93, "span", 4);
    \u0275\u0275text(94, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, " Historical Rates ");
    \u0275\u0275elementEnd()()()()();
  }
}
function ApiSpecComponent_Conditional_43_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "span", 62);
    \u0275\u0275text(3, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 61)(7, "span", 62);
    \u0275\u0275text(8, "Header");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "code", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 61)(12, "span", 62);
    \u0275\u0275text(13, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 65);
    \u0275\u0275text(15, "Yes \u2014 all endpoints");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 66)(17, "span", 4);
    \u0275\u0275text(18, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.docs().authentication.type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.docs().authentication.header);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.docs().authentication.notes);
  }
}
function ApiSpecComponent_Conditional_43_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_43_For_16_Template_button_click_0_listener() {
      const lang_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setCodeLang(lang_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.activeCodeLang() === lang_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.codeLangLabels[lang_r9], " ");
  }
}
function ApiSpecComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 38)(2, "h1");
    \u0275\u0275text(3, "Authentication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "All FetchXRates API requests require a valid Bearer token issued via AWS Cognito.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ApiSpecComponent_Conditional_43_Conditional_6_Template, 21, 3);
    \u0275\u0275elementStart(7, "h3", 54);
    \u0275\u0275text(8, "How to authenticate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 55);
    \u0275\u0275text(10, "Include your JWT token in the ");
    \u0275\u0275elementStart(11, "code", 43);
    \u0275\u0275text(12, "Authorization");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " header of every request:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 56);
    \u0275\u0275repeaterCreate(15, ApiSpecComponent_Conditional_43_For_16_Template, 2, 3, "button", 57, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 44)(18, "div", 45)(19, "span", 4);
    \u0275\u0275text(20, "terminal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementStart(22, "button", 58);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_43_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(ctx_r0.authCodeSample(ctx_r0.activeCodeLang()), "auth-" + ctx_r0.activeCodeLang()));
    });
    \u0275\u0275elementStart(23, "span", 4);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "pre", 46)(27, "code");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 59)(30, "h3");
    \u0275\u0275text(31, "Token tips");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ul")(33, "li");
    \u0275\u0275text(34, "Tokens are time-limited \u2014 refresh them via your Cognito session before expiry.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "Never expose your token in client-side code or public repositories.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "Each subscription plan has a rate limit \u2014 see your dashboard for current usage.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40, "A ");
    \u0275\u0275elementStart(41, "code", 43);
    \u0275\u0275text(42, "401 Unauthorized");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " response usually means your token has expired.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.docs() ? 6 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r0.codeLangs);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.codeLangLabels[ctx_r0.activeCodeLang()], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.copiedId() === "auth-" + ctx_r0.activeCodeLang() ? "check" : "content_copy");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.copiedId() === "auth-" + ctx_r0.activeCodeLang() ? "Copied!" : "Copy", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.authCodeSample(ctx_r0.activeCodeLang()));
  }
}
function ApiSpecComponent_Conditional_44_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Weekends & Holidays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.docs().rateDataNotes.weekendsAndHolidays);
  }
}
function ApiSpecComponent_Conditional_44_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "pin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Precision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.docs().rateDataNotes.precision);
  }
}
function ApiSpecComponent_Conditional_44_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Cross-Rate Computation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.docs().rateDataNotes.crossRates);
  }
}
function ApiSpecComponent_Conditional_44_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Data Sources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.docs().rateDataNotes.dataSources);
  }
}
function ApiSpecComponent_Conditional_44_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 68)(1, "div", 69);
    \u0275\u0275conditionalCreate(2, ApiSpecComponent_Conditional_44_Conditional_10_Conditional_2_Template, 8, 1, "div", 70);
    \u0275\u0275conditionalCreate(3, ApiSpecComponent_Conditional_44_Conditional_10_Conditional_3_Template, 8, 1, "div", 70);
    \u0275\u0275conditionalCreate(4, ApiSpecComponent_Conditional_44_Conditional_10_Conditional_4_Template, 8, 1, "div", 70);
    \u0275\u0275conditionalCreate(5, ApiSpecComponent_Conditional_44_Conditional_10_Conditional_5_Template, 8, 1, "div", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.docs().rateDataNotes.weekendsAndHolidays ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.docs().rateDataNotes.precision ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.docs().rateDataNotes.crossRates ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.docs().rateDataNotes.dataSources ? 5 : -1);
  }
}
function ApiSpecComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 22)(2, "span", 33)(3, "span", 4);
    \u0275\u0275text(4, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Important Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1");
    \u0275\u0275text(7, "Rate Data Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 34);
    \u0275\u0275text(9, "Key facts about how exchange rate data is sourced, computed, and updated across all API endpoints.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, ApiSpecComponent_Conditional_44_Conditional_10_Template, 6, 4, "section", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.docs()) == null ? null : tmp_1_0.rateDataNotes) ? 10 : -1);
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_14_For_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", param_r12.format, ")");
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_14_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_14_For_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "optional");
    \u0275\u0275elementEnd();
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_14_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "span", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 87);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_14_For_18_Conditional_5_Template, 2, 1, "em", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275conditionalCreate(7, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_14_For_18_Conditional_7_Template, 2, 0, "span", 89)(8, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_14_For_18_Conditional_8_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 91);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 92);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const param_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r12.type);
    \u0275\u0275advance();
    \u0275\u0275conditional(param_r12.format ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(param_r12.required ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(param_r12.default ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r12.description);
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 80)(1, "h3", 81)(2, "span", 4);
    \u0275\u0275text(3, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Query Parameters ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 83)(6, "div", 84)(7, "span");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(17, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_14_For_18_Template, 13, 6, "div", 85, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ep_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ep_r11.parameters);
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_15_For_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_15_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "optional");
    \u0275\u0275elementEnd();
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_15_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "span", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 87);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275conditionalCreate(6, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_15_For_18_Conditional_6_Template, 2, 0, "span", 89)(7, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_15_For_18_Conditional_7_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 92);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r13[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r13[1].type);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(entry_r13[1].required ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r13[1].description);
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 80)(1, "h3", 81)(2, "span", 4);
    \u0275\u0275text(3, "input");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Request Body ");
    \u0275\u0275elementStart(5, "code", 93);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 83)(8, "div", 94)(9, "span");
    \u0275\u0275text(10, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(17, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_15_For_18_Template, 10, 4, "div", 95, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ep_r11 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ep_r11.requestBody.contentType);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r0.schemaEntries(ep_r11.requestBody.schema));
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_45_Conditional_0_For_23_Template_button_click_0_listener() {
      const lang_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.setCodeLang(lang_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.activeCodeLang() === lang_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.codeLangLabels[lang_r15], " ");
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "span", 4);
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " With optional date parameter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "pre", 97)(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ep_r11 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.generateCodeSampleAlt(ep_r11, ctx_r0.activeCodeLang()));
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "span", 4);
    \u0275\u0275text(3, "output");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Response ");
    \u0275\u0275elementStart(5, "span", 98);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ep_r11 = \u0275\u0275nextContext();
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(ctx_r0.formatJson(ep_r11.sampleResponse.body), "res-" + ep_r11.id));
    });
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "pre", 46)(12, "code")(13, "span", 51);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ep_r11 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r0.statusColor(ep_r11.sampleResponse.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ep_r11.sampleResponse.status, " OK ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.copiedId() === "res-" + ep_r11.id ? "check" : "content_copy");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.copiedId() === "res-" + ep_r11.id ? "Copied!" : "Copy", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatJson(ep_r11.sampleResponse.body));
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_39_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "span", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 102);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const err_r17 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.statusColor(err_r17.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(err_r17.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(err_r17.description);
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 80)(1, "h3", 81)(2, "span", 4);
    \u0275\u0275text(3, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Error Responses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 99);
    \u0275\u0275repeaterCreate(6, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_39_For_7_Template, 5, 3, "div", 100, _forTrack4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ep_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ep_r11.errorResponses);
  }
}
function ApiSpecComponent_Conditional_45_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "span", 74);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code", 75);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 76);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_45_Conditional_0_Template_button_click_6_listener() {
      const ep_r11 = \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(ctx_r0.resolveUrlPublic(ep_r11), "path-" + ep_r11.id));
    });
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "h2", 77);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 78);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 79);
    \u0275\u0275conditionalCreate(14, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_14_Template, 19, 0, "section", 80);
    \u0275\u0275conditionalCreate(15, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_15_Template, 19, 1, "section", 80);
    \u0275\u0275elementStart(16, "section", 80)(17, "h3", 81)(18, "span", 4);
    \u0275\u0275text(19, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Code Samples ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 56);
    \u0275\u0275repeaterCreate(22, ApiSpecComponent_Conditional_45_Conditional_0_For_23_Template, 2, 3, "button", 57, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 82)(25, "div", 44)(26, "div", 45)(27, "span", 4);
    \u0275\u0275text(28, "terminal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementStart(30, "button", 58);
    \u0275\u0275listener("click", function ApiSpecComponent_Conditional_45_Conditional_0_Template_button_click_30_listener() {
      const ep_r11 = \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(ctx_r0.generateCodeSample(ep_r11, ctx_r0.activeCodeLang()), "code-" + ep_r11.id));
    });
    \u0275\u0275elementStart(31, "span", 4);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "pre", 46)(35, "code");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(37, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_37_Template, 7, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(38, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_38_Template, 15, 5, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(39, ApiSpecComponent_Conditional_45_Conditional_0_Conditional_39_Template, 8, 0, "section", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ep_r11 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.methodColor(ep_r11.method));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ep_r11.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r11.path);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.copiedId() === "path-" + ep_r11.id ? "check" : "content_copy");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r11.summary);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r11.description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ep_r11.parameters && ep_r11.parameters.length > 0 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ep_r11.requestBody ? 15 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.codeLangs);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.codeLangLabels[ctx_r0.activeCodeLang()], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.copiedId() === "code-" + ep_r11.id ? "check" : "content_copy");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.copiedId() === "code-" + ep_r11.id ? "Copied!" : "Copy", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.generateCodeSample(ep_r11, ctx_r0.activeCodeLang()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ep_r11.sampleRequestWithDate ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ep_r11.sampleResponse ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ep_r11.errorResponses && ep_r11.errorResponses.length > 0 ? 39 : -1);
  }
}
function ApiSpecComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApiSpecComponent_Conditional_45_Conditional_0_Template, 40, 15);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.activeEndpoint()) ? 0 : -1, tmp_1_0);
  }
}
var ENDPOINT_GROUPS = [
  {
    label: "Rates",
    icon: "trending_up",
    ids: ["latest", "history"]
  },
  {
    label: "Conversion",
    icon: "currency_exchange",
    ids: ["convert", "convert-multiple"]
  },
  {
    label: "Reference Data",
    icon: "dataset",
    ids: ["currencies", "supported-currencies", "base-currencies"]
  },
  {
    label: "System",
    icon: "settings",
    ids: ["metadata", "docs", "healthcheck"]
  }
];
var ApiSpecComponent = class _ApiSpecComponent {
  http;
  docs = signal(null, ...ngDevMode ? [{ debugName: "docs" }] : []);
  activeSection = signal("introduction", ...ngDevMode ? [{ debugName: "activeSection" }] : []);
  activeEndpointId = signal("latest", ...ngDevMode ? [{ debugName: "activeEndpointId" }] : []);
  activeCodeLang = signal("curl", ...ngDevMode ? [{ debugName: "activeCodeLang" }] : []);
  copiedId = signal(null, ...ngDevMode ? [{ debugName: "copiedId" }] : []);
  groups = ENDPOINT_GROUPS;
  codeLangs = ["curl", "javascript", "python", "php"];
  codeLangLabels = {
    curl: "cURL",
    javascript: "JavaScript",
    python: "Python",
    php: "PHP"
  };
  activeEndpoint = computed(() => {
    const d = this.docs();
    if (!d)
      return null;
    return d.endpoints.find((e) => e.id === this.activeEndpointId()) ?? null;
  }, ...ngDevMode ? [{ debugName: "activeEndpoint" }] : []);
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get("assets/rate-api-docs.json").subscribe({
      next: (data) => this.docs.set(data),
      error: (err) => console.error("[ApiSpec] Failed to load docs JSON", err)
    });
  }
  selectSection(section) {
    this.activeSection.set(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  selectEndpoint(id) {
    this.activeEndpointId.set(id);
    this.activeSection.set("endpoint");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  setCodeLang(lang) {
    this.activeCodeLang.set(lang);
  }
  getEndpointsForGroup(group) {
    const d = this.docs();
    if (!d)
      return [];
    return d.endpoints.filter((e) => group.ids.includes(e.id));
  }
  methodColor(method) {
    return method === "GET" ? "method-get" : "method-post";
  }
  statusColor(status) {
    if (status >= 200 && status < 300)
      return "status-2xx";
    if (status >= 400 && status < 500)
      return "status-4xx";
    return "status-5xx";
  }
  formatJson(value) {
    return JSON.stringify(value, null, 2);
  }
  copyToClipboard(text, key) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedId.set(key);
      setTimeout(() => this.copiedId.set(null), 2e3);
    });
  }
  schemaEntries(schema) {
    return Object.entries(schema);
  }
  /** Public alias for use in template (private methods aren't accessible from template). */
  resolveUrlPublic(ep) {
    return this.resolveUrl(ep);
  }
  /** Code sample for the Authentication section showing how to set the Bearer header. */
  authCodeSample(lang) {
    const base = this.docs()?.baseUrl ?? "https://uapi.fetchxrates.com/api";
    const url = base.replace(/\/api.*$/, "") + "/api/latest?base=USD";
    const token = "YOUR_JWT_TOKEN";
    switch (lang) {
      case "curl":
        return `curl -X GET \\
  "${url}" \\
  -H "Authorization: Bearer ${token}"`;
      case "javascript":
        return `const response = await fetch(
  "${url}",
  {
    headers: {
      "Authorization": "Bearer ${token}"
    }
  }
);
const data = await response.json();
console.log(data);`;
      case "python":
        return `import requests

response = requests.get(
    "${url}",
    headers={"Authorization": "Bearer ${token}"}
)
data = response.json()
print(data)`;
      case "php":
        return `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "${url}");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer ${token}"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
print_r($data);
?>`;
    }
  }
  /** Code sample for the alternate (with-date) sample request variant. */
  generateCodeSampleAlt(ep, lang) {
    if (!ep.sampleRequestWithDate)
      return "";
    const altEp = __spreadProps(__spreadValues({}, ep), { sampleRequest: ep.sampleRequestWithDate });
    return this.generateCodeSample(altEp, lang);
  }
  /** Builds the absolute URL for a given endpoint's sample request. */
  resolveUrl(ep) {
    const raw = ep.sampleRequest?.url ?? ep.path;
    const pathPart = raw.includes(" ") ? raw.split(" ").slice(1).join(" ") : raw;
    const base = this.docs()?.baseUrl ?? "";
    const domain = base.replace(/\/api.*$/, "");
    return domain + pathPart;
  }
  generateCodeSample(ep, lang) {
    const url = this.resolveUrl(ep);
    const method = ep.method;
    const body = ep.sampleRequest?.body;
    const token = "YOUR_JWT_TOKEN";
    switch (lang) {
      case "curl": {
        const lines = [
          `curl -X ${method} \\`,
          `  "${url}" \\`,
          `  -H "Authorization: Bearer ${token}"`
        ];
        if (body) {
          lines[lines.length - 1] += " \\";
          lines.push(`  -H "Content-Type: application/json" \\`);
          lines.push(`  -d '${JSON.stringify(body)}'`);
        }
        return lines.join("\n");
      }
      case "javascript": {
        const hdrs = [`    "Authorization": "Bearer ${token}"`];
        if (body)
          hdrs.push(`    "Content-Type": "application/json"`);
        const opts = [];
        if (method !== "GET")
          opts.push(`    method: "${method}"`);
        opts.push(`    headers: {
${hdrs.join(",\n")}
    }`);
        if (body) {
          const bodyStr = JSON.stringify(body, null, 2).split("\n").join("\n    ");
          opts.push(`    body: JSON.stringify(${bodyStr})`);
        }
        return [
          `const response = await fetch(`,
          `  "${url}",`,
          `  {`,
          opts.map((o) => "  " + o).join(",\n"),
          `  }`,
          `);`,
          `const data = await response.json();`,
          `console.log(data);`
        ].join("\n");
      }
      case "python": {
        const [base, qs] = url.split("?");
        const params = {};
        if (qs) {
          qs.split("&").forEach((p) => {
            const [k, v] = p.split("=");
            if (k)
              params[k] = decodeURIComponent(v ?? "");
          });
        }
        const lines = ["import requests", ""];
        const verb = method.toLowerCase();
        lines.push(`response = requests.${verb}(`);
        lines.push(`    "${base}",`);
        if (body) {
          lines.push(`    headers={`);
          lines.push(`        "Authorization": "Bearer ${token}",`);
          lines.push(`        "Content-Type": "application/json"`);
          lines.push(`    },`);
          lines.push(`    json=${JSON.stringify(body, null, 4).split("\n").join("\n    ")}`);
        } else {
          const hasParams = Object.keys(params).length > 0;
          lines.push(`    headers={"Authorization": "Bearer ${token}"}${hasParams ? "," : ""}`);
          if (hasParams)
            lines.push(`    params=${JSON.stringify(params)}`);
        }
        lines.push(")");
        lines.push("data = response.json()");
        lines.push("print(data)");
        return lines.join("\n");
      }
      case "php": {
        const hdrs = [`    "Authorization: Bearer ${token}"`];
        if (body)
          hdrs.push(`    "Content-Type: application/json"`);
        const lines = [
          "<?php",
          "$ch = curl_init();",
          `curl_setopt($ch, CURLOPT_URL, "${url}");`
        ];
        if (method !== "GET") {
          lines.push(`curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${method}");`);
        }
        lines.push(`curl_setopt($ch, CURLOPT_HTTPHEADER, [
${hdrs.join(",\n")}
]);`);
        if (body) {
          lines.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${JSON.stringify(body)}');`);
        }
        lines.push("curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);");
        lines.push("$response = curl_exec($ch);");
        lines.push("curl_close($ch);");
        lines.push("$data = json_decode($response, true);");
        lines.push("print_r($data);");
        lines.push("?>");
        return lines.join("\n");
      }
    }
  }
  static \u0275fac = function ApiSpecComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiSpecComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiSpecComponent, selectors: [["app-api-spec"]], decls: 46, vars: 15, consts: [[1, "api-spec-page"], [1, "api-page-header"], [1, "api-page-header__inner"], [1, "api-page-header__brand"], [1, "material-icons"], [1, "api-page-header__title"], [1, "api-page-header__version"], ["title", "Download Postman Collection \u2014 coming soon", "disabled", "", 1, "postman-btn"], [1, "postman-btn__soon"], [1, "api-body"], [1, "sidebar"], [1, "sidebar__section"], [1, "sidebar__nav-item", 3, "click"], [1, "sidebar__section", "sidebar__section--ref"], [1, "sidebar__ref-label"], [1, "detail-panel"], [1, "doc-section"], [1, "sidebar__group-label"], [1, "sidebar__ep", 3, "active"], [1, "sidebar__ep", 3, "click"], [1, "sidebar__ep-badge", 3, "ngClass"], [1, "sidebar__ep-path"], [1, "doc-section__hero"], [1, "intro-feature-grid"], [1, "intro-feature-card"], [1, "material-icons", "intro-feature-card__icon"], [1, "intro-info-table"], [1, "intro-info-row"], [1, "intro-info-key"], [1, "intro-info-val"], [1, "intro-cta-row"], [1, "btn-primary", 3, "click"], [1, "btn-outline", 3, "click"], [1, "doc-hero-badge"], [1, "doc-hero-desc"], [1, "doc-hero-chips"], [1, "meta-chip"], [1, "meta-chip", "meta-chip--auth"], [1, "doc-section__header"], [1, "qs-step"], [1, "qs-step__num"], [1, "qs-step__body"], ["href", "https://fetchxrates.com/pricing", "target", "_blank", "rel", "noopener", 1, "qs-link"], [1, "inline-code"], [1, "code-col"], [1, "code-block-header"], [1, "code-block"], [1, "token-method"], [1, "token-url"], [1, "token-header"], [1, "status-pill", "status-2xx"], [1, "token-json"], [1, "qs-next-links"], [1, "qs-next-btn", 3, "click"], [1, "auth-sub-heading"], [1, "auth-sub-desc"], [1, "lang-tabs"], [1, "lang-tab", 3, "active"], [1, "copy-btn", "copy-btn--sm", 3, "click"], [1, "auth-tips"], [1, "auth-info-table"], [1, "auth-info-row"], [1, "auth-info-key"], [1, "auth-info-val"], [1, "auth-info-code"], [1, "badge-required", 2, "width", "fit-content"], [1, "auth-note-block"], [1, "lang-tab", 3, "click"], [1, "notes-section"], [1, "notes-grid"], [1, "note-card", "note-card--full"], [1, "material-icons", "note-icon"], [1, "ep-header"], [1, "ep-header__top"], [1, "method-badge", 3, "ngClass"], [1, "ep-path"], ["title", "Copy full URL", 1, "copy-btn", 3, "click"], [1, "ep-summary"], [1, "ep-description"], [1, "ep-body"], [1, "ep-section"], [1, "ep-section__title"], [1, "code-cols"], [1, "params-table"], [1, "params-table__header"], [1, "params-table__row"], [1, "param-name"], [1, "param-type"], [1, "param-format"], [1, "badge-required"], [1, "badge-optional"], [1, "param-default"], [1, "param-desc"], [1, "content-type"], [1, "params-table__header", "params-table__header--4col"], [1, "params-table__row", "params-table__row--4col"], [1, "code-block-header", "code-block-header--secondary"], [1, "code-block", "code-block--secondary"], [1, "status-pill", 3, "ngClass"], [1, "error-table"], [1, "error-row"], [1, "error-status", 3, "ngClass"], [1, "error-desc"]], template: function ApiSpecComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "api");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "FetchXRates API");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, ApiSpecComponent_Conditional_8_Template, 2, 1, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 7)(10, "span", 4);
      \u0275\u0275text(11, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Download Postman Collection ");
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14, "Soon");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "aside", 10)(17, "div", 11)(18, "button", 12);
      \u0275\u0275listener("click", function ApiSpecComponent_Template_button_click_18_listener() {
        return ctx.selectSection("introduction");
      });
      \u0275\u0275elementStart(19, "span", 4);
      \u0275\u0275text(20, "menu_book");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Introduction ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 12);
      \u0275\u0275listener("click", function ApiSpecComponent_Template_button_click_22_listener() {
        return ctx.selectSection("quickstart");
      });
      \u0275\u0275elementStart(23, "span", 4);
      \u0275\u0275text(24, "flash_on");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Quickstart ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 12);
      \u0275\u0275listener("click", function ApiSpecComponent_Template_button_click_26_listener() {
        return ctx.selectSection("authentication");
      });
      \u0275\u0275elementStart(27, "span", 4);
      \u0275\u0275text(28, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " Authentication ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 12);
      \u0275\u0275listener("click", function ApiSpecComponent_Template_button_click_30_listener() {
        return ctx.selectSection("important");
      });
      \u0275\u0275elementStart(31, "span", 4);
      \u0275\u0275text(32, "warning_amber");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " Important Information ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 13)(35, "div", 14)(36, "span", 4);
      \u0275\u0275text(37, "api");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " API Reference ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(39, ApiSpecComponent_Conditional_39_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "main", 15);
      \u0275\u0275conditionalCreate(41, ApiSpecComponent_Conditional_41_Template, 66, 3, "div", 16);
      \u0275\u0275conditionalCreate(42, ApiSpecComponent_Conditional_42_Template, 96, 0, "div", 16);
      \u0275\u0275conditionalCreate(43, ApiSpecComponent_Conditional_43_Template, 44, 5, "div", 16);
      \u0275\u0275conditionalCreate(44, ApiSpecComponent_Conditional_44_Template, 11, 1, "div", 16);
      \u0275\u0275conditionalCreate(45, ApiSpecComponent_Conditional_45_Template, 1, 1);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.docs() ? 8 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ctx.activeSection() === "introduction");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeSection() === "quickstart");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeSection() === "authentication");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeSection() === "important");
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.docs() ? 39 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeSection() === "introduction" ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeSection() === "quickstart" ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeSection() === "authentication" ? 43 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeSection() === "important" ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeSection() === "endpoint" ? 45 : -1);
    }
  }, dependencies: [CommonModule, NgClass], styles: ['\n\n.api-spec-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-primary);\n}\n.api-page-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: var(--bg-secondary);\n  border-bottom: 1px solid var(--border);\n  padding: 0.65rem 1.5rem;\n}\n.api-page-header__inner[_ngcontent-%COMP%] {\n  max-width: 1360px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.api-page-header__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.api-page-header__brand[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--accent);\n}\n.api-page-header__title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.api-page-header__version[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--accent);\n  background: rgba(34, 183, 27, 0.1);\n  border: 1px solid rgba(34, 183, 27, 0.25);\n  border-radius: 20px;\n  padding: 0.15rem 0.55rem;\n}\n.postman-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  padding: 0.4rem 0.9rem;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.postman-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.postman-btn__soon[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  padding: 0.1rem 0.35rem;\n  border-radius: 3px;\n  background: rgba(251, 191, 36, 0.12);\n  color: #fbbf24;\n  border: 1px solid rgba(251, 191, 36, 0.25);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.api-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 272px 1fr;\n  margin: 0 1rem;\n  align-items: start;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 49px;\n  height: calc(100vh - 49px);\n  overflow-y: auto;\n  border-right: 1px solid var(--border);\n  scrollbar-width: thin;\n  scrollbar-color: var(--border) transparent;\n}\n.sidebar__section[_ngcontent-%COMP%] {\n  padding: 0.75rem 0 0.5rem;\n  border-bottom: 1px solid var(--border);\n}\n.sidebar__section--ref[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.sidebar__nav-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.55rem 1.25rem;\n  background: none;\n  border: none;\n  border-left: 2px solid transparent;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.sidebar__nav-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.sidebar__nav-item[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: var(--bg-card);\n}\n.sidebar__nav-item.active[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n  background: rgba(34, 183, 27, 0.06);\n  border-left-color: var(--accent);\n}\n.sidebar__ref-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--accent);\n  padding: 0.6rem 1.25rem 0.4rem;\n}\n.sidebar__ref-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.sidebar__group-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  padding: 0.65rem 1.25rem 0.3rem;\n}\n.sidebar__group-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.sidebar__ep[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.4rem 1.25rem;\n  background: none;\n  border: none;\n  border-left: 2px solid transparent;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s, border-color 0.15s;\n}\n.sidebar__ep[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card);\n}\n.sidebar__ep.active[_ngcontent-%COMP%] {\n  background: rgba(34, 183, 27, 0.07);\n  border-left-color: var(--accent);\n}\n.sidebar__ep-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.62rem;\n  font-weight: 700;\n  padding: 0.12rem 0.38rem;\n  border-radius: 4px;\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  min-width: 36px;\n  text-align: center;\n}\n.sidebar__ep-path[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar__ep.active[_ngcontent-%COMP%]   .sidebar__ep-path[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.detail-panel[_ngcontent-%COMP%] {\n  padding: 2.5rem 2.75rem 6rem;\n  min-height: calc(100vh - 49px);\n}\n.doc-section[_ngcontent-%COMP%] {\n  max-width: 860px;\n}\n.doc-section__header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  padding-bottom: 1.75rem;\n  border-bottom: 1px solid var(--border);\n}\n.doc-section__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.doc-section__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n}\n.doc-section__hero[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--border);\n}\n.doc-section__hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.65rem;\n  line-height: 1.2;\n}\n.doc-hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--accent);\n  background: rgba(34, 183, 27, 0.1);\n  border: 1px solid rgba(34, 183, 27, 0.25);\n  border-radius: 20px;\n  padding: 0.25rem 0.7rem;\n  margin-bottom: 1rem;\n}\n.doc-hero-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.doc-hero-desc[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  max-width: 680px;\n  margin-bottom: 1.25rem;\n}\n.doc-hero-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 0.3rem 0.7rem;\n}\n.meta-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.meta-chip--auth[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  border-color: rgba(251, 191, 36, 0.3);\n  background: rgba(251, 191, 36, 0.06);\n}\n.intro-feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.intro-feature-card[_ngcontent-%COMP%] {\n  padding: 1.1rem 1.25rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  transition: border-color 0.15s;\n}\n.intro-feature-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(34, 183, 27, 0.3);\n}\n.intro-feature-card__icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: var(--accent);\n  display: block;\n  margin-bottom: 0.6rem;\n}\n.intro-feature-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  color: var(--text-primary);\n  margin-bottom: 0.4rem;\n}\n.intro-feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin: 0;\n}\n.intro-info-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 2rem;\n}\n.intro-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 0.7rem 1.1rem;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n}\n.intro-info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.intro-info-key[_ngcontent-%COMP%] {\n  min-width: 160px;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.intro-info-val[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.83rem;\n  color: var(--text-primary);\n  background: var(--bg-secondary);\n  padding: 0.15rem 0.5rem;\n  border-radius: 5px;\n  border: 1px solid var(--border);\n}\n.intro-cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.3rem;\n  background: var(--accent);\n  color: #000;\n  font-size: 0.875rem;\n  font-weight: 700;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.3rem;\n  background: none;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.qs-step[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  margin-bottom: 2.25rem;\n}\n.qs-step__num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: rgba(34, 183, 27, 0.12);\n  border: 1.5px solid rgba(34, 183, 27, 0.35);\n  color: var(--accent);\n  font-size: 0.85rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.1rem;\n}\n.qs-step__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.qs-step__body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.qs-step__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  margin-bottom: 0.75rem;\n}\n.qs-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.83rem;\n  color: var(--accent);\n  text-decoration: none;\n  font-weight: 600;\n}\n.qs-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.qs-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.qs-next-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n  margin-top: 0.5rem;\n}\n.qs-next-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 0.9rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  color: var(--text-secondary);\n  font-size: 0.83rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: border-color 0.15s, color 0.15s;\n}\n.qs-next-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.qs-next-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.auth-info-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 1.25rem;\n}\n.auth-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 0.75rem 1.1rem;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n}\n.auth-info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.auth-info-key[_ngcontent-%COMP%] {\n  min-width: 100px;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.auth-info-val[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.auth-info-code[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.82rem;\n  color: var(--accent);\n  background: var(--bg-secondary);\n  padding: 0.2rem 0.55rem;\n  border-radius: 5px;\n  border: 1px solid var(--border);\n}\n.auth-note-block[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.9rem 1rem;\n  background: rgba(251, 191, 36, 0.05);\n  border: 1px solid rgba(251, 191, 36, 0.2);\n  border-radius: 8px;\n  margin-bottom: 1.75rem;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  line-height: 1.65;\n}\n.auth-note-block[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  flex-shrink: 0;\n  margin-top: 0.05rem;\n}\n.auth-note-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.auth-sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.4rem;\n  margin-top: 1.75rem;\n}\n.auth-sub-desc[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  margin-bottom: 1rem;\n}\n.auth-tips[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.25rem 1.5rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n}\n.auth-tips[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--text-muted);\n  margin-bottom: 0.75rem;\n}\n.auth-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n  margin: 0;\n}\n.auth-tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  margin-bottom: 0.4rem;\n}\n.lang-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  width: fit-content;\n  border: 1px solid var(--border);\n  border-bottom: none;\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n  margin-bottom: 0;\n}\n.lang-tab[_ngcontent-%COMP%] {\n  padding: 0.45rem 1rem;\n  background: var(--bg-secondary);\n  border: none;\n  border-right: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.lang-tab[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.lang-tab[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card);\n  color: var(--text-secondary);\n}\n.lang-tab.active[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--accent);\n  border-bottom: 2px solid var(--accent);\n  margin-bottom: -1px;\n}\n.inline-code[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.83em;\n  background: var(--bg-secondary);\n  color: var(--accent);\n  padding: 0.1rem 0.4rem;\n  border-radius: 4px;\n  border: 1px solid var(--border);\n}\n.ep-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid var(--border);\n}\n.ep-header__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  flex-wrap: wrap;\n}\n.method-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.3rem 0.7rem;\n  border-radius: 5px;\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n}\n.ep-path[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  color: var(--text-primary);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 0.3rem 0.75rem;\n  border-radius: 6px;\n}\n.ep-summary[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.ep-description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  max-width: 760px;\n}\n.ep-section[_ngcontent-%COMP%] {\n  margin-bottom: 2.25rem;\n}\n.ep-section__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 0.85rem;\n}\n.ep-section__title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.content-type[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  background: rgba(59, 130, 246, 0.1);\n  color: #7dd3fc;\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  padding: 0.1rem 0.45rem;\n  border-radius: 4px;\n  margin-left: 0.5rem;\n}\n.params-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.params-table__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 130px 140px 90px 90px 1fr;\n  background: var(--bg-secondary);\n  border-bottom: 1px solid var(--border);\n  padding: 0.6rem 1rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--text-muted);\n}\n.params-table__header--4col[_ngcontent-%COMP%] {\n  grid-template-columns: 130px 130px 90px 1fr;\n}\n.params-table__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 130px 140px 90px 90px 1fr;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border);\n  align-items: start;\n  font-size: 0.875rem;\n}\n.params-table__row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.params-table__row[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(255, 255, 255, 0.01);\n}\n.params-table__row--4col[_ngcontent-%COMP%] {\n  grid-template-columns: 130px 130px 90px 1fr;\n}\n.param-name[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.83rem;\n  color: var(--accent);\n}\n.param-type[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.8rem;\n  color: #7dd3fc;\n}\n.param-format[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.param-default[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.param-desc[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.55;\n}\n.badge-required[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 0.15rem 0.45rem;\n  border-radius: 4px;\n  background: rgba(239, 68, 68, 0.12);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.badge-optional[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 0.15rem 0.45rem;\n  border-radius: 4px;\n  background: rgba(148, 163, 184, 0.1);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.method-get[_ngcontent-%COMP%] {\n  background: rgba(34, 183, 27, 0.12);\n  color: #4ade80;\n  border: 1px solid rgba(34, 183, 27, 0.25);\n}\n.method-post[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.1);\n  color: #fbbf24;\n  border: 1px solid rgba(251, 191, 36, 0.25);\n}\n.status-2xx[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.status-4xx[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.status-5xx[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.code-cols[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n@media (max-width: 900px) {\n  .code-cols[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.code-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.code-block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border);\n  border-bottom: none;\n  border-radius: 0 8px 0 0;\n  padding: 0.5rem 0.9rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.code-block-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.code-block-header--secondary[_ngcontent-%COMP%] {\n  margin-top: 0.6rem;\n  border-radius: 8px 8px 0 0;\n  background: rgba(255, 255, 255, 0.02);\n  font-size: 0.75rem;\n}\n.lang-tabs[_ngcontent-%COMP%]    + .code-col[_ngcontent-%COMP%]   .code-block-header[_ngcontent-%COMP%], \n.lang-tabs[_ngcontent-%COMP%]    ~ .code-cols[_ngcontent-%COMP%]   .code-col[_ngcontent-%COMP%]:first-child   .code-block-header[_ngcontent-%COMP%] {\n  border-radius: 0 8px 0 0;\n}\n.status-pill[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.15rem 0.5rem;\n  border-radius: 20px;\n  background: rgba(74, 222, 128, 0.12);\n  border: 1px solid rgba(74, 222, 128, 0.25);\n}\n.code-block[_ngcontent-%COMP%] {\n  background: #0d1117;\n  border: 1px solid var(--border);\n  border-radius: 0 0 8px 8px;\n  padding: 1.1rem 1.25rem;\n  overflow-x: auto;\n  margin: 0;\n  flex: 1;\n}\n.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    "Cascadia Code",\n    monospace;\n  font-size: 0.82rem;\n  line-height: 1.7;\n  white-space: pre;\n  display: block;\n  color: #ffffff;\n}\n.token-method[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-weight: 700;\n}\n.token-url[_ngcontent-%COMP%] {\n  color: #7dd3fc;\n}\n.token-header[_ngcontent-%COMP%] {\n  color: #a78bfa;\n}\n.token-value[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.token-json[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.15s, border-color 0.15s;\n}\n.copy-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  border-color: var(--accent);\n}\n.copy-btn--sm[_ngcontent-%COMP%] {\n  margin-left: auto;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  padding: 0.15rem 0.5rem;\n}\n.copy-btn--sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.error-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.error-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 0.7rem 1rem;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n}\n.error-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.error-status[_ngcontent-%COMP%] {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.85rem;\n  font-weight: 700;\n  min-width: 38px;\n  padding: 0.2rem 0.5rem;\n  border-radius: 5px;\n  text-align: center;\n}\n.error-status.status-4xx[_ngcontent-%COMP%] {\n  background: rgba(251, 191, 36, 0.1);\n  border: 1px solid rgba(251, 191, 36, 0.2);\n}\n.error-status.status-5xx[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.error-desc[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.notes-section[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  padding: 1.75rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  background: var(--bg-card);\n}\n.notes-section__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 1.25rem;\n}\n.notes-section__title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.notes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 700px) {\n  .notes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.note-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.85rem;\n  align-items: flex-start;\n  padding: 1rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n}\n.note-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  margin-bottom: 0.3rem;\n}\n.note-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin: 0;\n}\n.note-card--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.note-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--accent);\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n}\n@media (max-width: 1024px) {\n  .api-body[_ngcontent-%COMP%] {\n    grid-template-columns: 240px 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .api-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: static;\n    height: auto;\n    border-right: none;\n    border-bottom: 1px solid var(--border);\n  }\n  .detail-panel[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 3rem;\n  }\n  .intro-feature-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .params-table__header[_ngcontent-%COMP%], \n   .params-table__row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .params-table__header--4col[_ngcontent-%COMP%], \n   .params-table__row--4col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .params-table__header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .code-cols[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n[data-theme=light][_ngcontent-%COMP%]   .api-page-header[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n}\n[data-theme=light][_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%] {\n  background: #1e2127;\n}\n[data-theme=light][_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n}\n/*# sourceMappingURL=api-spec.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiSpecComponent, [{
    type: Component,
    args: [{ selector: "app-api-spec", standalone: true, imports: [CommonModule], template: `<div class="api-spec-page">

  <!-- PAGE HEADER -->
  <div class="api-page-header">
    <div class="api-page-header__inner">
      <div class="api-page-header__brand">
        <span class="material-icons">api</span>
        <span class="api-page-header__title">FetchXRates API</span>
        @if (docs()) {
          <span class="api-page-header__version">v{{ docs()!.version }}</span>
        }
      </div>
      <button class="postman-btn" title="Download Postman Collection \u2014 coming soon" disabled>
        <span class="material-icons">download</span>
        Download Postman Collection
        <span class="postman-btn__soon">Soon</span>
      </button>
    </div>
  </div>

  <!-- TWO-COLUMN BODY -->
  <div class="api-body">

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <!-- Top-level nav -->
      <div class="sidebar__section">
        <button class="sidebar__nav-item" [class.active]="activeSection() === 'introduction'" (click)="selectSection('introduction')">
          <span class="material-icons">menu_book</span>
          Introduction
        </button>
        <button class="sidebar__nav-item" [class.active]="activeSection() === 'quickstart'" (click)="selectSection('quickstart')">
          <span class="material-icons">flash_on</span>
          Quickstart
        </button>
        <button class="sidebar__nav-item" [class.active]="activeSection() === 'authentication'" (click)="selectSection('authentication')">
          <span class="material-icons">lock</span>
          Authentication
        </button>
        <button class="sidebar__nav-item" [class.active]="activeSection() === 'important'" (click)="selectSection('important')">
          <span class="material-icons">warning_amber</span>
          Important Information
        </button>
      </div>

      <!-- API Reference endpoints -->
      <div class="sidebar__section sidebar__section--ref">
        <div class="sidebar__ref-label">
          <span class="material-icons">api</span>
          API Reference
        </div>
        @if (docs()) {
          @for (group of groups; track group.label) {
            <div class="sidebar__group-label">
              <span class="material-icons">{{ group.icon }}</span>
              {{ group.label }}
            </div>
            @for (ep of getEndpointsForGroup(group); track ep.id) {
              <button
                class="sidebar__ep"
                [class.active]="activeSection() === 'endpoint' && activeEndpointId() === ep.id"
                (click)="selectEndpoint(ep.id)"
              >
                <span class="sidebar__ep-badge" [ngClass]="methodColor(ep.method)">{{ ep.method }}</span>
                <span class="sidebar__ep-path">{{ ep.path }}</span>
              </button>
            }
          }
        }
      </div>

    </aside>

    <!-- MAIN CONTENT (no overflow \u2014 browser scroll) -->
    <main class="detail-panel">

      <!-- ====== INTRODUCTION ====== -->
      @if (activeSection() === 'introduction') {
        <div class="doc-section">
          @if (docs()) {
            <div class="doc-section__hero">
              <div class="doc-hero-badge">
                <span class="material-icons">api</span> REST API
              </div>
              <h1>{{ docs()!.title }}</h1>
              <p class="doc-hero-desc">{{ docs()!.description }}</p>
              <div class="doc-hero-chips">
                <span class="meta-chip">
                  <span class="material-icons">tag</span> v{{ docs()!.version }}
                </span>
                <span class="meta-chip">
                  <span class="material-icons">link</span> {{ docs()!.baseUrl }}
                </span>
                <span class="meta-chip meta-chip--auth">
                  <span class="material-icons">lock</span> Bearer Token Auth
                </span>
                <span class="meta-chip">
                  <span class="material-icons">code</span> JSON
                </span>
              </div>
            </div>
          }

          <div class="intro-feature-grid">
            <div class="intro-feature-card">
              <span class="material-icons intro-feature-card__icon">trending_up</span>
              <strong>Live Exchange Rates</strong>
              <p>Real-time rates sourced from ECB, BOE, RBA, and the US Federal Reserve with up to 14-day fallback for weekends and holidays.</p>
            </div>
            <div class="intro-feature-card">
              <span class="material-icons intro-feature-card__icon">currency_exchange</span>
              <strong>Currency Conversion</strong>
              <p>Single and bulk conversion endpoints. Convert one currency to many targets in a single API call.</p>
            </div>
            <div class="intro-feature-card">
              <span class="material-icons intro-feature-card__icon">history</span>
              <strong>Historical Data</strong>
              <p>Query historical exchange rates for any past date \u2014 ideal for financial reporting and analysis.</p>
            </div>
            <div class="intro-feature-card">
              <span class="material-icons intro-feature-card__icon">dataset</span>
              <strong>Reference Data</strong>
              <p>Access the full list of supported currencies, base currencies, and API metadata at any time.</p>
            </div>
          </div>

          <div class="intro-info-table">
            <div class="intro-info-row">
              <span class="intro-info-key">Base URL</span>
              <code class="intro-info-val">{{ docs()?.baseUrl }}</code>
            </div>
            <div class="intro-info-row">
              <span class="intro-info-key">Version</span>
              <code class="intro-info-val">{{ docs()?.version }}</code>
            </div>
            <div class="intro-info-row">
              <span class="intro-info-key">Protocol</span>
              <code class="intro-info-val">HTTPS</code>
            </div>
            <div class="intro-info-row">
              <span class="intro-info-key">Response Format</span>
              <code class="intro-info-val">application/json</code>
            </div>
            <div class="intro-info-row">
              <span class="intro-info-key">Authentication</span>
              <code class="intro-info-val">Bearer Token (AWS Cognito JWT)</code>
            </div>
          </div>

          <div class="intro-cta-row">
            <button class="btn-primary" (click)="selectSection('quickstart')">
              <span class="material-icons">flash_on</span>
              Get Started
            </button>
            <button class="btn-outline" (click)="selectEndpoint('latest')">
              <span class="material-icons">api</span>
              Browse API Reference
            </button>
          </div>
        </div>
      }

      <!-- ====== QUICKSTART ====== -->
      @if (activeSection() === 'quickstart') {
        <div class="doc-section">
          <div class="doc-section__header">
            <h1>Quickstart</h1>
            <p>Make your first API call in under 5 minutes.</p>
          </div>

          <div class="qs-step">
            <div class="qs-step__num">1</div>
            <div class="qs-step__body">
              <h3>Sign up and get your API key</h3>
              <p>Create an account at <strong>fetchxrates.com</strong> and subscribe to a plan. Your JWT token is available in the dashboard under <em>API Settings</em>. Tokens are issued via AWS Cognito after sign-in.</p>
              <a class="qs-link" href="https://fetchxrates.com/pricing" target="_blank" rel="noopener">
                <span class="material-icons">open_in_new</span> View pricing plans
              </a>
            </div>
          </div>

          <div class="qs-step">
            <div class="qs-step__num">2</div>
            <div class="qs-step__body">
              <h3>Make your first request</h3>
              <p>Call the <code class="inline-code">/api/latest</code> endpoint to retrieve the latest exchange rates for a base currency.</p>
              <div class="code-col">
                <div class="code-block-header">
                  <span class="material-icons">terminal</span>
                  cURL
                </div>
                <pre class="code-block"><code><span class="token-method">curl</span> -X <span class="token-method">GET</span> \\
  <span class="token-url">"https://uapi.fetchxrates.com/api/latest?base=USD"</span> \\
  -H <span class="token-header">"Authorization: Bearer YOUR_JWT_TOKEN"</span></code></pre>
              </div>
            </div>
          </div>

          <div class="qs-step">
            <div class="qs-step__num">3</div>
            <div class="qs-step__body">
              <h3>Handle the response</h3>
              <p>A successful response returns <code class="inline-code">200 OK</code> with a JSON body containing the base currency, date, and rates object.</p>
              <div class="code-col">
                <div class="code-block-header">
                  <span class="material-icons">output</span>
                  Response
                  <span class="status-pill status-2xx">200 OK</span>
                </div>
                <pre class="code-block"><code><span class="token-json">&#123;
  "base": "USD",
  "date": "2026-03-19",
  "rates": &#123;
    "EUR": 0.9261,
    "GBP": 0.7916,
    "JPY": 149.82,
    "AUD": 1.5912,
    "CAD": 1.3571,
    "CHF": 0.8974
  &#125;
&#125;</span></code></pre>
              </div>
            </div>
          </div>

          <div class="qs-step">
            <div class="qs-step__num">4</div>
            <div class="qs-step__body">
              <h3>Explore more endpoints</h3>
              <p>Now that you're up and running, explore historical rates, bulk conversion, and reference data endpoints.</p>
              <div class="qs-next-links">
                <button class="qs-next-btn" (click)="selectSection('authentication')">
                  <span class="material-icons">lock</span>
                  Authentication Guide
                </button>
                <button class="qs-next-btn" (click)="selectEndpoint('convert')">
                  <span class="material-icons">currency_exchange</span>
                  Convert Currencies
                </button>
                <button class="qs-next-btn" (click)="selectEndpoint('history')">
                  <span class="material-icons">history</span>
                  Historical Rates
                </button>
              </div>
            </div>
          </div>

        </div>
      }

      <!-- ====== AUTHENTICATION ====== -->
      @if (activeSection() === 'authentication') {
        <div class="doc-section">
          <div class="doc-section__header">
            <h1>Authentication</h1>
            <p>All FetchXRates API requests require a valid Bearer token issued via AWS Cognito.</p>
          </div>

          @if (docs()) {
            <div class="auth-info-table">
              <div class="auth-info-row">
                <span class="auth-info-key">Type</span>
                <span class="auth-info-val">{{ docs()!.authentication.type }}</span>
              </div>
              <div class="auth-info-row">
                <span class="auth-info-key">Header</span>
                <code class="auth-info-code">{{ docs()!.authentication.header }}</code>
              </div>
              <div class="auth-info-row">
                <span class="auth-info-key">Required</span>
                <span class="badge-required" style="width:fit-content">Yes \u2014 all endpoints</span>
              </div>
            </div>

            <div class="auth-note-block">
              <span class="material-icons">info</span>
              <p>{{ docs()!.authentication.notes }}</p>
            </div>
          }

          <h3 class="auth-sub-heading">How to authenticate</h3>
          <p class="auth-sub-desc">Include your JWT token in the <code class="inline-code">Authorization</code> header of every request:</p>

          <div class="lang-tabs">
            @for (lang of codeLangs; track lang) {
              <button class="lang-tab" [class.active]="activeCodeLang() === lang" (click)="setCodeLang(lang)">
                {{ codeLangLabels[lang] }}
              </button>
            }
          </div>

          <div class="code-col">
            <div class="code-block-header">
              <span class="material-icons">terminal</span>
              {{ codeLangLabels[activeCodeLang()] }}
              <button class="copy-btn copy-btn--sm" (click)="copyToClipboard(authCodeSample(activeCodeLang()), 'auth-' + activeCodeLang())">
                <span class="material-icons">{{ copiedId() === 'auth-' + activeCodeLang() ? 'check' : 'content_copy' }}</span>
                {{ copiedId() === 'auth-' + activeCodeLang() ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <pre class="code-block"><code>{{ authCodeSample(activeCodeLang()) }}</code></pre>
          </div>

          <div class="auth-tips">
            <h3>Token tips</h3>
            <ul>
              <li>Tokens are time-limited \u2014 refresh them via your Cognito session before expiry.</li>
              <li>Never expose your token in client-side code or public repositories.</li>
              <li>Each subscription plan has a rate limit \u2014 see your dashboard for current usage.</li>
              <li>A <code class="inline-code">401 Unauthorized</code> response usually means your token has expired.</li>
            </ul>
          </div>

        </div>
      }

      <!-- ====== IMPORTANT INFORMATION ====== -->
      @if (activeSection() === 'important') {
        <div class="doc-section">
          <div class="doc-section__hero">
            <span class="doc-hero-badge"><span class="material-icons">warning_amber</span> Important Information</span>
            <h1>Rate Data Notes</h1>
            <p class="doc-hero-desc">Key facts about how exchange rate data is sourced, computed, and updated across all API endpoints.</p>
          </div>

          @if (docs()?.rateDataNotes) {
            <section class="notes-section">
              <div class="notes-grid">
                @if (docs()!.rateDataNotes!.weekendsAndHolidays) {
                  <div class="note-card note-card--full">
                    <span class="material-icons note-icon">event_busy</span>
                    <div>
                      <strong>Weekends &amp; Holidays</strong>
                      <p>{{ docs()!.rateDataNotes!.weekendsAndHolidays }}</p>
                    </div>
                  </div>
                }
                @if (docs()!.rateDataNotes!.precision) {
                  <div class="note-card note-card--full">
                    <span class="material-icons note-icon">pin</span>
                    <div>
                      <strong>Precision</strong>
                      <p>{{ docs()!.rateDataNotes!.precision }}</p>
                    </div>
                  </div>
                }
                @if (docs()!.rateDataNotes!.crossRates) {
                  <div class="note-card note-card--full">
                    <span class="material-icons note-icon">swap_horiz</span>
                    <div>
                      <strong>Cross-Rate Computation</strong>
                      <p>{{ docs()!.rateDataNotes!.crossRates }}</p>
                    </div>
                  </div>
                }
                @if (docs()!.rateDataNotes!.dataSources) {
                  <div class="note-card note-card--full">
                    <span class="material-icons note-icon">account_balance</span>
                    <div>
                      <strong>Data Sources</strong>
                      <p>{{ docs()!.rateDataNotes!.dataSources }}</p>
                    </div>
                  </div>
                }
              </div>
            </section>
          }
        </div>
      }

      <!-- ====== ENDPOINT DETAIL ====== -->
      @if (activeSection() === 'endpoint') {
        @if (activeEndpoint(); as ep) {

          <div class="ep-header">
            <div class="ep-header__top">
              <span class="method-badge" [ngClass]="methodColor(ep.method)">{{ ep.method }}</span>
              <code class="ep-path">{{ ep.path }}</code>
              <button class="copy-btn" (click)="copyToClipboard(resolveUrlPublic(ep), 'path-' + ep.id)" title="Copy full URL">
                <span class="material-icons">{{ copiedId() === 'path-' + ep.id ? 'check' : 'content_copy' }}</span>
              </button>
            </div>
            <h2 class="ep-summary">{{ ep.summary }}</h2>
            <p class="ep-description">{{ ep.description }}</p>
          </div>

          <div class="ep-body">

            <!-- Parameters -->
            @if (ep.parameters && ep.parameters.length > 0) {
              <section class="ep-section">
                <h3 class="ep-section__title">
                  <span class="material-icons">tune</span> Query Parameters
                </h3>
                <div class="params-table">
                  <div class="params-table__header">
                    <span>Name</span><span>Type</span><span>Required</span><span>Default</span><span>Description</span>
                  </div>
                  @for (param of ep.parameters; track param.name) {
                    <div class="params-table__row">
                      <span class="param-name">{{ param.name }}</span>
                      <span class="param-type">{{ param.type }}@if (param.format) {<em class="param-format"> ({{ param.format }})</em>}</span>
                      <span>@if (param.required) {<span class="badge-required">required</span>} @else {<span class="badge-optional">optional</span>}</span>
                      <span class="param-default">{{ param.default ?? '\u2014' }}</span>
                      <span class="param-desc">{{ param.description }}</span>
                    </div>
                  }
                </div>
              </section>
            }

            <!-- Request Body -->
            @if (ep.requestBody) {
              <section class="ep-section">
                <h3 class="ep-section__title">
                  <span class="material-icons">input</span> Request Body
                  <code class="content-type">{{ ep.requestBody.contentType }}</code>
                </h3>
                <div class="params-table">
                  <div class="params-table__header params-table__header--4col">
                    <span>Field</span><span>Type</span><span>Required</span><span>Description</span>
                  </div>
                  @for (entry of schemaEntries(ep.requestBody.schema); track entry[0]) {
                    <div class="params-table__row params-table__row--4col">
                      <span class="param-name">{{ entry[0] }}</span>
                      <span class="param-type">{{ entry[1].type }}</span>
                      <span>@if (entry[1].required) {<span class="badge-required">required</span>} @else {<span class="badge-optional">optional</span>}</span>
                      <span class="param-desc">{{ entry[1].description }}</span>
                    </div>
                  }
                </div>
              </section>
            }

            <!-- Code Samples + Response -->
            <section class="ep-section">
              <h3 class="ep-section__title">
                <span class="material-icons">code</span> Code Samples
              </h3>

              <div class="lang-tabs">
                @for (lang of codeLangs; track lang) {
                  <button class="lang-tab" [class.active]="activeCodeLang() === lang" (click)="setCodeLang(lang)">
                    {{ codeLangLabels[lang] }}
                  </button>
                }
              </div>

              <div class="code-cols">

                <div class="code-col">
                  <div class="code-block-header">
                    <span class="material-icons">terminal</span>
                    {{ codeLangLabels[activeCodeLang()] }}
                    <button class="copy-btn copy-btn--sm" (click)="copyToClipboard(generateCodeSample(ep, activeCodeLang()), 'code-' + ep.id)">
                      <span class="material-icons">{{ copiedId() === 'code-' + ep.id ? 'check' : 'content_copy' }}</span>
                      {{ copiedId() === 'code-' + ep.id ? 'Copied!' : 'Copy' }}
                    </button>
                  </div>
                  <pre class="code-block"><code>{{ generateCodeSample(ep, activeCodeLang()) }}</code></pre>

                  @if (ep.sampleRequestWithDate) {
                    <div class="code-block-header code-block-header--secondary">
                      <span class="material-icons">calendar_today</span>
                      With optional date parameter
                    </div>
                    <pre class="code-block code-block--secondary"><code>{{ generateCodeSampleAlt(ep, activeCodeLang()) }}</code></pre>
                  }
                </div>

                @if (ep.sampleResponse) {
                  <div class="code-col">
                    <div class="code-block-header">
                      <span class="material-icons">output</span>
                      Response
                      <span class="status-pill" [ngClass]="statusColor(ep.sampleResponse.status)">
                        {{ ep.sampleResponse.status }} OK
                      </span>
                      <button class="copy-btn copy-btn--sm" (click)="copyToClipboard(formatJson(ep.sampleResponse.body), 'res-' + ep.id)">
                        <span class="material-icons">{{ copiedId() === 'res-' + ep.id ? 'check' : 'content_copy' }}</span>
                        {{ copiedId() === 'res-' + ep.id ? 'Copied!' : 'Copy' }}
                      </button>
                    </div>
                    <pre class="code-block"><code><span class="token-json">{{ formatJson(ep.sampleResponse.body) }}</span></code></pre>
                  </div>
                }

              </div>
            </section>

            <!-- Error Responses -->
            @if (ep.errorResponses && ep.errorResponses.length > 0) {
              <section class="ep-section">
                <h3 class="ep-section__title">
                  <span class="material-icons">error_outline</span> Error Responses
                </h3>
                <div class="error-table">
                  @for (err of ep.errorResponses; track err.status + err.description) {
                    <div class="error-row">
                      <span class="error-status" [ngClass]="statusColor(err.status)">{{ err.status }}</span>
                      <span class="error-desc">{{ err.description }}</span>
                    </div>
                  }
                </div>
              </section>
            }

          </div>

        }
      }

    </main>
  </div>

</div>
`, styles: ['/* src/app/pages/api-spec/api-spec.component.scss */\n.api-spec-page {\n  min-height: 100vh;\n  background: var(--bg-primary);\n}\n.api-page-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: var(--bg-secondary);\n  border-bottom: 1px solid var(--border);\n  padding: 0.65rem 1.5rem;\n}\n.api-page-header__inner {\n  max-width: 1360px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.api-page-header__brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.api-page-header__brand .material-icons {\n  font-size: 1.1rem;\n  color: var(--accent);\n}\n.api-page-header__title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.api-page-header__version {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--accent);\n  background: rgba(34, 183, 27, 0.1);\n  border: 1px solid rgba(34, 183, 27, 0.25);\n  border-radius: 20px;\n  padding: 0.15rem 0.55rem;\n}\n.postman-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  padding: 0.4rem 0.9rem;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.postman-btn .material-icons {\n  font-size: 0.95rem;\n}\n.postman-btn__soon {\n  font-size: 0.62rem;\n  font-weight: 700;\n  padding: 0.1rem 0.35rem;\n  border-radius: 3px;\n  background: rgba(251, 191, 36, 0.12);\n  color: #fbbf24;\n  border: 1px solid rgba(251, 191, 36, 0.25);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.api-body {\n  display: grid;\n  grid-template-columns: 272px 1fr;\n  margin: 0 1rem;\n  align-items: start;\n}\n.sidebar {\n  position: sticky;\n  top: 49px;\n  height: calc(100vh - 49px);\n  overflow-y: auto;\n  border-right: 1px solid var(--border);\n  scrollbar-width: thin;\n  scrollbar-color: var(--border) transparent;\n}\n.sidebar__section {\n  padding: 0.75rem 0 0.5rem;\n  border-bottom: 1px solid var(--border);\n}\n.sidebar__section--ref {\n  padding-bottom: 2rem;\n}\n.sidebar__nav-item {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.55rem 1.25rem;\n  background: none;\n  border: none;\n  border-left: 2px solid transparent;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.sidebar__nav-item .material-icons {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.sidebar__nav-item:hover {\n  color: var(--text-primary);\n  background: var(--bg-card);\n}\n.sidebar__nav-item.active {\n  color: var(--text-primary);\n  font-weight: 600;\n  background: rgba(34, 183, 27, 0.06);\n  border-left-color: var(--accent);\n}\n.sidebar__ref-label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--accent);\n  padding: 0.6rem 1.25rem 0.4rem;\n}\n.sidebar__ref-label .material-icons {\n  font-size: 0.9rem;\n}\n.sidebar__group-label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  padding: 0.65rem 1.25rem 0.3rem;\n}\n.sidebar__group-label .material-icons {\n  font-size: 0.9rem;\n}\n.sidebar__ep {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.4rem 1.25rem;\n  background: none;\n  border: none;\n  border-left: 2px solid transparent;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s, border-color 0.15s;\n}\n.sidebar__ep:hover {\n  background: var(--bg-card);\n}\n.sidebar__ep.active {\n  background: rgba(34, 183, 27, 0.07);\n  border-left-color: var(--accent);\n}\n.sidebar__ep-badge {\n  flex-shrink: 0;\n  font-size: 0.62rem;\n  font-weight: 700;\n  padding: 0.12rem 0.38rem;\n  border-radius: 4px;\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  min-width: 36px;\n  text-align: center;\n}\n.sidebar__ep-path {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar__ep.active .sidebar__ep-path {\n  color: var(--text-primary);\n}\n.detail-panel {\n  padding: 2.5rem 2.75rem 6rem;\n  min-height: calc(100vh - 49px);\n}\n.doc-section {\n  max-width: 860px;\n}\n.doc-section__header {\n  margin-bottom: 2.5rem;\n  padding-bottom: 1.75rem;\n  border-bottom: 1px solid var(--border);\n}\n.doc-section__header h1 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.doc-section__header p {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n}\n.doc-section__hero {\n  margin-bottom: 2.5rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--border);\n}\n.doc-section__hero h1 {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.65rem;\n  line-height: 1.2;\n}\n.doc-hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--accent);\n  background: rgba(34, 183, 27, 0.1);\n  border: 1px solid rgba(34, 183, 27, 0.25);\n  border-radius: 20px;\n  padding: 0.25rem 0.7rem;\n  margin-bottom: 1rem;\n}\n.doc-hero-badge .material-icons {\n  font-size: 0.85rem;\n}\n.doc-hero-desc {\n  font-size: 1rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  max-width: 680px;\n  margin-bottom: 1.25rem;\n}\n.doc-hero-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 0.3rem 0.7rem;\n}\n.meta-chip .material-icons {\n  font-size: 0.9rem;\n}\n.meta-chip--auth {\n  color: #fbbf24;\n  border-color: rgba(251, 191, 36, 0.3);\n  background: rgba(251, 191, 36, 0.06);\n}\n.intro-feature-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.intro-feature-card {\n  padding: 1.1rem 1.25rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  transition: border-color 0.15s;\n}\n.intro-feature-card:hover {\n  border-color: rgba(34, 183, 27, 0.3);\n}\n.intro-feature-card__icon {\n  font-size: 1.4rem;\n  color: var(--accent);\n  display: block;\n  margin-bottom: 0.6rem;\n}\n.intro-feature-card strong {\n  display: block;\n  font-size: 0.9rem;\n  color: var(--text-primary);\n  margin-bottom: 0.4rem;\n}\n.intro-feature-card p {\n  font-size: 0.83rem;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin: 0;\n}\n.intro-info-table {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 2rem;\n}\n.intro-info-row {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 0.7rem 1.1rem;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n}\n.intro-info-row:last-child {\n  border-bottom: none;\n}\n.intro-info-key {\n  min-width: 160px;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.intro-info-val {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.83rem;\n  color: var(--text-primary);\n  background: var(--bg-secondary);\n  padding: 0.15rem 0.5rem;\n  border-radius: 5px;\n  border: 1px solid var(--border);\n}\n.intro-cta-row {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.3rem;\n  background: var(--accent);\n  color: #000;\n  font-size: 0.875rem;\n  font-weight: 700;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 1rem;\n}\n.btn-primary:hover {\n  opacity: 0.85;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.3rem;\n  background: none;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 1rem;\n}\n.btn-outline:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.qs-step {\n  display: flex;\n  gap: 1.25rem;\n  margin-bottom: 2.25rem;\n}\n.qs-step__num {\n  flex-shrink: 0;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: rgba(34, 183, 27, 0.12);\n  border: 1.5px solid rgba(34, 183, 27, 0.35);\n  color: var(--accent);\n  font-size: 0.85rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.1rem;\n}\n.qs-step__body {\n  flex: 1;\n}\n.qs-step__body h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.qs-step__body p {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  margin-bottom: 0.75rem;\n}\n.qs-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.83rem;\n  color: var(--accent);\n  text-decoration: none;\n  font-weight: 600;\n}\n.qs-link .material-icons {\n  font-size: 0.9rem;\n}\n.qs-link:hover {\n  text-decoration: underline;\n}\n.qs-next-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n  margin-top: 0.5rem;\n}\n.qs-next-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 0.9rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  color: var(--text-secondary);\n  font-size: 0.83rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: border-color 0.15s, color 0.15s;\n}\n.qs-next-btn .material-icons {\n  font-size: 0.95rem;\n}\n.qs-next-btn:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n}\n.auth-info-table {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 1.25rem;\n}\n.auth-info-row {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 0.75rem 1.1rem;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n}\n.auth-info-row:last-child {\n  border-bottom: none;\n}\n.auth-info-key {\n  min-width: 100px;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.auth-info-val {\n  color: var(--text-secondary);\n}\n.auth-info-code {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.82rem;\n  color: var(--accent);\n  background: var(--bg-secondary);\n  padding: 0.2rem 0.55rem;\n  border-radius: 5px;\n  border: 1px solid var(--border);\n}\n.auth-note-block {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.9rem 1rem;\n  background: rgba(251, 191, 36, 0.05);\n  border: 1px solid rgba(251, 191, 36, 0.2);\n  border-radius: 8px;\n  margin-bottom: 1.75rem;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  line-height: 1.65;\n}\n.auth-note-block .material-icons {\n  color: #fbbf24;\n  flex-shrink: 0;\n  margin-top: 0.05rem;\n}\n.auth-note-block p {\n  margin: 0;\n}\n.auth-sub-heading {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.4rem;\n  margin-top: 1.75rem;\n}\n.auth-sub-desc {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  margin-bottom: 1rem;\n}\n.auth-tips {\n  margin-top: 2rem;\n  padding: 1.25rem 1.5rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n}\n.auth-tips h3 {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--text-muted);\n  margin-bottom: 0.75rem;\n}\n.auth-tips ul {\n  padding-left: 1.25rem;\n  margin: 0;\n}\n.auth-tips li {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  margin-bottom: 0.4rem;\n}\n.lang-tabs {\n  display: flex;\n  width: fit-content;\n  border: 1px solid var(--border);\n  border-bottom: none;\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n  margin-bottom: 0;\n}\n.lang-tab {\n  padding: 0.45rem 1rem;\n  background: var(--bg-secondary);\n  border: none;\n  border-right: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.lang-tab:last-child {\n  border-right: none;\n}\n.lang-tab:hover {\n  background: var(--bg-card);\n  color: var(--text-secondary);\n}\n.lang-tab.active {\n  background: var(--bg-primary);\n  color: var(--accent);\n  border-bottom: 2px solid var(--accent);\n  margin-bottom: -1px;\n}\n.inline-code {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.83em;\n  background: var(--bg-secondary);\n  color: var(--accent);\n  padding: 0.1rem 0.4rem;\n  border-radius: 4px;\n  border: 1px solid var(--border);\n}\n.ep-header {\n  margin-bottom: 2rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid var(--border);\n}\n.ep-header__top {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  flex-wrap: wrap;\n}\n.method-badge {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.3rem 0.7rem;\n  border-radius: 5px;\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n}\n.ep-path {\n  font-size: 1rem;\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  color: var(--text-primary);\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  padding: 0.3rem 0.75rem;\n  border-radius: 6px;\n}\n.ep-summary {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.ep-description {\n  font-size: 0.95rem;\n  color: var(--text-secondary);\n  line-height: 1.7;\n  max-width: 760px;\n}\n.ep-section {\n  margin-bottom: 2.25rem;\n}\n.ep-section__title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 0.85rem;\n}\n.ep-section__title .material-icons {\n  font-size: 1rem;\n}\n.content-type {\n  font-size: 0.75rem;\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  background: rgba(59, 130, 246, 0.1);\n  color: #7dd3fc;\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  padding: 0.1rem 0.45rem;\n  border-radius: 4px;\n  margin-left: 0.5rem;\n}\n.params-table {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.params-table__header {\n  display: grid;\n  grid-template-columns: 130px 140px 90px 90px 1fr;\n  background: var(--bg-secondary);\n  border-bottom: 1px solid var(--border);\n  padding: 0.6rem 1rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--text-muted);\n}\n.params-table__header--4col {\n  grid-template-columns: 130px 130px 90px 1fr;\n}\n.params-table__row {\n  display: grid;\n  grid-template-columns: 130px 140px 90px 90px 1fr;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--border);\n  align-items: start;\n  font-size: 0.875rem;\n}\n.params-table__row:last-child {\n  border-bottom: none;\n}\n.params-table__row:nth-child(even) {\n  background: rgba(255, 255, 255, 0.01);\n}\n.params-table__row--4col {\n  grid-template-columns: 130px 130px 90px 1fr;\n}\n.param-name {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.83rem;\n  color: var(--accent);\n}\n.param-type {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.8rem;\n  color: #7dd3fc;\n}\n.param-format {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.param-default {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.param-desc {\n  color: var(--text-secondary);\n  line-height: 1.55;\n}\n.badge-required {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 0.15rem 0.45rem;\n  border-radius: 4px;\n  background: rgba(239, 68, 68, 0.12);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.badge-optional {\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 0.15rem 0.45rem;\n  border-radius: 4px;\n  background: rgba(148, 163, 184, 0.1);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.method-get {\n  background: rgba(34, 183, 27, 0.12);\n  color: #4ade80;\n  border: 1px solid rgba(34, 183, 27, 0.25);\n}\n.method-post {\n  background: rgba(251, 191, 36, 0.1);\n  color: #fbbf24;\n  border: 1px solid rgba(251, 191, 36, 0.25);\n}\n.status-2xx {\n  color: #4ade80;\n}\n.status-4xx {\n  color: #fbbf24;\n}\n.status-5xx {\n  color: #f87171;\n}\n.code-cols {\n  display: grid;\n  gap: 1.25rem;\n}\n@media (max-width: 900px) {\n  .code-cols {\n    grid-template-columns: 1fr;\n  }\n}\n.code-col {\n  display: flex;\n  flex-direction: column;\n}\n.code-block-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border);\n  border-bottom: none;\n  border-radius: 0 8px 0 0;\n  padding: 0.5rem 0.9rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.code-block-header .material-icons {\n  font-size: 0.95rem;\n}\n.code-block-header--secondary {\n  margin-top: 0.6rem;\n  border-radius: 8px 8px 0 0;\n  background: rgba(255, 255, 255, 0.02);\n  font-size: 0.75rem;\n}\n.lang-tabs + .code-col .code-block-header,\n.lang-tabs ~ .code-cols .code-col:first-child .code-block-header {\n  border-radius: 0 8px 0 0;\n}\n.status-pill {\n  margin-left: auto;\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.15rem 0.5rem;\n  border-radius: 20px;\n  background: rgba(74, 222, 128, 0.12);\n  border: 1px solid rgba(74, 222, 128, 0.25);\n}\n.code-block {\n  background: #0d1117;\n  border: 1px solid var(--border);\n  border-radius: 0 0 8px 8px;\n  padding: 1.1rem 1.25rem;\n  overflow-x: auto;\n  margin: 0;\n  flex: 1;\n}\n.code-block code {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    "Cascadia Code",\n    monospace;\n  font-size: 0.82rem;\n  line-height: 1.7;\n  white-space: pre;\n  display: block;\n  color: #ffffff;\n}\n.token-method {\n  color: #fbbf24;\n  font-weight: 700;\n}\n.token-url {\n  color: #7dd3fc;\n}\n.token-header {\n  color: #a78bfa;\n}\n.token-value {\n  color: #4ade80;\n}\n.token-json {\n  color: #e5e7eb;\n}\n.copy-btn {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.15s, border-color 0.15s;\n}\n.copy-btn .material-icons {\n  font-size: 1rem;\n}\n.copy-btn:hover {\n  color: var(--text-primary);\n  border-color: var(--accent);\n}\n.copy-btn--sm {\n  margin-left: auto;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  padding: 0.15rem 0.5rem;\n}\n.copy-btn--sm .material-icons {\n  font-size: 0.85rem;\n}\n.error-table {\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.error-row {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 0.7rem 1rem;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n}\n.error-row:last-child {\n  border-bottom: none;\n}\n.error-status {\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.85rem;\n  font-weight: 700;\n  min-width: 38px;\n  padding: 0.2rem 0.5rem;\n  border-radius: 5px;\n  text-align: center;\n}\n.error-status.status-4xx {\n  background: rgba(251, 191, 36, 0.1);\n  border: 1px solid rgba(251, 191, 36, 0.2);\n}\n.error-status.status-5xx {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.error-desc {\n  color: var(--text-secondary);\n}\n.notes-section {\n  margin-top: 3rem;\n  padding: 1.75rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  background: var(--bg-card);\n}\n.notes-section__title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 1.25rem;\n}\n.notes-section__title .material-icons {\n  font-size: 1rem;\n}\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 700px) {\n  .notes-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.note-card {\n  display: flex;\n  gap: 0.85rem;\n  align-items: flex-start;\n  padding: 1rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n}\n.note-card strong {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  margin-bottom: 0.3rem;\n}\n.note-card p {\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin: 0;\n}\n.note-card--full {\n  grid-column: 1/-1;\n}\n.note-icon {\n  font-size: 1.25rem;\n  color: var(--accent);\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n}\n@media (max-width: 1024px) {\n  .api-body {\n    grid-template-columns: 240px 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .api-body {\n    grid-template-columns: 1fr;\n  }\n  .sidebar {\n    position: static;\n    height: auto;\n    border-right: none;\n    border-bottom: 1px solid var(--border);\n  }\n  .detail-panel {\n    padding: 1.5rem 1rem 3rem;\n  }\n  .intro-feature-grid {\n    grid-template-columns: 1fr;\n  }\n  .params-table__header,\n  .params-table__row {\n    grid-template-columns: 1fr;\n  }\n  .params-table__header--4col,\n  .params-table__row--4col {\n    grid-template-columns: 1fr;\n  }\n  .params-table__header {\n    display: none;\n  }\n  .code-cols {\n    grid-template-columns: 1fr;\n  }\n}\n[data-theme=light] .api-page-header {\n  background: var(--bg-secondary);\n}\n[data-theme=light] .code-block {\n  background: #1e2127;\n}\n[data-theme=light] .sidebar {\n  background: var(--bg-secondary);\n}\n/*# sourceMappingURL=api-spec.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiSpecComponent, { className: "ApiSpecComponent", filePath: "src/app/pages/api-spec/api-spec.component.ts", lineNumber: 114 });
})();
export {
  ApiSpecComponent
};
//# sourceMappingURL=chunk-WFSPKAD2.js.map
