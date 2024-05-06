import React from 'react';
import './ShadowMultiSelect.scss';
import { ShadowMultiselectGroupOption, ShadowMultiselectOption } from '../../models';
interface ShadowMultiSelectProps {
    options?: ShadowMultiselectOption[] | ShadowMultiselectGroupOption[];
    group?: boolean;
    placeholder?: string;
    selectedOption?: any;
    label?: string;
    width?: string;
    editable?: boolean;
    disabled?: boolean;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    onSelectDropdown?: (option: any) => void;
}
declare const ShadowMultiSelect: ({ options, group, placeholder, selectedOption, label, width, editable, disabled, virtualScroll, virtualScrollItemSize, onSelectDropdown }: ShadowMultiSelectProps) => React.JSX.Element;
export default ShadowMultiSelect;
