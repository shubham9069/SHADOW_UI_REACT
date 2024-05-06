import React, { useState } from 'react'
import { ShadowButtonSize, ShadowSelectButtonOption } from '../../models'
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton'
import './ShadowSelectButton.scss'

interface ShadowSelectButtonProps {
  value?: string | number
  multiple?: boolean
  iconsOnly?: boolean
  disabled?: boolean
  size?: ShadowButtonSize // Use appropriate type for size
  shadowSelectButtonOptions?: ShadowSelectButtonOption[]
  onClick?: (e?: any) => void
}

const ShadowSelectButton = ({
  value: propValue = '',
  multiple = false,
  iconsOnly = false,
  disabled = false,
  size = 'md',
  shadowSelectButtonOptions = [],
  onClick
}: ShadowSelectButtonProps) => {
  const [value, setValue] = useState(propValue)

  const onButtonClick = (e: SelectButtonChangeEvent) => {
    setValue(e.value)
    onClick && onClick(e)
  }

  const itemTemplate = (item: ShadowSelectButtonOption) => {
    return (
      <>
        {iconsOnly && item.icon && <i className={`iconsOnly ${item.icon}`} />}
        {!iconsOnly && item.icon && <i className={item.icon} />}
        {!iconsOnly && item.label && (
          <span className='label'>{item.label}</span>
        )}
      </>
    )
  }

  return (
    <div className='shadow-select-button-container'>
      <div className={size}>
        <SelectButton
          disabled={disabled}
          multiple={multiple}
          options={shadowSelectButtonOptions}
          optionLabel='label'
          optionValue='value'
          value={value}
          itemTemplate={itemTemplate}
          onChange={onButtonClick}
        />
      </div>
    </div>
  )
}

export default ShadowSelectButton
