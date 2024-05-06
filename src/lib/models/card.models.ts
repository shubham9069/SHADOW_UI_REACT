import { ShadowTagItem } from './tag.models'
import {
  ShadowTieredMenuItems,
  ShadowTieredMenuOption
} from './tieredmenu.models'

export interface ShadowCardOption {
  isDragable?: boolean
  showAction?: boolean
  title?: string
  dropDownPosition?: string
  dropDownOption?: ShadowTieredMenuOption
  dragboxCardWidth?: string
  shadowTag?: ShadowTagItem
  isDisplayDragHandle?: boolean
}

export interface ShadowDropBoxCardOption extends ShadowCardOption {
  menuItems?: ShadowTieredMenuItems[]
}
