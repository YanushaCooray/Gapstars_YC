import { Locator, Page } from "@playwright/test";


export default class JavaScriptAlertsPage {

    readonly page: Page;
    readonly jsAlertBtn: Locator;
    readonly jsConfirmBtn: Locator;
    readonly jsPromtBtn:Locator;
    readonly resultText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.jsAlertBtn = page.locator('button', { hasText: 'Click for JS Alert' });
        this.jsConfirmBtn = page.locator('button',{hasText: 'Click for JS Confirm'});
        this.jsPromtBtn = page.locator('button',{hasText: 'Click for JS Prompt'});
        this.resultText = page.locator('[id="result"]')
    }

    async clickJSAlertBtn() {
        await this.jsAlertBtn.click();
    }

    async clickJSConfirmBtn(){
        await this.jsConfirmBtn.click();
    }

    async clickJSPromtBtn(){
        await this.jsPromtBtn.click();
    }

    async getResultText() {
        return await this.resultText.textContent();
    }

}