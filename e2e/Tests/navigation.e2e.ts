import { device, expect } from 'detox';
import Calendar from '../Pages/calendar.page';
import App from '../Pages/app.page';

const calendar = new Calendar('calendar-1');
const app = new App();

describe.each(['single-date-selection-calendar', 'multi-date-selection-calendar'])(
  'Navigation in month view using %s',
  (cardID) => {
    test('Prepare', async () => {
      await device.reloadReactNative();
      await app.card(cardID).tap();
    });

    test('Navigate backwards in time', async () => {
      await expect(calendar.titleText).toHaveText('January 2020');
      await calendar.leftArrow.tap();
      await expect(calendar.titleText).toHaveText('December 2019');
      await calendar.leftArrow.tap();
      await expect(calendar.titleText).toHaveText('November 2019');
    });

    test('Navigate forwards in time', async () => {
      await expect(calendar.titleText).toHaveText('November 2019');
      await calendar.rightArrow.tap();
      await expect(calendar.titleText).toHaveText('December 2019');
      await calendar.rightArrow.tap();
      await expect(calendar.titleText).toHaveText('January 2020');
    });
  }
);

describe.each(['single-date-selection-calendar', 'multi-date-selection-calendar'])(
  'Navigation in year view using %s',
  (cardID) => {
    test(`Prepare for ${cardID}`, async () => {
      await device.reloadReactNative();
      await app.card(cardID).tap();
    });

    test('Toggling from month view to year view', async () => {
      await expect(calendar.titleText).toHaveText('January 2020');
      await calendar.titleButton.tap();
      await expect(calendar.titleText).toHaveText('2020');
    });

    test('Navigate backwards in time using', async () => {
      await expect(calendar.titleText).toHaveText('2020');
      await calendar.leftArrow.tap();
      await expect(calendar.titleText).toHaveText('2019');
      await calendar.leftArrow.tap();
      await expect(calendar.titleText).toHaveText('2018');
      await calendar.leftArrow.tap();
      await expect(calendar.titleText).toHaveText('2017');
    });

    test('Navigate forwards in time using', async () => {
      await expect(calendar.titleText).toHaveText('2017');
      await calendar.rightArrow.tap();
      await expect(calendar.titleText).toHaveText('2018');
      await calendar.rightArrow.tap();
      await expect(calendar.titleText).toHaveText('2019');
      await calendar.rightArrow.tap();
      await expect(calendar.titleText).toHaveText('2020');
    });

    test('Toggling from year view to month view', async () => {
      await expect(calendar.titleText).toHaveText('2020');
      await calendar.titleButton.tap();
      await expect(calendar.titleText).toHaveText('January 2020');
    });
  }
);
