import React, { useState } from 'react'
import './ShadowMultiSelect.scss'
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect'
import {
  ShadowMultiselectGroupOption,
  ShadowMultiselectOption
} from '../../models'

interface ShadowMultiSelectProps {
  options?: ShadowMultiselectOption[] | ShadowMultiselectGroupOption[]
  group?: boolean
  placeholder?: string
  selectedOption?: any
  label?: string
  width?: string
  editable?: boolean
  disabled?: boolean
  virtualScroll?: boolean
  virtualScrollItemSize?: number
  onSelectDropdown?: (option: any) => void
}

const ShadowMultiSelect = ({
  options = [],
  group = false,
  placeholder = 'Select an Item',
  selectedOption = '',
  label = '',
  width = '200px',
  editable = false,
  disabled = false,
  virtualScroll = false,
  virtualScrollItemSize = 10,
  onSelectDropdown
}: ShadowMultiSelectProps) => {
  const [filter, setFilter] = useState<boolean>(true)
  const [selectedValues, setSelectedValues] = useState<any | null>(
    selectedOption || null
  )

  const onChangeDropdownOption = (e?: MultiSelectChangeEvent) => {
    const newSelectedValue = e?.value
    setSelectedValues(newSelectedValue)
    onSelectDropdown && onSelectDropdown(newSelectedValue)
  }

  const groupedItemTemplate = (group: ShadowMultiselectGroupOption) => {
    return (
      <div className='withIcons-options'>
        {group.icon && <i className={group.icon}></i>}
        <span>{group.label}</span>
      </div>
    )
  }

  const selectedOptionTemplate = (option: any) => {
    if (option) {
      return (
        <div className='withIcons-options' key={option.value}>
          {option.icon && <i className={option.icon}></i>}
          <div className='selectedItem'>{option.label}</div>
        </div>
      )
    }

    return <></>
  }

  const optionTemplate = (option: any) => {
    return (
      <div className='withIcons-options'>
        {option.icon && <i className={option.icon}></i>}
        <div>{option.label}</div>
      </div>
    )
  }

  return (
    <div className='shadow-multiselect-container'>
      <span className='label-text'>{label}</span>
      <div style={{ width }}>
        <MultiSelect
          display='chip'
          options={options}
          optionLabel='label'
          disabled={disabled}
          //   selectedItemTemplate={selectedOptionTemplate}
          itemTemplate={optionTemplate}
          {...(group && { optionGroupTemplate: groupedItemTemplate })}
          {...(group && { optionGroupLabel: 'label' })}
          {...(group && { optionGroupChildren: 'items' })}
          {...(filter && { filter })}
          //   {...(editable && { editable })}
          {...(virtualScroll && {
            virtualScrollOptions: { itemSize: virtualScrollItemSize }
          })}
          placeholder={placeholder}
          value={selectedValues}
          onChange={onChangeDropdownOption}
        />
      </div>
    </div>
  )
}

export default ShadowMultiSelect
