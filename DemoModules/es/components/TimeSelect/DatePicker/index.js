/*
 * @Author: ye.chen
 * @Date: 2020-03-03 19:48:03
 * @Last Modified by: ye.chen
 * @Last Modified time: 2020-03-04 16:16:37
 */
import React, { useCallback } from "react";
import { DatePicker } from "antd"; // import { RangePickerProps } from 'antd/es/date-picker/interface';

import { modeProps } from "../enums"; // import { PanelSharedProps } from 'rc-picker/lib/interface';

import { jsx as _jsx } from "react/jsx-runtime";
const {
  RangePicker
} = DatePicker;

const Picker = props => {
  const {
    modeType,
    onChange = () => {},
    handleTimerVisible,
    ...restProps
  } = props; // const [state, setState] = useState({
  //   isOpen: false,
  // });

  const onOpenChange = useCallback(status => {
    // setState(s => ({
    //   ...s,
    //   isOpen: !!status,
    // }));
    handleTimerVisible(status);
  }, []);
  const onPanelChange = useCallback(dates => {
    const isOpen = !(!!dates[0] && !!dates[1]);
    const {
      format
    } = modeProps[modeType]; // setState(s => ({
    //   ...s,
    //   time: dates,
    //   isOpen,
    // }));

    if (!isOpen) {
      onChange(dates, [dates[0].format(format), dates[1].format(format)]);
    }
  }, []);
  let localProps = { ...restProps,
    onChange
  };

  if (typeof modeType === "string" && modeProps[modeType] && modeType !== "date") {
    localProps = { ...localProps,
      ...modeProps[modeType],
      // open: state.isOpen,
      onOpenChange,
      onPanelChange,
      picker: modeType
    };
  }

  return /*#__PURE__*/_jsx(RangePicker, {
    onOpenChange: e => {
      handleTimerVisible(e);
    },
    ...localProps
  });
};

export default Picker;