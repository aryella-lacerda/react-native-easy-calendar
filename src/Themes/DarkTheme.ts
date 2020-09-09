import { Dimensions } from 'react-native';
import type { Theme } from '../Entities';
import DefaultTheme from './DefaultTheme';

const { width } = Dimensions.get('screen');
const CALENDAR_HEIGHT = 335;
const DAY_SIZE = 32;
const DAY_MARGIN_HORIZONTAL = (width / 7 - DAY_SIZE) / 2;

const DarkTheme: Theme = {
  ...DefaultTheme,
  calendarContainer: {
    backgroundColor: '#2d2d2d',
    paddingVertical: 10,
    height: CALENDAR_HEIGHT,
  },
  titleText: {
    color: '#e6e6e6',
    letterSpacing: 0.8,
    fontSize: 15,
    fontWeight: '600',
  },
  normalDayText: {
    color: '#e6e6e6',
  },
  normalMonthText: {
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
    color: '#e6e6e6',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700',
  },
  selectedMonthText: {
    color: '#FFC491',
  },
  extraDayText: {
    color: '#7c7c7c',
    fontWeight: '300',
  },
  normalArrowImage: {
    tintColor: '#FFC491',
  },
  normalArrowContainer: {
    backgroundColor: '#383838',
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDayText: {
    fontWeight: '700',
    color: '#383838',
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
    backgroundColor: '#FFC491',
    borderRadius: DAY_SIZE / 2,
  },
};

export default DarkTheme;
