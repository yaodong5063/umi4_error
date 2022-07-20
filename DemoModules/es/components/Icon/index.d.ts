import React, { CSSProperties } from 'react';
export interface IIconProps {
    src: string;
    style?: CSSProperties;
    className?: string;
    size?: number | string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    id?: string;
}
declare const Icon: React.FC<IIconProps>;
export default Icon;
