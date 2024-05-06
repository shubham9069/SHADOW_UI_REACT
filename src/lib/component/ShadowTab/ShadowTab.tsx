import React, { useState, useRef, useEffect } from 'react'
import { ShadowTabItem } from '../../models'
import './ShadowTab.scss'
import ShadowDialog from '../ShadowDialog/ShadowDialog'
import {
  TabView,
  TabPanel,
  TabPanelHeaderTemplateOptions
} from 'primereact/tabview'

interface ShadowTabProps {
  tabs: ShadowTabItem[]
  activeTab?: ShadowTabItem
  iconSize?: string
  editType?: 'inline' | 'popup'
  dialogTitle?: string
  onSelectTab?: (tab: ShadowTabItem) => void
  onEdit?: (tab: ShadowTabItem) => void
  onClose?: (tab: ShadowTabItem) => void
}

const ShadowTab = ({
  tabs: propTabs = [],
  activeTab = { label: '', id: '' },
  iconSize = '14px',
  editType = 'inline',
  dialogTitle = 'Update tab title',
  onSelectTab,
  onEdit,
  onClose
}: ShadowTabProps) => {
  const [tabs, setTabs] = useState<ShadowTabItem[]>()
  const [editableTabId, setEditableTabId] = useState<string>('')
  const [originalLabel, setOriginalLabel] = useState<string>('')
  const [currTab, setCurrTab] = useState<ShadowTabItem>()
  const [editMode, setEditMode] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const onTabClick = (tab: any) => {
    onSelectTab && onSelectTab(tab)
  }

  const onClickEdit = (tab: any) => {
    setEditableTabId(tab.id)
    setOriginalLabel(tab.label)
    setCurrTab(tab)
    setEditMode(true)

    if (editType === 'inline') {
      setTimeout(() => {
        const inputElement = inputRef.current?.querySelector('.tab-input')
        if (inputElement) {
          ;(inputElement as HTMLInputElement).focus()
        }
      })
    }
  }

  const changeTabValue = (e: any, tab: ShadowTabItem) => {
    const updatedTab = { ...tab, label: e.target.value }
    setCurrTab(updatedTab)
    onEdit && onEdit(updatedTab)
  }

  const onTabEditFinish = (tab: ShadowTabItem, idx: number) => {
    if (currTab !== undefined && tabs) {
      // replacing the label of tabs[idx] with value of currTab
      const updatedTabs: ShadowTabItem[] = [...tabs]
      updatedTabs[idx] = currTab
      setEditMode(false)
      setTabs(updatedTabs)
      onEdit && onEdit(currTab)
      setCurrTab(undefined)
      setEditableTabId('')
    }
  }

  const onClickClose = (tab: ShadowTabItem) => {
    const tabarray = tabs?.filter((data) => tab?.id != data?.id)
    setTabs(tabarray)
    onClose && onClose(tab)
  }

  const onDialogCancel = (tab: any) => {
    setEditableTabId('')
    tab.label = originalLabel
    onEdit && onEdit(tab)
  }

  const onDialogOk = (tab: any, idx: number) => {
    if (currTab !== undefined && tabs) {
      // replacing the label of tabs[idx] with value of currTab
      const updatedTabs: ShadowTabItem[] = [...tabs]
      updatedTabs[idx] = currTab
      setEditMode(false)
      setTabs(updatedTabs)
      onEdit && onEdit(currTab)
      setCurrTab(undefined)
      setEditableTabId('')
    }
  }

  useEffect(() => {
    setTabs(propTabs)
  }, [propTabs])

  const tabHeaderTemplate = (
    options: TabPanelHeaderTemplateOptions,
    tab: ShadowTabItem,
    idx: number
  ) => {
    return (
      <button
        type='button'
        onClick={(event) => {
          options.onClick(event)
          onTabClick(tab)
        }}
        className={`${options.className} tab-view-item`}
      >
        {tab.icon && <i className={`${tab.icon} tab-icon`} />}
        {(tab.id !== editableTabId || editType === 'popup') && (
          <span className='tab-label'>{tab.label}</span>
        )}
        {tab.id === editableTabId && editType === 'inline' && (
          <input
            placeholder={tab.label}
            onChange={(e) => {
              changeTabValue(e, tab)
            }}
            defaultValue={tab.label}
            className='tab-input'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onTabEditFinish(tab, idx)
              }
            }}
            onBlur={() => onTabEditFinish(tab, idx)}
            autoFocus
          />
        )}
        {tab.id === editableTabId && editType === 'popup' && (
          <ShadowDialog
            display={true}
            modal
            closable
            closeOnBlur={false}
            footer={{ type: 'confirm' }}
            position='center'
            handleCancel={() => onDialogCancel(tab)}
            handleOk={() => onDialogOk(tab, idx)}
            displayChange={() => onDialogCancel(tab)}
            title={dialogTitle}
          >
            <input
              defaultValue={tab.label}
              placeholder={tab.label}
              className='tab-input'
              onChange={(e) => {
                changeTabValue(e, tab)
              }}
            />
          </ShadowDialog>
        )}
        <span className='icon-container'>
          {tab.editable &&
            (editMode && currTab?.id === tab?.id ? (
              <i
                className='pi pi-check'
                style={{ fontSize: iconSize }}
                onClick={() => onClickEdit(tab)}
              ></i>
            ) : (
              <i
                className='pi pi-pencil'
                style={{ fontSize: iconSize }}
                onClick={() => onClickEdit(tab)}
              ></i>
            ))}
          {tab.closable && (
            <i
              className='pi pi-times'
              style={{ fontSize: iconSize }}
              onClick={() => onClickClose(tab)}
            ></i>
          )}{' '}
        </span>
      </button>
    )
  }

  return (
    <div>
      {tabs && (
        <TabView
          activeIndex={tabs.findIndex((tab) => tab.id === activeTab.id)}
          className='shadow-tab-menu-container'
        >
          {tabs.map((tab, idx) => {
            return (
              <TabPanel
                key={`tab-${idx}`}
                headerTemplate={(options: TabPanelHeaderTemplateOptions) =>
                  tabHeaderTemplate(options, tab, idx)
                }
                closable={tab.closable}
              ></TabPanel>
            )
          })}
        </TabView>
      )}
    </div>
  )
}

export default ShadowTab
