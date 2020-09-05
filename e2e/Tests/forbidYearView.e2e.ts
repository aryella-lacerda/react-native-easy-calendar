import { expect } from 'detox';

import App from '../Pages/app.page';
import Calendar from '../Pages/calendar.page';

const app = new App();
const calendar = new Calendar('forbid-year-view-calendar');

describe('Test forbid year view feature', () => {
  test('Initialize', async () => {
    await app.scrollDownTo(calendar.matcher);
  });

  test('Clicking title does not toggle calendar view', async () => {
    await expect(calendar.monthView).toBeVisible();
    await calendar.titleButton.tap();
    await expect(calendar.monthView).toBeVisible();
  });
});
