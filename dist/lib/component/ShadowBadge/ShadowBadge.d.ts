import { ShadowBadgeItem } from '../../models';
import './ShadowBadge.scss';
import React from 'react';
interface ShadowBadgeProps {
    badge: ShadowBadgeItem;
    onClickBadge?: (badge: ShadowBadgeItem) => void;
}
declare const ShadowBadge: ({ badge, onClickBadge }: ShadowBadgeProps) => React.JSX.Element;
export default ShadowBadge;
