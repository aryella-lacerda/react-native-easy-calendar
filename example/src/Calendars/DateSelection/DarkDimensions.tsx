import React from 'react';
import { View } from 'react-native';

import { DateSelectionCalendar, DarkTheme } from 'react-native-easy-calendar';
import Wrapper from '../../Wrapper';

const DarkDimensionsCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState('2020-02-01');

  return (
    <Wrapper
      testID={'dark-dimensions-calendar-wrapper'}
      selectedDate={selectedDate}
      title={'Dark Mode | 90% width | 110% height'}
      color={'dark'}>
      <View
        style={{
          width: '90%',
          height: 346.5, // 110% of CALENDAR_HEIGHT
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <DateSelectionCalendar
          showExtraDates={true}
          testID={'dark-dimensions-calendar'}
          onSelectDate={setSelectedDate}
          selectedDate={selectedDate}
          theme={DarkTheme}
        />
      </View>
    </Wrapper>
  );
};

export default DarkDimensionsCalendar;
