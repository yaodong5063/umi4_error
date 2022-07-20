/*
 * @Author: ye.chen
 * @Date: 2020-03-05 17:38:28
 * @Last Modified by: ye.chen
 * @Last Modified time: 2020-03-06 22:13:00
 */
import React from "react";
import Center from "../CenterLayout";
import classname from "classnames";
import BaseTimeSelect from "./base";
import { TimeType } from "./enums";
import styles from "./index.less"; // 选项集

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const defaultDataSource = [TimeType.ALL, TimeType.LAST_WEEK, TimeType.YESTERDAY, TimeType.THIS_WEEK, TimeType.TODAY];

const TimeTag = props => {
  console.log(styles, "propspropspropspropspropspropsprops");
  const {
    label,
    justifyContent,
    dataSource = defaultDataSource,
    ...restProps
  } = props;
  const cx = {
    main: {
      layout: classname(styles.main),
      item: classname(styles["main-item"]),
      focus: classname(styles["main-focus"])
    },
    custom: {
      layout: classname(styles.custom),
      text: classname(styles["custom-text"]),
      hide: classname(styles["custom-hide"]),
      fixed: classname(styles["custom-focus"])
    },
    className: classname(styles["tag-layout"])
  };

  if (!label) {
    return /*#__PURE__*/_jsx(BaseTimeSelect, {
      textCustom: "\u81EA\u5B9A\u4E49\u65F6\u95F4\u6BB5",
      dataSource: dataSource,
      ...restProps,
      ...cx
    });
  }

  return /*#__PURE__*/_jsxs(Center, {
    justifyContent: justifyContent || "start",
    children: [label, /*#__PURE__*/_jsx(BaseTimeSelect, {
      textCustom: "\u81EA\u5B9A\u4E49\u65F6\u95F4\u6BB5",
      dataSource: dataSource,
      ...restProps,
      ...cx
    })]
  });
};

export default TimeTag;