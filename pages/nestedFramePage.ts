import { FrameLocator, Locator, Page } from "@playwright/test";


export default class NestedFramePage {

    readonly page: Page;
    readonly leftFrameText: Locator;
    readonly middleFrameText: Locator;
    readonly rightFrameText: Locator;
    readonly bottomFrameText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.leftFrameText = page.frameLocator('[name="frame-top"]').frameLocator('[name="frame-left"]').locator('body');
        this.middleFrameText = page.frameLocator('[name="frame-top"]').frameLocator('[name="frame-middle"]').locator('body');
        this.rightFrameText = page.frameLocator('[name="frame-top"]').frameLocator('[name="frame-right"]').locator('body');
        this.bottomFrameText = page.frameLocator('[name="frame-bottom"]').locator('body');
    }

    async getLeftText() {
        return await this.leftFrameText.innerText();
    }

    async getMiddleText(){
        return await this.middleFrameText.innerText();
    }

    async getRightText(){
        return await this.rightFrameText.innerText();
    }

    async getBottomText() {
        return await this.bottomFrameText.innerText();
    }

}