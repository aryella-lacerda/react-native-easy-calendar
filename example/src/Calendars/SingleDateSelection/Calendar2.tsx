import React from 'react';
import { View } from 'react-native';
import { DateSelectionCalendar, DarkTheme } from 'react-native-easy-calendar';
import Wrapper from './Wrapper';

const Calendar2 = () => {
  const [selectedDate, setSelectedDate] = React.useState<string>('2020-01-02');
  const disabledDates = React.useMemo(() => ['2020-01-01', '2020-01-05', '2020-01-31'], []);

  return (
    <Wrapper
      testID={'calendar-2-wrapper'}
      selectedDate={selectedDate}
      color="dark"
      title={'Disabled dates | Forbid year view | Dark theme | 90% width'}>
      <View
        style={{
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <DateSelectionCalendar
          testID={'calendar-2'}
          allowYearView={false}
          theme={DarkTheme}
          initVisibleDate={'2020-01-01'}
          disabledDates={disabledDates}
          onSelectDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </View>
    </Wrapper>
  );
};

export default Calendar2;
