import { ShadowTieredMenuItems, ShadowTieredMenuOption } from './tieredmenu.models';
export interface ShadowPanelItem {
    title?: string;
    left_icon?: string;
    showAction?: boolean;
    menuOption?: ShadowTieredMenuOption;
    menuItem?: ShadowTieredMenuItems[];
    isOpen?: boolean;
    toggleable?: boolean;
    right_icon?: string[];
    data?: any;
}
