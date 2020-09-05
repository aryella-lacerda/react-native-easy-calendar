import { expect } from 'detox';
import Calendar from '../Pages/calendar.page';
import Wrapper from '../Pages/wrapper.page';

const wrapper = new Wrapper('locales-calendar-wrapper');
const calendar = new Calendar('locales-calendar');
const basicCalendar = new Calendar('basic-calendar');

/*
 * This calendar toggles between spanish and french locales.
 */

describe('Test locale feature', () => {
  test('Switching locale causes translation in title', async () => {
    await expect(calendar.monthView).toBeVisible();

    await expect(calendar.titleText).toHaveText('janvier 2020');
    await wrapper.actionButton('toggle-locale').tap();
    await expect(calendar.titleText).toHaveText('Enero 2020');
    await wrapper.actionButton('toggle-locale').tap();
    await expect(calendar.titleText).toHaveText('janvier 2020');
  });

  test('Switching locale causes translation in weekdays', async () => {
    await expect(calendar.monthView).toBeVisible();

    await expect(calendar.frenchSundayLabel).toBeVisible();
    await wrapper.actionButton('toggle-locale').tap();
    await expect(calendar.spanishSundayLabel).toBeVisible();
    await wrapper.actionButton('toggle-locale').tap();
    await expect(calendar.frenchSundayLabel).toBeVisible();
  });

  test('Switching locale causes translation in months', async () => {
    await calendar.titleButton.tap();
    await expect(calendar.yearView).toBeVisible();

    await expect(calendar.frenchJanuaryLabel).toBeVisible();
    await wrapper.actionButton('toggle-locale').tap();
    await expect(calendar.spanishJanuaryLabel).toBeVisible();
    await wrapper.actionButton('toggle-locale').tap();
    await expect(calendar.frenchJanuaryLabel).toBeVisible();

    await calendar.titleButton.tap();
    await expect(calendar.monthView).toBeVisible();
  });

  test("Switching locale in one calendar doesn't cause a switch in other calendars", async () => {
    await expect(basicCalendar.titleText).toHaveText('February 2020');

    await expect(calendar.titleText).toHaveText('janvier 2020');
    await wrapper.actionButton('toggle-locale').tap();
    await expect(calendar.titleText).toHaveText('Enero 2020');

    await expect(basicCalendar.titleText).toHaveText('February 2020');
  });
});
