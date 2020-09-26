import React from 'react';
import { MultiDateSelectionCalendar } from 'react-native-easy-calendar';
import Wrapper from './Wrapper';

const BasicCalendar = () => {
  const [selectedDates, setSelectedDates] = React.useState<string[]>([]);

  return (
    <Wrapper
      selectedDates={selectedDates}
      testID={'calendar-1-wrapper'}
      title={'Basic calendar | Default Theme'}
      color={'light'}>
      <MultiDateSelectionCalendar
        initVisibleDate={'2020-01-01'}
        showExtraDates={true}
        testID={'calendar-1'}
        onSelectDates={setSelectedDates}
        selectedDates={selectedDates}
      />
    </Wrapper>
  );
};

export default BasicCalendar;
