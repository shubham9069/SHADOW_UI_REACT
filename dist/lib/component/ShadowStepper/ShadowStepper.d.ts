import React from 'react';
import { ShadowStep } from '../../models';
import './ShadowStepper.scss';
interface ShadowStepperProps {
    steps: ShadowStep[];
    activeIndex?: number;
    spinner?: boolean;
    readonly?: boolean;
    size?: string;
    type?: 'horizontal' | 'vertical';
    activeIndexChange?: (value: number) => void;
}
declare const ShadowStepper: ({ steps: propSteps, activeIndex: propActiveIndex, type, spinner, readonly, size, activeIndexChange }: ShadowStepperProps) => React.JSX.Element;
export default ShadowStepper;
