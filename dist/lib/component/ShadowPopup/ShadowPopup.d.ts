import React from 'react';
import './ShadowPopup.scss';
interface ShadowPopupProps {
    title: string;
    closable?: boolean;
    style?: any;
    breakpoints?: any;
    className?: string;
    mode?: string;
    display?: boolean;
    displayChange?: (e: boolean) => void;
    handleCancel?: (e: boolean) => void;
    handleOk?: (e: boolean) => void;
    children?: React.ReactNode;
}
declare const ShadowPopup: ({ title, closable, style, breakpoints, className, mode, display, displayChange, handleCancel, handleOk, children }: ShadowPopupProps) => React.JSX.Element;
export default ShadowPopup;
