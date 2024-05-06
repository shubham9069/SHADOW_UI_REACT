import React, { Fragment, useEffect, useState } from 'react'
import {
  ShadowAvatarShape,
  ShadowAvatarSize,
  ShadowClickEventOutput,
  ShadowTabItem,
  ShadowTieredMenuItems
} from '../../models'
import { WindowPosition } from '../../models'
import { ShadowNotificationItem } from '../../models'
import ShadowDialog from '../ShadowDialog/ShadowDialog'
import ShadowTab from '../ShadowTab/ShadowTab'
import ShadowAvatar from '../ShadowAvatar/ShadowAvatar'
import ShadowButton from '../ShadowButton/ShadowButton'
import ShadowTieredMenu from '../ShadowTiered-menu/ShadowTieredMenu'
import './ShadowNotificationsPanel.scss'

interface ShadowNotificationsPanelProps {
  title?: string
  subtitle?: string
  emptyMessage?: string
  items?: ShadowNotificationItem[]
  class?: string
  style?: any
  height?: string
  width?: string
  inlineStyle?: object
  position?: string
  display?: boolean
  resizable?: boolean
  closable?: boolean
  customPosition?: WindowPosition
  tabs?: ShadowTabItem[]
  avatarShape?: ShadowAvatarShape
  avatarSize?: ShadowAvatarSize
  notificationPanel?: any
  activeTabObj?: ShadowTabItem
  onOkClick?: (item: any) => void
  onCancelClick?: (item: any) => void
  onHide?: (event: any) => void
  onActionSelectHandler?: (event: ShadowClickEventOutput) => void
  onTabSelectHandler?: (tab: ShadowTabItem) => void
}

const ShadowNotificationsPanel = ({
  title = '',
  subtitle = '',
  emptyMessage = 'No New Notifications To Show',
  items = [],
  class: propClass = '',
  style: propStyle = { maxHeight: '100vh' },
  height = 'auto',
  width = 'auto',
  inlineStyle = {},
  position = 'center',
  display = true,
  resizable = false,
  closable = true,
  customPosition = {},
  tabs = [],
  activeTabObj = { label: '', id: '' },
  onActionSelectHandler,
  avatarShape = 'circle',
  avatarSize = 'large',
  notificationPanel,
  onOkClick,
  onTabSelectHandler,
  onCancelClick,
  onHide
}: ShadowNotificationsPanelProps) => {
  const [style, setStyle] = useState(propStyle)

  useEffect(() => {
    setStyle({
      ...style,
      ...inlineStyle,
      width: width || style.width,
      height: height || style.height
    })
  }, [])

  const okClickHandler = (item: any) => {
    onOkClick && onOkClick(item)
  }

  const cancelClickHandler = (item: any) => {
    onCancelClick && onCancelClick(item)
  }

  const onDialogChange = (type: string) => {
    if (type === 'close') {
      onHide && onHide(true)
    }
  }

  const onSelectTab = (tab: ShadowTabItem) => {
    onTabSelectHandler && onTabSelectHandler(tab)
  }

  const onActionSelect = (event: any, message: ShadowNotificationItem) => {
    onActionSelectHandler &&
      onActionSelectHandler({ data: event, context: message })
  }

  return (
    <ShadowDialog
      title={title}
      closable={true}
      position='custom'
      customPosition={customPosition}
      // {...(position === "custom" ? { customPosition: customPosition } : { position: position as DialogPosition })}
      className={`shadow-notification-panel ${propClass}`}
      display={display}
      modal={false}
      closeOnBlur={true}
      height={height}
      width={width}
      resizable={resizable}
      displayChange={(event: any) => onDialogChange(event)}
    >
      {items?.length ? (
        <Fragment>
          <div className='shadow-notification-content-title'>
            {subtitle && <span>{subtitle}</span>}
          </div>
          {tabs && tabs.length > 0 && (
            <div>
              <ShadowTab
                tabs={tabs}
                activeTab={activeTabObj}
                onSelectTab={(tab: ShadowTabItem) => onSelectTab(tab)}
              />
            </div>
          )}
          {items.map((item: ShadowNotificationItem, index: any) => (
            <div
              key={`notification-item-${index}`}
              className='notification-item-container'
            >
              <div
                className={`notification-card ${item?.styleClass ? item?.styleClass : ''}`}
              >
                <div className='notification-item-icon'>
                  {item.icon && !item.imageUrl ? (
                    <ShadowAvatar
                      shape={avatarShape}
                      icon={item.icon}
                      size={avatarSize}
                    />
                  ) : null}
                  {item.imageUrl && !item.icon ? (
                    <ShadowAvatar
                      shape={avatarShape}
                      imageUrl={item.imageUrl}
                      size={avatarSize}
                    />
                  ) : null}
                </div>
                <div className='notification-item-body'>
                  <div className='notification-item-header'>
                    <div className='notification-item-title'>{item.title}</div>
                    {item.subtitle && (
                      <div className='notification-item-subtitle'>
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                  <div className='notification-item-content'>
                    {item.content || ''}
                  </div>
                  <div className='notification-action'>
                    <ShadowButton
                      label={item.okButtonText || 'OK'}
                      buttonType='primary'
                      onButtonClick={okClickHandler}
                      buttonActionStyle='brand'
                      size='sm'
                    />
                    <ShadowButton
                      label={item.cancelButtonText || 'Cancel'}
                      buttonType='text'
                      onButtonClick={cancelClickHandler}
                      buttonActionStyle='brand'
                    />
                  </div>
                  {item.showAction && item.actionItems && (
                    <div className='notification-action-wrapper'>
                      <ShadowTieredMenu
                        menuItem={item.actionItems || []}
                        menuOption={item.actionOption || {}}
                        onSelect={(event: ShadowTieredMenuItems) =>
                          onActionSelect(event, item)
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ) : (
        <div className='notification-panel-empty'>{emptyMessage}</div>
      )}
    </ShadowDialog>
  )
}

export default ShadowNotificationsPanel
