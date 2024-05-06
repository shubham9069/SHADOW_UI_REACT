import { ShadowCheckboxStyleType, ShadowCheckboxType } from '../../models';
import './ShadowCheckbox.scss';
import React from 'react';
interface ShadowCheckboxProps {
    checked?: boolean | null;
    label?: string;
    disabled?: boolean;
    styleType?: ShadowCheckboxStyleType;
    type?: ShadowCheckboxType;
    onClick?: (checked: boolean | null) => void;
}
declare const ShadowCheckbox: ({ checked, label, disabled, styleType, type, onClick }: ShadowCheckboxProps) => React.JSX.Element;
export default ShadowCheckbox;
