import {
  ShadowTieredMenuItems,
  ShadowTieredMenuOption
} from './tieredmenu.models'
import { ShadowMessageItem } from './webkit'

interface switchOption {
  title?: string
  checked?: boolean
  disabled?: boolean
}
export interface ShadowPreviewPanel {
  title?: string
  left_icon?: string
  showAction?: boolean
  menuOption?: ShadowTieredMenuOption
  menuItem?: ShadowTieredMenuItems[]
  showRefresh?: boolean
  isOpen?: boolean
  showSwitch?: boolean
  switchOption?: switchOption
  data?: ShadowPreviewPanelData
}

export interface ShadowPreviewPanelData {
  type: any
  value?: any
  context?: any
}

export interface ShadowPreview {
  message?: ShadowMessageItem
  showMessage?: boolean
  content?: ShadowPreviewPanel[]
}
