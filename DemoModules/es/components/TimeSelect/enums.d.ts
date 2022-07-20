import moment from "moment";
declare const TimeType: {
    YESTERDAY: {
        key: string;
        value: string;
        id: number;
    };
    TODAY: {
        key: string;
        value: string;
        id: number;
    };
    LAST_WEEK: {
        key: string;
        value: string;
        id: number;
    };
    THIS_WEEK: {
        key: string;
        value: string;
        id: number;
    };
    LAST_MONTH: {
        key: string;
        value: string;
        id: number;
    };
    THIS_MONTH: {
        key: string;
        value: string;
        id: number;
    };
    LAST_QUARTER: {
        key: string;
        value: string;
    };
    THIS_QUARTER: {
        key: string;
        value: string;
        id: number;
    };
    LAST_YEAR: {
        key: string;
        value: string;
    };
    THIS_YEAR: {
        key: string;
        value: string;
        id: number;
    };
    LAST_SEVEN: {
        key: string;
        value: string;
    };
    LAST_THIRTY: {
        key: string;
        value: string;
    };
    BEFORE_THIRTY: {
        key: string;
        value: string;
    };
    BEFORE_NINTY: {
        key: string;
        value: string;
    };
    ALL: {
        key: string;
        value: string;
    };
    CUSTOM: {
        key: string;
        value: string;
        id: number;
    };
};
declare const TimeTypeToDateRange: {
    TODAY: moment.Moment[];
    YESTERDAY: moment.Moment[];
    THIS_WEEK: moment.Moment[];
    LAST_WEEK: moment.Moment[];
    THIS_MONTH: moment.Moment[];
    LAST_MONTH: moment.Moment[];
    LAST_QUARTER: moment.Moment[];
    THIS_QUARTER: moment.Moment[];
    THIS_YEAR: moment.Moment[];
    LAST_YEAR: moment.Moment[];
};
declare const TimeTypeMap: any;
declare const TimeTypeIdMap: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    99: string;
};
declare const modeProps: {
    time: {
        mode: string[];
        format: string;
    };
    date: {
        mode: string[];
        format: string;
    };
    month: {
        mode: string[];
        format: string;
    };
    year: {
        mode: string[];
        format: string;
    };
};
export { TimeType, TimeTypeMap, modeProps, TimeTypeIdMap, TimeTypeToDateRange };
