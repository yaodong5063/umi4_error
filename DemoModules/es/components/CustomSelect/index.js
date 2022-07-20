/*
 * @Author: ye.chen
 * @Date: 2020-02-28 21:15:32
 * @Last Modified by: hao.chen
 * @Last Modified time: 2020-09-16 10:47:36
 * @Description: 时间选择器
 */
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Input, Popover } from "antd";
import { EditOutlined } from "@ant-design/icons";
import styles from "./index.less";
import Animate from "./Animate";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const noop = () => {};

const CustomSelect = props => {
  const {
    onRef = noop,
    onClick = noop,
    onCancel = noop,
    onClear = noop,
    dropdownRender,
    icon = "edit",
    suffix = null,
    height,
    width,
    whilelist = [],
    enableHourPeriodSelect,
    dateModeStyle = "",
    dateOtherStyle = "",
    ...restProps
  } = props;
  const [state, setState] = useState({
    minHeight: 0,
    minWidth: 0,
    left: 0,
    top: 0,
    lastHeight: 0,
    lastWidth: 0,
    visible: false
  });
  const divRef = useRef(null);
  const modalRef = useRef(null);
  const [display, setDisplay] = useState("none");
  const outDivClickHandler = useCallback(e => {
    const target = e.target;
    let flag = true;
    whilelist.forEach(className => {
      Array.prototype.forEach.call(document.getElementsByClassName(className), ele => {
        if (!flag) return;

        if (ele || ele.contains(target)) {
          flag = false;
        }
      });
    }); // 组件已挂载且事件触发对象不在div内

    if (flag && modalRef.current && !modalRef.current.contains(target) && divRef.current && !divRef.current.contains(target)) {
      setState(s => ({ ...s,
        visible: false
      }));
      onCancel();
    }
  }, []);
  useEffect(() => {
    onRef({
      handleVisible: () => setState(s => ({ ...s,
        visible: !s.visible
      }))
    });
    document.addEventListener("click", outDivClickHandler);
    return () => {
      document.removeEventListener("click", outDivClickHandler);
    };
  }, []);
  useEffect(() => {
    if (divRef.current) {
      const ref = divRef.current;
      const getBoundingClientRect = ref.getBoundingClientRect();
      const root = document.getElementById("root");
      setState(s => ({ ...s,
        minHeight: ref.offsetHeight + 4,
        minWidth: ref.offsetWidth + 4,
        top: getBoundingClientRect.top,
        left: getBoundingClientRect.left,
        lastHeight: root.offsetHeight - getBoundingClientRect.top,
        lastWidth: root.offsetWidth - getBoundingClientRect.left
      }));
    }
  }, [divRef]);
  useEffect(() => {
    /\~/i.test(restProps.value) ? setDisplay("block") : setDisplay("none");
  }, [restProps.value]);

  const handleOnClick = e => {
    setState(s => ({ ...s,
      visible: !s.visible
    }));
    onClick(e);
  };

  const handleOnChange = e => {
    if (!e.target.value && onClear) {
      onClear();
    }
  };

  const customStyle = () => {
    console.log(213213123);

    if (/\~/i.test(restProps.value)) {
      // return { width: '280px' };
      switch (dateModeStyle) {
        case "month":
          return {
            width: "165px"
          };

        case "date":
          return {
            width: "205px"
          };

        default:
          return {
            width: "280px"
          };
      }
    } else {
      switch (dateOtherStyle) {
        case "small":
          return {
            width: "76px"
          };

        case "middle":
          return {
            width: "120px"
          };

        default:
          return {
            width: "140px"
          };
      }
    }
  };

  const {
    minHeight,
    minWidth
  } = state;
  let modalWrapStyle = {
    minWidth,
    minHeight,
    top: divRef && divRef.current ? divRef.current.offsetHeight + 2 : 0,
    left: 0
  };

  if (divRef.current) {
    const h = state.lastHeight - (height || minHeight);
    const w = state.lastWidth - (width || minWidth); // if (h < 0) {
    //   modalWrapStyle.top = h - 7;
    // }

    if (w < 0) {
      modalWrapStyle.left = w - 7;
    }
  }

  if (width) modalWrapStyle.width = width;
  if (height) modalWrapStyle.height = height;
  return /*#__PURE__*/_jsxs("div", {
    className: styles["custom-select"],
    ref: divRef,
    style: restProps.style || {},
    children: [/*#__PURE__*/_jsx(Popover, {
      placement: "top",
      trigger: "hover",
      content: restProps.value,
      overlayStyle: enableHourPeriodSelect ? {
        display: "none"
      } : {
        display
      },
      onVisibleChange: visible => {
        /\~/i.test(restProps.value) && visible ? setDisplay("block") : setDisplay("none");
      },
      children: /*#__PURE__*/_jsx("div", {
        className: styles["time-ipt"],
        children: /*#__PURE__*/_jsx(Input, {
          style: customStyle(),
          ...restProps,
          onClick: handleOnClick,
          onChange: handleOnChange,
          autoComplete: "off",
          suffix: !!suffix ? restProps.value && restProps.allowClear ? null : /*#__PURE__*/_jsx("div", {
            onClick: handleOnClick,
            children: suffix
          }) : /*#__PURE__*/_jsx(EditOutlined, {
            onClick: handleOnClick,
            className: styles.icon
          })
        })
      })
    }), /*#__PURE__*/_jsx(Animate, {
      visible: state.visible,
      style: modalWrapStyle,
      className: `${styles["modal-wrap"]} xkb-fav`,
      children: /*#__PURE__*/_jsx("div", {
        ref: modalRef,
        className: styles.modal,
        children: dropdownRender()
      })
    })]
  });
};

export default CustomSelect;