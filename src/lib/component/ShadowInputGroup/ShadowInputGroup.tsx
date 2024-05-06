import React, { useEffect, useRef, useState } from 'react'

import {
  AutoComplete,
  AutoCompleteCompleteEvent
} from 'primereact/autocomplete'
import {
  ShadowChipItem,
  ShadowClickEventOutput,
  ShadowDropdownOption,
  ShadowInputGroupItem,
  ShadowInputGroupSuggestion
} from '../../models'
import { InputText } from 'primereact/inputtext'
import ShadowDropdown from '../ShadowDropdown/ShadowDropdown'
import ShadowButtonGroup from '../ShadowButtonGroup/ShadowButtonGroup'
import ShadowChip from '../ShadowChip/ShadowChip'
import ShadowAvatar from '../ShadowAvatar/ShadowAvatar'
import './ShadowInputGroup.scss'

interface ShadowInputGroupProps {
  placeholder?: string
  shadowInputGroup?: ShadowInputGroupItem
  size?: 'small' | 'medium' | 'large'
  state?: 'error' | 'default'
  showChip?: boolean
  suggestions?: ShadowInputGroupSuggestion[]
  autoComplete?: boolean
  chipLabelKey?: string
  hideChipOverflow?: boolean
  chipList?: ShadowChipItem[]
  defaultInputOption?: ShadowDropdownOption
  inputGroupOption?: any
  showInputGroupOption?: any
  enableOnEnter?: boolean
  onDefaultInputSelect?: (option: ShadowDropdownOption) => void
  onButtonClick?: (value: any) => void
  onRemoveChip?: (chip: ShadowChipItem) => void
  autoCompleteChange?: (value: string) => void
  autoCompleteSelect?: (event: ShadowClickEventOutput) => void
}

