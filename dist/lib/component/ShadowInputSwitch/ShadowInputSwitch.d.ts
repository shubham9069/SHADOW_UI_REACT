import './ShadowInputSwitch.scss';
import React from 'react';
interface ShadowInputSwitchProps {
    checked?: boolean | null;
    disabled?: boolean;
    onClick?: (checked: boolean | null) => void;
}
declare const ShadowInputSwitch: ({ checked, disabled, onClick }: ShadowInputSwitchProps) => React.JSX.Element;
export default ShadowInputSwitch;
