import React from 'react';
import { DateSelectionCalendar, DarkTheme } from 'react-native-easy-calendar';

const DarkThemeCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState('2020-02-01');

  return (
    <DateSelectionCalendar
      showExtraDates={true}
      testID={'dark-theme-calendar'}
      onSelectDate={setSelectedDate}
      selectedDate={selectedDate}
      theme={DarkTheme}
    />
  );
};

export default DarkThemeCalendar;
