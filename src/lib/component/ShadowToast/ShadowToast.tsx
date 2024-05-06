import React, { useEffect, useRef, Fragment } from 'react'
import { ShadowToastItem } from '../../models'
import { Toast } from 'primereact/toast'
import { CSSTransitionProps } from 'primereact/csstransition'
import ShadowButtonGroup from '../ShadowButtonGroup/ShadowButtonGroup'
import './ShadowToast.scss'

interface ShadowToastProps {
  shadowToastData: ShadowToastItem
  severity?: 'success' | 'warn' | 'error' | 'info'
  display: boolean
  position?:
    | 'center'
    | 'top-center'
    | 'top-left'
    | 'top-right'
    | 'bottom-center'
    | 'bottom-left'
    | 'bottom-right'
    | undefined
  preventOpenDuplicates?: boolean
  showTransitionOptions?: boolean
  transitionOptions?: CSSTransitionProps
  style?: React.CSSProperties
  styleClass?: string
  autoZIndex?: boolean
  baseZIndex?: number
  breakpoints?: Object
  displayChange?: (display: boolean) => void
  onButtonClick?: (shadowToastData: ShadowToastItem) => void
}

const ShadowToast = ({
  shadowToastData = {},
  severity = 'info',
  display = false,
  position = 'top-right',
  preventOpenDuplicates = false,
  showTransitionOptions = true,
  //   transitionOptions = "250ms ease-in" as CSSTransitionProps,
  style = {},
  styleClass = '',
  autoZIndex = true,
  baseZIndex = 0,
  breakpoints = {},
  displayChange,
  onButtonClick
}: ShadowToastProps) => {
  const toast = useRef<Toast>(null)

  useEffect(() => {
    showToast()
  }, [display])

  const onClick = (_label: any) => {
    onButtonClick && onButtonClick(shadowToastData)
  }

  const onClose = (_shadowToast: any) => {
    displayChange && displayChange(false)
  }

  const showToast = () => {
    if (display) {
      toast.current?.show({
        severity: severity,
        // summary: shadowToastData?.summary || "",
        // detail: shadowToastData?.detail || "",
        icon: shadowToastData?.icon || '',
        sticky: shadowToastData?.sticky || false,
        life: shadowToastData?.life || 3000,
        content: (
          <Fragment>
            <div className='message-wrapper'>
              <div className='icon-container'>
                <i className={`${shadowToastData?.icon || 'pi pi-check'}`}></i>
              </div>
              <div className='content-container'>
                <div className='title ml-2'>{shadowToastData?.summary}</div>
                <div className='content ml-2'>{shadowToastData?.detail}</div>
              </div>
            </div>
            <div className='group-btns'>
              <ShadowButtonGroup
                direction={
                  shadowToastData?.buttonGroupDirection || 'horizontal'
                }
                buttonsSize={shadowToastData?.buttonSize || 'md'}
                buttonGroupData={shadowToastData?.buttonGroup || []}
                onButtonClick={onClick}
                styleClass='shadow-button-group'
              ></ShadowButtonGroup>
            </div>
          </Fragment>
        )
      })
    } else {
      toast.current?.clear()
    }
  }

  return (
    <Toast
      ref={toast}
      onHide={() => onClose(shadowToastData)}
      key={shadowToastData?.key}
      className='toast-container'
      position={position}
      //   {...(showTransitionOptions && { transitionOptions: transitionOptions })}
    />
  )
}

export default ShadowToast
