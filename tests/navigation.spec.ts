import { test, expect } from '@playwright/test';

test('Homepage loads', async ({ page }) => {
  await page.goto('https://demoqa.com');

  // More flexible title check
  await expect(page).toHaveTitle(/demo/i);
});

test('Navigate to Elements', async ({ page }) => {
  await page.goto('https://demoqa.com');

  await page.click('text=Elements');
  await expect(page).toHaveURL(/elements/);
});

test('Verify URL contains demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com');

  await expect(page).toHaveURL(/demoqa/);
});