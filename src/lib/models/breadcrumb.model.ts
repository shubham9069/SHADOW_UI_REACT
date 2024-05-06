export type ShadowBreadcrumbSize = 'sm' | 'lg'

export type ShadowBreadcrumbTruncation = 'middle' | 'beginning' | null

export interface ShadowBreadcrumbStyle {
  icon?: string
}

export interface ShadowBreadcrumbItem {
  text?: string
  isEditable?: boolean
  routeLink?: string
}
