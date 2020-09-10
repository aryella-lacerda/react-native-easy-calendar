import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import type { ReactTestInstance } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeContext } from '../Contexts';
import { DefaultTheme } from '../Themes';

import Day, { Props } from './Day';

dayjs.extend(utc);

test('Month renders without error', () => {
  const day = new DayPage({});
  expect(day.container).toBeTruthy();
});

test('Component calls onPress callback when clicked', () => {
  const onPress = jest.fn();
  const day = new DayPage({ onPress });
  fireEvent.press(day.container);
  expect(onPress).toHaveBeenCalledTimes(1);
});

describe('Renders the correct string for date', () => {
  test('Valid date', () => {
    const date = '2020-09-18';
    const day = new DayPage({ date });
    expect(day.text).toHaveTextContent('18');
  });

  test('Invalid date', () => {
    console.warn = jest.fn();
    const date = '18-09-2020';
    const day = new DayPage({ date });
    expect(day.text).toHaveTextContent('');
  });
});

describe('Enabling and disabling', () => {
  test('Disable clicking if prop ´isDisabled´ is true', () => {
    const day = new DayPage({ isDisabled: true });
    expect(day.container).toBeDisabled();
  });

  test('Enable clicking if prop ´isDisabled´ is false', () => {
    const day = new DayPage({ isDisabled: false });
    expect(day.container).toBeEnabled();
  });
});

