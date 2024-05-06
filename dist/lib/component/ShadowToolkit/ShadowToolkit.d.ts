import React from 'react';
import './ShadowToolkit.scss';
import { ShadowToolkitItem, ToolkitStyle } from '../../models';
interface ShadowToolkitProps {
    toolkitItems: ShadowToolkitItem[];
    selectedToolKit: string;
    toolkitStyle?: ToolkitStyle;
    selectToolkitHandler?: (arg: string) => void;
    toggleChatUI?: (arg: boolean) => void;
}
declare const ShadowToolkit: ({ toolkitItems, selectedToolKit, toolkitStyle, selectToolkitHandler, toggleChatUI }: ShadowToolkitProps) => React.JSX.Element;
export default ShadowToolkit;
