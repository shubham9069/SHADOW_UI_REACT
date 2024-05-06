import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'
import { ShadowDropdownGroupOption, ShadowDropdownOption } from '../../models'
import './ShadowDropdown.scss'

interface ShadowDropdownProps {
  options: ShadowDropdownOption[] | ShadowDropdownGroupOption[]
  group?: boolean
  placeholder?: string
  selectedOption?: ShadowDropdownOption | ShadowDropdownGroupOption | null
  label?: string
  width?: string
  filter?: boolean
  showClear?: boolean
  editable?: boolean
  disabled?: boolean
  virtualScroll?: boolean
  virtualScrollItemSize?: number
  onSelectDropdown?: (option: any) => void
}

const ShadowDropdown = ({
  options = [],
  group = false,
  placeholder = 'Select an Item',
  selectedOption = null,
  label = '',
  width = '100%',
  filter = false,
  showClear = false,
  editable = false,
  disabled = false,
  virtualScroll = false,
  virtualScrollItemSize = 10,
  onSelectDropdown
}: ShadowDropdownProps) => {
  const [selectedDropdown, setSelectedDropdown] = useState<
    ShadowDropdownOption | ShadowDropdownGroupOption | null
  >(selectedOption?.value)

  const onChangeDropdownOption = (e: DropdownChangeEvent) => {
    setSelectedDropdown(e.value)
    onSelectDropdown && onSelectDropdown(e.value)
  }

  const groupedItemTemplate = (group: ShadowDropdownOption) => {
    return (
      <div className='withIcons-options'>
        <i className={group.icon}></i>
        <span>{group.label}</span>
      </div>
    )
  }

  const selectedOptionTemplate = (
    option: ShadowDropdownOption | ShadowDropdownGroupOption | null,
    props: any
  ) => {
    if (selectedOption) {
      return (
        <div className='withIcons-options' key={option?.value}>
          {option?.icon && <i className={option?.icon}></i>}
          <div className='selectedItem'>{option?.label}</div>
        </div>
      )
    }

    return <span>{props.placeholder}</span>
  }

  const optionTemplate = (
    option: ShadowDropdownOption | ShadowDropdownGroupOption | null
  ) => {
    if (option) {
      return (
        <div className='withIcons-options' key={option.value}>
          {option.icon && <i className={option.icon}></i>}
          <div>{option.label}</div>
        </div>
      )
    }
  }

  return (
    <div className='shadow-dropdown-container'>
      {label && <span className='label-text'>{label}</span>}
      <Dropdown
        className='shadow-dropdown'
        style={{ width }}
        options={options}
        showClear={showClear}
        optionLabel='label'
        {...(group && { optionGroupTemplate: groupedItemTemplate })}
        {...(group && { optionGroupLabel: 'label' })}
        {...(group && { optionGroupChildren: 'items' })}
        disabled={disabled}
        filter={filter}
        {...(virtualScroll && {
          virtualScrollOptions: { itemSize: virtualScrollItemSize }
        })}
        editable={editable}
        value={selectedDropdown}
        placeholder={placeholder}
        onChange={onChangeDropdownOption}
      ></Dropdown>
    </div>
  )
}

export default ShadowDropdown
