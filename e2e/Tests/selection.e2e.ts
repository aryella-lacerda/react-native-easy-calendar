import { device, expect } from 'detox';
import Calendar from '../Pages/calendar.page';
import Wrapper from '../Pages/wrapper.page';
import App from '../Pages/app.page';

const wrapper = new Wrapper('calendar-1-wrapper');
const app = new App();
const calendar = new Calendar('calendar-1');

describe('Single date selection calendar', () => {
  test('Prepare', async () => {
    await app.card('single-date-selection-calendar').tap();
  });

  test('Selecting date in initially visible month', async () => {
    await expect(wrapper.self).toHaveLabel('');
    await calendar.jan_27_2020.tap();
    await expect(wrapper.self).toHaveLabel('2020-01-27');
  });

  test('Selecting date after navigating to another month using month view navigation', async () => {
    await calendar.rightArrow.tap();
    await calendar.feb_05_2020.tap();
    await expect(wrapper.self).toHaveLabel('2020-02-05');
  });

  test('Selecting date after navigating to another month using year view navigation', async () => {
    await calendar.titleButton.tap();
    await calendar.sep_2020.tap();
    await calendar.sep_23_2020.tap();
    await expect(wrapper.self).toHaveLabel('2020-09-23');
  });
});

describe('Multi date selection calendar', () => {
  test('Prepare', async () => {
    await device.reloadReactNative();
    await app.card('multi-date-selection-calendar').tap();
  });

  test('Selecting/deselecting single date', async () => {
    await expect(wrapper.self).toHaveLabel('');
    await calendar.jan_01_2020.tap(); // Select
    await expect(wrapper.self).toHaveLabel('2020-01-01');
    await calendar.jan_01_2020.tap(); // Deselect
    await expect(wrapper.self).toHaveLabel('');
  });

  test('Selecting/deselecting multiple dates', async () => {
    await expect(wrapper.self).toHaveLabel('');
    await calendar.jan_01_2020.tap(); // Select
    await expect(wrapper.self).toHaveLabel('2020-01-01');
    await calendar.jan_12_2020.tap(); // Select
    await expect(wrapper.self).toHaveLabel('2020-01-01, 2020-01-12');
    await calendar.jan_01_2020.tap(); // Deselect
    await expect(wrapper.self).toHaveLabel('2020-01-12');
    await calendar.jan_12_2020.tap(); // Deselect
    await expect(wrapper.self).toHaveLabel('');
  });

  test('Selecting/deselecting multiple dates with navigation', async () => {
    await expect(wrapper.self).toHaveLabel('');
    await calendar.jan_01_2020.tap(); // Select
    await expect(wrapper.self).toHaveLabel('2020-01-01');

    // Navigate to February
    await calendar.rightArrow.tap();
    await calendar.feb_02_2020.tap(); // Select
    await expect(wrapper.self).toHaveLabel('2020-01-01, 2020-02-02');

    // Navigate to September
    await calendar.titleButton.tap();
    await calendar.sep_2020.tap();
    await calendar.sep_23_2020.tap(); // Select
    await expect(wrapper.self).toHaveLabel('2020-01-01, 2020-02-02, 2020-09-23');

    // Navigate back to January
    await calendar.titleButton.tap();
    await calendar.jan_2020.tap();
    await calendar.jan_01_2020.tap(); // Deselect
    await expect(wrapper.self).toHaveLabel('2020-02-02, 2020-09-23');

    // Navigate back to February
    await calendar.rightArrow.tap();
    await calendar.feb_02_2020.tap(); // Deselect
    await expect(wrapper.self).toHaveLabel('2020-09-23');

    // Navigate back to September
    await calendar.titleButton.tap();
    await calendar.sep_2020.tap();
    await calendar.sep_23_2020.tap(); // Deselect
    await expect(wrapper.self).toHaveLabel('');
  });
});
