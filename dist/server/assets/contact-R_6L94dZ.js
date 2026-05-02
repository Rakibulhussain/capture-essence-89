import { T as jsxRuntimeExports } from "./worker-entry-DBrLksz1.js";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-viab3M6q.js";
import { a as contact } from "./router-BKwJ317f.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ContactCard({
  label,
  value,
  href
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", className: "group block p-8 rounded-2xl bg-card border border-border/40 hover:border-accent/60 transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-3", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors", children: value })
  ] });
}
function ContactPage() {
  const waNumber = contact.whatsapp.replace(/\D/g, "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 md:px-10 py-20 md:py-28 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-7xl font-bold leading-tight max-w-3xl", children: [
        "Let's create something",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent font-medium", children: "unforgettable." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-muted-foreground text-base md:text-lg", children: "Available for weddings, editorial shoots and music collaborations across Assam and beyond. Reach out — let's tell your story." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { label: "Email", value: contact.email, href: `mailto:${contact.email}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { label: "Instagram", value: contact.instagramHandle, href: contact.instagram }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { label: "WhatsApp", value: contact.whatsappDisplay, href: `https://wa.me/${waNumber}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 text-sm text-muted-foreground", children: [
        "Based in ",
        contact.location,
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ContactPage as component
};
