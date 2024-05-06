export type tagType = 'primary' | 'secondary' | 'success' | 'info' | 'alert' | 'danger' | 'neutral';
export interface ShadowTagItem {
    label?: string;
    icon?: string | null;
    type: tagType;
    isPill?: boolean;
}
