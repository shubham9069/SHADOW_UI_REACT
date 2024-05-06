import React, { useEffect, useState } from 'react'
import { ShadowStep } from '../../models'
import './ShadowStepper.scss'

interface ShadowStepperProps {
  steps: ShadowStep[]
  activeIndex?: number
  spinner?: boolean
  readonly?: boolean
  size?: string
  type?: 'horizontal' | 'vertical'
  activeIndexChange?: (value: number) => void
}

const ShadowStepper = ({
  steps: propSteps = [],
  activeIndex: propActiveIndex = 0,
  type = 'vertical',
  spinner = false,
  readonly = true,
  size = 'sm',
  activeIndexChange
}: ShadowStepperProps) => {
  const [steps, setSteps] = useState<ShadowStep[]>([])
  const [activeIndex, setActiveIndex] = useState<number>(propActiveIndex)

  const updateStepperState = () => {
    const updatedSteps = propSteps.map((step, idx) => {
      if (activeIndex && idx < activeIndex) {
        return { ...step, ...{ current: false, completed: true } }
      } else if (idx === activeIndex) {
        return { ...step, ...{ current: true, completed: false } }
      } else {
        return { ...step, ...{ current: false, completed: false } }
      }
    })
    setSteps(updatedSteps)
  }

  const onItemClick = (
    event: React.MouseEvent,
    item: ShadowStep,
    i: number
  ) => {
    if (readonly || item.disabled) {
      event.preventDefault()
      return
    }
    setActiveIndex(i)
    activeIndexChange && activeIndexChange(i)
  }

  useEffect(() => {
    updateStepperState()
  }, [activeIndex])

  return (
    <ol
      role='list'
      className={`${type === 'horizontal' ? 'shadow-stepper-container' : ''} ${
        type === 'vertical' ? 'stepper-container-vertical' : ''
      } ${size}`}
    >
      {steps &&
        steps.length > 0 &&
        steps.map((step, i) => {
          return (
            <li
              key={`step-${i}`}
              className={`${type === 'horizontal' ? 'step-item-wrapper' : ''} ${
                type === 'vertical' ? 'step-item-wrapper-vertical' : ''
              }`}
              data-index={i}
              onClick={(event) => onItemClick(event, step, i)}
            >
              {step?.completed ? (
                <>
                  {type === 'vertical' ? (
                    <>
                      <div className='vertical-side'>
                        {i !== steps.length - 1 && (
                          <div className={'step-item-line'} aria-hidden='true'>
                            <div
                              className={`${'stepper-line-main'} ${'active-step'} ${'line-full'}`}
                            ></div>
                          </div>
                        )}
                        <button
                          className={`step-item-button ${
                            spinner && step?.current ? 'spin' : ''
                          } ${
                            readonly || step.disabled ? 'readonly' : ''
                          } ${'active-step'}`}
                        >
                          {step?.icon && (
                            <i
                              className={`step-item-btn-image ${step?.icon}`}
                              aria-hidden='true'
                            ></i>
                          )}
                          {step?.label && !step?.icon && (
                            <span className='current-step-label-no-spinner'>
                              {step?.label}
                            </span>
                          )}
                        </button>
                      </div>
                      <div className='vertical-content'>
                        <div className='step-item-content'>
                          <p className='step-item-title'>{step.title}</p>
                        </div>
                        <div className='step-item-content'>
                          {step.desc !== '' && (
                            <p className='step-item-desc'>{step.desc}</p>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {i !== steps.length - 1 && (
                        <div className={'step-item-line'} aria-hidden='true'>
                          <div
                            className={`${'stepper-line-main'} ${'active-step'} ${'line-full'}`}
                          ></div>
                        </div>
                      )}
                      <button
                        className={`step-item-button ${
                          spinner && step?.current ? 'spin' : ''
                        } ${
                          readonly || step.disabled ? 'readonly' : ''
                        } ${'active-step'}`}
                      >
                        {step?.icon && (
                          <i
                            className={`step-item-btn-image ${step?.icon}`}
                            aria-hidden='true'
                          ></i>
                        )}
                        {step?.label && !step?.icon && (
                          <span className='current-step-label-no-spinner'>
                            {step?.label}
                          </span>
                        )}
                      </button>
                      <div className='step-item-content'>
                        <p className='step-item-title'>{step.title}</p>
                      </div>
                      <div className='step-item-content'>
                        {step.desc !== '' && (
                          <p className='step-item-desc'>{step.desc}</p>
                        )}
                      </div>
                    </>
                  )}
                </>
              ) : step?.current ? (
                <>
                  {type === 'vertical' ? (
                    <>
                      <div className='vertical-side'>
                        {i !== steps.length - 1 && (
                          <div className='step-item-line' aria-hidden='true'>
                            <div
                              className={`stepper-line-main line-full ${
                                spinner
                                  ? 'current-state-spinner-line'
                                  : 'current-state-line'
                              }`}
                            ></div>
                          </div>
                        )}
                        <button
                          className={`step-item-button ${
                            spinner && step?.current ? 'spin' : ''
                          } ${
                            !spinner
                              ? 'current-step-btn-no-spinner'
                              : 'current-step-btn-spinner'
                          }`}
                        >
                          {step?.icon && !spinner && (
                            <i
                              className={`step-item-btn-image ${step?.icon} ${
                                !spinner ? 'current-step-label-no-spinner' : ''
                              }`}
                              aria-hidden='true'
                            ></i>
                          )}
                          {step?.label && !spinner && !step?.icon && (
                            <span className='current-step-label-no-spinner'>
                              {step?.label}
                            </span>
                          )}
                        </button>
                      </div>
                      <div className='vertical-content'>
                        <div className={`step-item-content current-step-theme`}>
                          <p className='step-item-title'>{step.title}</p>
                        </div>
                        <div className={`step-item-content current-step-theme`}>
                          {step.desc !== '' && (
                            <p className={'step-item-desc'}>{step.desc}</p>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {i !== steps.length - 1 && (
                        <div className='step-item-line' aria-hidden='true'>
                          <div
                            className={`stepper-line-main line-full ${
                              spinner
                                ? 'current-state-spinner-line'
                                : 'current-state-line'
                            }`}
                          ></div>
                        </div>
                      )}
                      <button
                        className={`step-item-button ${
                          spinner && step?.current ? 'spin' : ''
                        } ${
                          !spinner
                            ? 'current-step-btn-no-spinner'
                            : 'current-step-btn-spinner'
                        }`}
                      >
                        {step?.icon && !spinner && (
                          <i
                            className={`step-item-btn-image ${step?.icon} ${
                              !spinner ? 'current-step-label-no-spinner' : ''
                            }`}
                            aria-hidden='true'
                          ></i>
                        )}
                        {step?.label && !spinner && !step?.icon && (
                          <span className='current-step-label-no-spinner'>
                            {step?.label}
                          </span>
                        )}
                      </button>
                      <div className={`step-item-content current-step-theme`}>
                        <p className='step-item-title'>{step.title}</p>
                      </div>
                      <div className={`step-item-content current-step-theme`}>
                        {step.desc !== '' && (
                          <p className={'step-item-desc'}>{step.desc}</p>
                        )}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  {type === 'vertical' ? (
                    <>
                      <div className='vertical-side'>
                        <div className={'step-item-line'} aria-hidden='true'>
                          <div
                            className={`upcoming-stepper-line ${
                              i !== steps.length - 1 ? 'line-full' : ''
                            } ${'stepper-line-main'}`}
                          ></div>
                        </div>
                        <button
                          className={`upcoming-btn step-item-button ${
                            spinner && step?.current ? 'spin' : ''
                          }`}
                        >
                          {step?.icon && !spinner && (
                            <i
                              className={`step-item-btn-image upcoming-icon ${step?.icon}`}
                              aria-hidden='true'
                            ></i>
                          )}
                          {step?.label && !spinner && !step?.icon && (
                            <span className={'upcoming-icon'}>
                              {step?.label}
                            </span>
                          )}
                        </button>
                      </div>
                      <div className='vertical-content'>
                        <div className={'step-item-content'}>
                          <p className={'step-item-title'}>{step.title}</p>
                        </div>
                        <div className={'step-item-content'}>
                          {step.desc !== '' && (
                            <p className={'step-item-desc'}>{step.desc}</p>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={'step-item-line'} aria-hidden='true'>
                        <div
                          className={`upcoming-stepper-line ${
                            i !== steps.length - 1 ? 'line-full' : ''
                          } ${'stepper-line-main'}`}
                        ></div>
                      </div>
                      <button
                        className={`upcoming-btn step-item-button ${
                          spinner && step?.current ? 'spin' : ''
                        }`}
                      >
                        {step?.icon && !spinner && (
                          <i
                            className={`step-item-btn-image upcoming-icon ${step?.icon}`}
                            aria-hidden='true'
                          ></i>
                        )}
                        {step?.label && !spinner && !step?.icon && (
                          <span className={'upcoming-icon'}>{step?.label}</span>
                        )}
                      </button>
                      <div className={'step-item-content'}>
                        <p className={'step-item-title'}>{step.title}</p>
                      </div>
                      <div className={'step-item-content'}>
                        {step.desc !== '' && (
                          <p className={'step-item-desc'}>{step.desc}</p>
                        )}
                      </div>
                    </>
                  )}
                </>
              )}
            </li>
          )
        })}
    </ol>
  )
}

export default ShadowStepper
