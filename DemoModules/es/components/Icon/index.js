import React from 'react';
import classNames from 'classnames';
import styles from "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";

const Icon = ({
  src,
  style = {},
  size = '',
  className,
  onClick = () => {},
  id = ''
}) => {
  const initStyle = {
    backgroundImage: `url(${src})`,
    width: size,
    height: size,
    ...style
  };
  const cx = classNames(styles.icon, className);
  return /*#__PURE__*/_jsx("div", {
    id: id,
    className: cx,
    style: initStyle,
    onClick: onClick
  });
};

export default Icon;