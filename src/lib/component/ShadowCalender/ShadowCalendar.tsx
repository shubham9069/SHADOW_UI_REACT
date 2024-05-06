import React, { useEffect, useState, useRef } from 'react'
import { InputText } from 'primereact/inputtext'
import './ShadowCalendar.scss'
import {
  ShadowCalendarDays,
  ShadowCalendarFullDays,
  ShadowCalendarMonths,
  ShadowCalendarMonthsLabel,
  ShadowCalendarSelType,
  ShadowCalendarType
} from '../../models'
import ShadowButton from '../ShadowButton/ShadowButton'
import { OverlayPanel } from 'primereact/overlaypanel'
// import { Calendar } from "primereact/calendar";

interface ShadowCalendarProps {
  selectionMode?: ShadowCalendarSelType
  numberOfMonths?: number
  style?: string
  styleClass?: string
  inputStyle?: string
  inputStyleClass?: string
  placeholder?: string
  disabled?: boolean
  dateFormat?: string
  inline?: boolean
  showIcon?: boolean
  icon?: string
  showOnFocus?: boolean
  showWeek?: boolean
  panelStyleClass?: string
  panelStyle?: string
  minDate?: Date
  maxDate?: Date
  disabledDates?: Date[]
  disabledDays?: number[]
  type?: ShadowCalendarType
  value?: Date | Date[]
  hideOnSelect?: boolean
  onChange?: (event: any) => void
  onHide?: (event: any) => void
  onShow?: (event: any) => void
}

