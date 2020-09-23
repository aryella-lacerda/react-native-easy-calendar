import React from 'react';
import { DateSelectionCalendar } from 'react-native-easy-calendar';
import Wrapper from '../../Wrapper';

const ForbidYearView = () => {
  const [selectedDate, setSelectedDate] = React.useState('2020-01-01');

  return (
    <Wrapper
      testID={'forbid-year-view-calendar-wrapper'}
      color="light"
      title={'Forbid year view'}>
      <DateSelectionCalendar
        testID={'forbid-year-view-calendar'}
        allowYearView={false}
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
      />
    </Wrapper>
  );
};

export default ForbidYearView;
