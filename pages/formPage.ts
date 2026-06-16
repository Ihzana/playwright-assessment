import { Page } from '@playwright/test';

export class FormPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://demoqa.com/text-box');
  }

  async fillForm(name: string, email: string) {
    await this.page.fill('#userName', name);
    await this.page.fill('#userEmail', email);
    await this.page.fill('#currentAddress', 'Test Address');
    await this.page.fill('#permanentAddress', 'Test Address');
  }

  async submit() {
    await this.page.click('#submit');
  }
}