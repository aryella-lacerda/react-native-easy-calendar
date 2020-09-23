import React from 'react';
import { DateSelectionCalendar, DarkTheme } from 'react-native-easy-calendar';
import Wrapper from '../../Wrapper';

const MinMaxDates = () => {
  const [selectedDate, setSelectedDate] = React.useState('2020-02-10');

  return (
    <Wrapper
      color={'dark'}
      selectedDate={selectedDate}
      testID={'min-and-max-date-calendar-wrapper'}
      title={'Calendar with min and max dates'}>
      <DateSelectionCalendar
        testID={'min-and-max-date-calendar'}
        minDate={'2020-02-10'}
        maxDate={'2020-04-10'}
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
        theme={DarkTheme}
      />
    </Wrapper>
  );
};

export default MinMaxDates;
