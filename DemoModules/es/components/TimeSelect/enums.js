import moment from "moment"; // YESTERDAY("YESTERDAY","昨天"),
// TODAY("TODAY","今天"),
// LAST_WEEK("LAST_WEEK","上周"),
// THIS_WEEK("THIS_WEEK","本周"),
// LAST_MONTH("LAST_MONTH","上月"),
// THIS_MONTH("THIS_MONTH","本月"),
// THIS_QUARTER("THIS_QUARTER","本季"),
// THIS_YEAR("THIS_YEAR","本年"),
// LAST_YEAR("LAST_YEAR","上年"),
// LAST_QUARTER("LAST_QUARTER","上季");
// LAST_SEVEN("LAST_SEVEN","过去7天");
// LAST_THIRTY("LAST_THIRTY","过去30天");
// ALL("ALL","不限");

const TimeType = {
  YESTERDAY: {
    key: "YESTERDAY",
    value: "昨天",
    id: 1
  },
  TODAY: {
    key: "TODAY",
    value: "今天",
    id: 2
  },
  LAST_WEEK: {
    key: "LAST_WEEK",
    value: "上周",
    id: 3
  },
  THIS_WEEK: {
    key: "THIS_WEEK",
    value: "本周",
    id: 4
  },
  LAST_MONTH: {
    key: "LAST_MONTH",
    value: "上月",
    id: 5
  },
  THIS_MONTH: {
    key: "THIS_MONTH",
    value: "本月",
    id: 6
  },
  LAST_QUARTER: {
    key: "LAST_QUARTER",
    value: "上季"
  },
  THIS_QUARTER: {
    key: "THIS_QUARTER",
    value: "本季",
    id: 7
  },
  LAST_YEAR: {
    key: "LAST_YEAR",
    value: "上年"
  },
  THIS_YEAR: {
    key: "THIS_YEAR",
    value: "本年",
    id: 8
  },
  LAST_SEVEN: {
    key: "LAST_SEVEN",
    value: "过去7天"
  },
  LAST_THIRTY: {
    key: "LAST_THIRTY",
    value: "过去30天"
  },
  BEFORE_THIRTY: {
    key: "BEFORE_THIRTY",
    value: "30天前"
  },
  BEFORE_NINTY: {
    key: "BEFORE_NINTY",
    value: "90天前"
  },
  ALL: {
    key: "ALL",
    value: "全部"
  },
  CUSTOM: {
    key: "CUSTOM",
    value: "自定义",
    id: 99
  }
};
const TimeTypeToDateRange = {
  TODAY: [moment().startOf("day"), moment().endOf("day")],
  YESTERDAY: [moment().subtract(1, "days").startOf("day"), moment().subtract(1, "days").endOf("day")],
  THIS_WEEK: [moment().startOf("week"), moment().endOf("week")],
  LAST_WEEK: [moment().subtract(1, "weeks").startOf("week"), moment().subtract(1, "weeks").endOf("week")],
  THIS_MONTH: [moment().startOf("month"), moment().endOf("month")],
  LAST_MONTH: [moment().subtract(1, "months").startOf("month"), moment().subtract(1, "months").endOf("month")],
  LAST_QUARTER: [moment().startOf("quarter"), moment().endOf("quarter")],
  THIS_QUARTER: [moment().subtract(1, "quarters").startOf("quarter"), moment().subtract(1, "quarters").endOf("quarter")],
  THIS_YEAR: [moment().startOf("year"), moment().endOf("year")],
  LAST_YEAR: [moment().subtract(1, "years").startOf("year"), moment().subtract(1, "years").endOf("year")]
};
const TimeTypeMap = {};
Object.keys(TimeType).forEach(key => {
  TimeTypeMap[TimeType[key].key] = TimeType[key].value;
});
const TimeTypeIdMap = {
  1: "YESTERDAY",
  2: "TODAY",
  3: "LAST_WEEK",
  4: "THIS_WEEK",
  5: "LAST_MONTH",
  6: "THIS_MONTH",
  7: "THIS_QUARTER",
  8: "THIS_YEAR",
  99: "CUSTOM"
};
const modeProps = {
  time: {
    mode: ["date", "date"],
    format: "YYYY-MM-DD HH:mm"
  },
  date: {
    mode: ["date", "date"],
    format: "YYYY-MM-DD"
  },
  month: {
    mode: ["month", "month"],
    format: "YYYY-MM"
  },
  year: {
    mode: ["year", "year"],
    format: "YYYY"
  }
};
export { TimeType, TimeTypeMap, modeProps, TimeTypeIdMap, TimeTypeToDateRange };