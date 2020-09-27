import React from 'react';
import { View } from 'react-native';
import frenchLocale from 'dayjs/locale/fr';
import englishLocale from 'dayjs/locale/en-ca';
import Wrappper from './Wrapper';

import { DateSelectionCalendar, Locale } from 'react-native-easy-calendar';

const Calendar3 = () => {
  const [selectedDate, setSelectedDate] = React.useState<string>('2020-02-10');
  const [selectedLocale, setSelectedLocale] = React.useState<Locale>(englishLocale);

  const toggle = () => {
    if (selectedLocale === frenchLocale) {
      setSelectedLocale(englishLocale);
    } else {
      setSelectedLocale(frenchLocale);
    }
  };

  return (
    <Wrappper
      selectedDate={selectedDate}
      onPressActionButton={toggle}
      actionButtonLabel={'Toggle Locale'}
      actionButtonTestID={'toggle-locale'}
      testID={'calendar-3-wrapper'}
      title={`${
        selectedLocale === frenchLocale ? 'French' : 'English'
      } locale | Min and max dates | Light theme | 110% height`}
      color={'light'}>
      <View
        style={{
          height: 346.5, // 110% of CALENDAR_HEIGHT
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <DateSelectionCalendar
          testID={'calendar-3'}
          onSelectDate={setSelectedDate}
          selectedDate={selectedDate}
          initVisibleDate={'2020-02-10'}
          minDate={'2020-02-10'}
          maxDate={'2020-04-10'}
          locale={selectedLocale}
          showExtraDates={true}
        />
      </View>
    </Wrappper>
  );
};

export default Calendar3;
