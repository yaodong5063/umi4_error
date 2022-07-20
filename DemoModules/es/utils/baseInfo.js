// 是否为IE浏览器
export function isIE() {
  // 取得浏览器的userAgent字符串
  const {
    userAgent
  } = navigator; // 判断是否为小于IE11的浏览器

  const isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; // 判断是否为IE的Edge浏览器

  const isEdge = userAgent.indexOf('Edge') > -1 && !isLessIE11; // 判断是否为IE11浏览器

  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;

  if (isEdge || isIE11) {
    return true;
  }

  return false;
}
const tools = {
  isIE
};
export default tools;