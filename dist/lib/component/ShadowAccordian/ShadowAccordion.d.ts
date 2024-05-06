import './ShadowAccordion.scss';
import React from 'react';
import { ShadowAccordionToggleIconPosition } from '../../models';
interface ShadowAccordionProps {
    toggleIconPosition?: ShadowAccordionToggleIconPosition;
    headerStartIcon?: string;
    headerEndIcon?: string;
    headerTitle?: string;
    headerSubtitle?: string;
    onRightSideIconClick?: () => void;
    onClose?: () => void;
    onOpen?: () => void;
    children?: React.ReactNode;
}
declare const ShadowAccordion: ({ toggleIconPosition, headerStartIcon, headerEndIcon, headerTitle, headerSubtitle, onRightSideIconClick, onClose, onOpen, children }: ShadowAccordionProps) => React.JSX.Element;
export default ShadowAccordion;
