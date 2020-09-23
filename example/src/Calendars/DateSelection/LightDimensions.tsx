import React from 'react';
import { View } from 'react-native';

import { DateSelectionCalendar } from 'react-native-easy-calendar';
import Wrapper from '../../Wrapper';

const LightDimensionsCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState('2020-02-01');

  return (
    <Wrapper
      testID={'light-dimensions-calendar-wrapper'}
      selectedDate={selectedDate}
      title={'Light Mode | 90% width | 110% height'}
      color={'light'}>
      <View
        style={{
          width: '90%',
          height: 346.5, // 110% of CALENDAR_HEIGHT
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <DateSelectionCalendar
          showExtraDates={true}
          testID={'light-dimensions-calendar'}
          onSelectDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </View>
    </Wrapper>
  );
};

export default LightDimensionsCalendar;
