import React, { useEffect, useState } from 'react'
import './ShadowBreadcrumb.scss'
import {
  ShadowBreadcrumbItem,
  ShadowBreadcrumbSize,
  ShadowBreadcrumbStyle,
  ShadowTieredMenuItems,
  ShadowTieredMenuOption
} from '../../models'
import ShadowTieredMenu from '../ShadowTiered-menu/ShadowTieredMenu'

interface ShadowBreadcrumbProps {
  breadcrumbStyle?: ShadowBreadcrumbStyle
  breadcrumbItem?: ShadowBreadcrumbItem[]
  truncation?: 'beginning' | 'middle' | null
  size?: ShadowBreadcrumbSize
  menuItems?: ShadowTieredMenuItems[]
  menuOption?: ShadowTieredMenuOption
  onChangeLabel?: (label: any) => void
  clickHandler?: (event: ShadowBreadcrumbItem) => void
}

const ShadowBreadcrumb = ({
  breadcrumbStyle = { icon: 'pi pi-angle-right' },
  breadcrumbItem = [],
  truncation: propTruncation,
  size = 'lg',
  menuItems: propMenuItems = [],
  menuOption = {
    icon: 'pi pi-ellipsis-h',
    width: 32,
    height: 32
  },
  onChangeLabel,
  clickHandler
}: ShadowBreadcrumbProps) => {
  const [menuItems, setMenuItems] =
    useState<ShadowTieredMenuItems[]>(propMenuItems)
  const [truncation, setTruncation] = useState<any>(propTruncation)
  const [currBreadCrumbItems, setCurrBreadCrumbItems] =
    useState<ShadowBreadcrumbItem[]>(breadcrumbItem)

  useEffect(() => {
    updateMenuItems()
  }, [currBreadCrumbItems, truncation])

  const updateMenuItems = () => {
    if (breadcrumbItem.length > 3) {
      if (truncation === 'beginning') {
        const items = breadcrumbItem.slice(0, breadcrumbItem.length - 2)
        const newMenuItems = buildNestedStructure(items)
        setMenuItems(newMenuItems)
      } else if (truncation === 'middle') {
        const items = breadcrumbItem.slice(1, breadcrumbItem.length - 2)
        const newMenuItems = buildNestedStructure(items)
        setMenuItems(newMenuItems)
      }
    } else {
      setMenuItems([])
    }
  }

  const buildNestedStructure = (
    items: ShadowBreadcrumbItem[]
  ): ShadowTieredMenuItems[] => {
    if (items.length === 0) {
      return []
    }

    const nestedItem: ShadowTieredMenuItems = {
      label: items[0].text,
      data: items[0],
      items: buildNestedStructure(items.slice(1))
    }

    return [nestedItem]
  }

  const onClickHandler = (event: ShadowBreadcrumbItem) => {
    clickHandler && clickHandler(event)
  }

  const onChangeLabelEvent = (label: any, index: number) => {
    let newBreadCrumbItems = [...breadcrumbItem]
    newBreadCrumbItems[index].text = label
    setCurrBreadCrumbItems(newBreadCrumbItems)
    onChangeLabel && onChangeLabel(label)
  }

  const onSelectHandler = (event: any) => {
    clickHandler && clickHandler(event.data)
  }
  return (
    <div className='breadcrumb-conatiner'>
      {currBreadCrumbItems &&
        currBreadCrumbItems.length > 0 &&
        currBreadCrumbItems.map((breadcrumb, index) => (
          <div
            key={`breadcrumb-${index}`}
            className={`${size} breadcrumb-item`}
          >
            {breadcrumb.isEditable ? (
              <input
                defaultValue={breadcrumb.text}
                className='breadcrumb-input'
                onChange={(e) => onChangeLabelEvent(e.target.value, index)}
              />
            ) : (
              <>
                {breadcrumb.text && !truncation && (
                  <div
                    onClick={() => onClickHandler(breadcrumb)}
                    className={`${index === breadcrumbItem.length - 1 ? 'breadcrumb-text selected-text' : 'breadcrumb-text'}`}
                    title={breadcrumb.text}
                  >
                    {breadcrumb.text}
                  </div>
                )}
                {((breadcrumb.text &&
                  truncation == 'beginning' &&
                  index > breadcrumbItem.length - 3) ||
                  (breadcrumb.text &&
                    truncation == 'middle' &&
                    (index > breadcrumbItem.length - 3 || index < 1))) && (
                  <div
                    onClick={() => onClickHandler(breadcrumb)}
                    className={`${index === breadcrumbItem.length - 1 ? 'breadcrumb-text selected-text' : 'breadcrumb-text'}`}
                    title={breadcrumb.text}
                  >
                    {breadcrumb.text}
                  </div>
                )}
                {(truncation === 'beginning' && index === 0) ||
                (truncation === 'middle' && index === 1) ? (
                  <ShadowTieredMenu
                    menuItem={menuItems}
                    menuOption={menuOption}
                    onSelect={onSelectHandler}
                  />
                ) : null}
              </>
            )}
            {(breadcrumbStyle.icon &&
              index < breadcrumbItem.length - 1 &&
              !truncation) ||
            (breadcrumb.text &&
              truncation === 'beginning' &&
              index > breadcrumbItem.length - 4 &&
              index < breadcrumbItem.length - 1) ||
            (breadcrumb.text &&
              truncation === 'middle' &&
              (index > breadcrumbItem.length - 4 || index < 1)) ? (
              <i className={breadcrumbStyle.icon}></i>
            ) : null}
          </div>
        ))}
    </div>
  )
}

export default ShadowBreadcrumb
