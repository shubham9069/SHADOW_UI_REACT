import React from 'react';
import { ShadowInputTextSize } from '../../models';
import './ShadowInputText.scss';
interface ShadowInputTextProps {
    type?: string;
    inputValue?: any;
    placeholder?: any;
    disabled?: boolean;
    inputLabel?: string;
    icon?: string | undefined;
    iconPosition?: string;
    size?: ShadowInputTextSize;
    helpText?: string;
    error?: boolean;
    errorMessage?: string;
    mode?: 'decimal' | 'currency' | undefined;
    useGrouping?: boolean;
    currency?: any;
    width?: string;
    minFractionDigits?: number;
    maxFractionDigits?: number;
    suffix?: string;
    prefix?: string;
    onChange?: (value: any) => void;
}
declare const ShadowInputText: ({ type, inputValue: propInputVal, placeholder, disabled, inputLabel, icon, iconPosition: propIconPosition, size, helpText, error, errorMessage, mode, useGrouping, currency, width, minFractionDigits, maxFractionDigits, suffix, prefix, onChange }: ShadowInputTextProps) => React.JSX.Element;
export default ShadowInputText;
