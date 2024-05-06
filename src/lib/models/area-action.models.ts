import { tagType } from './tag.models'

export interface ShadowAreaActionItem {
  title?: string | null
  height?: string
  width?: string
  primaryButtonText?: string | null
  secondaryButtonText?: string | null
  primaryButtonIcon?: string | null
  secondaryButtonIcon?: string | null
  primaryButtonType?: tagType | null
  secondaryButtonType?: tagType
  data?: any
}
