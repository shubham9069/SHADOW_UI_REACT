import React, { useEffect, useState } from 'react'
import { ShadowInputMaskItem } from '../../models'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'
import './ShadowInputMask.scss'

interface ShadowInputMaskProps {
  inputValue?: string
  width?: string
  template?: boolean
  format?: string
  placeholder?: string
  align?: string
  options?: ShadowInputMaskItem[]
  selected?: any
  disabled?: boolean
  inputLabel?: string
  mask?: string
  onChangeHandler?: (value: any) => void
}

const ShadowInputMask = ({
  inputValue,
  width = '100%',
  template = false,
  format = 'card',
  placeholder: propPlaceholder = '',
  align = 'left',
  options,
  selected,
  disabled = false,
  inputLabel = '',
  mask: propMask = '',
  onChangeHandler
}: ShadowInputMaskProps) => {
  const [inputVal, setInputVal] = useState(inputValue)
  const [selectedVal, setSelectedVal] = useState(selected)
  const [placeholder, setPlaceholder] = useState(propPlaceholder)
  const [mask, setMask] = useState(propMask)
  const [isTemplateAvl, setIsTemplateAvl] = useState(false)

  useEffect(() => {
    setMask(propMask)
  }, [propMask])

  useEffect(() => {
    setPlaceholder(propPlaceholder)
  }, [propPlaceholder])

  useEffect(() => {
    setInputVal(inputValue)
  }, [inputValue])

  useEffect(() => {
    setSelectedVal(selected)
  }, [selected])

  useEffect(() => {
    setIsTemplateAvl(template && (format === 'card' || format === 'phone'))
    let newMask = propMask
    let newPlaceholder = propPlaceholder
    let newSelected = selected
    switch (format) {
      case 'card':
        align = align || 'left'
        if (!mask) {
          newMask = '9999 9999 9999 9999'
        }
        newPlaceholder =
          !inputValue && placeholder ? placeholder : 'XXXX XXXX XXXX XXXX'
        newSelected =
          options && options.length > 0
            ? options[0]
            : { name: '', code: '', image: '' }
        break

      case 'phone':
        align = align || 'left'
        if (!newMask) {
          newMask = '(999) 999-9999'
        }
        newPlaceholder =
          !inputValue && placeholder ? placeholder : '(XXX) XXX-XXXX'
        newSelected =
          options && options.length > 0
            ? options[0]
            : { name: '', code: '', image: '' }
        break

      case 'date':
        if (!newMask) {
          newMask = '99/99/9999'
        }
        newPlaceholder = !inputValue && placeholder ? placeholder : 'MM/DD/YYYY'
        break

      default:
        break
    }
    setMask(newMask)
    setPlaceholder(newPlaceholder)
    setSelectedVal(newSelected)
  }, [])

  const onChangeSelect = (option: any) => {
    setSelectedVal(option)
    onChangeHandler && onChangeHandler(option)
  }
  const BorderRadiusCal = (value: String) => {
    return isTemplateAvl
      ? align == value
        ? {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }
        : {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }
      : {}
  }

  const onChangeInput = (event: any) => {
    if (event?.target?.value) {
      setInputVal(event.target.value)
      onChangeHandler && onChangeHandler(event.target.value)
    }
  }

  const selectedOptionTemplate = (selectedOption: any, props: any) => {
    if (selectedOption) {
      return (
        <div className='dropdown-item'>
          <img src={selectedOption.image} className='dropdown-image' />
        </div>
      )
    }
  }

  const optionTemplate = (option: any) => {
    if (option) {
      return (
        <div className='dropdown-item'>
          <img src={option.image} className='dropdown-image' />
        </div>
      )
    }
  }

  return (
    <div className='shadow-input-mask' style={{ width }}>
      {inputLabel && (
        <label htmlFor='inputMask' className='input-label'>
          <span>{inputLabel}</span>
        </label>
      )}
      <div className={`input-mask-container ${isTemplateAvl ? align : ''}`}>
        {isTemplateAvl && (
          <Dropdown
            options={options}
            className='p-dropdown'
            style={BorderRadiusCal('right')}
            optionLabel='name'
            value={selectedVal}
            valueTemplate={selectedOptionTemplate}
            itemTemplate={optionTemplate}
            onChange={(event) => onChangeSelect(event.value)}
          ></Dropdown>
        )}
        <InputMask
          id='inputMask'
          className={`p-inputMask ${isTemplateAvl ? 'input-mask' : ''}`}
          style={BorderRadiusCal('left')}
          mask={mask}
          value={inputVal}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(event) => onChangeInput(event.target.value)}
        />
      </div>
    </div>
  )
}

export default ShadowInputMask
