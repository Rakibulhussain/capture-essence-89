import { T as jsxRuntimeExports } from "./worker-entry-DBrLksz1.js";
import { L as Link, a as contact } from "./router-BKwJ317f.js";
function SiteHeader() {
  const linkCls = "text-sm font-medium text-foreground/80 hover:text-accent transition-colors";
  const activeCls = { className: "text-accent" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 md:px-10 py-5 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-serif text-lg md:text-xl font-bold tracking-tight", children: [
      "Bhaskar ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Barman" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-6 md:gap-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", activeOptions: { exact: true }, activeProps: activeCls, className: linkCls, children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", activeProps: activeCls, className: linkCls, children: "Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", activeProps: activeCls, className: linkCls, children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", activeProps: activeCls, className: linkCls, children: "Contact" })
    ] })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/40 mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif text-base", children: [
      "Bhaskar ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Barman" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Bhaskar Barman Photography · ",
      contact.location
    ] })
  ] }) });
}
export {
  SiteHeader as S,
  SiteFooter as a
};
