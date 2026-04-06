import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-EG2W3VGR.js";
import {
  ButtonComponent
} from "./chunk-EO4F4QDA.js";
import {
  provideHttpClient
} from "./chunk-RADNHJCR.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AHBVTDPW.js";

// src/app/components/layout/navbar/navbar.component.ts
var _c0 = () => ({ exact: true });
function NavbarComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "circle", 22)(2, "line", 23)(3, "line", 24)(4, "line", 25)(5, "line", 26)(6, "line", 27)(7, "line", 28)(8, "line", 29)(9, "line", 30);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 31);
    \u0275\u0275elementEnd();
  }
}
var NavbarComponent = class _NavbarComponent {
  mobileMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "mobileMenuOpen" }] : []);
  isDarkTheme = signal(true, ...ngDevMode ? [{ debugName: "isDarkTheme" }] : []);
  constructor() {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      this.isDarkTheme.set(savedTheme !== "light");
      this.applyTheme();
    }
  }
  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }
  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
    this.applyTheme();
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", this.isDarkTheme() ? "dark" : "light");
    }
  }
  applyTheme() {
    if (typeof document !== "undefined") {
      if (this.isDarkTheme()) {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }
  }
  navigateToLogin() {
    if (typeof window !== "undefined") {
      window.location.href = "https://localhost:4200/login";
    }
  }
  navigateToSignup() {
    if (typeof window !== "undefined") {
      window.location.href = "https://localhost:4200/signup";
    }
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], decls: 33, vars: 7, consts: [[1, "navbar"], [1, "container"], [1, "navbar-content"], [1, "navbar-left"], ["routerLink", "/", 1, "logo", 3, "click"], [1, "logo-part", "logo-fetch"], ["src", "assets/textLogo.png", "alt", "X", 1, "logo-image"], [1, "logo-part", "logo-rates"], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/features", "routerLinkActive", "active", 3, "click"], ["routerLink", "/pricing", "routerLinkActive", "active", 3, "click"], ["routerLink", "/api-spec", "routerLinkActive", "active", 3, "click"], ["title", "Coming Soon", 1, "nav-link-disabled"], [1, "coming-soon"], [1, "navbar-right"], ["aria-label", "Toggle theme", 1, "theme-toggle", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["variant", "outline", "size", "sm", 3, "click"], ["variant", "primary", "size", "sm", 1, "cta-btn", 3, "click"], ["aria-label", "Toggle menu", 1, "mobile-menu-btn", 3, "click"], [1, "hamburger"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "18.36", "y1", "18.36", "x2", "19.78", "y2", "19.78"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_4_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "Fetch");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "img", 6);
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9, "ates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8)(11, "a", 9);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_11_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(12, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 10);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_13_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(14, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 11);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_15_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(16, "Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 12);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_17_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(18, "API Docs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 13);
      \u0275\u0275text(20, "Contact");
      \u0275\u0275elementStart(21, "span", 14);
      \u0275\u0275text(22, "Soon");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 15)(24, "button", 16);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_24_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275conditionalCreate(25, NavbarComponent_Conditional_25_Template, 10, 0, ":svg:svg", 17)(26, NavbarComponent_Conditional_26_Template, 2, 0, ":svg:svg", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "app-button", 18);
      \u0275\u0275listener("click", function NavbarComponent_Template_app_button_click_27_listener() {
        return ctx.navigateToLogin();
      });
      \u0275\u0275text(28, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "app-button", 19);
      \u0275\u0275listener("click", function NavbarComponent_Template_app_button_click_29_listener() {
        return ctx.navigateToSignup();
      });
      \u0275\u0275text(30, "Get Started");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 20);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_31_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275element(32, "span", 21);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ctx.mobileMenuOpen());
      \u0275\u0275advance();
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.isDarkTheme() ? 25 : 26);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("open", ctx.mobileMenuOpen());
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive, ButtonComponent], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background-color: var(--bg-navbar);\n  border-bottom: 1px solid var(--border);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.navbar-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 70px;\n  gap: 2rem;\n}\n.navbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3rem;\n  flex: 1;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.125rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-navbar);\n  text-decoration: none;\n}\n.logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.logo-part[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    "Courier",\n    monospace;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.logo-fetch[_ngcontent-%COMP%] {\n  color: var(--text-navbar);\n}\n.logo-rates[_ngcontent-%COMP%] {\n  color: var(--text-navbar);\n}\n.logo-image[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n  margin: -2px -2px;\n  display: block;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  transition: color 0.2s ease, background-color 0.2s ease;\n  text-decoration: none;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.375rem;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--accent);\n  background-color: rgba(34, 183, 27, 0.1);\n}\n.nav-link-disabled[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  cursor: not-allowed;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  position: relative;\n}\n.coming-soon[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  padding: 0.125rem 0.375rem;\n  background-color: var(--warning);\n  color: white;\n  border-radius: 0.25rem;\n  font-weight: 600;\n}\n.navbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-primary);\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  background-color: var(--card-hover);\n  border-color: var(--accent);\n}\n.theme-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.status-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: var(--success);\n  display: inline-block;\n}\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: transparent;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  display: block;\n  width: 24px;\n  height: 2px;\n  background-color: var(--text-primary);\n  position: relative;\n  transition: all 0.3s ease;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]::before, \n.mobile-menu-btn[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 24px;\n  height: 2px;\n  background-color: var(--text-primary);\n  transition: all 0.3s ease;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]::before {\n  top: -8px;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]::after {\n  top: 8px;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   .hamburger.open[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   .hamburger.open[_ngcontent-%COMP%]::before {\n  top: 0;\n  transform: rotate(45deg);\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   .hamburger.open[_ngcontent-%COMP%]::after {\n  top: 0;\n  transform: rotate(-45deg);\n}\n@media (max-width: 968px) {\n  .nav-links[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 70px;\n    left: 0;\n    right: 0;\n    flex-direction: column;\n    background-color: var(--bg-primary);\n    border-bottom: 1px solid var(--border);\n    padding: 2rem;\n    gap: 1.5rem;\n    transform: translateY(-100%);\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.3s ease;\n    box-shadow: 0 4px 6px var(--shadow);\n  }\n  .nav-links.active[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible;\n  }\n  .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .cta-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 640px) {\n  .navbar-content[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n  .logo[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .status-link[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, RouterModule, ButtonComponent], template: '<nav class="navbar">\n  <div class="container">\n    <div class="navbar-content">\n      <div class="navbar-left">\n        <a routerLink="/" class="logo" (click)="closeMobileMenu()">\n          <span class="logo-part logo-fetch">Fetch</span>\n          <img src="assets/textLogo.png" alt="X" class="logo-image">\n          <span class="logo-part logo-rates">ates</span>\n        </a>\n\n        <div class="nav-links" [class.active]="mobileMenuOpen()">\n          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">Home</a>\n          <a routerLink="/features" routerLinkActive="active" (click)="closeMobileMenu()">Features</a>\n          <a routerLink="/pricing" routerLinkActive="active" (click)="closeMobileMenu()">Pricing</a>\n          <a routerLink="/api-spec" routerLinkActive="active" (click)="closeMobileMenu()">API Docs</a>\n          <span class="nav-link-disabled" title="Coming Soon">Contact<span class="coming-soon">Soon</span></span>\n        </div>\n      </div>\n\n      <div class="navbar-right">\n        <button class="theme-toggle" (click)="toggleTheme()" aria-label="Toggle theme">\n          @if (isDarkTheme()) {\n            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n              <circle cx="12" cy="12" r="5"/>\n              <line x1="12" y1="1" x2="12" y2="3"/>\n              <line x1="12" y1="21" x2="12" y2="23"/>\n              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>\n              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>\n              <line x1="1" y1="12" x2="3" y2="12"/>\n              <line x1="21" y1="12" x2="23" y2="12"/>\n              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>\n              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>\n            </svg>\n          } @else {\n            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>\n            </svg>\n          }\n        </button>\n\n        <app-button variant="outline" size="sm" (click)="navigateToLogin()">Login</app-button>\n        <app-button variant="primary" size="sm" (click)="navigateToSignup()" class="cta-btn">Get Started</app-button>\n\n        <button class="mobile-menu-btn" (click)="toggleMobileMenu()" aria-label="Toggle menu">\n          <span class="hamburger" [class.open]="mobileMenuOpen()"></span>\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n', styles: ['/* src/app/components/layout/navbar/navbar.component.scss */\n.navbar {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background-color: var(--bg-navbar);\n  border-bottom: 1px solid var(--border);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.navbar-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 70px;\n  gap: 2rem;\n}\n.navbar-left {\n  display: flex;\n  align-items: center;\n  gap: 3rem;\n  flex: 1;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 0.125rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-navbar);\n  text-decoration: none;\n}\n.logo:hover {\n  opacity: 0.9;\n}\n.logo-part {\n  font-family:\n    "Courier New",\n    "Courier",\n    monospace;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.logo-fetch {\n  color: var(--text-navbar);\n}\n.logo-rates {\n  color: var(--text-navbar);\n}\n.logo-image {\n  height: 30px;\n  width: auto;\n  margin: -2px -2px;\n  display: block;\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.nav-links a {\n  color: var(--text-secondary);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  transition: color 0.2s ease, background-color 0.2s ease;\n  text-decoration: none;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.375rem;\n}\n.nav-links a:hover {\n  color: var(--text-primary);\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.nav-links a.active {\n  color: var(--accent);\n  background-color: rgba(34, 183, 27, 0.1);\n}\n.nav-link-disabled {\n  color: var(--text-muted);\n  font-weight: 500;\n  font-size: 0.9375rem;\n  cursor: not-allowed;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  position: relative;\n}\n.coming-soon {\n  font-size: 0.6875rem;\n  padding: 0.125rem 0.375rem;\n  background-color: var(--warning);\n  color: white;\n  border-radius: 0.25rem;\n  font-weight: 600;\n}\n.navbar-right {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.theme-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-primary);\n}\n.theme-toggle:hover {\n  background-color: var(--card-hover);\n  border-color: var(--accent);\n}\n.theme-toggle svg {\n  width: 18px;\n  height: 18px;\n}\n.status-link {\n  text-decoration: none;\n}\n.status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: var(--success);\n  display: inline-block;\n}\n.mobile-menu-btn {\n  display: none;\n  background: transparent;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n.mobile-menu-btn .hamburger {\n  display: block;\n  width: 24px;\n  height: 2px;\n  background-color: var(--text-primary);\n  position: relative;\n  transition: all 0.3s ease;\n}\n.mobile-menu-btn .hamburger::before,\n.mobile-menu-btn .hamburger::after {\n  content: "";\n  position: absolute;\n  width: 24px;\n  height: 2px;\n  background-color: var(--text-primary);\n  transition: all 0.3s ease;\n}\n.mobile-menu-btn .hamburger::before {\n  top: -8px;\n}\n.mobile-menu-btn .hamburger::after {\n  top: 8px;\n}\n.mobile-menu-btn .hamburger.open {\n  background-color: transparent;\n}\n.mobile-menu-btn .hamburger.open::before {\n  top: 0;\n  transform: rotate(45deg);\n}\n.mobile-menu-btn .hamburger.open::after {\n  top: 0;\n  transform: rotate(-45deg);\n}\n@media (max-width: 968px) {\n  .nav-links {\n    position: fixed;\n    top: 70px;\n    left: 0;\n    right: 0;\n    flex-direction: column;\n    background-color: var(--bg-primary);\n    border-bottom: 1px solid var(--border);\n    padding: 2rem;\n    gap: 1.5rem;\n    transform: translateY(-100%);\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.3s ease;\n    box-shadow: 0 4px 6px var(--shadow);\n  }\n  .nav-links.active {\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible;\n  }\n  .nav-links a {\n    font-size: 1.125rem;\n  }\n  .mobile-menu-btn {\n    display: block;\n  }\n  .cta-btn {\n    display: none;\n  }\n}\n@media (max-width: 640px) {\n  .navbar-content {\n    height: 60px;\n  }\n  .logo {\n    font-size: 1.25rem;\n  }\n  .status-link {\n    display: none;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/components/layout/navbar/navbar.component.ts", lineNumber: 13 });
})();

// src/app/components/layout/footer/footer.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function FooterComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r1.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.label);
  }
}
function FooterComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r2.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r2.label);
  }
}
function FooterComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r3.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r3.label);
  }
}
var FooterComponent = class _FooterComponent {
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  footerLinks = {
    product: [
      { label: "Features", path: "/features" },
      { label: "Pricing", path: "/pricing" },
      { label: "System Status", path: "/status" }
    ],
    company: [
      { label: "About", path: "/about" },
      { label: "Articles", path: "/articles" },
      { label: "Contact", path: "/contact" }
    ],
    legal: [
      { label: "Terms of Service", path: "/terms" },
      { label: "Privacy Policy", path: "/privacy" }
    ]
  };
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 53, vars: 4, consts: [[1, "footer"], [1, "container"], [1, "footer-content"], [1, "footer-grid"], [1, "footer-brand"], [1, "brand-name"], [1, "brand-part", "brand-fetch"], ["src", "assets/textLogo.png", "alt", "X", 1, "brand-logo-image"], [1, "brand-part", "brand-rates"], [1, "brand-tagline"], [1, "trust-indicators"], [1, "footer-links"], [1, "link-group"], [1, "footer-bottom"], [1, "disclaimer"], [1, "disclaimer-title"], [1, "disclaimer-text"], [1, "copyright"], [1, "copyright-text"], [1, "legal-links"], [3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5)(6, "span", 6);
      \u0275\u0275text(7, "Fetch");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "img", 7);
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "ates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 9);
      \u0275\u0275text(12, " Fast, reliable FX data API with Dashboard tools for finance teams. Trusted public data sources for compliance and accuracy. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 10);
      \u0275\u0275text(14, " End-to-end encrypted \u2022 Audit-friendly \u2022 Built for finance teams ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "h4");
      \u0275\u0275text(18, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul");
      \u0275\u0275repeaterCreate(20, FooterComponent_For_21_Template, 3, 2, "li", null, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 12)(23, "h4");
      \u0275\u0275text(24, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "ul");
      \u0275\u0275repeaterCreate(26, FooterComponent_For_27_Template, 3, 2, "li", null, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 12)(29, "h4");
      \u0275\u0275text(30, "Legal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "ul");
      \u0275\u0275repeaterCreate(32, FooterComponent_For_33_Template, 3, 2, "li", null, _forTrack0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 13)(35, "div", 14)(36, "p", 15);
      \u0275\u0275text(37, "Data & Disclaimer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 16);
      \u0275\u0275text(39, "Exchange rate data is sourced from publicly available ");
      \u0275\u0275elementStart(40, "strong");
      \u0275\u0275text(41, "central bank publications.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, "\nThis service is independent and not affiliated with or endorsed by any central bank. Rates are provided for informational purposes only and do not constitute financial advice. Availability may vary due to publication schedules, weekends, and public holidays. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 17)(44, "p", 18);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 19)(47, "a", 20);
      \u0275\u0275text(48, "Terms of Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "a", 20);
      \u0275\u0275text(50, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 20);
      \u0275\u0275text(52, "Cookies");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.footerLinks.product);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.footerLinks.company);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.footerLinks.legal);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Fintomate Pty Ltd. FetchXRates is a product of Fintomate Pty Ltd. All rights reserved.");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", "/terms");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", "/privacy");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", "/cookies");
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n\n.footer[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n  border-top: 1px solid var(--border);\n  padding: 3rem 0 1.5rem;\n  margin-top: 3rem;\n  color: var(--text-secondary);\n}\n.footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  gap: 3rem;\n}\n.footer-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.125rem;\n}\n.footer-brand[_ngcontent-%COMP%]   .brand-part[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    "Courier",\n    monospace;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.footer-brand[_ngcontent-%COMP%]   .brand-fetch[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.footer-brand[_ngcontent-%COMP%]   .brand-rates[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.footer-brand[_ngcontent-%COMP%]   .brand-logo-image[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n  margin: -2px -2px;\n  display: block;\n}\n.footer-brand[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n  line-height: 1.6;\n}\n.footer-brand[_ngcontent-%COMP%]   .trust-indicators[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.8125rem;\n  margin-top: 0.75rem;\n  opacity: 0.7;\n  line-height: 1.5;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n}\n.link-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.link-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.link-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n  transition: color 0.2s ease;\n}\n.link-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.disclaimer[_ngcontent-%COMP%] {\n  background-color: var(--bg-card);\n  border: 1px solid var(--border-card);\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 0.5rem;\n}\n.disclaimer[_ngcontent-%COMP%]   .disclaimer-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.disclaimer[_ngcontent-%COMP%]   .disclaimer-text[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.disclaimer[_ngcontent-%COMP%]   .disclaimer-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.copyright[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border);\n}\n.copyright[_ngcontent-%COMP%]   .copyright-text[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n}\n.copyright[_ngcontent-%COMP%]   .legal-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n.copyright[_ngcontent-%COMP%]   .legal-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  transition: color 0.2s ease;\n}\n.copyright[_ngcontent-%COMP%]   .legal-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n@media (max-width: 968px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n  .footer-links[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .footer[_ngcontent-%COMP%] {\n    padding: 2rem 0 1rem;\n  }\n  .copyright[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .footer-links[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule, RouterModule], template: `<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3 class="brand-name">
            <span class="brand-part brand-fetch">Fetch</span><img src="assets/textLogo.png" alt="X" class="brand-logo-image"><span class="brand-part brand-rates">ates</span>
          </h3>
          <p class="brand-tagline">
            Fast, reliable FX data API with Dashboard tools for finance teams.
            Trusted public data sources for compliance and accuracy.
          </p>
          <p class="trust-indicators">
            End-to-end encrypted \u2022 Audit-friendly \u2022 Built for finance teams
          </p>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>Product</h4>
            <ul>
              @for (link of footerLinks.product; track link.path) {
                <li><a [routerLink]="link.path">{{ link.label }}</a></li>
              }
            </ul>
          </div>

          <div class="link-group">
            <h4>Company</h4>
            <ul>
              @for (link of footerLinks.company; track link.path) {
                <li><a [routerLink]="link.path">{{ link.label }}</a></li>
              }
            </ul>
          </div>

          <div class="link-group">
            <h4>Legal</h4>
            <ul>
              @for (link of footerLinks.legal; track link.path) {
                <li><a [routerLink]="link.path">{{ link.label }}</a></li>
              }
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="disclaimer">
          <p class="disclaimer-title">Data & Disclaimer</p>
          <p class="disclaimer-text">Exchange rate data is sourced from publicly available <strong>central bank publications.</strong>
This service is independent and not affiliated with or endorsed by any central bank. Rates are provided for informational purposes only and do not constitute financial advice. Availability may vary due to publication schedules, weekends, and public holidays.
          </p>
        </div>

        <div class="copyright">
          <p class="copyright-text">&copy; {{ currentYear }} Fintomate Pty Ltd. FetchXRates is a product of Fintomate Pty Ltd. All rights reserved.</p>
          <div class="legal-links">
            <a [routerLink]="'/terms'">Terms of Use</a>
            <a [routerLink]="'/privacy'">Privacy Policy</a>
            <a [routerLink]="'/cookies'">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
`, styles: ['/* src/app/components/layout/footer/footer.component.scss */\n.footer {\n  background-color: var(--bg-secondary);\n  border-top: 1px solid var(--border);\n  padding: 3rem 0 1.5rem;\n  margin-top: 3rem;\n  color: var(--text-secondary);\n}\n.footer-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.footer-grid {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  gap: 3rem;\n}\n.footer-brand .brand-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.125rem;\n}\n.footer-brand .brand-part {\n  font-family:\n    "Courier New",\n    "Courier",\n    monospace;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.footer-brand .brand-fetch {\n  color: var(--text-primary);\n}\n.footer-brand .brand-rates {\n  color: var(--text-primary);\n}\n.footer-brand .brand-logo-image {\n  height: 30px;\n  width: auto;\n  margin: -2px -2px;\n  display: block;\n}\n.footer-brand .brand-tagline {\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n  line-height: 1.6;\n}\n.footer-brand .trust-indicators {\n  color: var(--text-secondary);\n  font-size: 0.8125rem;\n  margin-top: 0.75rem;\n  opacity: 0.7;\n  line-height: 1.5;\n}\n.footer-links {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n}\n.link-group h4 {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.link-group ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.link-group a {\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n  transition: color 0.2s ease;\n}\n.link-group a:hover {\n  color: var(--accent);\n}\n.footer-bottom {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.disclaimer {\n  background-color: var(--bg-card);\n  border: 1px solid var(--border-card);\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 0.5rem;\n}\n.disclaimer .disclaimer-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.disclaimer .disclaimer-text {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.disclaimer .disclaimer-text strong {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.copyright {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border);\n}\n.copyright .copyright-text {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n}\n.copyright .legal-links {\n  display: flex;\n  gap: 1.5rem;\n}\n.copyright .legal-links a {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  transition: color 0.2s ease;\n}\n.copyright .legal-links a:hover {\n  color: var(--accent);\n}\n@media (max-width: 968px) {\n  .footer-grid {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n  .footer-links {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .footer {\n    padding: 2rem 0 1rem;\n  }\n  .copyright {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .footer-links {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/layout/footer/footer.component.ts", lineNumber: 12 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "fetchxrates";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "main");
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-footer");
    }
  }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 80px - 400px);\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, NavbarComponent, FooterComponent], template: "<app-navbar></app-navbar>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>\n", styles: ["/* src/app/app.component.scss */\nmain {\n  min-height: calc(100vh - 80px - 400px);\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 13 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-V75VBVCE.js").then((m) => m.HomeComponent)
  },
  {
    path: "features",
    loadComponent: () => import("./chunk-LEEWPCZ3.js").then((m) => m.FeaturesComponent)
  },
  {
    path: "pricing",
    loadComponent: () => import("./chunk-IB5QB26I.js").then((m) => m.PricingComponent)
  },
  {
    path: "about",
    loadComponent: () => import("./chunk-G3D3DGEV.js").then((m) => m.AboutComponent)
  },
  {
    path: "articles",
    loadComponent: () => import("./chunk-ZHDYPDD5.js").then((m) => m.ArticlesComponent)
  },
  {
    path: "contact",
    loadComponent: () => import("./chunk-MRS6RH23.js").then((m) => m.ContactComponent)
  },
  {
    path: "api-spec",
    loadComponent: () => import("./chunk-WFSPKAD2.js").then((m) => m.ApiSpecComponent)
  },
  {
    path: "status",
    loadComponent: () => import("./chunk-ZHH74AK7.js").then((m) => m.StatusComponent)
  },
  {
    path: "terms",
    loadComponent: () => import("./chunk-YYYQILJH.js").then((m) => m.TermsComponent)
  },
  {
    path: "privacy",
    loadComponent: () => import("./chunk-ELL4Q65A.js").then((m) => m.PrivacyComponent)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
