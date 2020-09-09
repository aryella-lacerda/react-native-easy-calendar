import { Dimensions } from 'react-native';
import type { Theme } from '../Entities';
import DefaultTheme from './DefaultTheme';
import Colors from './Colors';

const { dark } = Colors;
const { width } = Dimensions.get('screen');

const CALENDAR_HEIGHT = 335;
const DAY_SIZE = 32;
const DAY_MARGIN_HORIZONTAL = (width / 7 - DAY_SIZE) / 2;

const DarkTheme: Theme = {
  ...DefaultTheme,
  calendarContainer: {
    backgroundColor: dark.base,
    paddingVertical: 10,
    height: CALENDAR_HEIGHT,
  },
  titleText: {
    color: dark.baseText,
    letterSpacing: 0.8,
    fontSize: 15,
    fontWeight: '600',
  },
  normalDayText: {
    color: dark.baseText,
  },
  normalMonthText: {
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
    color: dark.baseText,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700',
  },
  selectedMonthText: {
    color: dark.primary,
  },
  extraDayText: {
    color: dark.disabled,
    fontWeight: '300',
  },
  normalArrowImage: {
    tintColor: dark.primary,
  },
  normalArrowContainer: {
    backgroundColor: dark.elevation,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDayText: {
    fontWeight: '700',
    color: dark.primaryText,
  },
  normalDayContainer: {
    height: DAY_SIZE,
    width: DAY_SIZE,
    marginHorizontal: DAY_MARGIN_HORIZONTAL,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  selectedDayContainer: {
    backgroundColor: dark.primary,
    borderRadius: DAY_SIZE / 2,
  },
};

export default DarkTheme;
