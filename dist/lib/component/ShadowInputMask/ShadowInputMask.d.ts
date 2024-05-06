import React from 'react';
import { ShadowInputMaskItem } from '../../models';
import './ShadowInputMask.scss';
interface ShadowInputMaskProps {
    inputValue?: string;
    width?: string;
    template?: boolean;
    format?: string;
    placeholder?: string;
    align?: string;
    options?: ShadowInputMaskItem[];
    selected?: any;
    disabled?: boolean;
    inputLabel?: string;
    mask?: string;
    onChangeHandler?: (value: any) => void;
}
declare const ShadowInputMask: ({ inputValue, width, template, format, placeholder: propPlaceholder, align, options, selected, disabled, inputLabel, mask: propMask, onChangeHandler }: ShadowInputMaskProps) => React.JSX.Element;
export default ShadowInputMask;
