import { expect } from 'detox';
import App from '../Pages/app.page';
import Calendar from '../Pages/calendar.page';

const app = new App();
const calendar = new Calendar('calendar-2');

describe.each(['single-date-selection-calendar', 'multi-date-selection-calendar'])(
  'Testing forbid year view feature in %s',
  (cardID) => {
    beforeEach(async () => {
      await device.reloadReactNative();
      await app.card(cardID).tap();
      await app.scrollDownTo(calendar.matcher);
    });

    test('Clicking title does not toggle calendar view', async () => {
      await expect(calendar.monthView).toBeVisible();
      await calendar.titleButton.tap();
      await expect(calendar.monthView).toBeVisible();
    });
  }
);
