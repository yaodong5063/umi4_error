import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { isArray } from 'lodash';
import { jsx as _jsx } from "react/jsx-runtime";
const {
  RangePicker
} = DatePicker;

function formatDate(moment) {
  return moment.format('YYYY-MM-DD');
}

function formatDateTime(moment) {
  return moment.format('YYYY-MM-DD HH:mm:ss');
}

const DateAndHourPicker = props => {
  const {
    open,
    onChange,
    onClose,
    handleTimerVisible
  } = props;
  const [value, setValue] = useState(null); // const [enableTime, setEnableTime] = useState(false);

  useEffect(() => {
    if (props.value) {
      const [s1, e1] = props.value;
      const [s2, e2] = value || [];

      if (s1 !== s2 || e1 !== e2) {
        // if (s1.dayOfYear() === e1.dayOfYear()) {
        //   setEnableTime(true);
        // }
        setValue(props.value);
      }
    }
  }, [props.value]);

  const handleChange = dates => {
    if (isArray(dates) && dates.length >= 2 && dates[0] && dates[1]) {
      const [s, e] = dates; // const isSameDay = s.dayOfYear() === e.dayOfYear();
      // setEnableTime(isSameDay);
      // 时间筛选变化
      // if (isSameDay && value) {
      //   const hourChanged = s.hour() !== value[0].hour() || e.hour() !== value[1].hour();
      //   if (hourChanged) {
      //     s.minute(0);
      //     s.second(0);
      //     e.minute(0);
      //     e.second(0);
      //     setValue([s, e]);
      //   } else {
      //     onChange([`${formatDate(s)  } 00:00:00`, `${formatDate(e)  } 23:59:59`]);
      //   }
      // }
      // // 日期筛选变化
      // else {

      const range = [`${formatDate(s)} 00:00:00`, `${formatDate(e)} 23:59:59`];
      setValue([moment(range[0]), moment(range[1])]); // if (!isSameDay) {
      // setTimeout(() => {

      onChange(range, []); // onClose();
      // });
      // }
      // }
    }
  };

  const handleClose = (status, closeImmediately) => {
    if (!status) {
      handleTimerVisible(status); // if (value) {
      //   onChange([formatDateTime(value[0]), formatDateTime(value[1])], closeImmediately);
      // }
      // onClose();
    }
  };

  return /*#__PURE__*/_jsx(RangePicker // open={open}
  , {
    value: value,
    renderExtraFooter: () => /*#__PURE__*/_jsx("div", {
      children: "\xA0"
    }),
    onOpenChange: handleClose,
    onChange: handleChange // onOk={handleChange}
    // showTime={
    //   enableTime
    //     ? {
    //         format: 'HH',
    //       }
    //     : false
    // }

  });
};

export default DateAndHourPicker; //       renderExtraFooter={ () => '选择同天时，可以选择时间段'}