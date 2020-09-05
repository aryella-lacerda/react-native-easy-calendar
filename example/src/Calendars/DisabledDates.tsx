import React from 'react';
import { DateSelectionCalendar } from 'react-native-easy-calendar';
import Wrapper from '../Wrapper';

const DisabledDates = () => {
  const [selectedDate, setSelectedDate] = React.useState('2020-01-01');

  const disabledDates = React.useMemo(() => ['2020-01-01', '2020-01-05', '2020-01-31'], []);

  return (
    <Wrapper
      testID={'disabled-dates-calendar-wrapper'}
      selectedDate={selectedDate}
      color="light"
      title={'Calendar with disabled dates'}>
      <DateSelectionCalendar
        testID={'disabled-dates-calendar'}
        disabledDates={disabledDates}
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
      />
    </Wrapper>
  );
};

export default DisabledDates;
