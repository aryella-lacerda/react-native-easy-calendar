import React from 'react';
import frenchLocale from 'dayjs/locale/fr';
import spanishLocale from 'dayjs/locale/es';
import Wrappper from '../Wrapper';

import { DateSelectionCalendar, DarkTheme } from 'react-native-easy-calendar';

const LocalesCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState('2020-01-01');
  const [selectedLocale, setSelectedLocale] = React.useState(frenchLocale);

  const toggle = () => {
    if (selectedLocale === frenchLocale) {
      setSelectedLocale(spanishLocale);
    } else {
      setSelectedLocale(frenchLocale);
    }
  };

  return (
    <Wrappper
      onPressActionButton={toggle}
      actionButtonLabel={'Toggle Locale'}
      actionButtonTestID={'toggle-locale'}
      testID={'locales-calendar-wrapper'}
      title={`${selectedLocale === frenchLocale ? 'French' : 'Spanish'}`}
      color={'dark'}>
      <DateSelectionCalendar
        testID={'locales-calendar'}
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
        locale={selectedLocale}
        showExtraDates={true}
        theme={DarkTheme}
      />
    </Wrappper>
  );
};

export default LocalesCalendar;
