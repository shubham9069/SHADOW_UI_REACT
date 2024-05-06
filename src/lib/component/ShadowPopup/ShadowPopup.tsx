import { Dialog } from 'primereact/dialog'
import React from 'react'

import './ShadowPopup.scss'

interface ShadowPopupProps {
  title: string
  closable?: boolean
  style?: any
  breakpoints?: any
  className?: string
  mode?: string
  display?: boolean
  displayChange?: (e: boolean) => void
  handleCancel?: (e: boolean) => void
  handleOk?: (e: boolean) => void
  children?: React.ReactNode
}

const ShadowPopup = ({
  title = '',
  closable = true,
  style = {},
  breakpoints = {},
  className = '',
  mode = '',
  display = false,
  displayChange,
  handleCancel,
  handleOk,
  children
}: ShadowPopupProps) => {
  const onClose = () => {
    displayChange && displayChange(false)
  }

  const onCancel = () => {
    handleCancel && handleCancel(false)
  }

  const onSubmit = () => {
    handleOk && handleOk(true)
  }

  const HeaderContent = title && (
    <span dangerouslySetInnerHTML={{ __html: title }}></span>
  )

  const FooterContent =
    mode === 'confirm' ? (
      <>
        <span className='action' onClick={onClose}>
          Cancel
        </span>
        <span className='action blue' onClick={onSubmit}>
          OK
        </span>
      </>
    ) : (
      mode === 'alert' && (
        <span className='action blue' onClick={onClose}>
          OK
        </span>
      )
    )

  return (
    <Dialog
      visible={display}
      modal={true}
      style={style}
      breakpoints={breakpoints}
      draggable={false}
      resizable={false}
      closable={closable}
      onHide={onClose}
      appendTo={document.body}
      className={`shadow-popup-model ${className}`}
      header={HeaderContent}
      footer={FooterContent}
    >
      {children}
    </Dialog>
  )
}

export default ShadowPopup
