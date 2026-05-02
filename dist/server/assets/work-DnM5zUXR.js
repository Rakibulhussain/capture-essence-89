import { $ as useMatches, T as jsxRuntimeExports, Z as Outlet } from "./worker-entry-Bm3RNstT.js";
import { c as categories, L as Link } from "./router-BXxJ1iy_.js";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-C2hbw93P.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function WorkLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/work/$category");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    !isChild && /* @__PURE__ */ jsxRuntimeExports.jsx(WorkIndex, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function WorkIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 md:px-10 py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Portfolio" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-6xl font-bold mb-16 max-w-3xl", children: [
      "Selected ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent font-medium", children: "work." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/work/$category", params: {
      category: c.slug
    }, className: "group relative block overflow-hidden rounded-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.cover, alt: c.title, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl font-bold", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: c.tagline })
      ] })
    ] }, c.slug)) })
  ] });
}
export {
  WorkLayout as component
};
