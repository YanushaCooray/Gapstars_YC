import { Locator, Page } from "@playwright/test";

export default class DragAndDropPage {

    readonly page: Page;
    readonly elementA: Locator;
    readonly elementB: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementA = page.locator('[id="column-a"]');
        this.elementB = page.locator('[id="column-b"]');
    }

    async dragElements() {
        await this.elementA.dragTo(this.elementB);
    }
}