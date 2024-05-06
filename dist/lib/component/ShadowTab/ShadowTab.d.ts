import React from 'react';
import { ShadowTabItem } from '../../models';
import './ShadowTab.scss';
interface ShadowTabProps {
    tabs: ShadowTabItem[];
    activeTab?: ShadowTabItem;
    iconSize?: string;
    editType?: 'inline' | 'popup';
    dialogTitle?: string;
    onSelectTab?: (tab: ShadowTabItem) => void;
    onEdit?: (tab: ShadowTabItem) => void;
    onClose?: (tab: ShadowTabItem) => void;
}
declare const ShadowTab: ({ tabs: propTabs, activeTab, iconSize, editType, dialogTitle, onSelectTab, onEdit, onClose }: ShadowTabProps) => React.JSX.Element;
export default ShadowTab;
