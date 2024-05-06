import React from 'react';
import { ShadowButtonSize, ShadowSelectButtonOption } from '../../models';
import './ShadowSelectButton.scss';
interface ShadowSelectButtonProps {
    value?: string | number;
    multiple?: boolean;
    iconsOnly?: boolean;
    disabled?: boolean;
    size?: ShadowButtonSize;
    shadowSelectButtonOptions?: ShadowSelectButtonOption[];
    onClick?: (e?: any) => void;
}
declare const ShadowSelectButton: ({ value: propValue, multiple, iconsOnly, disabled, size, shadowSelectButtonOptions, onClick }: ShadowSelectButtonProps) => React.JSX.Element;
export default ShadowSelectButton;
