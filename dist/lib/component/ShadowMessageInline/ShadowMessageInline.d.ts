import './ShadowMessageInline.scss';
import React from 'react';
interface ShadowMessageInlineProps {
    message?: string;
    state?: 'success' | 'warning' | 'error' | 'info';
}
declare const ShadowMessageInline: ({ message, state }: ShadowMessageInlineProps) => React.JSX.Element;
export default ShadowMessageInline;
