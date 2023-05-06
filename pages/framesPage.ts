import { Locator, Page } from "@playwright/test";

export default class FramesPage{

    readonly page: Page;
    readonly iframesLink: Locator;
    readonly nestedFramesLink : Locator;
    
    constructor( page : Page){
        this.page = page;
        this.iframesLink = page.locator('a', { hasText: 'iFrame' });
        this.nestedFramesLink = page.locator('a', { hasText: 'Nested Frames' });
    }

    async clickIframes(){ 
       await this.iframesLink.click(); 
    }

    async clickNestedFrames(){
        await this.nestedFramesLink.click();
    }

}