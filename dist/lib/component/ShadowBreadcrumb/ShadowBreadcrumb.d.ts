import React from 'react';
import './ShadowBreadcrumb.scss';
import { ShadowBreadcrumbItem, ShadowBreadcrumbSize, ShadowBreadcrumbStyle, ShadowTieredMenuItems, ShadowTieredMenuOption } from '../../models';
interface ShadowBreadcrumbProps {
    breadcrumbStyle?: ShadowBreadcrumbStyle;
    breadcrumbItem?: ShadowBreadcrumbItem[];
    truncation?: 'beginning' | 'middle' | null;
    size?: ShadowBreadcrumbSize;
    menuItems?: ShadowTieredMenuItems[];
    menuOption?: ShadowTieredMenuOption;
    onChangeLabel?: (label: any) => void;
    clickHandler?: (event: ShadowBreadcrumbItem) => void;
}
declare const ShadowBreadcrumb: ({ breadcrumbStyle, breadcrumbItem, truncation: propTruncation, size, menuItems: propMenuItems, menuOption, onChangeLabel, clickHandler }: ShadowBreadcrumbProps) => React.JSX.Element;
export default ShadowBreadcrumb;
