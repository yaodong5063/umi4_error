/**
 * @default 转换空格为换行符
 * @param str string
 * @return str string
 */
const replaceToBr = str => str ? str.replace(/\n/g, '<br />') : '';

export default replaceToBr;