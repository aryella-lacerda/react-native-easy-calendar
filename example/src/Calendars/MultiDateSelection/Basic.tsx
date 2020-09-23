import React from 'react';
import { MultiDateSelectionCalendar } from 'react-native-easy-calendar';
import Wrapper from '../../Wrapper';

const BasicCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState<string[]>([]);

  return (
    <Wrapper testID={'basic-calendar-wrapper'} title={'Basic calendar'} color={'light'}>
      <MultiDateSelectionCalendar
        initVisibleDate={'2020-01-01'}
        showExtraDates={true}
        testID={'basic-calendar'}
        onSelectDates={setSelectedDate}
        selectedDates={selectedDate}
      />
    </Wrapper>
  );
};

export default BasicCalendar;
