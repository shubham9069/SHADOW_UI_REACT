import { ShadowAreaActionItem } from './area-action.models'
import { ShadowChartMetaData } from './chart.models'
import { ShadowStep } from './stepper.models'
import {
  ShadowTieredMenuItems,
  ShadowTieredMenuOption
} from './tieredmenu.models'
export interface ShadowChatMessage {
  isAI: boolean
  text: string
  id?: string
  index?: number
  chart?: boolean
  chartInfo?: ShadowChartMetaData
  isDisabled?: boolean
  isChatActionArea?: boolean
  areaActionButtonOption?: ShadowAreaActionItem
  date?: string
  showAction?: boolean
  actionItems?: ShadowTieredMenuItems[]
  actionOption?: ShadowTieredMenuOption
  recomendedPrompts?: ShadowRecomendedPrompts[]
  data?: any
  showStepper?: boolean
  stepperData?: ShadowStep[]
  stepperActiveIndex?: number
  stepperSpinner?: boolean
  stepperReadonly?: boolean
  stepperSize?: string
}

export interface ShadowRecomendedPrompts {
  type?: string
  actionType?: string
  showIcon?: boolean
  icon?: string
  prompt?: string
  data?: any
}

export interface ShadowChatAction {
  label?: string
  iconClass?: string
}

export interface ShadowChatBoxStyle {
  width?: string
  inputBoxPlaceholder?: string
  inputAttachmentIcon?: string
  logo?: string
  icon?: string
  actionDropDownIcon?: string
  chatBoxHeight?: string
}

export interface ShadowEmptyChat {
  title?: string
  icon?: string
  inputPlaceholder?: string
  searchIcon?: string
  showEmptyChatHeader?: boolean
}

export interface ShadowTemplateList {
  title?: string
  routerLink?: string
}

export interface ShadowSavedTemplate {
  icon?: string
  title?: string
  showSavedTemplate?: boolean
  templates?: ShadowTemplateList[]
}

export interface ShadowPromptTemplate {
  label?: string
}

export interface ShadowChatBoxHead {
  title?: string
  closeIcon?: string
  showChatBoxHeader?: boolean
}

export interface ShadowDataSkillList {
  icon?: string
  iconBackgroundColor?: string
  title?: string
}

export interface ShadowPopularData {
  title?: string
  icon?: string
  arrowIcon?: string
  showPopularDataSkill?: boolean
  dataSkills?: ShadowDataSkillList[]
}
