import { device, expect } from 'detox';

import Calendar from '../Pages/calendar.page';
import Wrapper from '../Pages/wrapper.page';

const calendar = new Calendar('basic-calendar');
const wrapper = new Wrapper('basic-calendar-wrapper');

describe('Test basic date selection', () => {
  test('Selecting date in initially visible month', async () => {
    await expect(wrapper.selectedDate).toHaveText('February 1, 2020');
    await expect(calendar.feb_10_2020).toBeVisible();
    await calendar.feb_10_2020.tap();
    await expect(wrapper.selectedDate).toHaveText('February 10, 2020');
  });

  test('Selecting date after navigating to another month using month view navigation', async () => {
    await calendar.leftArrow.tap();
    await expect(wrapper.selectedDate).toHaveText('February 10, 2020');
    await expect(calendar.jan_27_2020).toBeVisible();
    await calendar.jan_27_2020.tap();
    await expect(wrapper.selectedDate).toHaveText('January 27, 2020');
  });

  test('Selecting date after navigating to another month using year view navigation', async () => {
    await calendar.titleButton.tap();
    await expect(calendar.yearView).toBeVisible();
    await expect(calendar.sep_2020).toBeVisible();
    await calendar.sep_2020.tap();
    await expect(calendar.monthView).toBeVisible();
    await expect(calendar.sep_23_2020).toBeVisible();
    await calendar.sep_23_2020.tap();
    await expect(wrapper.selectedDate).toHaveText('September 23, 2020');
  });
});

describe('Navigation in month view', () => {
  test('Reload', async () => {
    await device.reloadReactNative();
  });

  test('Navigate backwards in time', async () => {
    await expect(calendar.titleText).toHaveText('February 2020');
    await calendar.leftArrow.tap();
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
    await calendar.rightArrow.tap();
    await expect(calendar.titleText).toHaveText('February 2020');
  });
});

describe('Navigation in year view', () => {
  test('Reload', async () => {
    await device.reloadReactNative();
  });

  test('Toggling from month view to year view', async () => {
    await expect(calendar.monthView).toBeVisible();
    // @ts-ignore
    await expect(calendar.yearView).not.toBeVisible();
    await expect(calendar.titleText).toHaveText('February 2020');

    await calendar.titleButton.tap();

    await expect(calendar.yearView).toBeVisible();
    // @ts-ignore
    await expect(calendar.monthView).not.toBeVisible();
    await expect(calendar.titleText).toHaveText('2020');
  });

  test('Navigate backwards in time', async () => {
    await expect(calendar.titleText).toHaveText('2020');
    await calendar.leftArrow.tap();
    await expect(calendar.titleText).toHaveText('2019');
    await calendar.leftArrow.tap();
    await expect(calendar.titleText).toHaveText('2018');
    await calendar.leftArrow.tap();
    await expect(calendar.titleText).toHaveText('2017');
  });

  test('Navigate forwards in time', async () => {
    await expect(calendar.titleText).toHaveText('2017');
    await calendar.rightArrow.tap();
    await expect(calendar.titleText).toHaveText('2018');
    await calendar.rightArrow.tap();
    await expect(calendar.titleText).toHaveText('2019');
    await calendar.rightArrow.tap();
    await expect(calendar.titleText).toHaveText('2020');
  });

  test('Toggling from year view to month view', async () => {
    await expect(calendar.yearView).toBeVisible();
    // @ts-ignore
    await expect(calendar.monthView).not.toBeVisible();
    await expect(calendar.titleText).toHaveText('2020');

    await calendar.titleButton.tap();

    await expect(calendar.monthView).toBeVisible();
    // @ts-ignore
    await expect(calendar.yearView).not.toBeVisible();
    await expect(calendar.titleText).toHaveText('February 2020');
  });
});
