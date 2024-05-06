import React from 'react';
import { ShadowAvatarGroup, ShadowAvatarShape, ShadowAvatarThemeStyle, ShadowAvatarType } from '../../models';
import './ShadowAvatar.scss';
interface ShadowAvatarProps {
    size?: any;
    type?: ShadowAvatarType;
    grouping?: boolean;
    themeStyle?: ShadowAvatarThemeStyle;
    actionStyle?: string;
    initials?: string;
    shape?: ShadowAvatarShape;
    icon?: string;
    imageUrl?: string;
    avatarGroupData?: ShadowAvatarGroup[];
    hideOverflow?: boolean;
}
declare const ShadowAvatar: ({ size, type, grouping, themeStyle, actionStyle, initials, shape, icon, imageUrl, avatarGroupData, hideOverflow }: ShadowAvatarProps) => React.JSX.Element;
export default ShadowAvatar;
