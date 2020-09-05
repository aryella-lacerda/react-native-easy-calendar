import React from 'react';
import dayjs from 'dayjs';
import type { ReactTestInstance } from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import { ThemeContext } from '../Contexts';
import { DefaultLocale } from '../Locales';
import { DefaultTheme } from '../Themes';
import type { Locale, Theme } from '../Entities';

import Months, { Props } from './Months';

export class MonthsPage {
  component: ReactTestInstance;
  firstMonth?: ReactTestInstance;
  firstCustomMonth?: ReactTestInstance;
  monthArray: ReactTestInstance[];
  customMonthArray: ReactTestInstance[];

  constructor({
    onPressMonth = () => {},
    dateProperties = {},
    visibleDate = dayjs('2020-05-01'),
    MonthComponent,
    minDate,
    maxDate,
    locale = DefaultLocale,
    theme = DefaultTheme,
  }: Partial<Props> & { locale?: Locale; theme?: Theme }) {
    const { getAllByRole, getByTestId, getAllByTestId } = render(
      <ThemeContext.Provider value={theme}>
        <Months
          {...{
            MonthComponent,
            onPressMonth,
            dateProperties,
            visibleDate: visibleDate.locale('custom', locale),
            minDate,
            maxDate,
          }}
        />
      </ThemeContext.Provider>
    );

    this.component = getByTestId('months-container');
    this.monthArray = !MonthComponent ? getAllByRole('button') : [];
    this.customMonthArray = MonthComponent ? getAllByTestId('custom-month') : [];

    this.firstMonth = this.monthArray.length ? this.monthArray[0] : undefined;
    this.firstCustomMonth = this.customMonthArray.length
      ? this.customMonthArray[0]
      : undefined;
  }
}

export const testLocale = {
  ...DefaultLocale,
  monthsShort: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
};

export const testTheme = {
  ...DefaultTheme,
  monthsContainer: {
    marginTop: 10,
    backgroundColor: 'black',
  },
};
