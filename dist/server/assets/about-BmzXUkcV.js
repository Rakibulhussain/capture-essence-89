import { T as jsxRuntimeExports } from "./worker-entry-Bm3RNstT.js";
import { p as portraitImage, L as Link } from "./router-BXxJ1iy_.js";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-C2hbw93P.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Stat({
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-4xl md:text-5xl font-bold text-accent", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: label })
  ] });
}
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-6xl font-bold leading-tight max-w-3xl", children: [
        "Preserving emotion. Telling stories.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent font-medium", children: "Frame by frame." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 md:px-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portraitImage, alt: "Bhaskar Barman portrait", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "I'm ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Bhaskar Barman" }),
          ", a passionate and dedicated professional photographer with over 4 years of experience capturing meaningful moments and compelling visuals."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Based in Assam, I have worked with renowned and playback singers — documenting live performances, portraits, and promotional shoots. My work reflects a strong understanding of lighting, emotion, and storytelling, ensuring every frame feels authentic and impactful." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Over the years, I have covered ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "30+ weddings" }),
          ", delivering cinematic and timeless memories. My approach blends candid storytelling with creative composition — capturing both grand moments and the smallest emotions."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I also specialize in fashion photography, collaborating on styled shoots that highlight personality, aesthetics, and brand identity." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 md:px-10 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border/40 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "4+", label: "Years of experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "30+", label: "Weddings shot" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "50+", label: "Editorial sessions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "∞", label: "Stories told" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 md:px-10 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl font-bold mb-8", children: "My style" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg", children: ["Natural cinematic tones", "Clean and professional composition", "Emotion-driven storytelling", "Strong attention to detail"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 p-5 rounded-xl bg-card border border-border/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-xl leading-none", children: "●" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
      ] }, s)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center bg-accent text-accent-foreground font-semibold py-3 px-8 rounded-full hover:opacity-90 transition", children: "Work with me" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  AboutPage as component
};
