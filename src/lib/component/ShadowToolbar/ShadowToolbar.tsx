import './ShadowToolbar.scss'
import { ShadowToolBarItem, ShadowToolBarStyle } from '../../models'
import React from 'react'

interface ShadowToolbarProps {
  toolbarItems?: ShadowToolBarItem[]
  toolbarStyle?: ShadowToolBarStyle
  toolbarClickHandler?: (arg: ShadowToolBarItem) => void
}

const ShadowToolbar = ({
  toolbarItems = [],
  toolbarStyle = {},
  toolbarClickHandler
}: ShadowToolbarProps) => {
  const onClickEvent = (data: any) => {
    toolbarClickHandler && toolbarClickHandler(data)
  }

  return toolbarItems && toolbarItems?.length ? (
    <div className={'shadow-toolbar-container'}>
      {toolbarItems.map((toolbar, index) => (
        <div
          key={`toolbar-${index}`}
          className={
            toolbar.type == 'button'
              ? `${'shadow-toolbar-item'} ${'toolbar-btn'}`
              : 'shadow-toolbar-item'
          }
          style={{
            color:
              toolbar.type == 'button' && toolbarStyle.buttonBackground
                ? toolbarStyle.buttonTextColor
                : toolbarStyle.textColor,
            backgroundColor:
              toolbar.type == 'button'
                ? toolbarStyle.buttonBackground
                : toolbarStyle.backgroundColor
          }}
          onClick={() => onClickEvent(toolbar)}
        >
          {toolbar?.icon && <i className={toolbar?.icon}></i>}
          {toolbar?.text && <span>{toolbar?.text}</span>}
        </div>
      ))}
    </div>
  ) : null
}

export default ShadowToolbar
