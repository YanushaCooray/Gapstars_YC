import { Locator, Page } from "@playwright/test";

export default class AddRemoveElementPage {

  readonly page: Page;
  readonly addElementBtn: Locator;
  readonly deleteBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addElementBtn = page.locator('button', { hasText: 'Add Element' });
    this.deleteBtn = page.locator('button', { hasText: 'Delete' });
  }

  async clickAddElementBtn() {
    await this.addElementBtn.first().click();
  }

  async getCountDeleteButton() {
    return await this.deleteBtn.count();
  }

  async clickDeleteButton() {
    await this.deleteBtn.last().click();
  }
}