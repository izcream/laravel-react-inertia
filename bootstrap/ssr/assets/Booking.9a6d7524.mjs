import { j as jsx } from "../ssr.mjs";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react/jsx-runtime";
function Booking() {
  return /* @__PURE__ */ jsx("div", {
    className: "text-4xl font-bold text-primary",
    children: "Booking"
  });
}
export {
  Booking as default
};
