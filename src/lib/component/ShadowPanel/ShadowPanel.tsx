import React, { useEffect, useState } from 'react'
import './ShadowPanel.scss'
import { ShadowClickEventOutput, ShadowPanelItem } from '../../models'
import { MenuItem } from 'primereact/menuitem'
import ShadowTable from '../ShadowTable/ShadowTable'
import ShadowChart from '../ShadowChart/ShadowChart'
import ShadowTieredMenu from '../ShadowTiered-menu/ShadowTieredMenu'

interface ShadowPanelProps {
  shadowPanel?: ShadowPanelItem
  rightIconClick?: (output: ShadowClickEventOutput) => void
  menuItemClick?: (output: ShadowClickEventOutput) => void
  children?: React.ReactNode
}

const ShadowPanel = ({
  shadowPanel: propShadowPanel = {},
  rightIconClick,
  menuItemClick,
  children
}: ShadowPanelProps) => {
  const [shadowPanel, setShadowPanel] =
    useState<ShadowPanelItem>(propShadowPanel)
  const [expanded, setExpanded] = useState(shadowPanel?.isOpen)

  useEffect(() => {
    setShadowPanel(propShadowPanel)
  }, [propShadowPanel])

  const onClickRightIcon = (icon: string, cardPanel: ShadowPanelItem) => {
    rightIconClick && rightIconClick({ data: icon, context: cardPanel })
  }

  const handleClickMenuItem = (menuItem: any, cardPanel: ShadowPanelItem) => {
    menuItemClick && menuItemClick({ data: menuItem, context: cardPanel })
  }

  const toggleAccordion = () => {
    if (shadowPanel.toggleable) {
      setExpanded(!expanded)
      //   setShadowPanel((prevShadowPanel) => ({ ...prevShadowPanel, isOpen: !prevShadowPanel.isOpen ?? false }));
    }
  }
  return (
    <div className='accordion-container'>
      <div className='accordion-header' onClick={toggleAccordion}>
        <div className='acc-header-left'>
          <div className='acc-left-icon'>
            <i className={shadowPanel?.left_icon}></i>
          </div>
          <div className='acc-title-container'>
            <div className='title'>
              <span>{shadowPanel?.title}</span>
            </div>
          </div>
        </div>

        <div className='header-icon'>
          {shadowPanel?.showAction && (
            <ShadowTieredMenu
              menuItem={shadowPanel?.menuItem || []}
              menuOption={shadowPanel?.menuOption || {}}
              onSelect={(e) => handleClickMenuItem(e, shadowPanel)}
            ></ShadowTieredMenu>
          )}
          {shadowPanel?.right_icon &&
            shadowPanel?.right_icon.map((icon, idx) => (
              <i
                key={idx}
                className={icon}
                onClick={(e) => {
                  e.stopPropagation()
                  onClickRightIcon(icon, shadowPanel)
                }}
              ></i>
            ))}
          <button className='toggle-block-icon'>
            {shadowPanel?.toggleable && (
              <i className={expanded ? 'pi pi-minus' : 'pi pi-plus'}></i>
            )}
          </button>
        </div>
      </div>
      <div
        className={`accordion-content ${expanded ? 'expanded' : 'collapsed'}`}
        // style={{ maxHeight: shadowPanel?.isOpen ? "100%" : "0px" }}
      >
        {shadowPanel?.data?.type === 'TABLE' &&
          (!shadowPanel?.data?.value ? (
            <>{children}</>
          ) : (
            <>
              {/* <ShadowTable columnDefs={shadowPanel?.data?.value?.columnDefs} tableData={shadowPanel?.data?.value?.tableData}></ShadowTable> */}
            </>
          ))}

        {shadowPanel?.data?.type === 'CHART' &&
          (!shadowPanel?.data?.value ? (
            <>{children}</>
          ) : (
            <>
              {/* <ShadowChart shadowChartMetaData={shadowPanel?.data?.value}></ShadowChart> */}
            </>
          ))}

        {shadowPanel?.data?.type === 'TEMPLATE' && (
          <>
            {!shadowPanel?.data?.value ? (
              <>{children}</>
            ) : (
              <>{shadowPanel?.data?.value}</>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ShadowPanel
