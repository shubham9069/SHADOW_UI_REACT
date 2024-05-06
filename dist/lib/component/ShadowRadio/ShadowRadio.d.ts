import React from 'react';
import { ShadowRadio } from '../../models';
import './ShadowRadio.scss';
interface ShadowRadioProps {
    shadowRadioData?: ShadowRadio[];
    orientation?: 'vertical' | 'horizontal';
    state?: 'default' | 'error';
    message?: string;
    messageType?: 'helper' | 'error' | 'warning';
    value?: any;
    onButtonClick?: (shadowRadioData: ShadowRadio) => void;
}
declare const ShadowRadioComponent: ({ shadowRadioData: propRadioData, orientation, state, message, messageType, value, onButtonClick }: ShadowRadioProps) => React.JSX.Element;
export default ShadowRadioComponent;
