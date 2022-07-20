/*
 * @Author: ye.chen
 * @Date: 2020-02-28 21:15:32
 * @Last Modified by: ye.chen
 * @Last Modified time: 2020-07-30 16:09:44
 * @Description: 时间选择器
 */
import React, { forwardRef, useState, useEffect, useRef, useMemo } from "react";
import CustomSelect from "../CustomSelect";
import { TimeType } from "./enums";
import Base, { noop } from "./base";
import classname from "classnames";
import styles from "./index.less";
import TimeTag from "./Tag";
import Icon from "../Icon";
import dateSection from "../../assets/icon/dateSection.svg";
/*
  备注：
  # 自定义选项集 和 自定义范围 的区别：
  自定义键值对是自定义选项集，而自定义范围是选择具体的时间范围，对标 Antd - RangePicker。
 */
// 选项集

import { jsx as _jsx } from "react/jsx-runtime";
const defaultDataSource = [{
  key: "day",
  value: "天",
  fixed: true
}, TimeType.TODAY, TimeType.YESTERDAY, {
  key: "week",
  value: "周",
  fixed: true
}, TimeType.THIS_WEEK, TimeType.LAST_WEEK, {
  key: "month",
  value: "月",
  fixed: true
}, TimeType.THIS_MONTH, TimeType.LAST_MONTH, {
  key: "quarter",
  value: "季",
  fixed: true
}, TimeType.THIS_QUARTER, TimeType.LAST_QUARTER, {
  key: "year",
  value: "年",
  fixed: true
}, TimeType.THIS_YEAR, TimeType.LAST_YEAR];

const countHeight = listLen => (parseInt(`${listLen / 3}`) + (listLen % 3 > 0 ? 1 : 0)) * 40 + 20;

const toString = (key, map = TimeType) => {
  if (!key) return key;

  if (typeof key === "string") {
    return map[key].value;
  }

  if (Array.isArray(key)) {
    if (key.length === 1) {
      const singleKey = key[0];
      return map[singleKey].value;
    }

    if (key.length === 2) return `${key[0]}~${key[1]}`;
  }

  return void 0;
};

const cx = {
  main: {
    layout: classname(styles.system),
    fixed: classname(styles.fixed),
    item: classname(styles.item),
    focus: classname(styles.focus)
  },
  custom: {
    layout: classname(styles.custom),
    text: classname(styles.text),
    hide: classname(styles.hide)
  },
  className: classname(styles["select-layout"])
};
const TimeSelect = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    value: outerValue,
    onChange = noop,
    defaultValue,
    disabledCustom = false,
    mode,
    rangePickerProps = {},
    dataSource = defaultDataSource,
    tag = false,
    height,
    canCancel,
    valueCapture,
    dateModeStyle,
    dateOtherStyle,
    enableHourPeriodSelect,
    // 通话时间 支持当天内的 小时段选择
    ...restProps
  } = props; // const [innerValue, setInnerValue] = useState<TimeSelectValue>(defaultValue || void 0);
  // const value: TimeSelectValue = outerValue === void 0 ? innerValue : outerValue;

  const [innerValue, setInnerValue] = useState(() => typeof outerValue === "undefined" ? defaultValue : outerValue);
  const prevValueRef = useRef(outerValue);
  useEffect(() => {
    prevValueRef.current = outerValue;
  });

  if (outerValue !== prevValueRef.current && innerValue !== outerValue) {
    setInnerValue(outerValue);
  }

  const value = innerValue;
  const onRef = useRef({});

  const onRefFunc = ref => {
    onRef.current = ref;
  };

  const handleOnChange = (value, closeImmediately) => {
    // if (!enableHourPeriodSelect || closeImmediately) {
    //   onRef.current.handleVisible();
    // }
    if (valueCapture && !valueCapture(value)) {
      return;
    }

    setInnerValue(value);
    onChange(value);
  };

  const handleTimerVisible = visible => {
    if (!visible) {
      onRef?.current?.handleVisible?.();
    }
  };

  const baseProps = {
    value,
    onChange: handleOnChange,
    defaultValue,
    disabledCustom,
    mode,
    rangePickerProps,
    dataSource,
    canCancel,
    enableHourPeriodSelect,
    dateModeStyle,
    dateOtherStyle,
    handleTimerVisible
  };

  if (tag) {
    return /*#__PURE__*/_jsx(TimeTag, { ...props,
      handleTimerVisible: handleTimerVisible
    });
  } // let keyMap: { [name: string]: TimeTypeItem } = {};


  let keyMap = useMemo(() => {
    let map = {};
    dataSource.map(item => {
      map[item.key] = item;
    });
    return map;
  }, [dataSource]);
  return /*#__PURE__*/_jsx(CustomSelect, {
    placeholder: "\u8BF7\u9009\u62E9\u65F6\u95F4",
    ...restProps,
    onRef: onRefFunc,
    icon: "calendar",
    onClear: () => onChange(undefined),
    suffix: /*#__PURE__*/_jsx(Icon, {
      src: dateSection,
      size: 20
    }),
    value: toString(value, keyMap),
    width: 230,
    dateModeStyle: dateModeStyle,
    dateOtherStyle: dateOtherStyle,
    height: height === void 0 ? countHeight(dataSource.length) + (disabledCustom ? 0 : 44) : height,
    enableHourPeriodSelect: enableHourPeriodSelect,
    whilelist: ["ant-picker-dropdown-range"],
    dropdownRender: () => /*#__PURE__*/_jsx(Base, { ...baseProps,
      ...cx
    })
  });
});
export default TimeSelect;