import { Tag } from 'primereact/tag'
import { ShadowTagItem } from '../../models'
import './ShadowTag.scss'
import React from 'react'

interface ShadowTagProps {
  tag: ShadowTagItem
  onClickTag?: (tag: any) => void
}

const ShadowTag = ({
  tag = { type: 'primary' },
  onClickTag
}: ShadowTagProps) => {
  const onClickEvent = () => {
    onClickTag && onClickTag(tag?.label || tag?.icon)
  }

  return (
    <div className='tag-conatiner'>
      <Tag
        value={tag.label ? tag.label : ''}
        rounded={tag.isPill ? true : false}
        icon={tag.icon ? tag.icon : ''}
        onClick={onClickEvent}
        className={tag.type}
      ></Tag>
    </div>
  )
}

export default ShadowTag
