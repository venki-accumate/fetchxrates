import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-AHBVTDPW.js";

// src/app/pages/articles/articles.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function ArticlesComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.excerpt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.date);
  }
}
var ArticlesComponent = class _ArticlesComponent {
  articles = [
    {
      title: "Understanding Exchange Rates: A Developer's Guide",
      excerpt: "Learn the basics of exchange rates, how they work, and best practices for integrating currency data into your applications.",
      date: "2024-01-15",
      category: "Tutorial"
    },
    {
      title: "Best Practices for Currency Conversion in E-commerce",
      excerpt: "Discover how to handle multi-currency pricing, rounding, and display in online stores to provide the best customer experience.",
      date: "2024-01-10",
      category: "Guide"
    },
    {
      title: "API Rate Limiting: What You Need to Know",
      excerpt: "Understanding rate limits, how to handle them gracefully, and strategies for optimizing your API usage.",
      date: "2024-01-05",
      category: "Technical"
    }
  ];
  static \u0275fac = function ArticlesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArticlesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticlesComponent, selectors: [["app-articles"]], decls: 19, vars: 0, consts: [[1, "articles-page"], [1, "hero"], [1, "container"], [1, "subtitle"], [1, "section"], [1, "coming-soon"], [1, "icon"], [1, "preview-list"], [1, "article-preview"], [1, "category"], [1, "date"]], template: function ArticlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Articles & Resources");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Guides, tutorials, and best practices for working with exchange rate data.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "section", 4)(8, "div", 2)(9, "div", 5)(10, "div", 6);
      \u0275\u0275text(11, "\u{1F4DD}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "h2");
      \u0275\u0275text(13, "Coming Soon");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "p");
      \u0275\u0275text(15, "We're working on creating helpful articles, tutorials, and guides to help you get the most out of fetchxrates. Check back soon!");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "div", 7);
      \u0275\u0275repeaterCreate(17, ArticlesComponent_For_18_Template, 9, 4, "div", 8, _forTrack0);
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.articles);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5rem 0 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-secondary) 0%,\n      var(--bg-primary) 100%);\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.hero[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--text-secondary);\n}\n.coming-soon[_ngcontent-%COMP%] {\n  margin: 0 3rem;\n  text-align: center;\n}\n.coming-soon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: 2rem;\n}\n.coming-soon[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n.coming-soon[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  margin-bottom: 3rem;\n}\n.preview-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  text-align: left;\n}\n.article-preview[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.75rem;\n}\n.article-preview[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  background-color: var(--accent);\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 9999px;\n  margin-bottom: 1rem;\n}\n.article-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.75rem;\n}\n.article-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.article-preview[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n@media (max-width: 968px) {\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=articles.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticlesComponent, [{
    type: Component,
    args: [{ selector: "app-articles", standalone: true, imports: [CommonModule], template: `<div class="articles-page">
  <section class="hero">
    <div class="container">
      <h1>Articles & Resources</h1>
      <p class="subtitle">Guides, tutorials, and best practices for working with exchange rate data.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="coming-soon">
        <div class="icon">\u{1F4DD}</div>
        <h2>Coming Soon</h2>
        <p>We're working on creating helpful articles, tutorials, and guides to help you get the most out of fetchxrates. Check back soon!</p>
        <div class="preview-list">
          @for (article of articles; track article.title) {
            <div class="article-preview">
              <span class="category">{{ article.category }}</span>
              <h3>{{ article.title }}</h3>
              <p>{{ article.excerpt }}</p>
              <span class="date">{{ article.date }}</span>
            </div>
          }
        </div>
      </div>
    </div>
  </section>
</div>
`, styles: ["/* src/app/pages/articles/articles.component.scss */\n.hero {\n  text-align: center;\n  padding: 5rem 0 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--bg-secondary) 0%,\n      var(--bg-primary) 100%);\n}\n.hero h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.hero .subtitle {\n  font-size: 1.25rem;\n  color: var(--text-secondary);\n}\n.coming-soon {\n  margin: 0 3rem;\n  text-align: center;\n}\n.coming-soon .icon {\n  font-size: 5rem;\n  margin-bottom: 2rem;\n}\n.coming-soon h2 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n.coming-soon > p {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  margin-bottom: 3rem;\n}\n.preview-list {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  text-align: left;\n}\n.article-preview {\n  padding: 2rem;\n  background-color: var(--bg-card);\n  border: 1px solid var(--border);\n  border-radius: 0.75rem;\n}\n.article-preview .category {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  background-color: var(--accent);\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 9999px;\n  margin-bottom: 1rem;\n}\n.article-preview h3 {\n  font-size: 1.5rem;\n  margin-bottom: 0.75rem;\n}\n.article-preview p {\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.article-preview .date {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n@media (max-width: 968px) {\n  .hero h1 {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=articles.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticlesComponent, { className: "ArticlesComponent", filePath: "src/app/pages/articles/articles.component.ts", lineNumber: 11 });
})();
export {
  ArticlesComponent
};
//# sourceMappingURL=chunk-ZHDYPDD5.js.map
