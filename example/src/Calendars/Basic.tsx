import React from 'react';
import { DateSelectionCalendar } from 'react-native-easy-calendar';
import Wrapper from '../Wrapper';

const BasicCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState('2020-02-01');

  return (
    <Wrapper
      testID={'basic-calendar-wrapper'}
      selectedDate={selectedDate}
      title={'Basic calendar'}
      color={'light'}>
      <DateSelectionCalendar
        showExtraDates={true}
        testID={'basic-calendar'}
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
      />
    </Wrapper>
  );
};

export default BasicCalendar;
