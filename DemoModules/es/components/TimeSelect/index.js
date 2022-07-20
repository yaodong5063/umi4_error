/*
 * @Author: ye.chen
 * @Date: 2020-02-28 21:15:32
 * @Last Modified by: ye.chen
 * @Last Modified time: 2020-03-06 11:08:30
 * @Description: 时间选择器
 */
import React from 'react';
import Select from "./Select";
import Tag from "./Tag";
import { TimeType } from "./enums";
import { jsx as _jsx } from "react/jsx-runtime";
export function checkIsTimeType(type) {
  return Object.keys(TimeType).indexOf(type) > -1;
}

class TimeSelect extends React.PureComponent {
  static Tag;

  render() {
    return /*#__PURE__*/_jsx(Select, { ...this.props
    });
  }

}

TimeSelect.Tag = Tag;
export default TimeSelect;