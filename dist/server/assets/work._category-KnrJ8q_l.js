import { T as jsxRuntimeExports } from "./worker-entry-DBrLksz1.js";
import { R as Route, L as Link } from "./router-BKwJ317f.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function CategoryPage() {
  const cat = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[55vh] min-h-[420px] flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cat.cover, alt: cat.title, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 md:px-10 pb-12 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "text-xs uppercase tracking-[0.3em] text-accent hover:underline", children: "← Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl font-bold mt-4", children: cat.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground text-base md:text-lg", children: cat.description })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 md:px-10 py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]", children: cat.photos.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 md:mb-6 break-inside-avoid overflow-hidden rounded-lg bg-card group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.src, alt: p.alt, loading: "lazy", className: "w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105" }) }, i)) }) })
  ] });
}
export {
  CategoryPage as component
};
