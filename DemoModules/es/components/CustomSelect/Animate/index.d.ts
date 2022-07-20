import React, { CSSProperties } from "react";
export interface AnimateProps {
    visible: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const Animate: React.FC<AnimateProps>;
export default Animate;