const ShadowInputGroup = ({
  placeholder = '',
  shadowInputGroup = {},
  size = 'small',
  state = 'default',
  showChip = false,
  suggestions: propSuggestions = [],
  autoComplete = true,
  chipLabelKey = 'title',
  hideChipOverflow = true,
  chipList: propChipList = [],
  defaultInputOption = {},
  inputGroupOption = [],
  showInputGroupOption = false,
  enableOnEnter = false,
  onDefaultInputSelect,
  onButtonClick,
  onRemoveChip,
  autoCompleteChange,
  autoCompleteSelect
}: ShadowInputGroupProps) => {
  const [inputValue, setInputValue] = useState('')
  const [chipList, setChipList] = useState<ShadowChipItem[]>(propChipList)
  const [autoCompleteInput, setAutoCompleteInput] = useState('')

  const [suggestions, setSuggestions] =
    useState<ShadowInputGroupSuggestion[]>(propSuggestions)
  const autoCompleteBox = useRef<any>(null)

  useEffect(() => {
    setInputValue('')
    setAutoCompleteInput('')
    setChipList([])
  }, [autoComplete])

  useEffect(() => {
    setSuggestions(propSuggestions)
  }, [propSuggestions])

  const onClick = () => {
    let value = autoComplete ? autoCompleteInput : inputValue

    if (showChip && value.trim() !== '') {
      if (showInputGroupOption) {
        selectData({
          title: value,
          data: {}
        })
      } else {
        const chip = {
          key: generateUniqueKey(),
          label: value,
          removable: true
        }
        setChipList([chip, ...chipList])
      }
    }

    value = ''
    if (autoComplete) {
      setAutoCompleteInput('')
    } else {
      setInputValue('')
    }
  }

  const buttonClickHandler = (value: any) => {
    setChipList([])
    onButtonClick && onButtonClick(value)
  }

  const onChipRemove = (shadowChip: ShadowChipItem) => {
    const filteredChips = chipList.filter(
      (chip: ShadowChipItem) => chip.key !== shadowChip.key
    )
    setChipList(filteredChips)
    onRemoveChip && onRemoveChip(shadowChip)
  }

  const generateUniqueKey = () => {
    return Math.random().toString(36).substring(2)
  }

  const autoCompleteChangeHandler = (event: any) => {
    autoCompleteChange && autoCompleteChange(event.query)
  }

  const selectData = (event: any) => {
    let label = getLabelFromNestedObject(event, chipLabelKey)
    const chip = {
      key: generateUniqueKey(),
      label: label,
      removable: true
    }
    setChipList([chip, ...chipList])
    autoCompleteSelect &&
      autoCompleteSelect({
        data: label,
        context: event
      })
  }

  const getLabelFromNestedObject = (obj: any, key: string): string => {
    const keys = key.split('.')
    let label = obj
    for (const k of keys) {
      label = label[k]
    }
    return label
  }

  const getUserInitial = (user: any) => {
    if (user.icon || user.url) {
      return undefined
    } else if (user.title) {
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')
      let matchLabel = [...user.title.matchAll(rgx)] || []
      let initials = (
        (matchLabel.shift()?.[1] || '') + (matchLabel.pop()?.[1] || '')
      ).toUpperCase()
      return initials
    }
    return undefined
  }

  const onPressEnter = () => {
    if (enableOnEnter) {
      onClick()
    }
  }

  // const search = (event: AutoCompleteCompleteEvent) => {
  //   let _filteredSuggestiojns;

  //   if (!event.query.trim().length) {
  //     _filteredSuggestiojns = [...suggestions];
  //   } else {
  //     _filteredSuggestiojns = suggestions.filter((suggestion) => {
  //       if (suggestion?.title) return suggestion?.title.toLowerCase().startsWith(event.query.toLowerCase());
  //     });
  //   }

  //   setSuggestions([...suggestions]);
  // };

  const itemTemplate = (item: any) => {
    return (
      <div className='suggestion-item'>
        <div className='suggestion-icon'>
          <ShadowAvatar
            imageUrl={item.url}
            icon={item.icon}
            shape={'circle'}
            themeStyle={'primary'}
            initials={getUserInitial(item)}
            type={item.url ? 'image' : item.icon ? 'icon' : 'initials'}
          />
        </div>
        <div className='suggestion-info'>
          <div className='title'>{item.title}</div>
          <div className='sub-title'>{item.subTitle}</div>
        </div>
      </div>
    )
  }

  return (
    <div className='shadow-input-group-container'>
      <div className={`p-inputgroup ${shadowInputGroup.buttonSize}`}>
        {!autoComplete && (
          <InputText
            className={state}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
          />
        )}
        {autoComplete && (
          <AutoComplete
            className={state}
            placeholder={placeholder}
            ref={autoCompleteBox}
            value={autoCompleteInput}
            onChange={(e) => {
              setAutoCompleteInput(e.value)
            }}
            onSelect={(e) => {
              autoComplete ? setAutoCompleteInput('') : setInputValue('')
              selectData(e.value)
            }}
            onKeyPress={(e) =>
              e.key === 'Enter' &&
              (onPressEnter(), autoCompleteBox.current.hide())
            }
            suggestions={suggestions}
            completeMethod={autoCompleteChangeHandler}
            field='name'
            delay={300}
            itemTemplate={itemTemplate}
          />
        )}

        {showInputGroupOption && (
          <ShadowDropdown
            showClear={false}
            group={false}
            options={inputGroupOption}
            selectedOption={defaultInputOption}
            onSelectDropdown={(option) => {
              onDefaultInputSelect && onDefaultInputSelect(option)
            }}
          />
        )}

        <ShadowButtonGroup
          direction={shadowInputGroup.buttonGroupDirection || 'horizontal'}
          buttonsSize={shadowInputGroup.buttonSize || 'md'}
          buttonGroupData={shadowInputGroup.buttonGroup || []}
          onButtonClick={buttonClickHandler}
          styleClass='shadow-button-group'
        />
      </div>
      <div style={{ width: '100%' }}>
        {showChip && (
          <ShadowChip
            hideOverflow={hideChipOverflow}
            chipList={chipList}
            onRemove={onChipRemove}
          />
        )}
      </div>
    </div>
  )
}

export default ShadowInputGroup
