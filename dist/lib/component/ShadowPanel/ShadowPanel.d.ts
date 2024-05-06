import React from 'react';
import './ShadowPanel.scss';
import { ShadowClickEventOutput, ShadowPanelItem } from '../../models';
interface ShadowPanelProps {
    shadowPanel?: ShadowPanelItem;
    rightIconClick?: (output: ShadowClickEventOutput) => void;
    menuItemClick?: (output: ShadowClickEventOutput) => void;
    children?: React.ReactNode;
}
declare const ShadowPanel: ({ shadowPanel: propShadowPanel, rightIconClick, menuItemClick, children }: ShadowPanelProps) => React.JSX.Element;
export default ShadowPanel;
