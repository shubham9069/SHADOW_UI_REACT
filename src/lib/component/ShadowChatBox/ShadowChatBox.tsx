import React, { useRef, useState, useEffect } from 'react'
import {
  ShadowChatAction,
  ShadowChatMessage,
  ShadowChatBoxStyle,
  ShadowEmptyChat,
  ShadowSavedTemplate,
  ShadowChatBoxHead,
  ShadowPromptTemplate,
  ShadowPopularData,
  ShadowRecomendedPrompts,
  ShadowClickEventOutput
} from '../../models'
import './ShadowChatBox.scss' // Import your styles
import ShadowInputTextAreaComponent from '../ShadowInputTextArea/ShadowInputTextArea'
import { MenuItem } from 'primereact/menuitem'
import ShadowAvatar from '../ShadowAvatar/ShadowAvatar'

interface ShadowChatBoxProps {
  userIcon?: string
  userName?: string
  aiMessageIcon?: string
  submitButtonIcon?: string
  chatMessages?: ShadowChatMessage[]
  query?: string
  showActionBtn?: boolean
  processingMessage?: string
  completionMessage?: string
  showActionDropdown?: boolean
  actionOptions?: ShadowChatAction[]
  chatInputPlaceholder?: string
  emptyChatTemplate?: boolean
  promptList?: ShadowPromptTemplate[]
  chatAiName?: string
  chatBoxHeader?: ShadowChatBoxHead
  chatBoxStyle?: ShadowChatBoxStyle
  emptyChatContent?: ShadowEmptyChat
  popularDataSkill?: ShadowPopularData
  savedTemplates?: ShadowSavedTemplate
  showChat?: boolean
  aiLoading?: boolean
  isInputDisabled?: boolean
  toggleChatUI?: (showChat: boolean) => void
  onSubmit?: (query: string) => void
  recomendedPromptHandler?: (event: ShadowRecomendedPrompts) => void
  closeSideBar?: () => void
  toggleChat?: (query: string) => void
  areaActionHandler?: (event: any) => void
  popularDataClickHandler?: (event: ShadowPopularData) => void
  handleChatInputChange?: (event: string) => void
  onActionSelectHandler?: (event: ShadowClickEventOutput) => void
  onStopGenerateHandler?: (flag: boolean) => void
}

