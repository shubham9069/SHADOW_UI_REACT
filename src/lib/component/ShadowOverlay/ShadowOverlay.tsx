import React, { useRef } from 'react'
import './ShadowOverlay.scss'
import {
  ShadowButtonActionStyle,
  ShadowButtonIconPosition,
  ShadowButtonSize,
  ShadowButtonType
} from '../../models'
import { OverlayPanel } from 'primereact/overlaypanel'
import ShadowButton from '../ShadowButton/ShadowButton'
interface ShadowOverlayProps {
  loading?: boolean
  label?: string
  disabled?: boolean
  iconPosition?: ShadowButtonIconPosition
  icon?: string
  buttonType?: ShadowButtonType
  size?: ShadowButtonSize
  buttonActionStyle?: ShadowButtonActionStyle
  onButtonClick?: (event: string) => void
  children?: React.ReactNode
}

const ShadowOverlay = ({
  loading = false,
  label = '',
  disabled = false,
  iconPosition = 'left',
  icon = '',
  buttonType = 'primary',
  size = 'md',
  buttonActionStyle = 'brand',
  onButtonClick,
  children
}: ShadowOverlayProps) => {
  const opRef: any = useRef(null)

  const handleClick = (e: any) => {
    opRef.current?.toggle(e)
    onButtonClick && onButtonClick(label)
  }

  return (
    <>
      <OverlayPanel ref={opRef}>{children}</OverlayPanel>
      <ShadowButton
        icon={icon}
        label={label}
        loading={loading}
        iconPosition={iconPosition}
        size={size}
        onClick={handleClick}
        buttonType={buttonType}
      />
    </>
  )
}

export default ShadowOverlay
