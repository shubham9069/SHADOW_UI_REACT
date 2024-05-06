import React from 'react';
import './ShadowPreview.scss';
import { ShadowChipItem, ShadowChipThemeStyle, ShadowClickEventOutput, ShadowPreview } from '../../models';
interface ShadowPreviewComponentProps {
    shadowPreview?: ShadowPreview;
    shadowChipList?: ShadowChipItem[];
    hideChipOverflow?: boolean;
    themeStyle?: ShadowChipThemeStyle;
    rightIconClick?: (event: ShadowClickEventOutput) => void;
    menuItemClick?: (event: ShadowClickEventOutput) => void;
    onRemoveChip?: (chip: ShadowChipItem) => void;
    onToggleSwitch?: (event: ShadowClickEventOutput) => void;
    messageButtonClick?: (event: ShadowClickEventOutput) => void;
    children?: React.ReactNode;
    template: any;
}
declare const ShadowPreviewComponent: ({ shadowPreview, shadowChipList, hideChipOverflow, themeStyle, rightIconClick, menuItemClick, onRemoveChip, onToggleSwitch, messageButtonClick, children, template }: ShadowPreviewComponentProps) => React.JSX.Element;
export default ShadowPreviewComponent;
