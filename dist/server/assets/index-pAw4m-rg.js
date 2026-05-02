import { T as jsxRuntimeExports } from "./worker-entry-DBrLksz1.js";
import { h as heroImage, L as Link, c as categories, f as featured } from "./router-BKwJ317f.js";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-viab3M6q.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImage, alt: "Hero photograph", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 px-6 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm uppercase tracking-[0.3em] text-accent mb-6", children: "Photographer · Assam" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] text-balance", children: [
          "Capture the Unseen.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent italic font-medium", children: "Amplify the Emotion." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto", children: "Cinematic storytelling across weddings, fashion editorials, and live music — by Bhaskar Barman." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "inline-flex items-center bg-accent text-accent-foreground font-semibold py-3 px-8 rounded-full hover:opacity-90 transition", children: "View Portfolio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center border border-border py-3 px-8 rounded-full hover:bg-secondary transition", children: "Get in Touch" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 md:px-10 py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-3", children: "Selected Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl font-bold", children: "Stories in three acts." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "hidden md:inline text-sm text-accent hover:underline", children: "See all →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/work/$category", params: {
        category: c.slug
      }, className: "group relative block overflow-hidden rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.cover, alt: c.title, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl md:text-3xl font-bold", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: c.tagline })
        ] })
      ] }, c.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 md:px-10 pb-24 md:pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-3", children: "Frames" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl font-bold mb-12", children: "A glimpse of the work." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4", children: featured.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group aspect-square overflow-hidden rounded-lg bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.src, alt: p.alt, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "text-accent hover:underline", children: "Explore the full portfolio →" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
