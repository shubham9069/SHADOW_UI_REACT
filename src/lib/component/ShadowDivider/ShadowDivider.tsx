import './ShadowDivider.scss'
import {
  ShadowDividerAlign,
  ShadowDividerLayout,
  ShadowDividerLineStyle,
  ShadowDividerType
} from '../../models'
import { Divider } from 'primereact/divider'
import React from 'react'

interface ShadowDividerProps {
  type?: ShadowDividerType
  lineStyle?: ShadowDividerLineStyle
  layout?: ShadowDividerLayout
  align?: ShadowDividerAlign
}

const ShadowDivider = ({
  type = 'basic',
  lineStyle = 'solid',
  layout = 'horizontal',
  align = 'center'
}: ShadowDividerProps) => {
  return (
    <div className='shadow-divider-container'>
      <Divider align={align} type={lineStyle} layout={layout}>
        {type === 'or' && <p className='text'>OR</p>}
      </Divider>
    </div>
  )
}

export default ShadowDivider
