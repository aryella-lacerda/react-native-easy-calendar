import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import BaseCalendarWrappedInProviders from './Providers';
import type { DateProperties, WrapperCalendarProps } from '../Entities';

dayjs.extend(utc);

interface SpecificProps {
  onSelectDates: (dates: string[]) => void;
  selectedDates: string[];
}

type Props = SpecificProps & WrapperCalendarProps;

// A thin wrapper to limit the props that can be passed to the BaseCalendar component
const MultiDateSelectionCalendar: React.FC<Props> = ({
  onSelectDates,
  disabledDates,
  selectedDates,
  allowYearView = true,
  ...others
}) => {
  const selDatesRef = React.useRef<string[]>(selectedDates);

  const dateProperties = useMemo(() => {
    const disabledDateProperties = disabledDates?.reduce(
      (disabled: Record<string, DateProperties>, date) => {
        disabled[date] = { isDisabled: true };
        return disabled;
      },
      {}
    );

    const selectedDateProperties = selectedDates.reduce(
      (selected: Record<string, DateProperties>, date) => {
        selected[date] = { isSelected: true };
        return selected;
      },
      {}
    );

    // Not possible for a date to be both disabled and selected, so overwriting is OK
    return {
      ...disabledDateProperties,
      ...selectedDateProperties,
    };
  }, [selectedDates, disabledDates]);

  const remove = (dateToRemove: string) => {
    const newSelectedDates = selDatesRef.current.filter((date) => date !== dateToRemove);
    selDatesRef.current = newSelectedDates;
    return newSelectedDates;
  };

  const append = (dateToAppend: string) => {
    const newSelectedDates = [...selDatesRef.current, dateToAppend].sort();
    selDatesRef.current = newSelectedDates;
    return newSelectedDates;
  };

  const onPressDay = React.useCallback(
    (date: string) => {
      if (selDatesRef.current.includes(date)) {
        onSelectDates(remove(date));
      } else {
        onSelectDates(append(date));
      }
    },
    [onSelectDates]
  );

  return (
    <BaseCalendarWrappedInProviders
      onPressDay={onPressDay}
      allowYearView={allowYearView}
      dateProperties={dateProperties}
      {...others}
    />
  );
};

export default MultiDateSelectionCalendar;
