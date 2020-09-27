import { expect } from 'detox';
import App from '../Pages/app.page';
import Wrapper from '../Pages/wrapper.page';
import Calendar from '../Pages/calendar.page';

const app = new App();
const calendar = new Calendar('calendar-2');
const wrapper = new Wrapper('calendar-2-wrapper');

// This calendar disables the following dates: ['2020-01-01', '2020-01-05', '2020-01-31']

describe.each(['single-date-selection-calendar', 'multi-date-selection-calendar'])(
  'Passing disabled dates array to %s',
  (cardID) => {
    test('Prepare', async () => {
      await device.reloadReactNative();
      await app.card(cardID).tap();
      await app.scrollDownTo(calendar.matcher);
    });

    test('Disables all the dates passed to disabledDates', async () => {
      // Clicking disabled date does not alter selected dates
      await expect(wrapper.self).toHaveLabel('2020-01-02');
      await calendar.jan_01_2020.tap();
      await expect(wrapper.self).toHaveLabel('2020-01-02');
      await calendar.jan_05_2020.tap();
      await expect(wrapper.self).toHaveLabel('2020-01-02');
      await calendar.jan_31_2020.tap();
      await expect(wrapper.self).toHaveLabel('2020-01-02');
    });
  }
);

describe('Single date selection calendar', () => {
  test('Prepare', async () => {
    await device.reloadReactNative();
    await app.card('single-date-selection-calendar').tap();
    await app.scrollDownTo(calendar.matcher);
  });

  test('Disables only the dates passed to disabledDates', async () => {
    // Clicking enabled date alters selected date
    await expect(wrapper.self).toHaveLabel('2020-01-02');
    await calendar.jan_12_2020.tap();
    await expect(wrapper.self).toHaveLabel('2020-01-12');
    await calendar.jan_27_2020.tap();
    await expect(wrapper.self).toHaveLabel('2020-01-27');
  });

  test('Does not disable the same dates in other months', async () => {
    await calendar.leftArrow.tap();
    await expect(calendar.titleText).toHaveText('December 2019');
    // Calendar disables January 1, 5, and 31 but not December 1, 5, and 31
    await calendar.dec_01_2019.tap();
    await expect(wrapper.self).toHaveLabel('2019-12-01');
    await calendar.dec_05_2019.tap();
    await expect(wrapper.self).toHaveLabel('2019-12-05');
    await calendar.dec_31_2019.tap();
    await expect(wrapper.self).toHaveLabel('2019-12-31');
  });
});

describe('Multi date selection calendar', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await app.card('multi-date-selection-calendar').tap();
    await app.scrollDownTo(calendar.matcher);
  });

  test('Disables only the dates passed to disabledDates', async () => {
    // Clicking enabled date alters selected date
    await expect(wrapper.self).toHaveLabel('2020-01-02');
    await calendar.jan_12_2020.tap();
    await expect(wrapper.self).toHaveLabel('2020-01-02, 2020-01-12');
    await calendar.jan_27_2020.tap();
    await expect(wrapper.self).toHaveLabel('2020-01-02, 2020-01-12, 2020-01-27');
  });

  test('Does not disable the same dates in other months', async () => {
    await calendar.jan_02_2020.tap(); // Deselect
    await calendar.leftArrow.tap();
    // Calendar disables January 1, 5, and 31 but not December 1, 5, and 31
    await calendar.dec_01_2019.tap();
    await expect(wrapper.self).toHaveLabel('2019-12-01');
    await calendar.dec_05_2019.tap();
    await expect(wrapper.self).toHaveLabel('2019-12-01, 2019-12-05');
    await calendar.dec_31_2019.tap();
    await expect(wrapper.self).toHaveLabel('2019-12-01, 2019-12-05, 2019-12-31');
  });
});
