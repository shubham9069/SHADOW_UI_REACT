import React, { useRef, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  ShadowMenu,
  ShadowMenuState,
  ShadowTabItem,
  ShadowNotificationItem
} from '../../models'

import './ShadowSidemenu.scss'
import ShadowNotificationsPanel from '../ShadowNotificationPanel/ShadowNotificationsPanel'
import ShadowBadge from '../ShadowBadge/ShadowBadge'

interface ShadowSideMenuProps {
  width?: string
  height?: string
  menuItems?: ShadowMenu[]
  utilityMenus?: ShadowMenu[]
  appLogo?: string
  closeIcon?: string
  appLogoSmall?: string
  appName?: string
  productName?: string
  productSubHeading?: string
  userImage?: string
  userName?: string
  userEmail?: string
  showSearchBox?: boolean
  notifications?: ShadowNotificationItem[]
  notificationSubtitle?: string
  showNotifications?: boolean
  EmptyNotificationMessage?: string
  tabList?: ShadowTabItem[]
  activeTabValue?: ShadowTabItem
  notificationWidth?: string
  toggleMenuEvent?: (state: ShadowMenuState) => void
  onChangeMenu?: (menu: ShadowMenu) => void
  onChangeSearch?: (searchText: string) => void
  onConfirmNotificationClick?: (item: ShadowNotificationItem) => void
  onCancelNotificationClick?: (item: ShadowNotificationItem) => void
  onHideNotifications?: (response: any) => void
  children?: any
}

