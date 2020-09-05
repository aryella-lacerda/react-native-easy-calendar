import { Dimensions, StyleSheet } from 'react-native';
import { addOpacity } from '../Utils';

import type { Theme } from '../Entities';

const { width } = Dimensions.get('screen');
const CALENDAR_HEIGHT = 315;
const HEADER_HEIGHT = 45;

const text = StyleSheet.create({
  normal: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.03,
    color: '#000000',
  },
  disabled: {
    color: addOpacity('#000000', 0.3),
  },
  // Selected or period days
  highlighted: {
    color: '#000000',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    width: width / 7,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    color: '#777',
  },
});

const container = StyleSheet.create({
  calendar: {
    height: CALENDAR_HEIGHT,
  },
  header: {
    height: HEADER_HEIGHT,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  weekdays: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  month: {
    width: width / 3,
    height: (CALENDAR_HEIGHT - HEADER_HEIGHT) / 4,
    justifyContent: 'center',
  },
  months: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  day: {
    height: 32,
    width: width / 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  periodDay: {
    width: '100%',
    backgroundColor: addOpacity('#000000', 0.1),
    borderRadius: 0,
  },
  selectedDay: {
    backgroundColor: addOpacity('#000000', 0.1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  periodEnds: {
    borderRadius: 8,
  },
});

const arrow = StyleSheet.create({
  normal: {
    tintColor: 'pink',
  },
  disabled: {
    tintColor: 'grey',
  },
});

const DefaultTheme: Theme = StyleSheet.create({
  calendarContainer: container.calendar,
  headerContainer: container.header,
  normalArrowContainer: {},
  disabledArrowContainer: {},
  normalArrowImage: arrow.normal,
  disabledArrowImage: arrow.disabled,
  normalMonthContainer: container.month,
  disabledMonthContainer: {},
  selectedMonthContainer: {},
  normalMonthText: text.normal,
  disabledMonthText: text.disabled,
  selectedMonthText: text.highlighted,
  titleContainer: {},
  titleText: text.title,
  weekdaysContainer: container.weekdays,
  weekdayText: text.subtitle,
  daysContainer: container.days,
  monthsContainer: container.months,
  normalDayContainer: container.day,
  disabledDayContainer: {},
  selectedDayContainer: container.selectedDay,
  extraDayContainer: {},
  periodDayContainer: container.periodDay,
  periodStartDayContainer: container.periodEnds,
  periodEndDayContainer: container.periodEnds,
  startOfWeekDayContainer: {},
  endOfWeekDayContainer: {},
  startOfMonthDayContainer: {},
  endOfMonthDayContainer: {},
  dayHighlightContainer: {},
  normalDayText: text.normal,
  disabledDayText: text.disabled,
  selectedDayText: text.highlighted,
  extraDayText: text.disabled,
  periodDayText: text.highlighted,
  periodStartDayText: text.highlighted,
  periodEndDayText: text.highlighted,
  startOfWeekDayText: {},
  endOfWeekDayText: {},
  startOfMonthDayText: {},
  endOfMonthDayText: {},
});

export default DefaultTheme;
