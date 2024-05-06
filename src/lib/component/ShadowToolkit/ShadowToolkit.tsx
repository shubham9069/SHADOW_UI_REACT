import React from 'react'
import './ShadowToolkit.scss'
import { ShadowToolkitItem, ToolkitStyle } from '../../models'

interface ShadowToolkitProps {
  toolkitItems: ShadowToolkitItem[]
  selectedToolKit: string
  toolkitStyle?: ToolkitStyle
  selectToolkitHandler?: (arg: string) => void
  toggleChatUI?: (arg: boolean) => void
}

const ShadowToolkit = ({
  toolkitItems = [],
  selectedToolKit = '',
  toolkitStyle,
  selectToolkitHandler,
  toggleChatUI
}: ShadowToolkitProps) => {
  const onSelectToolKit = (item: string) => {
    if (selectedToolKit == item) {
      selectedToolKit = ''
    } else {
      selectedToolKit = item
    }
    selectToolkitHandler && selectToolkitHandler(selectedToolKit)
  }

  return (
    <div
      className='toolkit-wrapper'
      style={{
        height: toolkitStyle?.toolkitHeight
          ? toolkitStyle.toolkitHeight
          : '100%'
      }}
    >
      {toolkitItems &&
        toolkitItems?.length &&
        toolkitItems.map((group, index) => (
          <div key={`toolbar-item-${index}`} className='toolkit-group'>
            {group &&
              group?.items &&
              group?.items.length &&
              group?.items.map((tool, index) => (
                <div
                  key={`toolbar-sub-item-${index}`}
                  className={
                    selectedToolKit === tool?.label
                      ? `toolkit-icon selected`
                      : 'toolkit-icon'
                  }
                  style={{
                    width: toolkitStyle && `${toolkitStyle?.iconWidth}px`,
                    height: toolkitStyle && `${toolkitStyle?.iconHeight}px`,
                    padding: `${tool?.padding}px`
                  }}
                  onClick={() => onSelectToolKit(tool?.label)}
                >
                  <img
                    src={
                      selectedToolKit == tool?.label
                        ? tool?.selectedIcon
                        : tool?.icon
                    }
                    alt=''
                  />
                </div>
              ))}
          </div>
        ))}
    </div>
  )
}

export default ShadowToolkit
