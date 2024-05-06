import { Checkbox } from 'primereact/checkbox'
import { TriStateCheckbox } from 'primereact/tristatecheckbox'
import { ShadowCheckboxStyleType, ShadowCheckboxType } from '../../models'
import './ShadowCheckbox.scss'
import React, { useEffect, useState } from 'react'

interface ShadowCheckboxProps {
  checked?: boolean | null
  label?: string
  disabled?: boolean
  styleType?: ShadowCheckboxStyleType
  type?: ShadowCheckboxType
  onClick?: (checked: boolean | null) => void
}

const ShadowCheckbox = ({
  checked = null,
  label = '',
  disabled = false,
  styleType = 'default',
  type = 'default',
  onClick
}: ShadowCheckboxProps) => {
  const [value, setValue] = useState<any>(null)

  const onCheckboxClick = (e?: boolean | null) => {
    if (typeof e === 'boolean') onClick && onClick(e)
    setValue(e)
  }

  useEffect(() => {
    if (checked === null) return
    setValue(checked)
  }, [checked])

  return (
    <div className='shadow-checkbox-container'>
      {type === 'triState' && (
        <TriStateCheckbox
          className={styleType}
          disabled={disabled}
          value={value}
          onChange={(e) => onCheckboxClick(e.value)}
        />
      )}
      {type === 'default' && (
        <Checkbox
          className={styleType}
          disabled={disabled}
          checked={value}
          onChange={(e) => onCheckboxClick(e.checked)}
        ></Checkbox>
      )}
      <label className='text'>{label}</label>
    </div>
  )
}

export default ShadowCheckbox
