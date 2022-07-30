import { j as jsx } from "../ssr.mjs";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react/jsx-runtime";
function Home() {
  return /* @__PURE__ */ jsx("div", {
    children: "Home"
  });
}
export {
  Home as default
};
