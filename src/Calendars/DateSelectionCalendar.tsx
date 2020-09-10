import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import BaseCalendarWrappedInProviders from './Providers';
import type {
  Locale,
  Theme,
  ArrowComponentType,
  MonthComponentType,
  TitleComponentType,
  DayComponentType,
  WeekdaysComponentType,
  DateProperties,
} from '../Entities';

dayjs.extend(utc);

// OPTIMIZATION DONE
// INFO: Only prop that causes rerender is selectedDate
// Possibly also disabledDates if end-user doesn't memoize

export interface Props {
  ArrowComponent?: ArrowComponentType;
  TitleComponent?: TitleComponentType;
  DayComponent?: DayComponentType;
  MonthComponent?: MonthComponentType;
  WeekdaysComponent?: WeekdaysComponentType;
  // Callback function that receives date string, called when the user presses a date
  onSelectDate: (date: string) => void;
  // Date string respresenting the currently selected date
  selectedDate: string;
  // Array of 'YYYY-MM-DD' format strings representing the disabled dates
  disabledDates?: string[];
  // YYYY-MM-DD format string respresenting the minimum date that can be selected
  minDate?: string;
  // YYYY-MM-DD format string respresenting the maximum date that can be selected
  maxDate?: string;
  // YYYY-MM-DD format string respresenting the date that should be visible when the calendar first renders
  initVisibleDate?: string;
  // Boolean that disables the calendar year view
  allowYearView?: boolean;
  showExtraDates?: boolean;
  testID?: string;
  locale?: Locale;
  theme?: Theme;
}

// A thin wrapper to limit the props that can be passed to the BaseCalendar component
const DateSelectionCalendar: React.FC<Props> = ({
  onSelectDate,
  disabledDates,
  selectedDate,
  initVisibleDate,
  allowYearView = true,
  ...others
}) => {
  const dateProperties = useMemo(() => {
    const disabledDateProperties = (disabledDates as string[])?.reduce(
      (disabled: Record<string, DateProperties>, date) => {
        disabled[date] = { isDisabled: true };
        return disabled;
      },
      {}
    );

    const selectedDateProperties = {
      [dayjs(selectedDate).local().format('YYYY-MM-DD')]: {
        isSelected: true,
      },
    };

    // Not possible for a date to be both disabled and selected, so overwriting is OK
    return {
      ...disabledDateProperties,
      ...selectedDateProperties,
    };
  }, [selectedDate, disabledDates]);

  // TODO: Wrap onSelectDate in non-arrow function?

  return (
    <BaseCalendarWrappedInProviders
      allowYearView={allowYearView}
      onPressDay={onSelectDate}
      initVisibleDate={initVisibleDate || selectedDate}
      dateProperties={dateProperties}
      {...others}
    />
  );
};

export default DateSelectionCalendar;
