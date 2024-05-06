import React from 'react';
import { ShadowChipItem, ShadowClickEventOutput, ShadowDropdownOption, ShadowInputGroupItem, ShadowInputGroupSuggestion } from '../../models';
import './ShadowInputGroup.scss';
interface ShadowInputGroupProps {
    placeholder?: string;
    shadowInputGroup?: ShadowInputGroupItem;
    size?: 'small' | 'medium' | 'large';
    state?: 'error' | 'default';
    showChip?: boolean;
    suggestions?: ShadowInputGroupSuggestion[];
    autoComplete?: boolean;
    chipLabelKey?: string;
    hideChipOverflow?: boolean;
    chipList?: ShadowChipItem[];
    defaultInputOption?: ShadowDropdownOption;
    inputGroupOption?: any;
    showInputGroupOption?: any;
    enableOnEnter?: boolean;
    onDefaultInputSelect?: (option: ShadowDropdownOption) => void;
    onButtonClick?: (value: any) => void;
    onRemoveChip?: (chip: ShadowChipItem) => void;
    autoCompleteChange?: (value: string) => void;
    autoCompleteSelect?: (event: ShadowClickEventOutput) => void;
}
declare const ShadowInputGroup: ({ placeholder, shadowInputGroup, size, state, showChip, suggestions: propSuggestions, autoComplete, chipLabelKey, hideChipOverflow, chipList: propChipList, defaultInputOption, inputGroupOption, showInputGroupOption, enableOnEnter, onDefaultInputSelect, onButtonClick, onRemoveChip, autoCompleteChange, autoCompleteSelect }: ShadowInputGroupProps) => React.JSX.Element;
export default ShadowInputGroup;
