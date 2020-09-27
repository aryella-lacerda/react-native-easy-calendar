import React from 'react';
import { SingleDateSelectionCalendar } from 'react-native-easy-calendar';
import Wrapper from './Wrapper';

const BasicCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState<string>('');

  return (
    <Wrapper
      testID={'calendar-1-wrapper'}
      selectedDate={selectedDate}
      title={'Basic calendar | Default Theme'}
      color={'light'}>
      <SingleDateSelectionCalendar
        initVisibleDate={'2020-01-01'}
        showExtraDates={true}
        testID={'calendar-1'}
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
      />
    </Wrapper>
  );
};

export default BasicCalendar;
