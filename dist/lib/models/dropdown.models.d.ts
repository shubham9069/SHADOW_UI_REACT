export interface ShadowDropdownOption {
    label?: string;
    value?: any;
    icon?: string;
}
export interface ShadowDropdownGroupOption {
    label: string;
    value?: any;
    icon?: string;
    items: GroupItems[];
}
interface GroupItems {
    label?: string;
    value?: any;
}
export {};
