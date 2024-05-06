import { ShadowTieredMenuItems, ShadowTieredMenuOption } from './tieredmenu.models';
export interface ShadowNotificationItem {
    icon?: string;
    imageUrl?: string;
    title: string;
    subtitle?: string;
    okButtonText?: string;
    cancelButtonText?: string;
    content?: string;
    styleClass?: string;
    id: string;
    showAction?: boolean;
    actionItems?: ShadowTieredMenuItems[];
    actionOption?: ShadowTieredMenuOption;
    windowPosition?: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    };
}
