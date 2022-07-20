/*
 * @Author: ye.chen
 * @Date: 2020-03-04 16:20:44
 * @Last Modified by: ye.chen
 * @Last Modified time: 2020-03-12 17:43:58
 */
import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import moment from "moment";
import { modeProps } from "./enums";
import DatePicker from "./DatePicker";
import styles from "./index.less";
import DateAndHourPicker from "./DateAndHourPicker";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
console.log(styles, "stylesstylesstylesstylesstylesstylesstyles");
export const noop = (value, prevValue) => {};

const toMoment = dateStrings => [moment(dateStrings[0]), moment(dateStrings[1])];

const BaseTimeSelect = props => {
  const {
    value: outerValue,
    onChange = noop,
    defaultValue,
    disabledCustom = false,
    mode = "time",
    rangePickerProps = {},
    dataSource = [],
    textCustom = "自定义",
    canCancel = false,
    enableHourPeriodSelect,
    main: cxMain = {},
    custom: cxCustom = {},
    className,
    handleTimerVisible
  } = props;
  const [timeVisible, setTimeVisible] = useState(true);
  const [timeValue, setTimeValue] = useState("");
  const [innerValue, setInnerValue] = useState(() => typeof outerValue === "undefined" ? defaultValue : outerValue); // const [showDateAndHourPicker, setShowDateAndHourPicker] = useState(false);

  const prevValueRef = useRef(innerValue);
  useEffect(() => {
    prevValueRef.current = outerValue;
  });

  if (outerValue !== prevValueRef.current && innerValue !== outerValue) {
    setInnerValue(outerValue);
  }

  const value = innerValue;

  const handleOnChange = target => {
    if (typeof target === "string") {
      handleTimerVisible(false);
    }

    console.log("handleOnChange", target);
    let val = target;

    if (Array.isArray(target)) {
      val = [target[0].format(modeProps[mode].format), target[1].format(modeProps[mode].format)];
    }

    if (canCancel && val === value) {
      setInnerValue(void 0);
      onChange(void 0, val);
    } else {
      const value = val;
      setInnerValue(value);
      onChange(value);
    }
  }; // 系统选项


  const systemRender = () => /*#__PURE__*/_jsx("div", {
    className: cxMain.layout,
    children: dataSource.map(item => {
      const {
        key,
        fixed = false,
        value: val
      } = item;
      const cx = classNames({
        [cxMain.item || ""]: !fixed,
        [cxMain.fixed || ""]: fixed,
        [cxMain.focus || ""]: key === value
      });
      return /*#__PURE__*/_jsx("div", {
        className: cx,
        onClick: () => !fixed && handleOnChange(key),
        children: val
      }, key);
    })
  });

  const onTimeChange = value => {
    setTimeVisible(value);
  };

  const onPicker = e => {
    // 延迟获取真实改变的面板展示隐藏的值
    setTimeValue(e);
  };

  useEffect(() => {
    // 延迟获取真实改变的面板展示隐藏的值
    if (!timeVisible) {
      // const v =
      //   typeof value === "string" ? moment(value) : value?.map(e => moment(e));
      // handleOnChange((timeValue as any) || v);
      if (timeValue) {
        handleTimerVisible(false);
        handleOnChange(timeValue);
      }
    }
  }, [timeValue, timeVisible]); // 自定义选项

  const customRender = () => {
    if (disabledCustom) return null;
    const cx = classNames(cxCustom.layout, {
      [cxCustom.fixed || ""]: Array.isArray(value)
    });
    let restProps = {};

    if (mode === "time") {
      restProps = {
        showTime: {
          format: "HH:mm"
        },
        defaultValue: Array.isArray(value) ? toMoment(value) : [moment(`${moment().format("YYYY-MM-DD")} 00:00`), moment(`${moment().format("YYYY-MM-DD")} 23:59`)],
        onOpenChange: onTimeChange,
        onChange: onPicker,
        onOk: onPicker
      };
    } else {
      restProps = {
        defaultValue: Array.isArray(value) ? toMoment(value) : void 0,
        onChange: handleOnChange
      };
    }

    return /*#__PURE__*/_jsxs("div", {
      className: cx,
      onClick: e => {// setShowDateAndHourPicker(true);
      },
      children: [/*#__PURE__*/_jsx("span", {
        className: cxCustom.text,
        children: textCustom
      }), /*#__PURE__*/_jsx("div", {
        className: cxCustom.hide,
        children: enableHourPeriodSelect ? /*#__PURE__*/_jsx(DateAndHourPicker, {
          value: restProps.defaultValue,
          onChange: onChange // open={showDateAndHourPicker}
          ,
          handleTimerVisible: handleTimerVisible // onClose={() => setShowDateAndHourPicker(false)}

        }) : /*#__PURE__*/_jsx(DatePicker, { ...rangePickerProps,
          modeType: mode === "time" ? "date" : mode,
          handleTimerVisible: handleTimerVisible,
          ...restProps
        })
      })]
    });
  };

  const cx = classNames(styles.base, className);
  return /*#__PURE__*/_jsxs("div", {
    className: cx,
    children: [systemRender(), customRender()]
  });
};

export default BaseTimeSelect;