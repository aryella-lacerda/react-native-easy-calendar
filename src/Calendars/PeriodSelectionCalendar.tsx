import React, { useMemo } from 'react';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import dayjs from 'dayjs';

import { dateRange } from '../Utils';
import BaseCalendarWrappedInProviders from './BaseCalendar';

dayjs.extend(isSameOrAfter);

// All dates passed and recieved by this component are in ISO 8601 dateString format:
// Ex: "2014-09-08T08:02:17-05:00"
export interface Props {
  startDate: string;
  endDate?: string;
  onPressStartDate: (date: string) => void;
  onPressEndDate: (date: string | null) => void;
  minDate?: string;
  maxDate?: string;
}

// A thin wrapper to limit the props that can be passed to the Calendar component and hide period-specific logic
const PeriodSelectionCalendar: React.FC<Props> = ({
  onPressStartDate,
  onPressEndDate,
  startDate,
  endDate,
  minDate,
  maxDate,
}) => {
  const dateProperties = useMemo(() => {
    const start = dayjs(startDate);
    const end = dayjs(endDate || startDate);
    const period = dateRange(start, end);

    return period.reduce((accumulator, day) => {
      return {
        ...accumulator,
        [day.format('YYYY-MM-DD')]: {
          isPeriodStart: day.isSame(start, 'day'),
          isPeriodEnd: day.isSame(end, 'day'),
          isPeriod: true,
        },
      };
    }, {});
  }, [startDate, endDate]);

  const onPressDay = (date: string) => {
    const pressed = dayjs(date, 'YYYY-MM-DD');

    if (endDate) {
      onPressStartDate(pressed.format());
      onPressEndDate(null);
      return;
    }

    if (pressed.isSameOrAfter(startDate)) {
      onPressEndDate(pressed.format());
    } else {
      onPressEndDate(startDate);
      onPressStartDate(pressed.format());
    }
  };

  return (
    <BaseCalendarWrappedInProviders
      allowYearView
      onPressDay={onPressDay}
      dateProperties={dateProperties}
      minDate={minDate}
      maxDate={maxDate}
    />
  );
};

export default React.memo(PeriodSelectionCalendar);
