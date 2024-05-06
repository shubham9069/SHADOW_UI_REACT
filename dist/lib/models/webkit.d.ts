import { MenuItem } from 'primereact/menuitem';
import { TreeNode } from 'primereact/treenode';
import { ShadowButtonGroupItem, ShadowButtonGroupDirection, ShadowButtonSize } from './button.models';
export interface Menu {
    label: string;
    routerLink: string;
    icon: string;
}
export interface ShadowMenu extends MenuItem {
    useTemplate?: boolean;
    badge?: ShadowBadgeItem;
}
export declare enum ShadowMenuState {
    Open = "open",
    Close = "close"
}
export interface UserProfile {
    upn: string;
    name: string | undefined;
}
export interface ShadowTabItem extends MenuItem {
    label?: string;
    closable?: boolean;
    disabled?: boolean;
    id: string;
    editable?: boolean;
    icon?: string;
}
export interface ShadowTreeNode extends TreeNode {
}
export interface ShadowChipItem {
    key: string;
    label: string;
    removable: boolean;
    data?: any;
    type?: ShadowChipType;
    icon?: string;
    avatarUrl?: string;
    avatarSize?: any;
    theme?: ShadowChipThemeStyle;
    actionStyle?: ShadowChipActionStyle;
}
export type ShadowChipThemeStyle = 'primary' | 'neutral';
export type ShadowChipActionStyle = 'strong' | 'subdued';
export type ShadowChipType = 'withIcon' | 'withAvatar' | 'textOnly';
export type badgeType = 'success' | 'warning' | 'danger' | 'info';
export interface ShadowBadgeItem {
    value: string;
    type?: badgeType | 'danger';
    size?: 'large' | 'xlarge';
    icon?: string;
    iconFontSize?: string;
}
export type messsageType = 'success' | 'warn' | 'error' | 'info';
export interface ShadowMessageItem {
    detail?: string;
    severity?: messsageType;
    summary?: string;
    messageIcon?: string;
    closable?: boolean;
    buttonGroup?: ShadowButtonGroupItem[];
    buttonSize?: ShadowButtonSize;
    buttonGroupDirection?: ShadowButtonGroupDirection;
}
export interface ShadowToastItem {
    detail?: string;
    summary?: string;
    icon?: string;
    sticky?: boolean;
    buttonGroup?: ShadowButtonGroupItem[];
    buttonSize?: ShadowButtonSize;
    buttonGroupDirection?: ShadowButtonGroupDirection;
    key?: string;
    life?: number;
}
export interface ShadowRadio {
    name?: string;
    key?: string;
    value?: any;
    disabled?: boolean;
}
export interface ShadowInputGroupItem {
    buttonGroup?: ShadowButtonGroupItem[];
    buttonSize?: ShadowButtonSize;
    buttonGroupDirection?: ShadowButtonGroupDirection;
}
export interface ShadowInputGroupSuggestion {
    url?: string;
    icon?: string;
    title?: string;
    subTitle?: string;
    data?: any;
}
export interface ShadowClickEventOutput {
    data: any;
    context: any;
}
export type ShadowInlineMessageType = 'success' | 'warning' | 'error' | 'info';
