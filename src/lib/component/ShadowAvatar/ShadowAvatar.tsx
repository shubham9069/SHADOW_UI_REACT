import React, { useState, useEffect, useRef } from 'react'
import {
  ShadowAvatarGroup,
  ShadowAvatarShape,
  ShadowAvatarSize,
  ShadowAvatarThemeStyle,
  ShadowAvatarType
} from '../../models'
import { Avatar } from 'primereact/avatar'
import { AvatarGroup } from 'primereact/avatargroup'
import './ShadowAvatar.scss'

interface ShadowAvatarProps {
  size?: any
  type?: ShadowAvatarType
  grouping?: boolean
  themeStyle?: ShadowAvatarThemeStyle
  actionStyle?: string
  initials?: string
  shape?: ShadowAvatarShape
  icon?: string
  imageUrl?: string
  avatarGroupData?: ShadowAvatarGroup[]
  hideOverflow?: boolean
}

const ShadowAvatar = ({
  size = 'normal',
  type = 'icon',
  grouping = false,
  themeStyle = 'neutral',
  actionStyle = 'subdued',
  initials = '',
  shape = 'circle',
  icon = '',
  imageUrl = '',
  avatarGroupData = [],
  hideOverflow = true
}: ShadowAvatarProps) => {
  const [overflowAvatars, setOverflowAvatars] = useState<ShadowAvatarGroup[]>(
    []
  )
  const [overflowAvatarLabel, setOverflowAvatarLabel] = useState<string>('')
  const [visibleAvatars, setVisibleAvatars] = useState<ShadowAvatarGroup[]>([])
  const [overflowEnabled, setOverflowEnabled] = useState<boolean>(false)
  const el = useRef<HTMLDivElement | null>(null)

  const getFinalGroupArray = () => {
    if (overflowAvatars?.length) {
      return visibleAvatars
    }
    return avatarGroupData
  }

  useEffect(() => {
    if (grouping && hideOverflow) {
      checkOverflow()
    }
  }, [grouping, hideOverflow, avatarGroupData])

  const getAvatarObj = (
    type: ShadowAvatarType,
    avatar: any
  ): ShadowAvatarGroup | undefined => {
    let item: ShadowAvatarGroup | undefined
    if (type === 'image' && avatar) {
      const avatarUrl = avatar.querySelector('img')?.src
      item = (avatarGroupData || []).find((itm) => itm.imageUrl === avatarUrl)
    } else if (type === 'initials' && avatar) {
      const avatarText = avatar.querySelector('.p-avatar-text')?.textContent
      item = (avatarGroupData || []).find((itm) => itm.label === avatarText)
    } else if (type === 'icon' && avatar) {
      const avatarClass =
        avatar.querySelector('.p-avatar-icon')?.className || ''
      item = (avatarGroupData || []).find(
        (itm) => itm.icon && avatarClass.includes(itm.icon)
      )
    }
    return item
  }

  const checkOverflow = () => {
    setTimeout(() => {
      const containerWidth =
        (el.current?.getBoundingClientRect().width || 0) - 35

      const avatars: any = el.current?.querySelectorAll('.p-avatar') || []
      let count = 0

      if (avatars.length > 0) {
        let totalWidth = 0
        const newOverflowAvatars: ShadowAvatarGroup[] = []
        const newVisibleAvatars: ShadowAvatarGroup[] = []

        for (const avatar of avatars) {
          totalWidth +=
            (avatar.getBoundingClientRect().width || 0) - (count > 0 ? 16 : 0)

          const item = getAvatarObj(type || 'icon', avatar)
          if (item) {
            if (totalWidth >= containerWidth) {
              newOverflowAvatars.push(item)
            } else {
              newVisibleAvatars.push(item)
              count++
            }
          }
        }

        setOverflowAvatars([...newOverflowAvatars])
        setVisibleAvatars([...newVisibleAvatars])
        setOverflowAvatarLabel(
          newOverflowAvatars.length > 0 ? `+${newOverflowAvatars.length}` : ''
        )
        setOverflowEnabled(newOverflowAvatars.length > 0)
      }
    }, 10)
  }

  return (
    <div className='shadow-avatar-container' ref={el}>
      {grouping && (
        <AvatarGroup>
          {getFinalGroupArray().map((avatar: any, index: any) => {
            return type == 'initials' ? (
              <Avatar
                key={`avatar-${index}`}
                className={`${type} ${actionStyle} ${themeStyle} ${size}`}
                label={avatar.label || ''}
                size={size}
                shape={shape}
              ></Avatar>
            ) : type == 'icon' ? (
              <Avatar
                key={`avatar-${index}`}
                className={`${type} ${actionStyle} ${themeStyle} ${size}`}
                icon={avatar.icon}
                size={size}
                shape={shape}
              ></Avatar>
            ) : type == 'image' ? (
              <Avatar
                key={`avatar-${index}`}
                image={avatar.imageUrl}
                size={size}
                shape={shape}
              ></Avatar>
            ) : (
              <></>
            )
          })}
          {overflowAvatars.length && (
            <span className={`overflow-avatars-container inline-block`}>
              <span className='avatar-overlay-box'>
                <Avatar
                  className={`initials ${actionStyle} ${themeStyle} ${size}`}
                  label={`+${overflowAvatars.length}`}
                  size={size}
                  shape={shape}
                ></Avatar>
                <div className='avatar-overlay'>
                  <div className='avatar-panel-content'>
                    {overflowAvatars.map((avatar: any, index: any) => {
                      return type == 'initials' ? (
                        <Avatar
                          key={`avatar-${index}`}
                          className={`${type} ${actionStyle} ${themeStyle} ${size}`}
                          label={avatar.label || ''}
                          size={size}
                          shape={shape}
                        ></Avatar>
                      ) : type == 'icon' ? (
                        <Avatar
                          key={`avatar-${index}`}
                          className={`${type} ${actionStyle} ${themeStyle} ${size}`}
                          icon={avatar.icon}
                          size={size}
                          shape={shape}
                        ></Avatar>
                      ) : type == 'image' ? (
                        <Avatar
                          key={`avatar-${index}`}
                          image={avatar.imageUrl}
                          size={size}
                          shape={shape}
                        ></Avatar>
                      ) : (
                        <></>
                      )
                    })}
                  </div>
                </div>
              </span>
            </span>
          )}
        </AvatarGroup>
      )}

      {type == 'initials' && grouping == false && (
        <Avatar
          className={`${type} ${actionStyle} ${themeStyle} ${size}`}
          label={initials || ''}
          size={size}
          shape={shape}
        ></Avatar>
      )}

      {type == 'icon' && grouping == false && (
        <Avatar
          className={`${type} ${actionStyle} ${themeStyle} ${size}`}
          icon={icon}
          size={size}
          shape={shape}
        ></Avatar>
      )}

      {type == 'image' && grouping == false && (
        <Avatar image={imageUrl} size={size} shape={shape}></Avatar>
      )}
    </div>
  )
}

export default ShadowAvatar
