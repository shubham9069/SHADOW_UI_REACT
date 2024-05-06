import React, { DragEvent } from 'react';
import './ShadowDropbox.scss';
import { ShadowClickEventOutput, ShadowDropBoxCardOption, ShadowTieredMenuItems } from '../../models';
interface ShadowDropboxProps {
    cards?: ShadowDropBoxCardOption[];
    containerClass?: string;
    dragHandler?: (event: ShadowClickEventOutput) => void;
    dragStartHandler?: (event: ShadowClickEventOutput) => void;
    dragOverHandler?: (event: DragEvent) => void;
    menuItem?: ShadowTieredMenuItems[];
    onSelect?: (event: ShadowClickEventOutput) => void;
    children?: React.ReactNode;
    template: (title: any) => void;
}
declare const ShadowDropbox: ({ cards: propCards, containerClass, dragHandler, dragStartHandler, dragOverHandler, menuItem, onSelect, children, template }: ShadowDropboxProps) => React.JSX.Element;
export default ShadowDropbox;
