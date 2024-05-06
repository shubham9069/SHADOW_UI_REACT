import React from 'react';
import './ShadowButton.scss';
import { ShadowTooltipCaretAlignment, ShadowTooltipEvent, ShadowTooltipPosition, ShadowTooltipTheme, ShadowTooltipType } from '../../models';
interface ShadowButtonProps {
    loading?: boolean;
    label?: string;
    disabled?: boolean;
    iconPosition?: 'top' | 'bottom' | 'left' | 'right';
    icon?: string;
    buttonType?: string;
    size?: string;
    buttonActionStyle?: string;
    tooltip?: string;
    delay?: number;
    tooltipPosition?: ShadowTooltipPosition;
    tooltipTheme?: ShadowTooltipTheme;
    tooltipEvent?: ShadowTooltipEvent;
    tooltipWidth?: string;
    tooltipType?: ShadowTooltipType;
    tooltipCaretAlignment?: ShadowTooltipCaretAlignment;
    onClick?: (arg: any) => void;
    onButtonClick?: (arg: string) => void;
}
declare const ShadowButton: ({ loading, label, disabled, iconPosition, icon, buttonType, size, buttonActionStyle, tooltip: propTooltip, delay, tooltipPosition, tooltipTheme, tooltipEvent: propTooltipEvent, tooltipType, tooltipCaretAlignment, tooltipWidth, onButtonClick, onClick }: ShadowButtonProps) => React.JSX.Element;
export default ShadowButton;
