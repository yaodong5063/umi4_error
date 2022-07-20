/*
 * @Author: tingzi.wen
 * @Date: 2019-11-22 16:01:17
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-11-22 17:16:30
 */
import classNames from "classnames";
import styles from "./index.less";

function useAinmate(animateOpt) {
  const {
    animateType,
    infinite,
    delay,
    faster,
    slower
  } = animateOpt;
  const targetAnimate = styles[animateType];
  const delayAnimate = styles[`delay-${delay}s`];
  const fasteAnimate = // eslint-disable-next-line no-nested-ternary
  styles[`${faster === 1 ? "fast" : faster === 2 ? "faster" : ""}`];
  const slowAnimate = // eslint-disable-next-line no-nested-ternary
  styles[`${slower === 1 ? "slow" : slower === 2 ? "slower" : ""}`];
  const infiniteAnimate = infinite ? styles.infinite : ""; // console.log('目标动画========》', targetAnimate);
  // console.log('动画延时========》', delayAnimate);
  // console.log('动画加速========》', fasteAnimate);
  // console.log('动画减速========》', slowAnimate);
  // console.log('动画循环========》', infiniteAnimate);

  if (!targetAnimate) {
    return undefined;
  }

  return classNames(styles.animated, infiniteAnimate, targetAnimate, delayAnimate, fasteAnimate, slowAnimate);
}

export default useAinmate;