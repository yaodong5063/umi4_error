/**
 * @description 包装组件可拖拽
 * @author zhuhu
 */
import React from "react";
declare const useDrag: (Component: any, componentRef: React.RefObject<any>) => ((props: any) => JSX.Element)[];
export default useDrag;
