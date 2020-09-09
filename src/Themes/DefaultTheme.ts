import { Dimensions, StyleSheet } from 'react-native';
import { addOpacity } from '../Utils';
import type { Theme } from '../Entities';
import Colors from './Colors';

const { light } = Colors;
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
    color: light.baseText,
  },
  disabled: {
    color: light.disabled,
  },
  highlighted: {
    color: light.baseText,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0.2,
    fontSize: 14,
    color: light.baseText,
  },
  weekday: {
    width: width / 7,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 9,
    fontWeight: 'bold',
    color: light.elevation,
  },
  selected: {
    color: light.base,
    fontWeight: '700',
  },
});

const container = StyleSheet.create({
  calendar: {
    height: CALENDAR_HEIGHT,
    backgroundColor: light.base,
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
    backgroundColor: addOpacity(light.baseText, 0.1),
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
    backgroundColor: light.primary,
    borderRadius: DAY_SIZE / 3,
    shadowColor: light.baseText,
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
    tintColor: light.primary,
    aspectRatio: 1,
  },
  disabled: {
    tintColor: light.disabled,
  },
});

const DefaultTheme: Theme = {
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
};

export default DefaultTheme;
