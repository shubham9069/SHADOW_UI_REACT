import React, { useEffect } from 'react'
import { MenuItem } from 'primereact/menuitem'
import { TieredMenu } from 'primereact/tieredmenu'
import { ShadowTieredMenuItems, ShadowTieredMenuOption } from '../../models'
import './ShadowTieredMenu.scss'

interface ShadowTieredMenuProps {
  menuItem: ShadowTieredMenuItems[]
  menuOption?: ShadowTieredMenuOption
  onSelect?: (menuItem: ShadowTieredMenuItems) => void
}

const ShadowTieredMenu = ({
  menuItem = [],
  menuOption = {
    icon: 'pi pi-ellipsis-v',
    width: 32,
    height: 32
  },
  onSelect
}: ShadowTieredMenuProps) => {
  const menuRef: any = React.useRef(null)

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    menuRef.current && menuRef.current?.toggle(event)
  }

  const assignCommandToMenuItems = (menuItems: MenuItem[]) => {
    if (menuItems.length > 0) {
      menuItems.forEach((item: MenuItem) => {
        item.command = (event: any) => onClickMenuItem(event.item)
        if (item.items && item.items.length > 0) {
          assignCommandToMenuItems(item.items as MenuItem[])
        }
        if (item.items && item.items.length === 0) {
          delete item.items
        }
      })
    }
  }

  useEffect(() => {
    assignCommandToMenuItems(menuItem)
  }, [menuItem])

  const onClickMenuItem = (menuItem: ShadowTieredMenuItems) => {
    onSelect && onSelect(menuItem)
  }

  //   const onClickEvent = (data: any) => {
  //     toolbarClickHandler && toolbarClickHandler(data);
  //   };

  return (
    <div className='shadow-tiered-menu'>
      <button
        className='icon-menu-btn'
        onClick={toggleMenu}
        style={{
          height: menuOption.height ? `${menuOption.height}px` : '32px',
          width: menuOption.width ? `${menuOption.width}px` : '32px'
        }}
      >
        <i
          className={menuOption.icon ? menuOption.icon : 'pi pi-ellipsis-v'}
        ></i>
      </button>

      <TieredMenu ref={menuRef} model={menuItem} popup={true}></TieredMenu>
    </div>
  )
}

export default ShadowTieredMenu
