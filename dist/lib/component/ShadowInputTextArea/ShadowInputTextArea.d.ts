import React from 'react';
import { ShadowInputTextAreaSize, ShadowInputTextAreaState } from '../../models';
import './ShadowInputTextArea.scss';
interface ShadowInputTextAreaProps {
    rows?: number;
    cols?: number;
    size?: ShadowInputTextAreaSize;
    header?: string;
    autoResize?: boolean;
    state?: ShadowInputTextAreaState;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onPressEnter?: (value: string) => void;
}
declare const ShadowInputTextArea: ({ rows, cols, size, header, autoResize, state, placeholder, value, disabled, onChange, onPressEnter }: ShadowInputTextAreaProps) => React.JSX.Element;
export default ShadowInputTextArea;
