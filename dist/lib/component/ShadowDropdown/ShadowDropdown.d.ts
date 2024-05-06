import React from 'react';
import { ShadowDropdownGroupOption, ShadowDropdownOption } from '../../models';
import './ShadowDropdown.scss';
interface ShadowDropdownProps {
    options: ShadowDropdownOption[] | ShadowDropdownGroupOption[];
    group?: boolean;
    placeholder?: string;
    selectedOption?: ShadowDropdownOption | ShadowDropdownGroupOption | null;
    label?: string;
    width?: string;
    filter?: boolean;
    showClear?: boolean;
    editable?: boolean;
    disabled?: boolean;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    onSelectDropdown?: (option: any) => void;
}
declare const ShadowDropdown: ({ options, group, placeholder, selectedOption, label, width, filter, showClear, editable, disabled, virtualScroll, virtualScrollItemSize, onSelectDropdown }: ShadowDropdownProps) => React.JSX.Element;
export default ShadowDropdown;
