import React, { useEffect, useState } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
// import 'react-day-picker/lib/style.css'
import axios from 'axios'

export const DateInput = ({
  name,
  value,
  type,
  icon,
  placeholder,
  required,
  onChange,
  ...props
}) => {
  const [selectedDays, setSelectedDays] = useState([])
  const [unavailableDays, setUnavailableDays] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://${process.env.DOMAIN_NAME}${process.env.API_ENDPOINT}calender/getUnavailableDates`,
      )
      .then((response) => {
        debugger
        setUnavailableDays(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const handleDayClick = (day, { selected }) => {
    if (selected) {
      // Unselect the day if already selected
      setSelectedDays(
        selectedDays.filter(
          (selectedDay) => !DateUtils.isSameDay(selectedDay, day),
        ),
      )
    } else {
      // Select the day
      setSelectedDays([...selectedDays, day])
    }
  }

  const isDayUnavailable = (day) =>
    unavailableDays.some((unavailableDay) =>
      DateUtils.isSameDay(unavailableDay, day),
    )

  return (
    <DayPicker
      selectedDays={selectedDays}
      onDayClick={handleDayClick}
      disabledDays={isDayUnavailable}
    />
  )
}
