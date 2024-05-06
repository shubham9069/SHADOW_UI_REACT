import React, { useEffect, useState } from 'react'
import { ShadowInputTextSize } from '../../models'
import './ShadowInputText.scss'
import { InputText } from 'primereact/inputtext'
import {
  InputNumber,
  InputNumberValueChangeEvent
} from 'primereact/inputnumber'

interface ShadowInputTextProps {
  type?: string
  inputValue?: any
  placeholder?: any
  disabled?: boolean
  inputLabel?: string
  icon?: string | undefined
  iconPosition?: string
  size?: ShadowInputTextSize
  helpText?: string
  error?: boolean
  errorMessage?: string
  mode?: 'decimal' | 'currency' | undefined
  useGrouping?: boolean
  currency?: any
  width?: string
  minFractionDigits?: number
  maxFractionDigits?: number
  suffix?: string
  prefix?: string
  onChange?: (value: any) => void
}

const ShadowInputText = ({
  type = 'text',
  inputValue: propInputVal = '',
  placeholder = '',
  disabled = false,
  inputLabel = '',
  icon,
  iconPosition: propIconPosition = '',
  size = 'sm',
  helpText = '',
  error = false,
  errorMessage = '',
  mode = 'decimal',
  useGrouping = false,
  currency = undefined,
  width = '100%',
  minFractionDigits = 0,
  maxFractionDigits = 0,
  suffix = '',
  prefix = '',
  onChange
}: ShadowInputTextProps) => {
  const [inputValue, setInputValue] = useState<any>(propInputVal)
  const [iconPosition, setIconPosition] = useState(propIconPosition)
  const [inputStyleClass, setInputStyleClass] = useState<string>()

  useEffect(() => {
    const currInputStyleClass = error
      ? `p-inputtext-${size} error`
      : `p-inputtext-${size}`
    setInputStyleClass(currInputStyleClass)
    if (icon && !propIconPosition) {
      setIconPosition('right')
    } else {
      setIconPosition(propIconPosition)
    }
    setInputValue(propInputVal)
  }, [])

  const onChangeHandler = (val: any) => {
    setInputValue(val)
    onChange && onChange(val)
  }

  return (
    <div className='shadow-input-text' style={{ width }}>
      {inputLabel && <label className='input-label'>{inputLabel}</label>}

      {type !== 'numerals' && (
        <span
          className={
            iconPosition === 'left'
              ? 'p-input-icon-left'
              : iconPosition === 'right'
                ? 'p-input-icon-right'
                : ''
          }
        >
          {icon && <i className={icon}></i>}
          <InputText
            type={type}
            value={inputValue as string | undefined}
            disabled={disabled}
            placeholder={placeholder}
            className={inputStyleClass}
            onChange={(e) => onChangeHandler(e.target.value)}
          />
        </span>
      )}

      {type === 'numerals' && (
        <div>
          <InputNumber
            id='integerOnly'
            value={inputValue as number | undefined}
            disabled={disabled}
            placeholder={placeholder}
            mode={mode}
            currency={currency}
            useGrouping={useGrouping}
            minFractionDigits={minFractionDigits}
            maxFractionDigits={maxFractionDigits}
            onValueChange={(e) => onChangeHandler(e.value)}
            suffix={suffix}
            prefix={prefix}
          />
        </div>
      )}

      {error && errorMessage !== '' && (
        <small className='error-text'>
          <i className='pi pi-exclamation-circle'></i>
          {errorMessage}
        </small>
      )}

      {helpText && (
        <small className='helper-text'>
          Enter your username to reset your password.
        </small>
      )}
    </div>
  )
}

export default ShadowInputText
