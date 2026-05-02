import { T as jsxRuntimeExports } from "./worker-entry-DBrLksz1.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitErrorComponent = ({
  error,
  reset
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-32 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl mb-4", children: "Something went wrong" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: error.message }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "text-accent hover:underline", children: "Try again" })
] });
export {
  SplitErrorComponent as errorComponent
};