describe('Theme context', () => {
  describe('Container', () => {
    test('Container applies normal theme in enabled state', () => {
      const day = new DayPage({});
      expect(day.container).toHaveStyle(theme.normalDayContainer);

      expect(day.container).not.toHaveStyle(theme.disabledDayContainer);
      expect(day.container).not.toHaveStyle(theme.selectedDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodStartDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodEndDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfMonthDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfMonthDayContainer);
    });

    test('Container applies disabled theme in disabled state', () => {
      const day = new DayPage({ isDisabled: true });
      expect(day.container).toHaveStyle([
        theme.normalDayContainer,
        theme.disabledDayContainer,
      ]);

      expect(day.container).not.toHaveStyle(theme.selectedDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodStartDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodEndDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfMonthDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfMonthDayContainer);
    });

    test('Container applies selected theme in selected state', () => {
      const day = new DayPage({ isSelected: true });
      expect(day.container).toHaveStyle([
        theme.normalDayContainer,
        theme.selectedDayContainer,
      ]);

      expect(day.container).not.toHaveStyle(theme.disabledDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodStartDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodEndDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfMonthDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfMonthDayContainer);
    });

    test('Container applies period themes in period state', () => {
      const day = new DayPage({ isPeriod: true });
      expect(day.container).toHaveStyle([
        theme.normalDayContainer,
        theme.periodDayContainer,
      ]);

      expect(day.container).not.toHaveStyle(theme.selectedDayContainer);
      expect(day.container).not.toHaveStyle(theme.disabledDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodStartDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodEndDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfMonthDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfMonthDayContainer);
    });

    test('Container applies start of period themes in start of period state', () => {
      const day = new DayPage({ isPeriodStart: true });
      expect(day.container).toHaveStyle([
        theme.normalDayContainer,
        theme.periodStartDayContainer,
      ]);

      expect(day.container).not.toHaveStyle(theme.selectedDayContainer);
      expect(day.container).not.toHaveStyle(theme.disabledDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodEndDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfMonthDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfMonthDayContainer);
    });

    test('Container applies end of period themes in end of period state', () => {
      const day = new DayPage({ isPeriodEnd: true });
      expect(day.container).toHaveStyle([
        theme.normalDayContainer,
        theme.periodEndDayContainer,
      ]);

      expect(day.container).not.toHaveStyle(theme.selectedDayContainer);
      expect(day.container).not.toHaveStyle(theme.disabledDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodStartDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfMonthDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfMonthDayContainer);
    });

    test('Container applies start of week themes in start of week state', () => {
      const day = new DayPage({ isStartOfWeek: true });
      expect(day.container).toHaveStyle([
        theme.normalDayContainer,
        theme.startOfWeekDayContainer,
      ]);

      expect(day.container).not.toHaveStyle(theme.selectedDayContainer);
      expect(day.container).not.toHaveStyle(theme.disabledDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodStartDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodEndDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfMonthDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfMonthDayContainer);
    });

    test('Container applies end of week themes in end of week state', () => {
      const day = new DayPage({ isEndOfWeek: true });
      expect(day.container).toHaveStyle([
        theme.normalDayContainer,
        theme.endOfWeekDayContainer,
      ]);

      expect(day.container).not.toHaveStyle(theme.selectedDayContainer);
      expect(day.container).not.toHaveStyle(theme.disabledDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodStartDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodEndDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfMonthDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfMonthDayContainer);
    });

    test('Container applies start of month themes in start of month state', () => {
      const day = new DayPage({ isStartOfMonth: true });
      expect(day.container).toHaveStyle([
        theme.normalDayContainer,
        theme.startOfMonthDayContainer,
      ]);

      expect(day.container).not.toHaveStyle(theme.selectedDayContainer);
      expect(day.container).not.toHaveStyle(theme.disabledDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodStartDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodEndDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfMonthDayContainer);
    });

    test('Container applies end of month themes in end of month state', () => {
      const day = new DayPage({ isEndOfMonth: true });
      expect(day.container).toHaveStyle([
        theme.normalDayContainer,
        theme.endOfMonthDayContainer,
      ]);

      expect(day.container).not.toHaveStyle(theme.selectedDayContainer);
      expect(day.container).not.toHaveStyle(theme.disabledDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodStartDayContainer);
      expect(day.container).not.toHaveStyle(theme.periodEndDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfWeekDayContainer);
      expect(day.container).not.toHaveStyle(theme.startOfMonthDayContainer);
      expect(day.container).not.toHaveStyle(theme.endOfWeekDayContainer);
    });
  });

  describe('Text', () => {
    test('Text applies normal theme in enabled state', () => {
      const day = new DayPage({});
      expect(day.text).toHaveStyle(theme.normalDayText);

      expect(day.text).not.toHaveStyle(theme.disabledDayText);
      expect(day.text).not.toHaveStyle(theme.selectedDayText);
      expect(day.text).not.toHaveStyle(theme.periodDayText);
      expect(day.text).not.toHaveStyle(theme.periodStartDayText);
      expect(day.text).not.toHaveStyle(theme.periodEndDayText);
      expect(day.text).not.toHaveStyle(theme.startOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.endOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.startOfMonthDayText);
      expect(day.text).not.toHaveStyle(theme.endOfMonthDayText);
    });

    test('Text applies disabled theme in disabled state', () => {
      const day = new DayPage({ isDisabled: true });
      expect(day.text).toHaveStyle([theme.normalDayText, theme.disabledDayText]);

      expect(day.text).not.toHaveStyle(theme.selectedDayText);
      expect(day.text).not.toHaveStyle(theme.periodDayText);
      expect(day.text).not.toHaveStyle(theme.periodStartDayText);
      expect(day.text).not.toHaveStyle(theme.periodEndDayText);
      expect(day.text).not.toHaveStyle(theme.startOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.endOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.startOfMonthDayText);
      expect(day.text).not.toHaveStyle(theme.endOfMonthDayText);
    });

    test('Text applies selected theme in selected state', () => {
      const day = new DayPage({ isSelected: true });
      expect(day.text).toHaveStyle([theme.normalDayText, theme.selectedDayText]);

      expect(day.text).not.toHaveStyle(theme.disabledDayText);
      expect(day.text).not.toHaveStyle(theme.periodDayText);
      expect(day.text).not.toHaveStyle(theme.periodStartDayText);
      expect(day.text).not.toHaveStyle(theme.periodEndDayText);
      expect(day.text).not.toHaveStyle(theme.startOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.endOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.startOfMonthDayText);
      expect(day.text).not.toHaveStyle(theme.endOfMonthDayText);
    });

    test('Text applies period themes in period state', () => {
      const day = new DayPage({ isPeriod: true });
      expect(day.text).toHaveStyle([theme.normalDayText, theme.periodDayText]);

      expect(day.text).not.toHaveStyle(theme.selectedDayText);
      expect(day.text).not.toHaveStyle(theme.disabledDayText);
      expect(day.text).not.toHaveStyle(theme.periodStartDayText);
      expect(day.text).not.toHaveStyle(theme.periodEndDayText);
      expect(day.text).not.toHaveStyle(theme.startOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.endOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.startOfMonthDayText);
      expect(day.text).not.toHaveStyle(theme.endOfMonthDayText);
    });

    test('Text applies start of period themes in start of period state', () => {
      const day = new DayPage({ isPeriodStart: true });
      expect(day.text).toHaveStyle([theme.normalDayText, theme.periodStartDayText]);

      expect(day.text).not.toHaveStyle(theme.selectedDayText);
      expect(day.text).not.toHaveStyle(theme.disabledDayText);
      expect(day.text).not.toHaveStyle(theme.periodDayText);
      expect(day.text).not.toHaveStyle(theme.periodEndDayText);
      expect(day.text).not.toHaveStyle(theme.startOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.endOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.startOfMonthDayText);
      expect(day.text).not.toHaveStyle(theme.endOfMonthDayText);
    });

    test('Text applies end of period themes in end of period state', () => {
      const day = new DayPage({ isPeriodEnd: true });
      expect(day.text).toHaveStyle([theme.normalDayText, theme.periodEndDayText]);

      expect(day.text).not.toHaveStyle(theme.selectedDayText);
      expect(day.text).not.toHaveStyle(theme.disabledDayText);
      expect(day.text).not.toHaveStyle(theme.periodDayText);
      expect(day.text).not.toHaveStyle(theme.periodStartDayText);
      expect(day.text).not.toHaveStyle(theme.startOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.endOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.startOfMonthDayText);
      expect(day.text).not.toHaveStyle(theme.endOfMonthDayText);
    });

    test('Text applies start of week themes in start of week state', () => {
      const day = new DayPage({ isStartOfWeek: true });
      expect(day.text).toHaveStyle([theme.normalDayText, theme.startOfWeekDayText]);

      expect(day.text).not.toHaveStyle(theme.selectedDayText);
      expect(day.text).not.toHaveStyle(theme.disabledDayText);
      expect(day.text).not.toHaveStyle(theme.periodDayText);
      expect(day.text).not.toHaveStyle(theme.periodStartDayText);
      expect(day.text).not.toHaveStyle(theme.periodEndDayText);
      expect(day.text).not.toHaveStyle(theme.endOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.startOfMonthDayText);
      expect(day.text).not.toHaveStyle(theme.endOfMonthDayText);
    });

    test('Text applies end of week themes in end of week state', () => {
      const day = new DayPage({ isEndOfWeek: true });
      expect(day.text).toHaveStyle([theme.normalDayText, theme.endOfWeekDayText]);

      expect(day.text).not.toHaveStyle(theme.selectedDayText);
      expect(day.text).not.toHaveStyle(theme.disabledDayText);
      expect(day.text).not.toHaveStyle(theme.periodDayText);
      expect(day.text).not.toHaveStyle(theme.periodStartDayText);
      expect(day.text).not.toHaveStyle(theme.periodEndDayText);
      expect(day.text).not.toHaveStyle(theme.startOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.startOfMonthDayText);
      expect(day.text).not.toHaveStyle(theme.endOfMonthDayText);
    });

    test('Text applies start of month themes in start of month state', () => {
      const day = new DayPage({ isStartOfMonth: true });
      expect(day.text).toHaveStyle([theme.normalDayText, theme.startOfMonthDayText]);

      expect(day.text).not.toHaveStyle(theme.selectedDayText);
      expect(day.text).not.toHaveStyle(theme.disabledDayText);
      expect(day.text).not.toHaveStyle(theme.periodDayText);
      expect(day.text).not.toHaveStyle(theme.periodStartDayText);
      expect(day.text).not.toHaveStyle(theme.periodEndDayText);
      expect(day.text).not.toHaveStyle(theme.endOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.startOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.endOfMonthDayText);
    });

    test('Text applies end of month themes in end of month state', () => {
      const day = new DayPage({ isEndOfMonth: true });
      expect(day.text).toHaveStyle([theme.normalDayText, theme.endOfMonthDayText]);

      expect(day.text).not.toHaveStyle(theme.selectedDayText);
      expect(day.text).not.toHaveStyle(theme.disabledDayText);
      expect(day.text).not.toHaveStyle(theme.periodDayText);
      expect(day.text).not.toHaveStyle(theme.periodStartDayText);
      expect(day.text).not.toHaveStyle(theme.periodEndDayText);
      expect(day.text).not.toHaveStyle(theme.startOfWeekDayText);
      expect(day.text).not.toHaveStyle(theme.startOfMonthDayText);
      expect(day.text).not.toHaveStyle(theme.endOfWeekDayText);
    });
  });
});

