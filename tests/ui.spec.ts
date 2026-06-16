import { test, expect } from '@playwright/test';

test('Page loads checkbox section', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');

  await expect(page.locator('h1')).toHaveText('Check Box');
});

test('Radio button test', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');

  await page.click('label[for="yesRadio"]');
  await expect(page.locator('.text-success')).toContainText('Yes');
});

test('Double click test', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');

  await page.dblclick('#doubleClickBtn');
  await expect(page.locator('#doubleClickMessage')).toBeVisible();
});

test('Right click test', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');

  await page.click('#rightClickBtn', { button: 'right' });
  await expect(page.locator('#rightClickMessage')).toBeVisible();
});

test('Single click test', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');

  await page.locator('button:has-text("Click Me")').last().click();
  await expect(page.locator('#dynamicClickMessage')).toBeVisible();
});