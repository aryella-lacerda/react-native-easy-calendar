import { expect } from 'detox';

import App from '../Pages/app.page';
import Wrapper from '../Pages/wrapper.page';
import Calendar from '../Pages/calendar.page';

const app = new App();
const basicCalendar = new Calendar('basic-calendar');
const basicCalendarWrapper = new Wrapper('basic-calendar-wrapper');

const calendar = new Calendar('disabled-dates-calendar');
const wrapper = new Wrapper('disabled-dates-calendar-wrapper');

// Aug 2020: This calendar disables the following dates: ['2020-01-01', '2020-01-05', '2020-01-29']
beforeEach(async () => {
  await app.scrollDownTo(calendar.matcher);
});

describe('Test disabled dates feature', () => {
  test('Disables all the dates passed to disabledDates', async () => {
    await expect(calendar.monthView).toBeVisible();
    // Clicking disabled date does not alter selected date
    await expect(wrapper.selectedDate).toHaveText('January 1, 2020');
    await calendar.jan_01_2020.tap();
    await expect(wrapper.selectedDate).toHaveText('January 1, 2020');
    await calendar.jan_05_2020.tap();
    await expect(wrapper.selectedDate).toHaveText('January 1, 2020');
    await calendar.jan_31_2020.tap();
    await expect(wrapper.selectedDate).toHaveText('January 1, 2020');
  });

  test('Disables only the dates passed to disabledDates', async () => {
    await expect(calendar.monthView).toBeVisible();
    // Clicking enabled date alters selected date
    await expect(wrapper.selectedDate).toHaveText('January 1, 2020');
    await calendar.jan_02_2020.tap();
    await expect(wrapper.selectedDate).toHaveText('January 2, 2020');
    await calendar.jan_12_2020.tap();
    await expect(wrapper.selectedDate).toHaveText('January 12, 2020');
    await calendar.jan_27_2020.tap();
    await expect(wrapper.selectedDate).toHaveText('January 27, 2020');
  });

  test('Does not disable the same dates passed to disabledDays in other months', async () => {
    await calendar.leftArrow.tap();
    await expect(calendar.titleText).toHaveText('December 2019');
    // Calendar disables January 1, 5, and 31 but not December 1, 5, and 31
    await calendar.dec_01_2019.tap();
    await expect(wrapper.selectedDate).toHaveText('December 1, 2019');
    await calendar.dec_05_2019.tap();
    await expect(wrapper.selectedDate).toHaveText('December 5, 2019');
    await calendar.dec_31_2019.tap();
    await expect(wrapper.selectedDate).toHaveText('December 31, 2019');
  });

  test('Does not disable the same dates in other calendars', async () => {
    await app.scrollUpTo(basicCalendar.matcher);
    await expect(basicCalendar.monthView).toBeVisible();
    await basicCalendar.leftArrow.tap();

    // Clicking enabled date alters selected date
    await basicCalendar.jan_02_2020.tap();
    await expect(basicCalendarWrapper.selectedDate).toHaveText('January 2, 2020');
    await basicCalendar.jan_12_2020.tap();
    await expect(basicCalendarWrapper.selectedDate).toHaveText('January 12, 2020');
    await basicCalendar.jan_27_2020.tap();
    await expect(basicCalendarWrapper.selectedDate).toHaveText('January 27, 2020');
  });
});
