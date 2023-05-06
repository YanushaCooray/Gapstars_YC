import { Locator, Page } from "@playwright/test";


export default class IframePage{

    readonly page: Page;
    readonly iframeInputBox: Locator;
    readonly boldBtn : Locator;
    readonly textIndex1 : Locator;
    readonly italicBtn : Locator;

    constructor( page : Page){

        this.page = page;
        this.iframeInputBox = page.frameLocator('[id="mce_0_ifr"]').locator('#tinymce');
        this.boldBtn = page.locator('div > div:nth-child(3) > button:nth-child(1)');
        this.textIndex1 = page.locator('[data-index="1"]');
        this.italicBtn = page.locator('div > div:nth-child(3) > button:nth-child(2)');
    
    }

    async addTextIntoInputBox(text){
       await this.iframeInputBox.fill(text);
    }

    async getTextInsideTheInputbox(){
        return await this.iframeInputBox.textContent();
    }

    async clickBoldBtn(){
        await this.boldBtn.first().click();
    }

    async getIndex1Text(){
        return await this.textIndex1.textContent();
    }

    async clickItalicBtn(){
        await this.italicBtn.click();
    }
}