const ShadowCalendar = ({
  selectionMode = 'single',
  numberOfMonths = 1,
  style = '',
  styleClass = '',
  inputStyle = '',
  inputStyleClass = '',
  placeholder = '',
  disabled = false,
  dateFormat: propDateFormat = '',
  inline = false,
  showIcon = true,
  icon = 'pi pi-calendar',
  showOnFocus = false,
  showWeek = false,
  panelStyleClass = '',
  panelStyle = '',
  minDate,
  maxDate,
  disabledDates = [],
  disabledDays = [],
  type = 'date',
  value: propValue,
  hideOnSelect = false,
  onChange,
  onHide,
  onShow
}: ShadowCalendarProps) => {
  const dayLabels = ShadowCalendarDays
  const months = ShadowCalendarMonths
  const monthLabels = ShadowCalendarMonthsLabel
  const dateModal = useRef<any>(null)
  const monthModal = useRef<any>(null)
  const yearModal = useRef<any>(null)

  const [dateFormat, setDateFormat] = useState(propDateFormat)
  const [toggleMode, setToggleMode] = useState('')
  const [value, setValue] = useState<Date | Date[]>(propValue as Date | Date[])
  const [valueStr, setValueStr] = useState('')

  const today = new Date()
  const [activeMonth, setActiveMonth] = useState<number>(0)
  const [activeDecade, setActiveDecade] = useState<number>(0)
  const [activeYear, setActiveYear] = useState<number>(0)
  const [activeMonths, setActiveMonths] = useState<any[]>([])

  useEffect(() => {
    const activeDecade = updateYearBracket()
    const activeYear = updateMonthBracket()

    if (type === 'date') {
      const activeMonth = updateDateBracket()

      const tempMonths = createMonthData(activeYear, activeMonth)
      setActiveMonths(tempMonths)
    }
    if (!dateFormat) {
      const formatObj: any = {
        date: 'dd/mm/yy',
        month: 'mm/yy',
        year: 'yy'
      }
      setDateFormat(dateFormat || formatObj[type])
    }
  }, [])

  const classObj = {
    range: 'shadow-range-calendar',
    multiple: 'shadow-multiselect-calendar',
    single: 'shadow-default-calendar'
  }

  const hideHandler = (event?: any) => {
    if (
      selectionMode === 'range' &&
      (!Array.isArray(value) || value.length !== 2)
    ) {
      // Assuming value is a state variable managed with useState
      setValue([])
      updateValueField()
    }
    onHide?.(value)
  }

  const showHandler = (item: any, event: any) => {
    item?.current?.toggle(event)
    onShow?.(value)
  }

  const checkDate = (date: any) => {
    let returnFlag = false
    if (Array.isArray(value)) {
      returnFlag =
        value.findIndex((d) => {
          return (
            d?.getDate() === date.day &&
            d?.getMonth() === date.month &&
            d?.getFullYear() === date.year
          )
        }) !== -1
    } else if (value) {
      returnFlag =
        value.getDate() === date.day &&
        value.getMonth() === date.month &&
        value.getFullYear() === date.year
    }
    return returnFlag
  }

  const selectHandler = () => {
    if (selectionMode === 'range' && Array.isArray(value) && !value[1]) {
      return
    }
    onChange?.(value)
  }

  const updateYearBracket = () => {
    let currDecade = today.getFullYear()
    if (!Array.isArray(value)) {
      currDecade = value?.getFullYear() || currDecade
    } else {
      currDecade = value[0]?.getFullYear() || currDecade
    }
    currDecade = currDecade - (currDecade % 10)
    setActiveDecade(currDecade)
    return currDecade
  }

  const updateMonthBracket = () => {
    let currYear = today.getFullYear()
    if (!Array.isArray(value)) {
      currYear = currYear || value?.getFullYear()
    } else {
      currYear = currYear || value[0]?.getFullYear()
    }
    setActiveYear(currYear)
    return currYear
  }

  const updateDateBracket = () => {
    let currMonth = today.getMonth()
    if (!Array.isArray(value)) {
      currMonth = value?.getMonth() || currMonth
    } else {
      currMonth = value[0]?.getMonth() || currMonth
    }
    setActiveMonth(currMonth)
    return currMonth
  }

  const onMonthBracketDown = (res: any) => {
    setActiveYear(activeYear - 1)
  }

  const onMonthBracketUp = (res: any) => {
    setActiveYear(activeYear + 1)
  }

  const onDateClick = (input: any) => {
    let newValue = value || []
    const date = new Date(input.year, input.month, input.date)
    let newHideOnSelect = false

    switch (selectionMode) {
      case 'range':
        if (Array.isArray(newValue)) {
          if (!newValue[0]) {
            newValue[0] = date
          } else if (!newValue[1]) {
            if (newValue[0].valueOf() > date.valueOf()) newValue.unshift(date)
            else newValue.push(date)
            newHideOnSelect = true
          } else {
            newValue = [date]
          }
        }
        break
      case 'multiple':
        if (Array.isArray(newValue)) {
          const index = newValue.findIndex((d) => {
            return (
              d.getFullYear() === input.year &&
              d.getDate() === input.date &&
              d.getMonth() === input.month
            )
          })
          if (index > -1) {
            newValue.splice(index, 1)
          } else {
            newValue.push(date)
            newHideOnSelect = true
          }
        }
        break
      case 'single':
        newValue = date
        newHideOnSelect = true
        break
    }

    setValue(newValue)
    onChange?.(newValue)
    if (hideOnSelect && newHideOnSelect) {
      dateModal?.current?.hide()
    }
    updateValueField() // Assuming this function updates some value field
  }

  const onMonthClick = (month: number) => {
    if (toggleMode) {
      setActiveMonth(month)
      setToggleMode('')
      setActiveMonths(createMonthData(activeYear, month))
      return
    }

    let newHideOnSelect = false
    let newValue = value || []
    const date = new Date(activeYear, month, 1)

    switch (selectionMode) {
      case 'range':
        if (Array.isArray(newValue)) {
          if (!newValue[0]) {
            newValue[0] = date
          } else if (!newValue[1]) {
            if (newValue[0].valueOf() > date.valueOf()) newValue.unshift(date)
            else newValue.push(date)
            newHideOnSelect = true
          } else {
            newValue = [date]
          }
        }
        break
      case 'multiple':
        let index = -1
        const year = activeYear
        if (Array.isArray(newValue)) {
          index = newValue.findIndex((d) => {
            return d.getFullYear() === year && d.getMonth() === month
          })
          if (index === -1) {
            newValue.push(new Date(year, month, 1))
            newHideOnSelect = true
          } else {
            newValue.splice(index, 1)
          }
        } else {
          newValue = [date]
        }
        break
      default:
        newValue = date
        newHideOnSelect = true
    }

    setValue(newValue)
    onChange?.(newValue)

    if (hideOnSelect && newHideOnSelect) {
      monthModal?.current?.hide() // Assuming you have a ref for the modal
    }

    updateValueField() // Assuming this function updates some value field
  }

  const getMonthClass = (month: number) => {
    let cls = 'calendar-custom-item '
    const today = new Date()
    const date = new Date(activeYear, month, 1)

    if (today.getMonth() === month && today.getFullYear() === activeYear) {
      cls += ' calendar-highlight-custom-item '
    }

    if (toggleMode) {
      cls += month === activeMonth ? 'calendar-selected-custom-item ' : ''
      return cls
    }

    switch (selectionMode) {
      case 'range':
        if (Array.isArray(value)) {
          if (value[0]) {
            cls +=
              value[0].getFullYear() === activeYear &&
              value[0].getMonth() === month
                ? ' calendar-selected-custom-item'
                : ''
          }
          if (value[1]) {
            if (
              value[1].getMonth() === month &&
              value[1].getFullYear() === activeYear
            ) {
              cls += ' calendar-selected-custom-item'
            } else if (
              date.valueOf() > value[0].valueOf() &&
              date.valueOf() < value[1].valueOf()
            ) {
              cls += ' calendar-highlight-custom-item'
            }
          }
        }
        break
      case 'multiple':
        if (Array.isArray(value)) {
          const index = value.findIndex((d) => {
            return d.getFullYear() === activeYear && d.getMonth() === month
          })
          cls += index === -1 ? '' : ' calendar-selected-custom-item'
        }
        break
      case 'single':
        if (value instanceof Date) {
          cls +=
            value.getFullYear() === activeYear && value.getMonth() === month
              ? ' calendar-selected-custom-item'
              : ''
        }
        break
    }

    return cls
  }

  const showMonths = () => {
    setToggleMode('month')
  }

  const showYears = () => {
    setToggleMode(toggleMode + 'year')
  }

  const onYearBracketDown = (res: any) => {
    setActiveDecade(activeDecade - 10)
  }

  const onYearBracketUp = (res: any) => {
    setActiveDecade(activeDecade + 10)
  }

  const onDecadeClick = () => {
    if (toggleMode) {
      setToggleMode('month')
    }
  }

  const onYearClick = (year: number) => {
    let newValue = value || []

    if (!value) {
      newValue = []
    }

    if (toggleMode) {
      setActiveYear(year)
      if (type === 'date') {
        setToggleMode(toggleMode === 'monthyear' ? 'month' : '')
      } else {
        setToggleMode('')
      }
      setActiveMonths(createMonthData(year, activeMonth))
      return
    }

    const date = new Date(year, 1, 1)

    switch (selectionMode) {
      case 'range':
        if (Array.isArray(newValue)) {
          if (!newValue[0]) {
            newValue[0] = date
            onChange?.(newValue)
          } else if (!newValue[1]) {
            if (newValue[0].getFullYear() > year) newValue.unshift(date)
            else newValue.push(date)
            onChange?.(newValue)
            if (hideOnSelect) {
              yearModal?.current?.hide() // Assuming you have a ref for the modal
            }
          } else {
            newValue = [date]
            onChange?.(newValue)
          }
        }
        break
      case 'multiple':
        let index = -1
        if (Array.isArray(newValue)) {
          index = newValue.findIndex((d) => {
            return d.getFullYear() === year
          })
          if (index === -1) {
            newValue.push(date)
          } else {
            newValue.splice(index, 1)
          }
        }
        onChange?.(newValue)
        if (hideOnSelect) {
          yearModal?.current?.hide() // Assuming you have a ref for the modal
        }
        break
      default:
        newValue = date
        onChange?.(newValue)
        if (hideOnSelect) {
          yearModal?.current?.hide() // Assuming you have a ref for the modal
        }
    }

    updateValueField() // Assuming this function updates some value field
  }

  const onDateBracketDown = (res: any) => {
    let currMonth = activeMonth
    let currYear = activeYear
    if (activeMonth > 0) {
      currMonth = currMonth - 1
    } else {
      currMonth = 11
      currYear = currYear - 1
      setActiveYear(currYear)
    }
    setActiveMonth(currMonth)
    setActiveMonths(createMonthData(currYear, currMonth))
  }

  const onDateBracketUp = (res: any) => {
    let currMonth = activeMonth
    let currYear = activeYear
    if (activeMonth !== 11) {
      currMonth = currMonth + 1
    } else {
      currMonth = 0
      currYear = currYear + 1
      setActiveYear(currYear)
    }
    setActiveMonth(currMonth)
    setActiveMonths(createMonthData(currYear, currMonth))
  }

  const getDateClass = (date: any) => {
    let cls = 'calendar-day'
    const today = new Date()
    const year = date.year
    const month = date.month

    if (
      today.getFullYear() === year &&
      today.getDate() === date.date &&
      today.getMonth() === month
    ) {
      cls += ' calendar-highlight-custom-item'
    }

    if (
      minDate &&
      maxDate &&
      (date.dateItem.valueOf() < minDate.valueOf() ||
        date.dateItem.valueOf() > maxDate.valueOf())
    ) {
      cls += ' calendar-disabled-date'
    }

    if (disabledDates.length) {
      const idx = disabledDates.findIndex((d) => {
        return (
          d.getFullYear() === year &&
          d.getMonth() === month &&
          d.getDate() === date.date
        )
      })
      if (idx !== -1) {
        cls += ' calendar-disabled-date'
      }
    }

    if (disabledDays.length) {
      const idx = disabledDays.findIndex((d) => {
        return d === date.day
      })
      if (idx !== -1) {
        cls += ' calendar-disabled-date'
      }
    }

    if (!date.thisMonth) {
      cls += ' calendar-passive-date'
    }

    switch (selectionMode) {
      case 'range':
        if (Array.isArray(value)) {
          if (value[0]) {
            cls +=
              value[0].getFullYear() === year &&
              value[0].getMonth() === month &&
              value[0].getDate() === date.date
                ? ' calendar-selected-custom-item'
                : ''
          }
          if (value[1]) {
            if (
              value[1].getMonth() === month &&
              value[1].getFullYear() === year &&
              value[1].getDate() === date.date
            ) {
              cls += ' calendar-selected-custom-item'
            } else if (
              date.dateItem.valueOf() >= value[0].valueOf() &&
              date.dateItem.valueOf() <= value[1].valueOf()
            ) {
              cls += ' calendar-highlight-custom-item'
            }
          }
        }
        break
      case 'multiple':
        if (Array.isArray(value)) {
          const index = value.findIndex((d) => {
            return (
              d.getFullYear() === year &&
              d.getMonth() === month &&
              d.getDate() === date.date
            )
          })
          cls += index === -1 ? '' : ' calendar-selected-custom-item'
        }
        break
      case 'single':
        if (value instanceof Date) {
          cls +=
            value.getFullYear() === year &&
            value.getMonth() === month &&
            value.getDate() === date.date
              ? ' calendar-selected-custom-item'
              : ''
        }
        break
    }

    return cls
  }

  const getYearClass = (year: number) => {
    let cls = 'calendar-custom-item'
    const today = new Date()

    if (today.getFullYear() === year) {
      cls += ' calendar-highlight-custom-item'
    }

    if (toggleMode) {
      cls += year === activeYear ? ' calendar-selected-custom-item' : ' '
      return cls
    }

    switch (selectionMode) {
      case 'range':
        if (Array.isArray(value)) {
          if (value[0]) {
            cls +=
              value[0].getFullYear() === year
                ? ' calendar-selected-custom-item'
                : ''
          }
          if (value[1]) {
            if (value[1].getFullYear() === year) {
              cls += ' calendar-selected-custom-item'
            } else if (
              year > value[0].getFullYear() &&
              year < value[1].getFullYear()
            ) {
              cls += ' calendar-highlight-custom-item'
            }
          }
        }
        break
      case 'multiple':
        if (Array.isArray(value)) {
          const index = value.findIndex((d) => {
            return d.getFullYear() === year
          })
          cls += index === -1 ? '' : ' calendar-selected-custom-item'
        }
        break
      default:
        if (value instanceof Date) {
          cls +=
            value.getFullYear() === year ? ' calendar-selected-custom-item' : ''
        }
        break
    }

    return cls
  }

  const createYearRange = (number: number) => {
    const year = activeDecade
    return new Array(number).fill(0).map((n, index) => year + index)
  }

  const createMonthData = (activeYear: number, activeMonth: number) => {
    const year = activeYear
    let months: any = []
    for (let j = 0; j < numberOfMonths; j++) {
      const month = activeMonth + j
      let i = 1
      const days: any = []
      const startDate = new Date(year, 0, 1)
      let weekNumber = 0
      while (i !== -1) {
        const date = new Date(year, month, i)
        const day = date.getDay()
        const dateNumber = date.getDate()
        let newWeek = false
        if (day === 0) {
          let dayCount = Math.floor(
            (date.valueOf() - startDate.valueOf()) / (24 * 60 * 60 * 1000)
          )
          weekNumber = Math.ceil(dayCount / 7)
          newWeek = true
        }

        if (dateNumber === i || day !== 0) {
          const monthValue =
            dateNumber !== i ? (month === 11 ? 0 : month + 1) : month
          const yearValue =
            monthValue !== month && monthValue === 0 ? year + 1 : year
          days.push({
            date: dateNumber,
            thisMonth: dateNumber === i,
            weekNumber: weekNumber,
            day: day,
            newWeek: newWeek,
            month: monthValue,
            year: yearValue,
            dateItem: new Date(yearValue, monthValue, dateNumber)
          })
          i++
        } else {
          i = -1
        }
      }
      i = 0
      let date = new Date(year, month, i)
      while (date.getDay() !== 6) {
        const yearValue = month === 0 ? year - 1 : year
        const monthValue = month === 0 ? 11 : month - 1
        days.unshift({
          date: date.getDate(),
          thisMonth: false,
          day: date.getDay(),
          month: yearValue,
          year: monthValue,
          dateItem: date
        })
        date = new Date(year, month, --i)
      }
      const firstDay = days[0]
      if (!firstDay.thisMonth) {
        date = new Date(year, activeMonth - 1, firstDay.date)
        let dayCount = Math.floor(
          (date.valueOf() - startDate.valueOf()) / (24 * 60 * 60 * 1000)
        )
        firstDay.weekNumber = Math.ceil(dayCount / 7)
        firstDay.newWeek = true
      }
      months.push(days)
    }
    return months
  }

  const updateValueField = () => {
    let format = dateFormat
    const items = format.split(/[.\-=/_]/)
    let res: string[] = []
    let values = value ? (Array.isArray(value) ? value : [value]) : []
    values.forEach((value) => {
      const dateStr = []
      let resultStr = ''
      const date = value.getDate()
      const day = value.getDay()
      const month = value.getMonth()
      const year = value.getFullYear()
      items.forEach(function (d) {
        let dayText = ''
        let replacementString = ''
        switch (d) {
          case 'd':
            replacementString = String(date)
            break
          case 'dd':
            replacementString = (String(date).length === 1 ? '0' : '') + date
            break
          case 'D':
            dayText = ShadowCalendarDays[day]
            replacementString = String(date)
            break
          case 'DD':
            dayText = ShadowCalendarFullDays[day]
            replacementString = String(date)
            break
          case 'm':
            replacementString = String(month + 1)
            break
          case 'mm':
            replacementString =
              (String(month + 1).length === 1 ? '0' : '') + month
            break
          case 'M':
            replacementString = ShadowCalendarMonths[month]
            break
          case 'MM':
            replacementString = ShadowCalendarMonthsLabel[month]
            break
          case 'y':
          case 'Y':
            replacementString = String(year).slice(2)
            break
          case 'yy':
          case 'YY':
            replacementString = String(year)
            break
        }
        const separator = format[format.indexOf(d) + d.length] || ''
        resultStr =
          (dayText ? dayText + ' ' : '') +
          resultStr +
          replacementString +
          separator
      })
      res.push(resultStr)
    })
    setValueStr(res.join(' - '))
  }

  const inputField = (overlay: any) => (
    <span
      onClick={(e) => showHandler(overlay, e)}
      className='shadow-custom-calendar-input-container p-input-icon-right'
    >
      <InputText
        type='text'
        defaultValue={valueStr}
        style={{ inputStyle } as Object}
        className={inputStyleClass}
        placeholder={placeholder}
      />
      {showIcon && <i className={icon}></i>}
    </span>
  )

  const yearCalendarContent = (header?: any, footer?: any) => {
    return (
      <>
        {header}
        <span className='shadow-calendar-header'>
          <span className='shadow-calendar-titlebar'>
            <div className='cal-change-icon' onClick={onYearBracketDown}>
              <i className='pi pi-chevron-left'></i>
            </div>
            <span className='shadow-calendar-custom-label'>
              <span
                className='shadow-calendar-title-item'
                onClick={onDecadeClick}
              >
                {activeDecade} - {activeDecade + 9}
              </span>
            </span>
            <div className='cal-change-icon' onClick={onYearBracketUp}>
              <i className='pi pi-chevron-right cal-change-icon'></i>
            </div>
          </span>
        </span>

        <div className='shadow-calendar-custom-body shadow-calendar-year-body'>
          {createYearRange(10).map((year, idx) => (
            <span
              key={`${year}-${idx}`}
              onClick={() => onYearClick(year)}
              className={getYearClass(year)}
            >
              {year}
            </span>
          ))}
        </div>
        {footer}
      </>
    )
  }

  const dateCalendarContent = (header?: any, footer?: any) => {
    return (
      <>
        {header}
        <div className='shadow-calendar-header'>
          {activeMonths.map((month, i) => (
            <span className='shadow-calendar-titlebar' key={`activeMonth-${i}`}>
              <div className='cal-change-icon' onClick={onDateBracketDown}>
                <i className='pi pi-chevron-left'></i>
              </div>
              {/* <ShadowButton buttonType="text" icon="pi pi-chevron-left" onButtonClick={onDateBracketDown}></ShadowButton> */}
              <span className='shadow-calendar-custom-label'>
                <span
                  onClick={() => showMonths()}
                  className='shadow-calendar-month-label shadow-calendar-title-item'
                >
                  {monthLabels[activeMonth + i]}
                </span>
                <span
                  onClick={() => showYears()}
                  className='shadow-calendar-title-item'
                >
                  {activeYear}
                </span>
              </span>
              <div className='cal-change-icon' onClick={onDateBracketUp}>
                <i className='pi pi-chevron-right'></i>
              </div>
              {/* <ShadowButton buttonType="text" icon="pi pi-chevron-right" onButtonClick={onDateBracketUp}></ShadowButton> */}
            </span>
          ))}
        </div>

        <div className='shadow-calendar-custom-body shadow-calendar-date-body'>
          {activeMonths.map((month, idx) => (
            <div
              className={`calendar-month-grid ${showWeek ? 'calendar-show-week-column' : 'hide-week-column'}`}
              key={`month-${idx}`}
            >
              {showWeek && <span className='calendar-day-header'>Wk</span>}
              {dayLabels.map((day, idx) => (
                <span className='calendar-day-header' key={`${day}-${idx}`}>
                  {day}
                </span>
              ))}
              {month?.map((day: any, idx: number) => (
                <React.Fragment key={`${day?.day}-${idx}`}>
                  {showWeek && !day?.day && (
                    <span className='calendar-week-number'>
                      {day?.weekNumber}
                    </span>
                  )}
                  <span
                    onClick={() => onDateClick(day)}
                    className={getDateClass(day)}
                  >
                    {day?.date}
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
        {footer}
      </>
    )
  }

  const monthCalendarContent = (header?: any, footer?: any) => {
    return (
      <>
        {header}
        <span className='shadow-calendar-header'>
          <span className='shadow-calendar-titlebar'>
            <div className='cal-change-icon' onClick={onMonthBracketDown}>
              <i className='pi pi-chevron-left '></i>
            </div>
            <span className='shadow-calendar-custom-label' onClick={showYears}>
              <span className='shadow-calendar-title-item'>{activeYear}</span>
            </span>
            <i
              className='pi pi-chevron-right cal-change-icon'
              onClick={onMonthBracketUp}
            ></i>
          </span>
        </span>
        <div className='shadow-calendar-custom-body shadow-calendar-month-body'>
          {months.map((month, i) => (
            <span
              key={`month_cal-${i}`}
              onClick={() => onMonthClick(i)}
              className={getMonthClass(i)}
            >
              {month}
            </span>
          ))}
        </div>
        {footer}
      </>
    )
  }

  const dateTemplate = () => {
    return toggleMode === 'year'
      ? yearCalendarContent()
      : toggleMode === 'monthyear'
        ? yearCalendarContent()
        : toggleMode === 'month'
          ? monthCalendarContent()
          : dateCalendarContent()
  }

  const monthTemplate = () => {
    return toggleMode === '' ? monthCalendarContent() : yearCalendarContent()
  }

  return (
    <React.Fragment>
      <div className={`card flex justify-content-center`}>
        {type === 'date' && (
          <>
            {!inline ? (
              <div
                className={`shadow-calendar-content ${styleClass}${disabled ? ' disabled-calendar' : ''}`}
                style={{ style } as Object}
              >
                <OverlayPanel
                  className={`shadow-custom-calendar ${panelStyleClass}${disabled ? ' disabled-calendar' : ''}`}
                  style={panelStyle as any}
                  onHide={() => hideHandler()}
                  ref={dateModal}
                >
                  {dateTemplate()}
                </OverlayPanel>
                {inputField(dateModal)}
              </div>
            ) : (
              <div
                className={`shadow-custom-calendar inline-custom-calendar ${styleClass} ${disabled ? 'disabled-calendar' : ''}`}
                style={{ style } as Object}
              >
                {dateTemplate()}
              </div>
            )}
          </>
        )}
        {type === 'month' && (
          <>
            {!inline ? (
              <div
                className={`shadow-calendar-content ${styleClass} ${disabled ? 'disabled-calendar' : ''}`}
                style={{ style } as Object}
              >
                <OverlayPanel
                  className={`shadow-custom-calendar ${panelStyleClass} ${disabled ? 'disabled-calendar' : ''}`}
                  onHide={hideHandler}
                  style={panelStyle as any}
                  ref={monthModal}
                >
                  {monthTemplate()}
                </OverlayPanel>
                {inputField(monthModal)}
              </div>
            ) : (
              <div
                className={`shadow-custom-calendar inline-custom-calendar ${styleClass} ${disabled ? 'disabled-calendar' : ''}`}
                style={{ style } as Object}
              >
                {monthTemplate()}
              </div>
            )}
          </>
        )}
        {type === 'year' && (
          <>
            <div
              className={`shadow-calendar-content ${styleClass}${disabled ? ' disabled-calendar' : ''}`}
              style={{ style } as Object}
            >
              <OverlayPanel
                className={`shadow-custom-calendar ${panelStyleClass}`}
                onHide={hideHandler}
                style={panelStyle as any}
                ref={yearModal}
              >
                {yearCalendarContent()}
              </OverlayPanel>
              {inputField(yearModal)}
            </div>
            {inline ? (
              <div
                className={`shadow-custom-calendar inline-custom-calendar ${styleClass}${disabled ? ' disabled-calendar' : ''}`}
                style={{ style } as Object}
              >
                {yearCalendarContent()}
              </div>
            ) : null}
          </>
        )}
      </div>
    </React.Fragment>
  )
}

export default ShadowCalendar