const ShadowSideMenu = ({
  width = '240px',
  height = '100%',
  menuItems = [],
  utilityMenus = [],
  appLogo = '',
  closeIcon = '',
  appLogoSmall = '',
  productName = '',
  productSubHeading = '',
  userImage = '',
  userName = '',
  userEmail = '',
  showSearchBox = false,
  notifications = [],
  notificationSubtitle = '',
  showNotifications = false,
  EmptyNotificationMessage = 'No New Notifications',
  tabList = [],
  activeTabValue = { label: '', id: '' },
  notificationWidth = 'auto',
  toggleMenuEvent,
  onChangeMenu,
  onChangeSearch,
  onConfirmNotificationClick,
  onCancelNotificationClick,
  onHideNotifications,
  children
}: ShadowSideMenuProps) => {
  const currentPath = useLocation().pathname
  const [searchText, setSearchText] = useState('')
  const [notificationClass, setNotificationClass] = useState('open-sidebar')
  const [openSidebar, setOpenSidebar] = useState(true)
  const itemEl = useRef<any>()

  const onClickOpenSidebar = () => {
    if (!openSidebar) {
      setOpenSidebar(true)
      toggleMenuEvent && toggleMenuEvent(ShadowMenuState.Open)
      setNotificationClass('open-sidebar')
    }
  }

  const toggleMenu = () => {
    let _openSidebar = !openSidebar
    setOpenSidebar(_openSidebar)
    if (_openSidebar) {
      toggleMenuEvent && toggleMenuEvent(ShadowMenuState.Open)
      setNotificationClass('open-sidebar')
    } else {
      setNotificationClass('closed-sidebar')
      toggleMenuEvent && toggleMenuEvent(ShadowMenuState.Close)
    }
  }

  const onClickMenuItem = (menuItem: ShadowMenu) => {
    onChangeMenu && onChangeMenu(menuItem)
  }

  const onSearchChange = (e: any) => {
    setSearchText(e.target.value)
    onChangeSearch && onChangeSearch(e)
  }

  const showSubmenu = (_itemEl: HTMLElement) => {
    _itemEl.classList.toggle('showMenu')
    itemEl.current.classList.toggle('showMenu')
  }

  const okHandler = (item: ShadowNotificationItem) => {
    onConfirmNotificationClick && onConfirmNotificationClick(item)
  }

  const cancelHandler = (item: ShadowNotificationItem) => {
    onCancelNotificationClick && onCancelNotificationClick(item)
  }

  const onNotificationHide = (response: any) => {
    onHideNotifications && onHideNotifications(true)
  }

  return (
    <div className={`sidebar ${!openSidebar ? 'sidebar-close' : ''}`}>
      {/* Application logo section */}
      <div className={`logo-details ${!openSidebar ? 'logo-small' : ''}`}>
        <div className='logo' onMouseEnter={onClickOpenSidebar}>
          <img src={openSidebar ? appLogo : appLogoSmall} alt='' />
        </div>
        {openSidebar && (
          <div
            className='menu'
            style={{ display: openSidebar ? 'block' : 'none' }}
            onClick={toggleMenu}
          >
            {closeIcon ? (
              <img src={closeIcon} alt=''  />
            ) : (
              <i className='pi-angle-double-left'  />
            )}
          </div>
        )}
      </div>

      <div className='divider'></div>

      {/* Product Name section */}
      <div className='product-details'>
        {openSidebar && (
          <>
            <span className='product-name'>{productName}</span>
            <span className='sub-heading'>{productSubHeading}</span>
          </>
        )}
      </div>

      {showSearchBox && (
        <div className='search-main'>
          <span className='search-box'>
            <i className='pi pi-search'></i>
            <input
              type='text'
              placeholder='Search globally'
              defaultValue={searchText}
              onChange={onSearchChange}
            />
          </span>
        </div>
      )}

      <ul className='nav-links' id='nav-links'>
        {menuItems.map((menuItem, index) => (
          <li
            key={`nav-link-${index}`}
            ref={itemEl}
            className={`${menuItem?.url === currentPath ? 'active' : ''}`}
            onClick={() => onClickMenuItem(menuItem)}
          >
            {menuItem.useTemplate && openSidebar ? (
              <>{children && React.isValidElement(children) && { children }}</>
            ) : (
              <>
                <div className='dropdown-title'>
                  {menuItem.url ? (
                    <Link to={menuItem.url}>
                      <span
                        className={`${menuItem.url === currentPath ? 'indicator' : ''}`}
                      ></span>
                      {menuItem.icon && (
                        <i
                          className={menuItem.icon}
                          title={openSidebar ? '' : menuItem.label}
                        ></i>
                      )}
                      {openSidebar && (
                        <span className='link_name'>{menuItem.label}</span>
                      )}
                    </Link>
                  ) : (
                    <Link to='' style={{ cursor: 'pointer' }}>
                      {menuItem.icon && (
                        <i
                          className={menuItem.icon}
                          title={openSidebar ? '' : menuItem.label}
                        ></i>
                      )}
                      {openSidebar && (
                        <span className='link_name'>{menuItem.label}</span>
                      )}
                    </Link>
                  )}
                  {openSidebar && menuItem.items?.length! > 0 && (
                    <i
                      className='pi pi-chevron-down arrow'
                      onClick={() => showSubmenu(itemEl?.current)}
                    ></i>
                  )}
                </div>
              </>
            )}

            {openSidebar && menuItem.items && menuItem.items.length > 0 && (
              <ul
                className={`sub-menu ${menuItem.items?.length === 0 ? 'blank' : ''}`}
              >
                <li>
                  <Link
                    to={menuItem.url || '#'}
                    className='link_name'
                    onClick={() => onClickMenuItem(menuItem)}
                  >
                    {menuItem.url}
                  </Link>
                </li>
                {menuItem.items?.map((item_sub: any, subIndex: number) => (
                  <li
                    key={`nav-sub-link-${subIndex}`}
                    className={`${menuItem.url === '' ? 'active' : ''}`}
                    onClick={() => onClickMenuItem(item_sub)}
                  >
                    {menuItem.url ? (
                      <Link to={item_sub.url}>
                        <span
                          className={`${menuItem.url === currentPath ? 'indicator' : ''}`}
                        ></span>
                        <div className='link-inner-text'>{item_sub.label}</div>
                      </Link>
                    ) : (
                      <div className='link-inner-text'>{item_sub.label}</div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Utilities */}
      <div className='utilities'>
        <ul className='nav-links'>
          {utilityMenus.map((menuItem, index) => (
            <li
              key={`utilities-link-${index}`}
              className={
                menuItem?.url
                  ? menuItem?.url === currentPath
                    ? 'active'
                    : ''
                  : ''
              }
              onClick={() => onClickMenuItem(menuItem)}
            >
              {menuItem?.url ? (
                <Link
                  to={menuItem?.url}
                  className={menuItem?.url === currentPath ? 'indicator' : ''}
                >
                  {menuItem?.icon && (
                    <i
                      className={menuItem?.icon + ' menuItem-icon'}
                      data-pr-tooltip={openSidebar ? '' : menuItem?.label}
                    ></i>
                  )}
                  {openSidebar && (
                    <span className='link_name'>{menuItem?.label}</span>
                  )}
                  {menuItem?.badge && openSidebar && (
                    <span>
                      <ShadowBadge
                        badge={{ value: menuItem?.badge?.value }}
                      ></ShadowBadge>
                    </span>
                  )}
                </Link>
              ) : (
                <Link to='' style={{ cursor: 'pointer' }}>
                  {menuItem?.icon && (
                    <i
                      className={menuItem?.icon + ' menuItem-icon'}
                      data-pr-tooltip={openSidebar ? '' : menuItem?.label}
                    ></i>
                  )}
                  {openSidebar && (
                    <span className='link_name'>{menuItem?.label}</span>
                  )}
                  {menuItem.badge && openSidebar && (
                    <span>
                      <ShadowBadge
                        badge={{ value: menuItem?.badge?.value }}
                      ></ShadowBadge>
                    </span>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className='divider bottom-position'></div>

      {/* Account Section */}
      <div className='account'>
        {userImage && (
          <div className='avatar'>
            <img src={userImage} alt='' />
          </div>
        )}
        {openSidebar && userName !== '' && (
          <div className='name'>
            <p>{userName}</p>
            {userEmail && <span className='email-text'>{userEmail}</span>}
          </div>
        )}
      </div>

      {showNotifications && (
        <ShadowNotificationsPanel
          display={showNotifications}
          class={notificationClass}
          position='custom'
          customPosition={{ top: '0vh' }}
          onOkClick={okHandler}
          onCancelClick={cancelHandler}
          items={notifications}
          title='Notifications'
          subtitle={notificationSubtitle}
          height='100vh'
          width='540px'
          emptyMessage={EmptyNotificationMessage}
          onHide={onNotificationHide}
          tabs={tabList}
          activeTabObj={activeTabValue}
        />
      )}
    </div>
  )
}

export default ShadowSideMenu
