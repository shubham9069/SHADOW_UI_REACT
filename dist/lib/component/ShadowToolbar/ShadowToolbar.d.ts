import './ShadowToolbar.scss';
import { ShadowToolBarItem, ShadowToolBarStyle } from '../../models';
import React from 'react';
interface ShadowToolbarProps {
    toolbarItems?: ShadowToolBarItem[];
    toolbarStyle?: ShadowToolBarStyle;
    toolbarClickHandler?: (arg: ShadowToolBarItem) => void;
}
declare const ShadowToolbar: ({ toolbarItems, toolbarStyle, toolbarClickHandler }: ShadowToolbarProps) => React.JSX.Element | null;
export default ShadowToolbar;
