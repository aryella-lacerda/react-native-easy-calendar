import React from 'react';
import dayjs from 'dayjs';
import { Text, TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native';
import {
  DateSelectionCalendar,
  VIEW,
  TitleComponentType,
  ArrowComponentType,
  WeekdaysComponentType,
  MonthComponentType,
  DayComponentType,
  LightTheme,
} from 'react-native-easy-calendar';
import Wrapper from '../../Wrapper';

const { width } = Dimensions.get('screen');

const CustomTitle: TitleComponentType = React.memo(
  ({ date, onPress, isDisabled, activeView, locale }) => {
    const _onPress = React.useCallback(() => onPress(date), [date, onPress]);
    const _date = dayjs(date).locale(locale);

    return (
      <TouchableOpacity onPress={_onPress} disabled={isDisabled}>
        <Text>
          {activeView === VIEW.MONTH
            ? `${_date.format('MMMM YYYY')}`
            : `${_date.format('YYYY')}`}
        </Text>
      </TouchableOpacity>
    );
  }
);

const CustomArrow: ArrowComponentType = React.memo(({ direction, isDisabled, onPress }) => (
  <TouchableOpacity onPress={onPress} disabled={isDisabled}>
    <Text>{`${direction === 'left' ? '<' : '>'}`}</Text>
  </TouchableOpacity>
));

const CustomWeekdays: WeekdaysComponentType = React.memo(({ days }) => (
  <View style={styles.weekdaysContainer}>
    {days.map((day, index) => (
      <Text key={index} style={styles.weekdayText}>
        {day.toLocaleUpperCase()}
      </Text>
    ))}
  </View>
));

const CustomDay: DayComponentType = React.memo(({ date, onPress, isDisabled }) => {
  const _onPress = React.useCallback(() => onPress(date), [date, onPress]);

  return (
    <TouchableOpacity onPress={_onPress} disabled={isDisabled} style={styles.dayContainer}>
      <Text>{dayjs(date).date()}</Text>
    </TouchableOpacity>
  );
});

const CustomMonth: MonthComponentType = React.memo(
  ({ date, onPress, isDisabled, locale }) => {
    const _onPress = React.useCallback(() => onPress(date), [date, onPress]);

    return (
      <TouchableOpacity
        style={styles.monthContainer}
        onPress={_onPress}
        disabled={isDisabled}>
        <Text>{dayjs(date).locale(locale).format('MMM')}</Text>
      </TouchableOpacity>
    );
  }
);

const CustomComponents = () => {
  const [selectedDate, setSelectedDate] = React.useState('2020-07-05');

  return (
    <View style={styles.container}>
      <Wrapper
        testID={'custom-components-calendar-wrapper'}
        color="light"
        title={'Custom components'}>
        <DateSelectionCalendar
          onSelectDate={setSelectedDate}
          selectedDate={selectedDate}
          TitleComponent={CustomTitle}
          ArrowComponent={CustomArrow}
          WeekdaysComponent={CustomWeekdays}
          MonthComponent={CustomMonth}
          DayComponent={CustomDay}
          theme={{
            ...LightTheme,
            calendarContainer: {
              height: 350,
            },
          }}
        />
      </Wrapper>
    </View>
  );
};

export default CustomComponents;

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'orange',
    borderTopWidth: 10,
  },
  weekdaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingVertical: 10,
    borderColor: 'orange',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  weekdayText: {
    width: width / 7,
    textAlign: 'center',
    fontSize: 10,
  },
  dayContainer: {
    height: 32,
    width: width / 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    borderColor: '#CCC',
    borderBottomWidth: 1,
  },
  monthContainer: {
    width: width * 0.32,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
