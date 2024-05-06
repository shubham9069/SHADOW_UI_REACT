import React from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
import { ShadowInputTextAreaSize, ShadowInputTextAreaState } from '../../models'
import './ShadowInputTextArea.scss'

interface ShadowInputTextAreaProps {
  rows?: number
  cols?: number
  size?: ShadowInputTextAreaSize
  header?: string
  autoResize?: boolean
  state?: ShadowInputTextAreaState
  placeholder?: string
  value?: string
  disabled?: boolean
  onChange?: (value: string) => void
  onPressEnter?: (value: string) => void
}

const ShadowInputTextArea = ({
  rows,
  cols,
  size = 'small',
  header,
  autoResize,
  state = 'default',
  placeholder,
  value,
  disabled,
  onChange,
  onPressEnter
}: ShadowInputTextAreaProps) => {
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && onPressEnter) {
      onPressEnter(value || '')
    }
  }

  return (
    <div className='shadow-text-area'>
      <div className='text-area-header'>
        <label>{header}</label>
      </div>
      <InputTextarea
        value={value}
        onChange={onInputChange}
        onKeyPress={handleKeyPress}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        autoResize={autoResize}
        className={`${state} ${size}`}
        disabled={disabled}
      />
    </div>
  )
}

export default ShadowInputTextArea
