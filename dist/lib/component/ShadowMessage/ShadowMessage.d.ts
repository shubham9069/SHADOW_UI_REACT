import React from 'react';
import { ShadowMessageItem } from '../../models';
import './ShadowMessage.scss';
interface ShadowMessageProps {
    shadowMessage: ShadowMessageItem;
    onButtonClick?: (label: string) => void;
    onMessageClosed?: (message: ShadowMessageItem) => void;
}
declare const ShadowMessage: ({ shadowMessage, onButtonClick, onMessageClosed }: ShadowMessageProps) => React.JSX.Element;
export default ShadowMessage;
