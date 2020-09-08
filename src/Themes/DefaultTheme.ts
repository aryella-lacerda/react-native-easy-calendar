import { Dimensions, StyleSheet } from 'react-native';
import { addOpacity } from '../Utils';

import type { Theme } from '../Entities';

const { width } = Dimensions.get('screen');
const CALENDAR_HEIGHT = 315;
const HEADER_HEIGHT = 45;
const DAY_SIZE = 32;
const DAY_MARGIN_HORIZONTAL = (width / 7 - DAY_SIZE) / 2;

const text = StyleSheet.create({
  normal: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.03,
    color: '#000000',
  },
  disabled: {
    color: '#C9C9CA',
  },
  // Selected or period days
  highlighted: {
    color: '#000000',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0.2,
    fontSize: 14,
    color: '#333',
  },
  weekday: {
    width: width / 7,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 9,
    fontWeight: 'bold',
    color: '#555',
  },
  selected: {
    color: '#FFFFFF',
    fontWeight: '700',
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
  periodDay: {
    width: '100%',
    backgroundColor: addOpacity('#000000', 0.1),
    borderRadius: 0,
  },
  normalDay: {
    height: DAY_SIZE,
    width: DAY_SIZE,
    marginHorizontal: DAY_MARGIN_HORIZONTAL,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  selectedDay: {
    backgroundColor: '#04997C',
    borderRadius: DAY_SIZE / 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  periodEnds: {
    borderRadius: 8,
  },
});

const arrow = StyleSheet.create({
  normal: {
    tintColor: '#04997C',
    aspectRatio: 1,
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
  weekdayText: text.weekday,
  daysContainer: container.days,
  monthsContainer: container.months,
  normalDayContainer: container.normalDay,
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
  selectedDayText: text.selected,
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
