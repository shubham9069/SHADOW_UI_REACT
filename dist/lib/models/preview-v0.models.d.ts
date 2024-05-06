import { ShadowTieredMenuItems, ShadowTieredMenuOption } from './tieredmenu.models';
import { ShadowChipItem, ShadowMessageItem } from './webkit';
interface ShadowPreviewPanel {
    title?: string;
    left_icon?: string;
    showAction?: boolean;
    menuOption?: ShadowTieredMenuOption;
    menuItem?: ShadowTieredMenuItems[];
    showRefresh?: boolean;
    isOpen?: boolean;
    data?: any;
}
interface ShadowPreviewCard {
    title?: string;
    left_icon?: string;
    right_icon?: string[];
    showAction?: boolean;
    menuOption?: ShadowTieredMenuOption;
    menuItem?: ShadowTieredMenuItems[];
    chipList?: ShadowChipItem[];
    content?: ShadowPreviewPanel[];
}
export interface ShadowPreviewV0 {
    message?: ShadowMessageItem;
    showMessage?: boolean;
    card?: ShadowPreviewCard[];
}
export {};
