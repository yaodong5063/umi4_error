/*
 * @Author: ye.chen
 * @Date: 2020-03-03 01:17:19
 * @Last Modified by: ye.chen
 * @Last Modified time: 2020-03-03 02:15:19
 */
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./index.less";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

const Animate = props => {
  const {
    visible: show,
    className,
    ...restProps
  } = props;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [show]);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: visible && /*#__PURE__*/_jsx("span", {
      className: classNames(className, {
        [styles["fade-enter"]]: show,
        [styles["fade-leave"]]: !show,
        [styles["fade-enter-active"]]: show,
        [styles["fade-leave-active"]]: !show
      }),
      ...restProps,
      children: props.children
    })
  });
};

export default Animate;