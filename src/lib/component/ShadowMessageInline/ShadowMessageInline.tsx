import './ShadowMessageInline.scss'
import React from 'react'

interface ShadowMessageInlineProps {
  message?: string
  state?: 'success' | 'warning' | 'error' | 'info'
}

const ShadowMessageInline = ({
  message = '',
  state = 'info'
}: ShadowMessageInlineProps) => {
  const getIconClass = (): string => {
    const iconClasses: Record<string, string> = {
      success: 'pi pi-check-circle',
      warning: 'pi pi-exclamation-circle',
      error: 'pi pi-exclamation-circle',
      info: 'pi pi-info-circle'
    }

    const iconClass = iconClasses[state] || ''
    return `message-icon ${iconClass}`
  }

  return (
    <div className='messageContainer'>
      <div className={`message-${state} messageState`}>
        <i className={getIconClass()}></i>
        <label className='message-label'>{message}</label>
      </div>
    </div>
  )
}

export default ShadowMessageInline
