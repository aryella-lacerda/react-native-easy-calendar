import { device, expect } from 'detox';

import App from '../Pages/app.page';
import Calendar from '../Pages/calendar.page';
import Wrapper from '../Pages/wrapper.page';

const app = new App();
const calendar = new Calendar('calendar-3');
const wrapper = new Wrapper('calendar-3-wrapper');

/*
 * Init date: 2020-02-10
 * Min date: 2020-02-10
 * Max date: 2020-04-10
 */

describe.each(['single-date-selection-calendar', 'multi-date-selection-calendar'])(
  'Test min date feature in %s',
  (cardID) => {
    test('Prepare', async () => {
      await device.reloadReactNative();
      await app.card(cardID).tap();
      await app.scrollDownTo(calendar.matcher);
    });

    test('Dates before min date are disabled', async () => {
      // Pressing disabled dates doesn't affect selected date
      await expect(wrapper.self).toHaveLabel('2020-02-10');
      await calendar.feb_01_2020.tap();
      await expect(wrapper.self).toHaveLabel('2020-02-10');
      await calendar.feb_02_2020.tap();
      await expect(wrapper.self).toHaveLabel('2020-02-10');
      await calendar.feb_05_2020.tap();
    });

    test('Left arrow of min date month is disabled', async () => {
      // Pressing disabled arrow doesn't affect visible month
      await expect(calendar.titleText).toHaveText('February 2020');
      await calendar.leftArrow.tap();
      await expect(calendar.titleText).toHaveText('February 2020');
    });

    test('Months before min date are disabled', async () => {
      // Pressing disabled month doesn't toggle the calendar view
      await calendar.titleButton.tap();
      await expect(calendar.yearView).toBeVisible();
      await calendar.jan_2020.tap();
      await expect(calendar.yearView).toBeVisible();
    });

    test('Left arrow of min date year is disabled', async () => {
      // Pressing disabled arrow doesn't affect visible year
      await expect(calendar.titleText).toHaveText('2020');
      await calendar.leftArrow.tap();
      await expect(calendar.titleText).toHaveText('2020');
    });
  }
);

describe.each(['single-date-selection-calendar', 'multi-date-selection-calendar'])(
  'Test max date feature in %s',
  (cardID) => {
    test('Initialize', async () => {
      await device.reloadReactNative();
      await app.card(cardID).tap();
      await app.scrollDownTo(calendar.matcher);

      await calendar.feb_10_2020.tap();
      await calendar.rightArrow.tap();
      await calendar.rightArrow.tap();
      await expect(calendar.titleText).toHaveText('April 2020');
      await calendar.apr_01_2020.tap();
    });

    test('Dates after max date are disabled', async () => {
      // Pressing disabled dates doesn't affect selected date
      await expect(wrapper.self).toHaveLabel('2020-04-01');
      await calendar.apr_12_2020.tap();
      await expect(wrapper.self).toHaveLabel('2020-04-01');
      await calendar.apr_27_2020.tap();
      await expect(wrapper.self).toHaveLabel('2020-04-01');
      await calendar.apr_30_2020.tap();
    });

    test('Right arrow of max date month is disabled', async () => {
      // Pressing disabled arrow doesn't affect visible month
      await expect(calendar.titleText).toHaveText('April 2020');
      await calendar.rightArrow.tap();
      await expect(calendar.titleText).toHaveText('April 2020');
    });

    test('Months after max date are disabled', async () => {
      // Pressing disabled month doesn't toggle the calendar view
      await calendar.titleButton.tap();
      await expect(calendar.yearView).toBeVisible();
      await calendar.may_2020.tap();
      await expect(calendar.yearView).toBeVisible();
    });

    test('Right arrow of max date year is disabled', async () => {
      // Pressing disabled arrow doesn't affect visible year
      await expect(calendar.titleText).toHaveText('2020');
      await calendar.rightArrow.tap();
      await expect(calendar.titleText).toHaveText('2020');
    });
  }
);
