export type ShadowAvatarSize ='micro' | 'normal' | 'large' | 'xlarge';
export type ShadowAvatarType = 'image' | 'initials' | 'icon';
export type ShadowAvatarThemeStyle = 'primary' | 'neutral';
export type ShadowAvatarActionStyle = 'strong' | 'subdued';
export type ShadowAvatarShape = 'circle' | 'square';
export type ShadowAvatarBadgeSeverity = 'success' | 'info' | 'warning' | 'danger';
export interface ShadowAvatarGroup {
  imageUrl?: string;
  label?: string;
  icon?: string;
}
