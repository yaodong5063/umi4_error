import React from "react";
import { RangePickerProps } from "antd/lib/date-picker";
import { modeProps } from "../enums";
export declare type ImodeType = keyof typeof modeProps;
interface Imode {
    modeType: ImodeType;
    handleTimerVisible: (e: boolean) => void;
}
declare const Picker: React.FC<RangePickerProps & Imode>;
export default Picker;
