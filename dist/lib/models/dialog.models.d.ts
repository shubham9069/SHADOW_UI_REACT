export interface ShadowFooter {
    type: FooterTypes;
    icon?: string;
    text?: string;
    okButtonText?: string;
    cancelButtonText?: string;
    cancelButtonIcon?: string;
    okButtonIcon?: string;
}
export interface WindowPosition {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}
export type FooterTypes = 'confirm' | 'alert' | 'custom' | 'none';
export type ShadowDialogModes = 'default' | 'notification';
export declare enum ModeType {
    popup = "app-modal-popup",
    dialog = "app-modal-dialog"
}
export type DialogPosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined;
export declare enum ShadowDialogEvent {
    close = "close",
    cancel = "cancel",
    submit = "submit"
}
