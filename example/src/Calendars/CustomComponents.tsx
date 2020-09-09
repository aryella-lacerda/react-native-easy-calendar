import React from 'react';
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
import Wrapper from '../Wrapper';

const { width } = Dimensions.get('screen');

const CustomTitle: TitleComponentType = ({ date, onPress, isDisabled, activeView }) => (
  <TouchableOpacity onPress={onPress} disabled={isDisabled}>
    <Text>
      {activeView === VIEW.MONTH ? `${date.format('MMMM YYYY')}` : `${date.format('YYYY')}`}
    </Text>
  </TouchableOpacity>
);

const CustomArrow: ArrowComponentType = ({ direction, isDisabled, onPress }) => (
  <TouchableOpacity onPress={onPress} disabled={isDisabled}>
    <Text>{`${direction === 'left' ? '<' : '>'}`}</Text>
  </TouchableOpacity>
);

const CustomWeekdays: WeekdaysComponentType = ({ days }) => (
  <View style={styles.weekdaysContainer}>
    {days.map((day, index) => (
      <Text key={index} style={styles.weekdayText}>
        {day.toLocaleUpperCase()}
      </Text>
    ))}
  </View>
);

const CustomDay: DayComponentType = ({ date, onPress, isDisabled }) => (
  <TouchableOpacity onPress={onPress} disabled={isDisabled} style={styles.dayContainer}>
    <Text>{date?.date()}</Text>
  </TouchableOpacity>
);

const CustomMonth: MonthComponentType = ({ date, onPress, isDisabled }) => (
  <TouchableOpacity style={styles.monthContainer} onPress={onPress} disabled={isDisabled}>
    <Text>{date.format('MMM')}</Text>
  </TouchableOpacity>
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
