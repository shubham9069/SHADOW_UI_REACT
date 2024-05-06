export type ShadowButtonSize = 'sm' | 'md' | 'lg';
export type ShadowButtonActionStyle = 'brand' | 'contrast' | 'destructive' | 'success' | 'warning' | 'custom';
export type ShadowButtonType = 'primary' | 'secondary' | 'text' | 'link' | 'iconOnly';
export type ShadowButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';
export interface ShadowButtonGroupItem {
    loading?: boolean;
    label?: string;
    disabled?: boolean;
    iconPosition?: ShadowButtonIconPosition;
    icon?: string;
    buttonType?: ShadowButtonType;
    size?: ShadowButtonSize;
    buttonActionStyle?: ShadowButtonActionStyle;
}
export type ShadowButtonGroupDirection = 'horizontal' | 'vertical';
