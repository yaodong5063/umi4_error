import { FC, ReactNode } from "react";
import { InputProps } from "antd/lib/input";
export declare type CustomSelect = {
    onRef?: (target: {
        [name: string]: any;
    }) => void;
    onClick?: Function;
    onCancel?: () => void;
    onClear?: () => void;
    dropdownRender: () => ReactNode;
    icon?: string;
    height?: number;
    width?: number;
    whilelist?: string[];
    enableHourPeriodSelect: boolean;
    dateModeStyle: string;
    dateOtherStyle: string;
} & InputProps;
declare const CustomSelect: FC<CustomSelect>;
export default CustomSelect;
