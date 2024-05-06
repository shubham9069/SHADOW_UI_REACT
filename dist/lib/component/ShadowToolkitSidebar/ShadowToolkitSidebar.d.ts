import { ShadowToolkitSidebarOption } from '../../models';
import './ShadowToolkitSidebar.scss';
import React from 'react';
interface ShadowToolkitSidebarProps {
    title: string;
    toolkitSidebarOption?: ShadowToolkitSidebarOption;
    closeSideBar?: () => void;
    primaryButtonAction?: () => void;
    secondaryButtonAction?: () => void;
    customFooter?: React.ReactNode;
    children?: any;
}
declare const ShadowToolkitSidebar: ({ title, toolkitSidebarOption, closeSideBar, primaryButtonAction, secondaryButtonAction, customFooter, children }: ShadowToolkitSidebarProps) => React.JSX.Element;
export default ShadowToolkitSidebar;
