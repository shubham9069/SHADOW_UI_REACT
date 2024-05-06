import { ShadowButtonGroupItem, ShadowButtonGroupDirection, ShadowButtonSize } from '../../models';
import './ShadowButtonGroup.scss';
import React from 'react';
interface ShadowButtonGroupProps {
    buttonGroupData: ShadowButtonGroupItem[];
    buttonsSize?: ShadowButtonSize;
    direction?: ShadowButtonGroupDirection;
    onButtonClick?: (label: string) => void;
    styleClass?: string;
}
declare const ShadowButtonGroup: ({ buttonGroupData, buttonsSize, direction, onButtonClick, styleClass }: ShadowButtonGroupProps) => React.JSX.Element;
export default ShadowButtonGroup;
