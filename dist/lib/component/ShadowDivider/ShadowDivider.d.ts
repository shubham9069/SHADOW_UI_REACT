import './ShadowDivider.scss';
import { ShadowDividerAlign, ShadowDividerLayout, ShadowDividerLineStyle, ShadowDividerType } from '../../models';
import React from 'react';
interface ShadowDividerProps {
    type?: ShadowDividerType;
    lineStyle?: ShadowDividerLineStyle;
    layout?: ShadowDividerLayout;
    align?: ShadowDividerAlign;
}
declare const ShadowDivider: ({ type, lineStyle, layout, align }: ShadowDividerProps) => React.JSX.Element;
export default ShadowDivider;
