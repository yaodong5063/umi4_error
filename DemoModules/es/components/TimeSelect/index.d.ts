import React from 'react';
import { TimeSelectProps, TagProps } from './types';
export declare function checkIsTimeType(type: string): boolean;
declare class TimeSelect extends React.PureComponent<TimeSelectProps & TagProps> {
    static Tag: any;
    render(): JSX.Element;
}
export default TimeSelect;