class DayPage {
  container: ReactTestInstance;
  text: ReactTestInstance;

  constructor({
    date = '2020-01-01',
    onPress = () => {},
    ...booleanProps
  }: Partial<Props>) {
    const { getByTestId } = render(
      <ThemeContext.Provider value={theme}>
        <Day {...booleanProps} date={date} onPress={onPress} />
      </ThemeContext.Provider>
    );

    this.container = getByTestId('day-container');
    this.text = getByTestId('day-text');
  }
}

const containerStyles = {
  normalDayContainer: {
    marginTop: 2,
    marginLeft: 1,
  },
  periodDayContainer: {
    marginTop: 2,
    marginRight: 1,
  },
  disabledDayContainer: {
    marginTop: 3,
    marginBottom: 1,
  },
  selectedDayContainer: {
    marginTop: 4,
    paddingTop: 1,
  },
  periodEndDayContainer: {
    marginTop: 5,
    paddingBottom: 1,
  },
  periodStartDayContainer: {
    marginTop: 6,
    paddingLeft: 1,
  },
  startOfWeekDayContainer: {
    marginTop: 7,
    paddingRight: 1,
  },
  endOfWeekDayContainer: {
    marginTop: 8,
    backgroundColor: 'red',
  },
  startOfMonthDayContainer: {
    marginTop: 9,
    elevation: 1,
  },
  endOfMonthDayContainer: {
    marginTop: 1,
    alignItems: 'center' as const,
  },
};

const textStyle = {
  normalDayText: {
    marginTop: 2,
    marginLeft: 1,
  },
  periodDayText: {
    marginTop: 2,
    marginRight: 1,
  },
  disabledDayText: {
    marginTop: 3,
    marginBottom: 1,
  },
  selectedDayText: {
    marginTop: 4,
    paddingTop: 1,
  },
  periodEndDayText: {
    marginTop: 5,
    paddingBottom: 1,
  },
  periodStartDayText: {
    marginTop: 6,
    paddingLeft: 1,
  },
  startOfWeekDayText: {
    marginTop: 7,
    paddingRight: 1,
  },
  endOfWeekDayText: {
    marginTop: 8,
    backgroundColor: 'red',
  },
  startOfMonthDayText: {
    marginTop: 9,
    elevation: 1,
  },
  endOfMonthDayText: {
    marginTop: 1,
    alignItems: 'center' as const,
  },
};

const theme = {
  ...DefaultTheme,
  ...containerStyles,
  ...textStyle,
};
