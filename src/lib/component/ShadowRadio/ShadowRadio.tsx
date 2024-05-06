import React, { useState, useEffect } from 'react'

import { RadioButton } from 'primereact/radiobutton'

import { ShadowRadio } from '../../models'
import './ShadowRadio.scss'

interface ShadowRadioProps {
  shadowRadioData?: ShadowRadio[]
  orientation?: 'vertical' | 'horizontal'
  state?: 'default' | 'error'
  message?: string
  messageType?: 'helper' | 'error' | 'warning'
  value?: any
  onButtonClick?: (shadowRadioData: ShadowRadio) => void
}

const ShadowRadioComponent = ({
  shadowRadioData: propRadioData = [],
  orientation = 'vertical',
  state = 'default',
  message = '',
  messageType = 'helper',
  value = '',
  onButtonClick
}: ShadowRadioProps) => {
  const [shadowRadioData, setShadowRadioData] = useState<ShadowRadio[]>([])
  const [selectedItem, setSelectedItem] = useState(value)

  useEffect(() => {
    setSelectedItem(value)
  }, [value])

  useEffect(() => {
    setShadowRadioData(propRadioData)
  }, [propRadioData])

  const onClick = (e: any, shadowRadio: ShadowRadio) => {
    setSelectedItem(e.value)
    onButtonClick && onButtonClick(shadowRadio)
  }

  return (
    <div className='radio-container'>
      <div
        className={`${orientation === 'vertical' ? 'vertical' : 'horizontal'} radio-buttons`}
      >
        {shadowRadioData &&
          shadowRadioData.length > 0 &&
          shadowRadioData.map((item, idx) => (
            <div key={`radio-${idx}`} className='radio-content'>
              <RadioButton
                inputId={item.key || ''}
                name={item.value || ''}
                value={item.value}
                checked={selectedItem === item.value}
                onChange={(e) => onClick(e, item)}
                disabled={item.disabled || false}
                className={state === 'error' ? 'error' : 'default'}
              />
              <label htmlFor={item.key} className='content-label'>
                {item.name}
              </label>
            </div>
          ))}
      </div>
      {message && (
        <div className='messageContainer'>
          <div className={`${'message-' + messageType} messageIcon`}>
            {messageType === 'error' && (
              <i className='pi pi-exclamation-circle'></i>
            )}
            {messageType === 'warning' && (
              <i className='pi pi-exclamation-circle'></i>
            )}
            <label className='message-label'>{message}</label>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShadowRadioComponent
