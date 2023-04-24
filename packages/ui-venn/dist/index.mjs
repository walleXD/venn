// src/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button(props) {
  var _a;
  const classes = [props.className, (_a = props.kind) != null ? _a : "primary"];
  return /* @__PURE__ */ jsx("button", {
    className: classes.filter(Boolean).join(" "),
    children: props.children
  });
}
export {
  Button
};
