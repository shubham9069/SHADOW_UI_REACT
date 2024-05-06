import {
  ShadowButtonGroupItem,
  ShadowButtonSize,
  ShadowButtonGroupDirection
} from './button.models'

export interface ShadowBannerItem {
  severity: ShadowBannerSeverity
  summary?: string
  closable?: boolean
  buttonGroup?: ShadowButtonGroupItem[]
  buttonSize?: ShadowButtonSize
  buttonGroupDirection?: ShadowButtonGroupDirection
}

export type ShadowBannerSeverity = 'info' | 'success' | 'warn' | 'error'
export type ShadowBannerTextWrap = 'ellipsis' | 'wrap'
