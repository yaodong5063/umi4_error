import React from "react";
import { jsx as _jsx } from "react/jsx-runtime";

const Center = props => {
  const {
    alignItems,
    width,
    auto,
    justifyContent,
    children,
    style,
    ...rest
  } = props;
  const _style = {
    width: auto ? "auto" : width || "100%",
    display: "flex",
    alignItems: alignItems || "center",
    justifyContent: justifyContent || "space-between",
    ...style
  };
  return /*#__PURE__*/_jsx("div", {
    style: _style,
    ...rest,
    children: children
  });
};

export default /*#__PURE__*/React.memo(Center);