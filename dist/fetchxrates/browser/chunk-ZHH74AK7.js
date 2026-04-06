import {
  CommonModule,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AHBVTDPW.js";

// src/app/components/shared/badge/badge.component.ts
var _c0 = ["*"];
var BadgeComponent = class _BadgeComponent {
  variant = "default";
  size = "sm";
  static \u0275fac = function BadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BadgeComponent, selectors: [["app-badge"]], inputs: { variant: "variant", size: "size" }, ngContentSelectors: _c0, decls: 2, vars: 2, template: function BadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "span");
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap("badge badge-" + ctx.variant + " badge-" + ctx.size);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-weight: 500;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\n.badge-sm[_ngcontent-%COMP%] {\n  padding: 0.125rem 0.5rem;\n  font-size: 0.6875rem;\n}\n.badge-md[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.75rem;\n}\n.badge-lg[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  font-size: 1rem;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background-color: rgba(16, 185, 129, 0.1);\n  color: var(--success);\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background-color: rgba(245, 158, 11, 0.1);\n  color: var(--warning);\n}\n.badge-info[_ngcontent-%COMP%] {\n  background-color: rgba(37, 99, 235, 0.1);\n  color: var(--accent);\n}\n.badge-danger[_ngcontent-%COMP%] {\n  background-color: rgba(239, 68, 68, 0.1);\n  color: var(--danger);\n}\n.badge-default[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=badge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{ selector: "app-badge", standalone: true, imports: [CommonModule], template: `<span [class]="'badge badge-' + variant + ' badge-' + size">
  <ng-content></ng-content>
</span>
`, styles: ["/* src/app/components/shared/badge/badge.component.scss */\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-weight: 500;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\n.badge-sm {\n  padding: 0.125rem 0.5rem;\n  font-size: 0.6875rem;\n}\n.badge-md {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.75rem;\n}\n.badge-lg {\n  padding: 0.5rem 1.25rem;\n  font-size: 1rem;\n}\n.badge-success {\n  background-color: rgba(16, 185, 129, 0.1);\n  color: var(--success);\n}\n.badge-warning {\n  background-color: rgba(245, 158, 11, 0.1);\n  color: var(--warning);\n}\n.badge-info {\n  background-color: rgba(37, 99, 235, 0.1);\n  color: var(--accent);\n}\n.badge-danger {\n  background-color: rgba(239, 68, 68, 0.1);\n  color: var(--danger);\n}\n.badge-default {\n  background-color: var(--bg-secondary);\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=badge.component.css.map */\n"] }]
  }], null, { variant: [{
    type: Input
  }], size: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BadgeComponent, { className: "BadgeComponent", filePath: "src/app/components/shared/badge/badge.component.ts", lineNumber: 11 });
})();

