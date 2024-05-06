import React from 'react';
import { ShadowTieredMenuItems, ShadowTieredMenuOption } from '../../models';
import './ShadowTieredMenu.scss';
interface ShadowTieredMenuProps {
    menuItem: ShadowTieredMenuItems[];
    menuOption?: ShadowTieredMenuOption;
    onSelect?: (menuItem: ShadowTieredMenuItems) => void;
}
declare const ShadowTieredMenu: ({ menuItem, menuOption, onSelect }: ShadowTieredMenuProps) => React.JSX.Element;
export default ShadowTieredMenu;
