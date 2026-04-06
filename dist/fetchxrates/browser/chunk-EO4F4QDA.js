import {
  CommonModule,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-AHBVTDPW.js";

// src/app/components/shared/button/button.component.ts
var _c0 = ["*"];
var ButtonComponent = class _ButtonComponent {
  variant = "primary";
  size = "md";
  disabled = false;
  fullWidth = false;
  static \u0275fac = function ButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonComponent, selectors: [["app-button"]], inputs: { variant: "variant", size: "size", disabled: "disabled", fullWidth: "fullWidth" }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [[3, "disabled"]], template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap("btn btn-" + ctx.variant + " btn-" + ctx.size + (ctx.fullWidth ? " btn-full" : ""));
      \u0275\u0275domProperty("disabled", ctx.disabled);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  border: none;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-size: 1.125rem;\n}\n.btn-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--accent);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--accent-hover);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px var(--shadow);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n  color: var(--text-primary);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--border);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--accent);\n  border: 2px solid var(--accent);\n}\n.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--accent);\n  color: white;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--text-secondary);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--bg-secondary);\n}\n/*# sourceMappingURL=button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{ selector: "app-button", standalone: true, imports: [CommonModule], template: `<button 
  [class]="'btn btn-' + variant + ' btn-' + size + (fullWidth ? ' btn-full' : '')"
  [disabled]="disabled">
  <ng-content></ng-content>
</button>
`, styles: ["/* src/app/components/shared/button/button.component.scss */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  border: none;\n  white-space: nowrap;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-sm {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n.btn-lg {\n  padding: 1rem 2rem;\n  font-size: 1.125rem;\n}\n.btn-full {\n  width: 100%;\n}\n.btn-primary {\n  background-color: var(--accent);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: var(--accent-hover);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px var(--shadow);\n}\n.btn-secondary {\n  background-color: var(--bg-secondary);\n  color: var(--text-primary);\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: var(--border);\n}\n.btn-outline {\n  background-color: transparent;\n  color: var(--accent);\n  border: 2px solid var(--accent);\n}\n.btn-outline:hover:not(:disabled) {\n  background-color: var(--accent);\n  color: white;\n}\n.btn-ghost {\n  background-color: transparent;\n  color: var(--text-secondary);\n}\n.btn-ghost:hover:not(:disabled) {\n  background-color: var(--bg-secondary);\n}\n/*# sourceMappingURL=button.component.css.map */\n"] }]
  }], null, { variant: [{
    type: Input
  }], size: [{
    type: Input
  }], disabled: [{
    type: Input
  }], fullWidth: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "src/app/components/shared/button/button.component.ts", lineNumber: 11 });
})();

export {
  ButtonComponent
};
//# sourceMappingURL=chunk-EO4F4QDA.js.map
