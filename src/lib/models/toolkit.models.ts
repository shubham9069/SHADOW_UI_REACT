export interface ShadowToolkitItem {
  groupName: string
  items: TooklkitItems[]
}

export interface TooklkitItems {
  label: string
  routerLink: string
  icon: string
  selectedIcon: string
  padding: Number
}

export interface ToolkitStyle {
  iconWidth: Number
  iconHeight: Number
  toolkitHeight: string
}