const ShadowChatBox = ({
  userIcon = '',
  userName = '',
  aiMessageIcon = '',
  submitButtonIcon = '',
  chatMessages,
  query = '',
  showActionBtn = false,
  processingMessage = 'Wing is Thinking....',
  completionMessage = 'Assistant Says',
  showActionDropdown = false,
  actionOptions,
  chatInputPlaceholder = 'Ask Cinde... eg: Generate Executive Summary',
  emptyChatTemplate = false,
  promptList,
  chatAiName = '',
  chatBoxHeader,
  chatBoxStyle = {
    width: '342px',
    chatBoxHeight: '100vh',
    logo: '',
    icon: '',
    inputBoxPlaceholder: 'Ask your data question'
  },
  emptyChatContent,
  popularDataSkill,
  savedTemplates,
  showChat = false,
  aiLoading = false,
  isInputDisabled = false,
  toggleChatUI,
  onSubmit,
  recomendedPromptHandler,
  closeSideBar,
  toggleChat,
  areaActionHandler,
  popularDataClickHandler,
  handleChatInputChange,
  onActionSelectHandler,
  onStopGenerateHandler
}: ShadowChatBoxProps) => {
  const scrollMe = useRef<HTMLDivElement>(null)
  const [selectedActionIndex, setSelectedActionIndex] = useState<number | null>(
    null
  )
  const [defaultHeight, setDefaultHeight] = useState<string>('100vh')
  const [chatBoxHeightWrapper, setChatBoxHeightWrapper] =
    useState<string>('100vh')
  const [chatBoxInnerHeight, setChatBoxInnerHeight] = useState<string>('100vh')
  const [previousChatLength, setPreviousChatLength] = useState<number>(0)
  const [showStopGenerating, setShowStopGenerating] = useState<boolean>(true)

  // useEffect(() => {
  //     if (chatMessages && chatMessages.length) {
  //         setPreviousChatLength(chatMessages.length);
  //     }
  // }, [chatMessages]);

  useEffect(() => {
    if (
      chatMessages &&
      chatMessages?.length &&
      previousChatLength !== chatMessages.length
    ) {
      setPreviousChatLength(chatMessages.length)
      setTimeout(scrollToBottom, 0)
    }
  }, [chatMessages])

  const scrollToBottom = (): void => {
    if (scrollMe.current) {
      scrollMe.current.scrollTop = scrollMe.current.scrollHeight + 200
    }
  }

  useEffect(() => {
    let heightWrapper: any = chatBoxStyle?.chatBoxHeight
      ? chatBoxHeader?.showChatBoxHeader
        ? `calc(${chatBoxStyle.chatBoxHeight} - 64px)`
        : chatBoxStyle?.chatBoxHeight
      : chatBoxHeader?.showChatBoxHeader
        ? `calc(${chatBoxHeightWrapper} - 64px)`
        : chatBoxHeightWrapper

    let innerHeight: any = chatBoxStyle?.chatBoxHeight
      ? chatBoxHeader?.showChatBoxHeader
        ? `calc(${chatBoxStyle.chatBoxHeight} - 128px)`
        : `calc(${chatBoxStyle.chatBoxHeight} - 64px)`
      : chatBoxHeader?.showChatBoxHeader
        ? `calc(${chatBoxInnerHeight} - 128px)`
        : `calc(${chatBoxInnerHeight} - 64px)`

    setChatBoxHeightWrapper(heightWrapper)
    setChatBoxInnerHeight(innerHeight)
  }, [chatBoxStyle])

  const toggleActionBtn = (index: number): void => {
    setSelectedActionIndex(selectedActionIndex === index ? null : index)
  }

  const handleSubmit = (_e: string): void => {
    if (onSubmit) {
      onSubmit(query)
    }
  }

  const handleInputChange = (event: string) => {
    const newQuery = event
    if (handleChatInputChange) {
      handleChatInputChange(newQuery)
    }
  }

  const getUserInitial = (user: any): string | undefined => {
    if (!user) {
      return undefined
    } else if (user) {
      const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')
      const matchLabel = [...user.matchAll(rgx)] || []
      const initials = (
        (matchLabel.shift()?.[1] || '') + (matchLabel.pop()?.[1] || '')
      ).toUpperCase()
      return initials
    }
    return undefined
  }

  const onStopGenerating = (): void => {
    setShowStopGenerating(false)
    if (onStopGenerateHandler) {
      onStopGenerateHandler(true)
    }
  }

  const handleChat = () => {
    if (toggleChat) {
      toggleChat(query)
    }
    query = ''
  }

  const handleRecomended = (event: any) => {
    if (recomendedPromptHandler) {
      recomendedPromptHandler(event)
    }
  }

  const handleTemplateChat = (type: any) => {
    if (toggleChat) {
      toggleChat(type)
    }
  }

  const areaActionClickHandler = (event: any) => {
    if (areaActionHandler) {
      areaActionHandler(event)
    }
  }

  const handleDataSkillClick = (event: any) => {
    if (popularDataClickHandler) {
      popularDataClickHandler(event)
    }
  }

  const onActionSelect = (event: MenuItem, message: ShadowChatMessage) => {
    if (onActionSelectHandler) {
      onActionSelectHandler({ data: event, context: message })
    }
  }

  return (
    <div className='shadow-chat-box' style={{ width: chatBoxStyle.width }}>
      {/* Chat box header */}
      {chatBoxHeader?.showChatBoxHeader && (
        <div className='chat-box-header'>
          <i
            className={
              chatBoxHeader.closeIcon ? chatBoxHeader.closeIcon : 'pi pi-times'
            }
            onClick={closeSideBar}
          ></i>
          {chatBoxHeader?.title && <span>{chatBoxHeader.title}</span>}
        </div>
      )}

      {/* Empty chat */}
      {!showChat && (
        <div
          className={`empty-chat ${
            !popularDataSkill?.showPopularDataSkill
              ? 'empty-chat-no-template'
              : ''
          }`}
          style={{ height: chatBoxInnerHeight }}
        >
          {/* Empty chat header */}
          {emptyChatContent?.showEmptyChatHeader && (
            <div className='empty-chat-header'>
              <div className='empty-chat-logo'>
                {emptyChatContent.icon && (
                  <img src={emptyChatContent.icon} alt='' />
                )}
              </div>
              {emptyChatContent?.title && <span>{emptyChatContent.title}</span>}
            </div>
          )}

          {/* Empty chat input */}
          <div className='empty-chat-input'>
            {/* Replace with appropriate component */}
            <ShadowInputTextAreaComponent
              disabled={isInputDisabled}
              onChange={handleInputChange}
              onPressEnter={handleChat}
              value={query}
              rows={1}
              size='medium'
              placeholder={emptyChatContent?.inputPlaceholder || ''}
              autoResize={true}
            />
            <div className='search-icon'>
              <i className='pi pi-search'></i>
            </div>
          </div>

          {/* Data skills */}
          {popularDataSkill?.showPopularDataSkill && (
            <div className='data-skills'>
              <div className='data-skill-head'>
                {popularDataSkill.icon && (
                  <img src={popularDataSkill.icon} alt='' />
                )}
                <span>{popularDataSkill.title}</span>
              </div>

              <div className='data-skill-list'>
                {popularDataSkill?.dataSkills?.map((skill: any, index: any) => (
                  <div
                    key={`data-skill-${index}`}
                    className='skill-card'
                    onClick={() => handleDataSkillClick(skill)}
                  >
                    <div
                      className='skill-icon'
                      style={{ backgroundColor: skill.iconBackgroundColor }}
                    >
                      {skill.icon && <img src={skill.icon} alt='' />}
                    </div>
                    <div className='skill-info'>
                      <span>{skill.title}</span>
                      <div className='route-icon'>
                        {popularDataSkill.arrowIcon && (
                          <img src={popularDataSkill.arrowIcon} alt='' />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved templates */}
          {savedTemplates?.showSavedTemplate && (
            <div className='saved-template'>
              <div className='saved-template-head'>
                {savedTemplates.icon && (
                  <img src={savedTemplates.icon} alt='' />
                )}
                {savedTemplates.title && <span>{savedTemplates.title}</span>}
              </div>
              <div className='saved-template-list'>
                {savedTemplates &&
                  savedTemplates?.templates?.map(
                    (template: any, index: any) => (
                      <span
                        key={`template-${index}`} // Replace with appropriate unique key
                        className='saved-template-card'
                        onClick={() => handleTemplateChat(template.title)}
                      >
                        {template.title}
                      </span>
                    )
                  )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Chat UI */}
      {showChat && (
        <div className='chat-ui' style={{ height: chatBoxInnerHeight }}>
          <div className='chat-ui-container'>
            <div className='chat_container chat-box' ref={scrollMe}>
              {/* Loop through chat messages */}
              {chatMessages &&
                chatMessages?.map((message: ShadowChatMessage, i: number) => (
                  <div
                    key={message.id}
                    className={message.isAI ? 'wrapper-ai' : 'wrapper-user'}
                  >
                    {/* User chat */}
                    {!message.isAI && (
                      <div className='chat'>
                        <div className='chat-profile-info'>
                          {/* Replace with appropriate components */}
                          <ShadowAvatar
                            imageUrl={userIcon}
                            shape='circle'
                            actionStyle='subdued'
                            themeStyle='primary'
                            initials={getUserInitial(userName)}
                            type={userIcon ? 'image' : 'initials'}
                          />

                          <div className='profile-info'>
                            <span className='user-name'>{userName}</span>
                            <span className='chat-date'>
                              {message.date /* format the date here */}
                            </span>
                          </div>
                        </div>

                        <div
                          className='message'
                          dangerouslySetInnerHTML={{ __html: message.text }}
                        ></div>
                      </div>
                    )}

                    {/* AI chat */}
                    {message.isAI && (
                      <div className='chat-ai'>
                        <div className='chat-profile-info'>
                          {/* Replace with appropriate components */}
                          <ShadowAvatar
                            imageUrl={chatBoxStyle.logo}
                            icon={chatBoxStyle.icon}
                            shape='circle'
                            actionStyle='subdued'
                            themeStyle='primary'
                            initials={getUserInitial(chatAiName)}
                            type={
                              chatBoxStyle.logo
                                ? 'image'
                                : chatBoxStyle.icon
                                  ? 'icon'
                                  : 'initials'
                            }
                          />

                          <div className='ai-profile-head'>
                            <div className='profile-info'>
                              <span className='user-name'>{chatAiName}</span>
                              <span className='chat-date'>
                                {message.date /* format the date here */}
                              </span>
                            </div>

                            {message.showAction && message?.actionItems && (
                              // <shadow-tiered-menu
                              //     menuItem={message.actionItems || []}
                              //     menuOption={message?.actionOption || {}}
                              //     onSelect={(event: any) => onActionSelect(event, message)}
                              // />
                              <></>
                            )}
                          </div>
                        </div>

                        <div>
                          {/* Loading animation */}
                          {message.isDisabled && !message.showStepper && (
                            <div className='loading-animation'>
                              <div className='item'>
                                <div className='skeleton title'></div>
                                <div className='skeleton content'></div>
                                <div className='skeleton content'></div>
                                <div className='skeleton content'></div>
                              </div>
                            </div>
                          )}

                          {/* Stepper animation */}
                          {message.isDisabled &&
                            message.showStepper &&
                            message.stepperData && (
                              <div className='loading-animation'>
                                <div className='stepper-wrapper'>
                                  {/* <shadow-stepper
                                                                steps={message.stepperData}
                                                                spinner={message.stepperSpinner || true}
                                                                activeIndex={message.stepperActiveIndex || 0}
                                                                readonly={message.stepperReadonly || true}
                                                                size={message.stepperSize || 'sm'}
                                                            /> */}
                                </div>
                              </div>
                            )}

                          <div>
                            {/* AI message */}
                            {message.text && (
                              <div
                                className='message'
                                id={message.id}
                                dangerouslySetInnerHTML={{
                                  __html: message.text
                                }}
                              ></div>
                            )}
                          </div>

                          {/* Chat action area */}
                          {message?.isChatActionArea && (
                            <div className='chatbox-action-area'>
                              {/* Replace with appropriate components */}
                              {/* <shadow-area-action
                                                            areaActionOption={message?.areaActionButtonOption}
                                                            areaActionHandler={areaActionClickHandler}
                                                        /> */}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Stop button wrapper */}
                    {message.isDisabled &&
                      message.showStepper &&
                      message.stepperData &&
                      showStopGenerating && (
                        <div
                          className='stop-btn-wrapper'
                          onClick={onStopGenerating}
                        >
                          <div className='icon-section'>
                            <i className='pi pi-stop'></i>
                          </div>
                          <div className='label-section'>
                            <span>Stop Generating</span>
                          </div>
                        </div>
                      )}

                    {/* Recomended prompt */}
                    {i === chatMessages.length - 1 && (
                      <div className='prompt-template'>
                        {message?.recomendedPrompts?.map(
                          (recomended: any, index: any) => (
                            <span
                              key={`recomended-${index}`}
                              onClick={() => handleRecomended(recomended)}
                            >
                              {recomended?.showIcon && (
                                <i className={recomended?.icon}></i>
                              )}
                              {recomended?.prompt}
                            </span>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <form className='chat-form'>
              <ShadowInputTextAreaComponent
                disabled={isInputDisabled}
                onChange={handleInputChange}
                onPressEnter={handleSubmit}
                value={query}
                rows={1}
                placeholder={chatBoxStyle.inputBoxPlaceholder || ''}
                autoResize={true}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShadowChatBox
