import React from 'react'
import './ShadowPreview.scss'
import {
  ShadowChipItem,
  ShadowChipThemeStyle,
  ShadowClickEventOutput,
  ShadowPreview,
  ShadowPreviewPanel
} from '../../models'
import { MenuItem } from 'primereact/menuitem'
import ShadowChip from '../ShadowChip/ShadowChip'
import ShadowMessage from '../ShadowMessage/ShadowMessage'
import ShadowInputSwitch from '../ShadowInputSwitch/ShadowInputSwitch'
import ShadowTieredMenu from '../ShadowTiered-menu/ShadowTieredMenu'
import ShadowDivider from '../ShadowDivider/ShadowDivider'

interface ShadowPreviewComponentProps {
  shadowPreview?: ShadowPreview
  shadowChipList?: ShadowChipItem[]
  hideChipOverflow?: boolean
  themeStyle?: ShadowChipThemeStyle
  rightIconClick?: (event: ShadowClickEventOutput) => void
  menuItemClick?: (event: ShadowClickEventOutput) => void
  onRemoveChip?: (chip: ShadowChipItem) => void
  onToggleSwitch?: (event: ShadowClickEventOutput) => void
  messageButtonClick?: (event: ShadowClickEventOutput) => void
  children?: React.ReactNode
  template: any
}

const ShadowPreviewComponent = ({
  shadowPreview = {},
  shadowChipList = [],
  hideChipOverflow = true,
  themeStyle = 'primary',
  rightIconClick,
  menuItemClick,
  onRemoveChip,
  onToggleSwitch,
  messageButtonClick,
  children,
  template
}: ShadowPreviewComponentProps) => {
  //   const shadowChipComponentRef = useRef<ShadowChipComponent | null>(null);

  const onClickRightIcon = (icon: string, cardPanel: ShadowPreviewPanel) => {
    rightIconClick && rightIconClick({ data: icon, context: cardPanel })
  }

  const handleClickMenuItem = (
    menuItem: MenuItem,
    cardPanel: ShadowPreviewPanel
  ) => {
    menuItemClick && menuItemClick({ data: menuItem, context: cardPanel })
  }

  const onRemoveChipData = (shadowChip: ShadowChipItem) => {
    onRemoveChip && onRemoveChip(shadowChip)
  }

  const toggleAccordion = (index: number) => {
    if (shadowPreview.content && shadowPreview.content[index]) {
      shadowPreview.content[index].isOpen = !(
        shadowPreview.content[index]?.isOpen ?? false
      )
    }
  }

  const toggleSwitch = (e: any, data: ShadowPreviewPanel) => {
    onToggleSwitch && onToggleSwitch({ data: e, context: data })
  }

  const messageButtonHandler = (e: any) => {
    messageButtonClick &&
      messageButtonClick({ data: e, context: 'Preview Message Box' })
  }

  const onChipRemove = (shadowChip: ShadowChipItem) => {
    if (shadowChipList && shadowChipList.length) {
      const filteredChips = shadowChipList.filter(
        (chip: ShadowChipItem) => chip.key !== shadowChip.key
      )
      onRemoveChip && onRemoveChip(shadowChip)
    }
  }

  return (
    <div className='preview-container'>
      {shadowChipList && shadowChipList.length && (
        <div style={{ width: '100%' }}>
          <ShadowChip
            hideOverflow={hideChipOverflow}
            chipList={shadowChipList}
            themeStyle={themeStyle}
            onRemove={onChipRemove}
          />
        </div>
      )}
      {shadowPreview?.showMessage && (
        <ShadowMessage
          shadowMessage={shadowPreview?.message || {}}
          onButtonClick={messageButtonHandler}
        />
      )}
      {shadowPreview?.content?.map((cardPanel, i) => (
        <div key={`preview-panel-${i}`} className='preview-accordion-container'>
          <div
            className='preview-accordion-header'
            onClick={() => toggleAccordion(i)}
          >
            <div className='acc-header-left'>
              {cardPanel?.left_icon && (
                <div className='acc-left-icon'>
                  <i className={cardPanel?.left_icon}></i>
                </div>
              )}
              <div className='acc-title-container'>
                <div className='title'>
                  <span>{cardPanel?.title}</span>
                </div>
                {cardPanel?.showSwitch && (
                  <div className='switch-container'>
                    <div className='switch'>
                      <span>{cardPanel?.switchOption?.title}</span>
                    </div>
                    <div className='input-switch-wrapper'>
                      <ShadowInputSwitch
                        checked={cardPanel?.switchOption?.checked || false}
                        disabled={cardPanel?.switchOption?.disabled || false}
                        onClick={(e) => toggleSwitch(e, cardPanel)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='header-icon'>
              {cardPanel?.showAction && (
                <ShadowTieredMenu
                  menuItem={cardPanel?.menuItem || []}
                  menuOption={cardPanel?.menuOption || {}}
                  onSelect={(event) => handleClickMenuItem(event, cardPanel)}
                />
              )}
              {cardPanel?.showRefresh && (
                <i
                  className='pi pi-refresh'
                  onClick={(e) => {
                    e.stopPropagation()
                    onClickRightIcon('pi pi-refresh', cardPanel)
                  }}
                ></i>
              )}
              <i
                className={
                  cardPanel?.isOpen ? 'pi pi-angle-up' : 'pi pi-angle-down'
                }
              ></i>
            </div>
          </div>
          <div
            className={`${cardPanel?.isOpen ? 'preview-accordion-content expanded' : 'preview-accordion-content'}`}
          >
            {template(cardPanel)}
          </div>
          {shadowPreview?.content &&
            shadowPreview?.content?.length! - 1 > i && (
              <ShadowDivider></ShadowDivider>
            )}
        </div>
      ))}
    </div>
  )
}

export default ShadowPreviewComponent
