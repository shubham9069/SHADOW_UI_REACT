import React from 'react';
import './ShadowCard.scss';
import { ShadowCardOption, ShadowTieredMenuItems } from '../../models';
interface ShadowCardProps {
    cardOption?: ShadowCardOption;
    menuItem?: ShadowTieredMenuItems[];
    onSelect?: (arg: any) => void;
    onDragStart?: (arg: any) => void;
    onDragEnd?: (arg: any) => void;
    onClickTag?: (arg: any) => void;
    children?: any;
}
declare const ShadowCard: ({ cardOption, menuItem, onSelect, onDragStart, onDragEnd, onClickTag, children }: ShadowCardProps) => React.JSX.Element;
export default ShadowCard;
