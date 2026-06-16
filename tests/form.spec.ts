import { test, expect } from '@playwright/test';
import { FormPage } from '../pages/formPage';
import users from '../test-data/users.json';

test.describe('Form Tests', () => {

  users.forEach((user) => {

    test(`Valid form - ${user.name}`, async ({ page }) => {
      const form = new FormPage(page);

      await form.navigate();
      await form.fillForm(user.name, user.email);
      await form.submit();

      await expect(page.locator('#name')).toContainText(user.name);
    });

    test(`Invalid email - ${user.name}`, async ({ page }) => {
      const form = new FormPage(page);

      await form.navigate();
      await form.fillForm(user.name, user.invalidEmail);
      await form.submit();

      await expect(page.locator('#userEmail')).toHaveClass(/field-error/);
    });

  });

  test('Empty form', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await page.click('#submit');

    await expect(page.locator('#name')).not.toBeVisible();
  });

});