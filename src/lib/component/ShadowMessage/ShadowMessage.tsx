import React, { useRef } from 'react'
import { Messages } from 'primereact/messages'
import { useMountEffect } from 'primereact/hooks'
import { ShadowMessageItem } from '../../models'
import ShadowButtonGroup from '../ShadowButtonGroup/ShadowButtonGroup'
import './ShadowMessage.scss'

interface ShadowMessageProps {
  shadowMessage: ShadowMessageItem
  onButtonClick?: (label: string) => void
  onMessageClosed?: (message: ShadowMessageItem) => void
}

const ShadowMessage = ({
  shadowMessage,
  onButtonClick,
  onMessageClosed
}: ShadowMessageProps) => {
  const msgs = useRef<Messages>(null)

  const closeMessage = (_message: ShadowMessageItem) => {
    onMessageClosed && onMessageClosed(shadowMessage)
    msgs.current?.clear()
  }

  const onClick = (label: string) => {
    onButtonClick && onButtonClick(label)
  }

  useMountEffect(() => {
    msgs.current?.show({
      severity: shadowMessage.severity || 'info',
      sticky: true,
      closable: false,
      content: (
        <React.Fragment>
          <div className='message-wrapper'>
            <div className='icon-container'>
              <i className={shadowMessage.messageIcon || 'pi pi-check'}></i>
            </div>
            <div className='content-container'>
              <div className='title ml-2'>{shadowMessage.summary}</div>
              <div className='content ml-2'>{shadowMessage.detail}</div>
            </div>
          </div>
          <div className='group-btns'>
            <ShadowButtonGroup
              direction={shadowMessage.buttonGroupDirection || 'horizontal'}
              buttonsSize={shadowMessage.buttonSize || 'md'}
              buttonGroupData={shadowMessage.buttonGroup || []}
              onButtonClick={onClick}
              styleClass='shadow-button-group'
            />
            {shadowMessage.closable !== false && (
              <i
                onClick={() => closeMessage(shadowMessage)}
                className='closableIcon pi pi-times'
              ></i>
            )}
          </div>
        </React.Fragment>
      )
    })
  })

  return (
    <div className='message-container'>
      <Messages ref={msgs} />
    </div>
  )
}

export default ShadowMessage
