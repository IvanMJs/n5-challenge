"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import {
  StyledCalendarWrapper,
  calendarClassNames,
} from "./Calendar.styles"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <StyledCalendarWrapper className={className}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        classNames={{
          ...calendarClassNames,
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeft className="calendar__icon" />,
          IconRight: ({ ...props }) => <ChevronRight className="calendar__icon" />,
        }}
        {...props}
      />
    </StyledCalendarWrapper>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
