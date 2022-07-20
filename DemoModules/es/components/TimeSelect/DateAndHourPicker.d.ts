import { FC } from 'react';
import { Moment } from 'moment';
import { TimeSelectValue } from './types';
interface Props {
    value?: Moment[];
    open?: boolean;
    onChange: (value: TimeSelectValue, prevValue?: TimeSelectValue) => any;
    onClose?: () => void;
    handleTimerVisible: (e: boolean) => void;
}
declare const DateAndHourPicker: FC<Props>;
export default DateAndHourPicker;
