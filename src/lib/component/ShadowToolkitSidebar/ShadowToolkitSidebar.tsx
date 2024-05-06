import { ShadowToolkitSidebarOption } from '../../models'
import ShadowButton from '../ShadowButton/ShadowButton'
import './ShadowToolkitSidebar.scss'
import React from 'react'

interface ShadowToolkitSidebarProps {
  title: string
  toolkitSidebarOption?: ShadowToolkitSidebarOption
  closeSideBar?: () => void
  primaryButtonAction?: () => void
  secondaryButtonAction?: () => void
  customFooter?: React.ReactNode
  children?: any
}

const ShadowToolkitSidebar = ({
  title = '',
  toolkitSidebarOption,
  closeSideBar,
  primaryButtonAction,
  secondaryButtonAction,
  customFooter,
  children
}: ShadowToolkitSidebarProps) => {
  return (
    <div
      className={'shadow-toolkit-sidebar-container'}
      style={{
        width: toolkitSidebarOption?.width
          ? `${toolkitSidebarOption?.width}`
          : '250px',
        height: toolkitSidebarOption?.height
          ? `${toolkitSidebarOption?.height}`
          : '100%'
      }}
    >
      <div
        className={
          toolkitSidebarOption?.closeIconPosition === 'left'
            ? 'sidebar-header'
            : `${'sidebar-header'} ${'right-position'}`
        }
      >
        <div className={'close-icon'} onClick={closeSideBar}>
          <i className={toolkitSidebarOption?.closeIcon || 'pi pi-times'}></i>
        </div>
        {title && <span>{title}</span>}
      </div>
      <div className={'sidebar-body'}>
        <div className='sidebar-content'>{children}</div>
        <div className={'sidebar-content'}></div>
        <div className={'sidebar-footer'}>
          {toolkitSidebarOption?.useFooterTemplate ? (
            <>{customFooter}</>
          ) : (
            <>
              {toolkitSidebarOption?.primaryButtonText && (
                <ShadowButton
                  label={toolkitSidebarOption?.primaryButtonText || ''}
                  size={'sm'}
                  buttonType={'primary'}
                  onButtonClick={primaryButtonAction}
                ></ShadowButton>
              )}
              {toolkitSidebarOption?.secondaryButtonText && (
                <ShadowButton
                  label={toolkitSidebarOption.secondaryButtonText}
                  size={'sm'}
                  buttonType={'secondary'}
                  onButtonClick={secondaryButtonAction}
                ></ShadowButton>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShadowToolkitSidebar
