import { expect } from 'detox';
import Calendar from '../Pages/calendar.page';
import Wrapper from '../Pages/wrapper.page';
import App from '../Pages/app.page';

const wrapper = new Wrapper('calendar-3-wrapper');
const calendar = new Calendar('calendar-3');
const app = new App();

/*
 * This calendar toggles between english and french locales.
 */

describe.each(['single-date-selection-calendar', 'multi-date-selection-calendar'])(
  'Test locale feature',
  (cardID) => {
    test('Prepare', async () => {
      await device.reloadReactNative();
      await app.card(cardID).tap();
      await app.scrollDownTo(calendar.matcher);
    });

    test('Switching locale causes translation in title', async () => {
      await expect(calendar.titleText).toHaveText('February 2020');
      await wrapper.actionButton('toggle-locale').tap();
      await expect(calendar.titleText).toHaveText('février 2020');
      await wrapper.actionButton('toggle-locale').tap();
      await expect(calendar.titleText).toHaveText('February 2020');
    });

    test('Switching locale causes translation in weekdays', async () => {
      await expect(calendar.englishSundayLabel).toBeVisible();
      await wrapper.actionButton('toggle-locale').tap();
      await expect(calendar.frenchSundayLabel).toBeVisible();
      await wrapper.actionButton('toggle-locale').tap();
      await expect(calendar.englishSundayLabel).toBeVisible();
    });

    test('Switching locale causes translation in months', async () => {
      await calendar.titleButton.tap();
      await expect(calendar.englishFebruaryLabel).toBeVisible();
      await wrapper.actionButton('toggle-locale').tap();
      await expect(calendar.frenchFebruaryLabel).toBeVisible();
      await wrapper.actionButton('toggle-locale').tap();
      await expect(calendar.englishFebruaryLabel).toBeVisible();
    });
  }
);
