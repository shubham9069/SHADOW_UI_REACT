import React, { useEffect, useState } from 'react'
import { ShadowTreeNode } from '../../models'
import {
  Tree,
  TreeCheckboxSelectionKeys,
  TreeEventNodeEvent,
  TreeMultipleSelectionKeys
} from 'primereact/tree'
import './ShadowTree.scss'

interface ShadowTreeProps {
  data?: ShadowTreeNode[]
  selectionMode?: 'single' | 'multiple' | 'checkbox' | undefined
  virtualScroll?: boolean
  virtualNodeHeight?: number
  scrollHeight?: string
  filter?: boolean
  filterMode?: 'lenient' | 'strict' | undefined
  selection?:
    | string
    | TreeMultipleSelectionKeys
    | TreeCheckboxSelectionKeys
    | null
  loading?: boolean
  onChange?: (data: any) => void
  onNodeExpand?: (node: ShadowTreeNode) => void
  onNodeSelect?: (node: ShadowTreeNode) => void
  onNodeUnselect?: (node: ShadowTreeNode) => void
}

const ShadowTree = ({
  data,
  selectionMode = 'single',
  virtualScroll = false,
  virtualNodeHeight = 0,
  scrollHeight = 'flex',
  filter = false,
  filterMode = undefined,
  selection = null,
  loading = false,
  onChange,
  onNodeExpand,
  onNodeSelect,
  onNodeUnselect
}: ShadowTreeProps) => {
  const [nodes, setNodes] = useState<ShadowTreeNode[]>(data || [])
  const [selectedKey, setSelectedKey] = useState<any>(selection || null)

  useEffect(() => {
    if (data && data.length > 0) {
      setNodes(data)
    }
  }, [data])

  useEffect(() => {
    if (selection) {
      setSelectedKey(selection)
    }
  }, [selection])

  const selectionHandler = (e: any) => {
    console.log('selectedKey', selectedKey)
    onChange && onChange(selectedKey)
  }

  const onEvent = (event: TreeEventNodeEvent, mode: string) => {
    const node = event?.node
    if (node) {
      switch (mode) {
        case 'expand':
          onNodeExpand && onNodeExpand(node)
          break

        case 'select':
          onNodeSelect && onNodeSelect(node)
          break

        case 'unselect':
          onNodeUnselect && onNodeUnselect(node)
          break

        default:
          break
      }
    }
  }

  const handleScroll = () => {
    const elementRef: any = document
      .getElementById('shadowTree')
      ?.querySelector('.p-scroller')
    if (elementRef) {
      const scrollTop = elementRef.scrollTop
      if (scrollTop) {
        setTimeout(() => {
          elementRef.scrollTop = scrollTop
        }, 0)
      }
    }
  }

  const singleSelectionNodeTemplate = (node: ShadowTreeNode) => {
    return (
      <React.Fragment>
        {selectionMode === 'single' && (
          <label
            className={`single-node ${node === selectedKey ? 'active' : ''} ${
              node?.selectable === false ? 'disable-click' : ''
            }`}
          >
            <input
              type='radio'
              name='shadow-tree-radio-group'
              className={`${node?.selectable ? '' : 'radio-disabled'}`}
              defaultChecked={
                (node && node?.key) === (selectedKey && selectedKey?.key)
              }
            />
            <span>{node?.label}</span>
          </label>
        )}
      </React.Fragment>
    )
  }

  return (
    <Tree
      id='shadowTree'
      value={nodes}
      selectionMode={selectionMode}
      {...(filter && { filter })}
      filterMode={filterMode}
      {...(selectionMode === 'multiple' && { metaKeySelection: false })}
      selectionKeys={selectedKey}
      loading={loading}
      onSelectionChange={(e) => {
        setSelectedKey(e.value)
        selectionHandler(e.value)
      }}
      {...(selectionMode === 'single' && {
        nodeTemplate: singleSelectionNodeTemplate
      })}
      onExpand={(event) => {
        onEvent(event, 'expand')
        handleScroll()
      }}
      onCollapse={handleScroll}
      onUnselect={(event) => onEvent(event, 'unselect')}
      onSelect={(event) => onEvent(event, 'select')}
      // virtualScroll={virtualScroll}
      // virtualScrollItemSize={virtualNodeHeight}
      // scrollHeight={scrollHeight}
      // propagateSelectionDown={!virtualScroll}
      // propagateSelectionUp={!virtualScroll}
    />
  )
}

export default ShadowTree