// src/app/pages/status/status.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.title;
function StatusComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 15)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-badge", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("variant", ctx_r1.getStatusBadgeVariant(service_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", service_r1.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", service_r1.uptime, "% uptime");
  }
}
function StatusComponent_For_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "\u2197 Trending up");
    \u0275\u0275elementEnd();
  }
}
function StatusComponent_For_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\u2198 Trending down");
    \u0275\u0275elementEnd();
  }
}
function StatusComponent_For_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "\u2192 Stable");
    \u0275\u0275elementEnd();
  }
}
function StatusComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, StatusComponent_For_23_Conditional_5_Template, 2, 0, "span", 20)(6, StatusComponent_For_23_Conditional_6_Template, 2, 0, "span", 21)(7, StatusComponent_For_23_Conditional_7_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const metric_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r3.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(metric_r3.trend === "up" ? 5 : metric_r3.trend === "down" ? 6 : 7);
  }
}
function StatusComponent_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-badge", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const incident_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(incident_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("variant", ctx_r1.getStatusBadgeVariant(incident_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", incident_r4.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(incident_r4.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(incident_r4.description);
  }
}
function StatusComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, StatusComponent_Conditional_28_For_2_Template, 10, 5, "div", 23, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.incidents);
  }
}
function StatusComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 27);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No incidents reported in the last 30 days");
    \u0275\u0275elementEnd()();
  }
}
var StatusComponent = class _StatusComponent {
  currentStatus = "operational";
  uptime = 99.97;
  services = [
    { name: "API Endpoint", status: "operational", uptime: 99.98 },
    { name: "Data Updates", status: "operational", uptime: 99.99 },
    { name: "CDN", status: "operational", uptime: 99.95 },
    { name: "Authentication", status: "operational", uptime: 100 }
  ];
  incidents = [
    {
      title: "Scheduled Maintenance",
      status: "resolved",
      date: "2024-01-10",
      description: "Database optimization and performance improvements completed successfully."
    },
    {
      title: "Brief API Slowdown",
      status: "resolved",
      date: "2023-12-15",
      description: "Temporary increase in response times. Resolved by scaling infrastructure."
    }
  ];
  metrics = [
    { label: "Avg Response Time", value: "87ms", trend: "down" },
    { label: "Requests (24h)", value: "1.2M", trend: "up" },
    { label: "Success Rate", value: "99.98%", trend: "stable" },
    { label: "Uptime (30d)", value: "99.97%", trend: "stable" }
  ];
  ngOnInit() {
  }
  getStatusBadgeVariant(status) {
    switch (status) {
      case "operational":
      case "resolved":
        return "success";
      case "degraded":
        return "warning";
      case "outage":
        return "danger";
      default:
        return "info";
    }
  }
  static \u0275fac = function StatusComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusComponent, selectors: [["app-status"]], decls: 30, vars: 5, consts: [[1, "status-page"], [1, "hero"], [1, "container"], [1, "current-status"], [3, "variant", "size"], [1, "uptime"], [1, "section"], [1, "services-list"], [1, "service-item"], [1, "section", "metrics-section"], [1, "metrics-grid"], [1, "metric-card"], [1, "section", "incidents-section"], [1, "incidents-list"], [1, "no-incidents"], [1, "service-info"], [3, "variant"], [1, "service-uptime"], [1, "metric-label"], [1, "metric-value"], [1, "trend", "up"], [1, "trend", "down"], [1, "trend", "stable"], [1, "incident-item"], [1, "incident-header"], [1, "incident-date"], [1, "incident-description"], [1, "icon"]], template: function StatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "System Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "app-badge", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "section", 6)(11, "div", 2)(12, "h2");
      \u0275\u0275text(13, "Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275repeaterCreate(15, StatusComponent_For_16_Template, 9, 4, "div", 8, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "section", 9)(18, "div", 2)(19, "h2");
      \u0275\u0275text(20, "Performance Metrics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 10);
      \u0275\u0275repeaterCreate(22, StatusComponent_For_23_Template, 8, 3, "div", 11, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "section", 12)(25, "div", 2)(26, "h2");
      \u0275\u0275text(27, "Recent Incidents");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(28, StatusComponent_Conditional_28_Template, 3, 0, "div", 13)(29, StatusComponent_Conditional_29_Template, 5, 0, "div", 14);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("variant", ctx.getStatusBadgeVariant(ctx.currentStatus))("size", "lg");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.currentStatus === "operational" ? "\u2713 All Systems Operational" : ctx.currentStatus === "degraded" ? "\u26A0 Degraded Performance" : "\u2715 Service Outage", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.uptime, "% uptime (last 30 days)");
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.services);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.metrics);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.incidents.length > 0 ? 28 : 29);
    }
  }, dependencies: [CommonModule, BadgeComponent], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5rem 0 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-secondary) 0%,\n      var(--bg-primary) 100%);\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 2rem;\n}\n.current-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.current-status[_ngcontent-%COMP%]   .uptime[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1.125rem;\n}\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n.services-list[_ngcontent-%COMP%] {\n  margin: 0 3rem;\n}\n.service-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n}\n.service-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.service-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.service-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin: 0;\n}\n.service-uptime[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n}\n.metrics-section[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  margin: 0 3rem;\n}\n.metric-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.trend[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.trend.up[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.trend.down[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.trend.stable[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.incidents-section[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.incidents-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.incident-item[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.75rem;\n}\n.incident-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.incident-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin: 0;\n}\n.incident-date[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin-bottom: 0.75rem;\n}\n.incident-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.no-incidents[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.no-incidents[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--success);\n  margin-bottom: 1rem;\n}\n.no-incidents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1.125rem;\n}\n@media (max-width: 968px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .service-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .incident-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=status.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusComponent, [{
    type: Component,
    args: [{ selector: "app-status", standalone: true, imports: [CommonModule, BadgeComponent], template: `<div class="status-page">
  <section class="hero">
    <div class="container">
      <h1>System Status</h1>
      <div class="current-status">
        <app-badge [variant]="getStatusBadgeVariant(currentStatus)" [size]="'lg'">
          {{ currentStatus === 'operational' ? '\u2713 All Systems Operational' : currentStatus === 'degraded' ? '\u26A0 Degraded Performance' : '\u2715 Service Outage' }}
        </app-badge>
        <p class="uptime">{{ uptime }}% uptime (last 30 days)</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Services</h2>
      <div class="services-list">
        @for (service of services; track service.name) {
          <div class="service-item">
            <div class="service-info">
              <h3>{{ service.name }}</h3>
              <app-badge [variant]="getStatusBadgeVariant(service.status)">
                {{ service.status }}
              </app-badge>
            </div>
            <div class="service-uptime">
              <span>{{ service.uptime }}% uptime</span>
            </div>
          </div>
        }
      </div>
    </div>
  </section>

  <section class="section metrics-section">
    <div class="container">
      <h2>Performance Metrics</h2>
      <div class="metrics-grid">
        @for (metric of metrics; track metric.label) {
          <div class="metric-card">
            <span class="metric-label">{{ metric.label }}</span>
            <span class="metric-value">{{ metric.value }}</span>
            @if (metric.trend === 'up') {
              <span class="trend up">\u2197 Trending up</span>
            } @else if (metric.trend === 'down') {
              <span class="trend down">\u2198 Trending down</span>
            } @else {
              <span class="trend stable">\u2192 Stable</span>
            }
          </div>
        }
      </div>
    </div>
  </section>

  <section class="section incidents-section">
    <div class="container">
      <h2>Recent Incidents</h2>
      @if (incidents.length > 0) {
        <div class="incidents-list">
          @for (incident of incidents; track incident.title) {
            <div class="incident-item">
              <div class="incident-header">
                <h3>{{ incident.title }}</h3>
                <app-badge [variant]="getStatusBadgeVariant(incident.status)">
                  {{ incident.status }}
                </app-badge>
              </div>
              <p class="incident-date">{{ incident.date }}</p>
              <p class="incident-description">{{ incident.description }}</p>
            </div>
          }
        </div>
      } @else {
        <div class="no-incidents">
          <div class="icon">\u2713</div>
          <p>No incidents reported in the last 30 days</p>
        </div>
      }
    </div>
  </section>
</div>
`, styles: ["/* src/app/pages/status/status.component.scss */\n.hero {\n  text-align: center;\n  padding: 5rem 0 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-secondary) 0%,\n      var(--bg-primary) 100%);\n}\n.hero h1 {\n  font-size: 3rem;\n  margin-bottom: 2rem;\n}\n.current-status {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.current-status .uptime {\n  color: var(--text-secondary);\n  font-size: 1.125rem;\n}\n.section h2 {\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n.services-list {\n  margin: 0 3rem;\n}\n.service-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n}\n.service-item:last-child {\n  margin-bottom: 0;\n}\n.service-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.service-info h3 {\n  font-size: 1.125rem;\n  margin: 0;\n}\n.service-uptime {\n  color: var(--text-secondary);\n  font-size: 0.9375rem;\n}\n.metrics-section {\n  background-color: var(--bg-secondary);\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  margin: 0 3rem;\n}\n.metric-card {\n  padding: 1.5rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.metric-label {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.metric-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.trend {\n  font-size: 0.875rem;\n}\n.trend.up {\n  color: var(--success);\n}\n.trend.down {\n  color: var(--danger);\n}\n.trend.stable {\n  color: var(--text-muted);\n}\n.incidents-section {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.incidents-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.incident-item {\n  padding: 1.5rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.75rem;\n}\n.incident-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.incident-header h3 {\n  font-size: 1.25rem;\n  margin: 0;\n}\n.incident-date {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin-bottom: 0.75rem;\n}\n.incident-description {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.no-incidents {\n  text-align: center;\n  padding: 3rem;\n}\n.no-incidents .icon {\n  font-size: 4rem;\n  color: var(--success);\n  margin-bottom: 1rem;\n}\n.no-incidents p {\n  color: var(--text-secondary);\n  font-size: 1.125rem;\n}\n@media (max-width: 968px) {\n  .metrics-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .hero h1 {\n    font-size: 2.5rem;\n  }\n  .service-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n}\n@media (max-width: 640px) {\n  .metrics-grid {\n    grid-template-columns: 1fr;\n  }\n  .incident-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=status.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusComponent, { className: "StatusComponent", filePath: "src/app/pages/status/status.component.ts", lineNumber: 12 });
})();
export {
  StatusComponent
};
//# sourceMappingURL=chunk-ZHH74AK7.js.map
