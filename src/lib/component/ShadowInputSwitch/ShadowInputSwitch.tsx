import { InputSwitch } from 'primereact/inputswitch'
import './ShadowInputSwitch.scss'
import React, { useState } from 'react'

interface ShadowInputSwitchProps {
  checked?: boolean | null
  disabled?: boolean
  onClick?: (checked: boolean | null) => void
}

const ShadowInputSwitch = ({
  checked = null,
  disabled = false,
  onClick
}: ShadowInputSwitchProps) => {
  const [checkedState, setCheckedState] = useState<boolean | null>(checked)
  const onSwitchClick = () => {
    const updatedState = checkedState === null ? true : !checkedState
    setCheckedState(updatedState)
    onClick && onClick(updatedState)
  }
  return (
    <div>
      <div className='input-switch-container'>
        <InputSwitch
          checked={checkedState || false}
          disabled={disabled}
          onChange={onSwitchClick}
        />
      </div>
    </div>
  )
}

export default ShadowInputSwitch
