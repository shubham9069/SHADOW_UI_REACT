import React from 'react';
import './ShadowOverlay.scss';
import { ShadowButtonActionStyle, ShadowButtonIconPosition, ShadowButtonSize, ShadowButtonType } from '../../models';
interface ShadowOverlayProps {
    loading?: boolean;
    label?: string;
    disabled?: boolean;
    iconPosition?: ShadowButtonIconPosition;
    icon?: string;
    buttonType?: ShadowButtonType;
    size?: ShadowButtonSize;
    buttonActionStyle?: ShadowButtonActionStyle;
    onButtonClick?: (event: string) => void;
    children?: React.ReactNode;
}
declare const ShadowOverlay: ({ loading, label, disabled, iconPosition, icon, buttonType, size, buttonActionStyle, onButtonClick, children }: ShadowOverlayProps) => React.JSX.Element;
export default ShadowOverlay;
