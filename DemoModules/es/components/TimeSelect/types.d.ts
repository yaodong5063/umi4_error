import { RangePickerProps } from "antd/lib/date-picker";
import { InputProps } from "antd/es/input";
export declare type TimeTypeItem = {
    key: string;
    value: string;
    fixed?: boolean;
};
export interface BaseTimeSelectProps {
    defaultValue?: TimeSelectValue;
    value?: TimeSelectValue;
    onChange?: (value: TimeSelectValue, prevValue?: TimeSelectValue) => void;
    disabledCustom?: boolean;
    mode?: "year" | "month" | "date";
    rangePickerProps?: RangePickerProps;
    dataSource?: TimeTypeItem[];
    textCustom?: string;
    canCancel?: boolean;
    enableHourPeriodSelect?: boolean;
    dateModeStyle?: string;
    dateOtherStyle?: string;
    handleTimerVisible: (e: boolean) => void;
}
export declare type TimeSelectProps = BaseTimeSelectProps & InputProps & {
    height?: number;
    valueCapture?: (value: TimeSelectValue) => boolean;
};
export declare type TimeSelectValue = string | string[] | undefined;
export interface TagProps {
    tag?: boolean;
}
export interface CustomClassName {
    main?: CxSystem;
    custom?: CxCustom;
    className?: string;
}
export interface CxSystem {
    layout?: string;
    fixed?: string;
    item?: string;
    focus?: string;
}
export interface CxCustom {
    layout?: string;
    text?: string;
    hide?: string;
    fixed?: string;
}
