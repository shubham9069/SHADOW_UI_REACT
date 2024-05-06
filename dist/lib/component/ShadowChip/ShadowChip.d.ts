import React from 'react';
import './ShadowChip.scss';
import { ShadowChipActionStyle, ShadowChipItem, ShadowChipThemeStyle } from '../../models';
interface ShadowChipProps {
    chipList: ShadowChipItem[];
    viewMode?: boolean;
    hideOverflow?: boolean;
    themeStyle?: ShadowChipThemeStyle;
    actionStyle?: ShadowChipActionStyle;
    onRemove?: (chip: ShadowChipItem) => void;
    chipClickHandler?: (event: any) => void;
}
declare const ShadowChip: ({ chipList: propChipList, viewMode, hideOverflow, themeStyle, actionStyle, onRemove, chipClickHandler }: ShadowChipProps) => React.JSX.Element;
export default ShadowChip;
