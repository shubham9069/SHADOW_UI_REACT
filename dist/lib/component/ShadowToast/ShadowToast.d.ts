import React from 'react';
import { ShadowToastItem } from '../../models';
import { CSSTransitionProps } from 'primereact/csstransition';
import './ShadowToast.scss';
interface ShadowToastProps {
    shadowToastData: ShadowToastItem;
    severity?: 'success' | 'warn' | 'error' | 'info';
    display: boolean;
    position?: 'center' | 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right' | undefined;
    preventOpenDuplicates?: boolean;
    showTransitionOptions?: boolean;
    transitionOptions?: CSSTransitionProps;
    style?: React.CSSProperties;
    styleClass?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    breakpoints?: Object;
    displayChange?: (display: boolean) => void;
    onButtonClick?: (shadowToastData: ShadowToastItem) => void;
}
declare const ShadowToast: ({ shadowToastData, severity, display, position, preventOpenDuplicates, showTransitionOptions, style, styleClass, autoZIndex, baseZIndex, breakpoints, displayChange, onButtonClick }: ShadowToastProps) => React.JSX.Element;
export default ShadowToast;
